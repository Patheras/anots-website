'use client';

import { useEffect, useRef } from 'react';

export function LambdaHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Animation variables
    let animationFrame: number;
    let time = 0;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.2 + Math.random() * 0.5;
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 100 + Math.random() * 100,
      });
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      time += 0.01;

      // Create particles occasionally
      if (Math.random() < 0.1) {
        createParticle();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = 1 - p.life / p.maxLife;
        const progress = p.life / p.maxLife;
        
        // Gradient colors (red → purple → blue)
        let r, g, b;
        if (progress < 0.5) {
          // Red to Purple
          const t = progress * 2;
          r = Math.floor(220 + (147 - 220) * t);
          g = Math.floor(38 + (51 - 38) * t);
          b = Math.floor(38 + (234 - 38) * t);
        } else {
          // Purple to Blue
          const t = (progress - 0.5) * 2;
          r = Math.floor(147 + (59 - 147) * t);
          g = Math.floor(51 + (130 - 51) * t);
          b = Math.floor(234 + (246 - 234) * t);
        }

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Lambda symbol
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const size = Math.min(rect.width, rect.height) * 0.6;

      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Subtle rotation animation
      ctx.rotate(Math.sin(time) * 0.05);

      // Lambda shape (simplified triangle/V shape)
      const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2);
      gradient.addColorStop(0, '#DC2626'); // red
      gradient.addColorStop(0.5, '#9333EA'); // purple
      gradient.addColorStop(1, '#3B82F6'); // blue

      // Draw Lambda
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Glow effect
      ctx.shadowColor = '#9333EA';
      ctx.shadowBlur = 20;

      ctx.beginPath();
      // Left leg of Lambda
      ctx.moveTo(-size * 0.3, size * 0.4);
      ctx.lineTo(0, -size * 0.4);
      // Right leg of Lambda
      ctx.lineTo(size * 0.3, size * 0.4);
      ctx.stroke();

      // Draw mesh lines for 3D effect
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';
      ctx.lineWidth = 1;

      for (let i = -10; i <= 10; i++) {
        const offset = i * (size / 20);
        const wave = Math.sin(time + i * 0.2) * 5;
        
        ctx.beginPath();
        ctx.moveTo(-size * 0.3 + offset, size * 0.4);
        ctx.lineTo(0 + offset + wave, -size * 0.4);
        ctx.lineTo(size * 0.3 + offset, size * 0.4);
        ctx.stroke();
      }

      ctx.restore();

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: 'crisp-edges' }}
      />
    </div>
  );
}
