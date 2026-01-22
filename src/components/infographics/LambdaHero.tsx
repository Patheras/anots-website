'use client';

import { useEffect, useRef } from 'react';

export function LambdaHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let particles: Point3D[] = [];
    let targetMouse = { x: 0, y: 0 };

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 100 : 250;
    const CONNECTION_DIST = 250;
    const ROTATION_SPEED = 0.001;
    let sphereRadius = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // KÜRE BOYUTU: Ekranın %40'ı (Senin orijinal kodun)
      sphereRadius = Math.min(width, height) * 0.40;
      if (sphereRadius > 650) sphereRadius = 650;
      if (particles.length === 0) init();
    }

    class Point3D {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      type: 'red' | 'blue' | 'purple';
      sx: number;
      sy: number;
      scale: number;
      zDepth: number;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.type = 'purple';
        this.sx = 0;
        this.sy = 0;
        this.scale = 0;
        this.zDepth = 0;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.reset();
      }

      reset() {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        // CLUSTER BOYUTU: 2.0 - Senin orijinal kodun
        const maxR = sphereRadius * 2.0;
        const minR = 0;
        const radius = Math.cbrt(Math.random()) * (maxR - minR) + minR;

        this.x = radius * Math.sin(phi) * Math.cos(theta);
        this.y = radius * Math.sin(phi) * Math.sin(theta);
        this.z = radius * Math.cos(phi);

        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.vz = (Math.random() - 0.5) * 0.3;

        const rand = Math.random();
        if (rand > 0.90) {
          this.type = 'red';
        } else if (rand > 0.80) {
          this.type = 'blue';
        } else {
          this.type = 'purple';
        }
      }

      update(rotationY: number, rotationX: number, w: number, h: number, time: number) {
        this.x += this.vx + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.15;
        this.y += this.vy + Math.cos(time * this.pulseSpeed + this.pulseOffset) * 0.15;
        this.z += this.vz;

        // SINIR KONTROLÜ - Senin orijinal kodun
        const distSq = this.x * this.x + this.y * this.y + this.z * this.z;
        const limit = sphereRadius * 2.0;
        if (distSq > limit * limit) {
          const dist = Math.sqrt(distSq);
          this.vx = -this.vx;
          this.vy = -this.vy;
          this.vz = -this.vz;
          const scale = (limit - 1) / dist;
          this.x *= scale;
          this.y *= scale;
          this.z *= scale;
        }

        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const x1 = this.x * cosY - this.z * sinY;
        const z1 = this.z * cosY + this.x * sinY;

        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const y1 = this.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + this.y * sinX;

        const fov = 400;
        const scale = fov / (fov + z2 + 600);
        this.sx = x1 * scale + w / 2;
        this.sy = y1 * scale + h / 2;
        this.scale = scale;
        this.zDepth = z2;
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Point3D());
      }
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      targetMouse.x = (e.clientX - width / 2) * 0.001;
      targetMouse.y = (e.clientY - height / 2) * 0.001;
    });

    let time = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;
    let animationFrame: number;

    function animate() {
      if (!canvas || !ctx) return;
      animationFrame = requestAnimationFrame(animate);

      // Subtle gradient background - düz siyah yerine
      const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));
      bgGradient.addColorStop(0, '#0a0a0f'); // Merkez hafif mor-siyah
      bgGradient.addColorStop(0.5, '#050508'); // Orta koyu
      bgGradient.addColorStop(1, '#030303'); // Kenarlar tam siyah
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // KATMAN 1: KÜRE ARKA PLANI
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius, 0, Math.PI * 2);
      const sphereGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, sphereRadius);
      sphereGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      sphereGrad.addColorStop(0.85, 'rgba(0, 0, 0, 0)');
      sphereGrad.addColorStop(0.95, 'rgba(60, 20, 100, 0.03)');
      sphereGrad.addColorStop(1, 'rgba(100, 40, 180, 0.15)');
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // KATMAN 2: KÜRE OUTLINE
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius, 0, Math.PI * 2);
      const outlineGrad = ctx.createLinearGradient(
        cx + sphereRadius,
        cy - sphereRadius,
        cx - sphereRadius,
        cy + sphereRadius
      );
      outlineGrad.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
      outlineGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.2)');
      outlineGrad.addColorStop(1, 'rgba(255, 255, 255, 0.6)');
      ctx.strokeStyle = outlineGrad;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Alt Zemin Yansıması
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius, 0, Math.PI * 2);
      const bottomGrad = ctx.createLinearGradient(cx, cy, cx, cy + sphereRadius);
      bottomGrad.addColorStop(0.8, 'transparent');
      bottomGrad.addColorStop(1, 'rgba(255, 255, 255, 0.03)');
      ctx.fillStyle = bottomGrad;
      ctx.fill();
      ctx.restore();

      smoothMouseX += (targetMouse.x - smoothMouseX) * 0.05;
      smoothMouseY += (targetMouse.y - smoothMouseY) * 0.05;

      time += ROTATION_SPEED;
      const pulseTime = Date.now() * 0.002;

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        particles[i].update(
          time + smoothMouseX * 0.25,
          smoothMouseY * 0.25,
          width,
          height,
          pulseTime
        );
      }

      particles.sort((a, b) => b.zDepth - a.zDepth);

      // KATMAN 3: NETWORK AĞI
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineWidth = 0.8;

      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];
        if (p1.scale <= 0) continue;

        const maxDist = CONNECTION_DIST * p1.scale;
        const maxDistSq = maxDist * maxDist;

        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          if (p2.scale <= 0) continue;

          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * p1.scale;
            const pulse = (Math.sin(pulseTime + i) + 1) * 0.5;
            const dynamicAlpha = alpha * (0.5 + pulse * 0.5);

            if (dynamicAlpha > 0.03) {
              ctx.beginPath();
              ctx.moveTo(p1.sx, p1.sy);
              ctx.lineTo(p2.sx, p2.sy);

              if (p1.type === 'red' || p2.type === 'red') {
                ctx.strokeStyle = `rgba(255, 50, 100, ${dynamicAlpha * 0.06})`;
              } else if (p1.type === 'blue' || p2.type === 'blue') {
                ctx.strokeStyle = `rgba(50, 220, 255, ${dynamicAlpha * 0.06})`;
              } else {
                ctx.strokeStyle = `rgba(160, 100, 255, ${dynamicAlpha * 0.04})`;
              }
              ctx.stroke();
            }
          }
        }
      }

      // KATMAN 4: NOKTALAR
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        if (p.scale <= 0) continue;

        const isAccent = p.type !== 'purple';
        // Senin orijinal node boyutların
        const radius = (isAccent ? 2.5 : 1.5) * p.scale;

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);

        if (p.type === 'red') {
          ctx.fillStyle = `rgba(255, 60, 100, ${p.scale})`;
        } else if (p.type === 'blue') {
          ctx.fillStyle = `rgba(60, 210, 255, ${p.scale})`;
        } else {
          ctx.fillStyle = `rgba(170, 140, 255, ${p.scale})`;
        }
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
    }

    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#030303' }}
    />
  );
}
