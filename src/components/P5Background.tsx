'use client';

import { useEffect, useRef, useState } from 'react';
import type p5 from 'p5';

const P5Background = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === 'undefined' || !canvasRef.current) return;

    let p5Instance: p5 | null = null;

    const initP5 = async () => {
      try {
        const p5Module = await import('p5');
        const p5 = p5Module.default;

        const sketch = (p: p5) => {
          const particles: Particle[] = [];
          const numParticles = 80;

          class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            alpha: number;
            hue: number;

            constructor() {
              this.x = p.random(p.width);
              this.y = p.random(p.height);
              this.vx = p.random(-0.5, 0.5);
              this.vy = p.random(-0.5, 0.5);
              this.size = p.random(1, 3);
              this.alpha = p.random(0.3, 0.8);
              this.hue = p.random(15, 45);
            }

            update() {
              this.x += this.vx;
              this.y += this.vy;

              if (this.x < 0 || this.x > p.width) this.vx *= -1;
              if (this.y < 0 || this.y > p.height) this.vy *= -1;

              this.alpha += p.sin(p.frameCount * 0.01) * 0.005;
              this.alpha = p.constrain(this.alpha, 0.2, 0.9);
            }

            display() {
              p.push();
              p.colorMode(p.HSB, 360, 100, 100, 1);
              p.fill(this.hue, 70, 90, this.alpha);
              p.noStroke();
              p.ellipse(this.x, this.y, this.size);
              p.pop();
            }

            connect(other: Particle) {
              const distance = p.dist(this.x, this.y, other.x, other.y);
              if (distance < 120) {
                p.push();
                p.colorMode(p.HSB, 360, 100, 100, 1);
                const lineAlpha = p.map(distance, 0, 120, 0.4, 0);
                p.stroke(30, 60, 80, lineAlpha);
                p.strokeWeight(0.5);
                p.line(this.x, this.y, other.x, other.y);
                p.pop();
              }
            }
          }

          p.setup = () => {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            if (canvasRef.current) {
              canvas.parent(canvasRef.current);
            }
            
            for (let i = 0; i < numParticles; i++) {
              particles.push(new Particle());
            }
          };

          p.draw = () => {
            p.background(10, 10, 10);
            
            for (let i = 0; i < particles.length; i++) {
              particles[i].update();
              particles[i].display();
              
              for (let j = i + 1; j < particles.length; j++) {
                particles[i].connect(particles[j]);
              }
            }
          };

          p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
          };
        };

        // 既存のインスタンスをクリーンアップ
        if (p5InstanceRef.current) {
          p5InstanceRef.current.remove();
        }

        // 新しいインスタンスを作成
        p5Instance = new p5(sketch);
        p5InstanceRef.current = p5Instance;

      } catch (error) {
        console.error('P5 initialization error:', error);
      }
    };

    // 少し遅延を入れてから初期化
    const timer = setTimeout(initP5, 100);

    return () => {
      clearTimeout(timer);
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [isClient]);

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 -z-10"
      style={{ 
        width: '100vw', 
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a'
      }}
    />
  );
};

export default P5Background;