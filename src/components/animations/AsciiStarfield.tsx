'use client';

import { useEffect, useRef } from 'react';

export function AsciiStarfield() {
  const canvasRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = 80;
    const height = 30;
    const centerX = width / 2;
    const centerY = height / 2;
    
    interface Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      char: string;
      progress: number;
    }
    
    const particles: Particle[] = [];
    const dataChars = '01ABCDEFabcdef{}[]<>()+-*/=.,:;!?@#$%&*~'.split('');

    // Initialize particles from edges
    for (let i = 0; i < 60; i++) {
      const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
      let startX = 0, startY = 0;
      
      switch(edge) {
        case 0: // top
          startX = Math.random() * width;
          startY = 0;
          break;
        case 1: // right
          startX = width;
          startY = Math.random() * height;
          break;
        case 2: // bottom
          startX = Math.random() * width;
          startY = height;
          break;
        case 3: // left
          startX = 0;
          startY = Math.random() * height;
          break;
      }

      particles.push({
        x: startX,
        y: startY,
        targetX: centerX,
        targetY: centerY,
        speed: Math.random() * 0.02 + 0.01,
        char: dataChars[Math.floor(Math.random() * dataChars.length)],
        progress: 0,
      });
    }

    let animationId: number;
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Create empty canvas
      const lines: string[] = [];
      for (let y = 0; y < height; y++) {
        lines[y] = ' '.repeat(width);
      }

      // Update and draw particles
      particles.forEach((particle) => {
        // Move towards center
        particle.progress += particle.speed * (deltaTime / 16);
        
        if (particle.progress >= 1) {
          // Reset particle to random edge
          const edge = Math.floor(Math.random() * 4);
          switch(edge) {
            case 0: // top
              particle.x = Math.random() * width;
              particle.y = 0;
              break;
            case 1: // right
              particle.x = width;
              particle.y = Math.random() * height;
              break;
            case 2: // bottom
              particle.x = Math.random() * width;
              particle.y = height;
              break;
            case 3: // left
              particle.x = 0;
              particle.y = Math.random() * height;
              break;
          }
          particle.progress = 0;
          particle.char = dataChars[Math.floor(Math.random() * dataChars.length)];
        } else {
          // Interpolate position
          const startX = particle.x;
          const startY = particle.y;
          particle.x = startX + (particle.targetX - startX) * particle.progress;
          particle.y = startY + (particle.targetY - startY) * particle.progress;
        }

        const x = Math.floor(particle.x);
        const y = Math.floor(particle.y);

        if (x >= 0 && x < width && y >= 0 && y < height) {
          const lineArray = lines[y].split('');
          lineArray[x] = particle.char;
          lines[y] = lineArray.join('');
        }
      });

      canvas.textContent = lines.join('\n');
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <pre
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 overflow-hidden font-mono text-xs leading-tight text-[#1A1A1B] opacity-40"
      style={{
        letterSpacing: '0.1em',
      }}
    />
  );
}
