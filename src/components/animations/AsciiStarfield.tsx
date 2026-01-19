'use client';

import { useEffect, useRef } from 'react';

export function AsciiStarfield() {
  const canvasRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = 80;
    const height = 30;
    const stars: Array<{ x: number; y: number; speed: number; char: string }> = [];
    const starChars = ['.', '*', '+', '·', '✦', '✧'];

    // Initialize stars
    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.5 + 0.1,
        char: starChars[Math.floor(Math.random() * starChars.length)],
      });
    }

    let animationId: number;

    const animate = () => {
      // Create empty canvas
      const lines: string[] = [];
      for (let y = 0; y < height; y++) {
        lines[y] = ' '.repeat(width);
      }

      // Update and draw stars
      stars.forEach((star) => {
        star.x += star.speed;
        
        // Reset star if it goes off screen
        if (star.x >= width) {
          star.x = 0;
          star.y = Math.random() * height;
          star.char = starChars[Math.floor(Math.random() * starChars.length)];
        }

        const x = Math.floor(star.x);
        const y = Math.floor(star.y);

        if (x >= 0 && x < width && y >= 0 && y < height) {
          const lineArray = lines[y].split('');
          lineArray[x] = star.char;
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
