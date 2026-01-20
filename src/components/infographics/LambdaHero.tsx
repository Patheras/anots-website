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
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 80 : 180;
    const CONNECTION_DIST = 140;
    const ROTATION_SPEED = 0.002;

    // 3D Point Class
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
        this.reset();
      }

      reset() {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = 450 + Math.random() * 500;

        this.x = radius * Math.sin(phi) * Math.cos(theta);
        this.y = radius * Math.sin(phi) * Math.sin(theta);
        this.z = radius * Math.cos(phi);

        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 0.5;

        const rand = Math.random();
        if (rand > 0.92) {
          this.type = 'red';
        } else if (rand > 0.84) {
          this.type = 'blue';
        } else {
          this.type = 'purple';
        }
      }

      update(rotationY: number, rotationX: number, w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        const distSq = this.x * this.x + this.y * this.y + this.z * this.z;
        if (distSq > 1000000) {
          this.vx *= -1;
          this.vy *= -1;
          this.vz *= -1;
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
        const scale = fov / (fov + z2 + 800);
        this.sx = x1 * scale + w / 2;
        this.sy = y1 * scale + h / 2;
        this.scale = scale;
        this.zDepth = z2;
      }
    }

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (particles.length === 0) init();
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
      animationFrame = requestAnimationFrame(animate);

      ctx.fillStyle = '#0A0A0B';
      ctx.fillRect(0, 0, width, height);

      smoothMouseX += (targetMouse.x - smoothMouseX) * 0.05;
      smoothMouseY += (targetMouse.y - smoothMouseY) * 0.05;

      time += ROTATION_SPEED;

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        particles[i].update(time + smoothMouseX * 5, smoothMouseY * 5, width, height);
      }

      particles.sort((a, b) => b.zDepth - a.zDepth);

      // Draw Lines
      ctx.lineWidth = 0.5;
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

            if (alpha > 0.01) {
              ctx.beginPath();
              ctx.moveTo(p1.sx, p1.sy);
              ctx.lineTo(p2.sx, p2.sy);

              if (p1.type === 'red' || p2.type === 'red') {
                ctx.strokeStyle = `rgba(220, 38, 38, ${alpha * 0.8})`;
              } else if (p1.type === 'blue' || p2.type === 'blue') {
                ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.8})`;
              } else {
                ctx.strokeStyle = `rgba(147, 51, 234, ${alpha * 0.3})`;
              }
              ctx.stroke();
            }
          }
        }
      }

      // Draw Nodes
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        if (p.scale <= 0) continue;

        const isAccent = p.type !== 'purple';
        const radius = (isAccent ? 3 : 1.5) * p.scale;

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);

        if (p.type === 'red') {
          ctx.fillStyle = `rgba(220, 38, 38, ${p.scale})`;
          ctx.shadowBlur = 10 * p.scale;
          ctx.shadowColor = '#DC2626';
        } else if (p.type === 'blue') {
          ctx.fillStyle = `rgba(59, 130, 246, ${p.scale})`;
          ctx.shadowBlur = 10 * p.scale;
          ctx.shadowColor = '#3B82F6';
        } else {
          ctx.fillStyle = `rgba(160, 100, 255, ${p.scale * 0.8})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // Center Glow
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 500);
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.08)');
      gradient.addColorStop(0.5, 'rgba(50, 20, 100, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillRect(0, 0, width, height);
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
      style={{ background: '#0A0A0B' }}
    />
  );
}
