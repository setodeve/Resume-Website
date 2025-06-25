'use client';

import { useEffect, useRef, useState } from 'react';

const P5Background = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return;

    // クライアントサイドでのみp5をインポート
    import('p5').then((p5Module) => {
      const p5 = p5Module.default;
      let p5Instance: any;

      const sketch = (p: any) => {
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
            this.hue = p.random(200, 280);
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
            p.fill(this.hue, 60, 80, this.alpha);
            p.noStroke();
            p.ellipse(this.x, this.y, this.size);
            p.pop();
          }

          connect(other: Particle) {
            const distance = p.dist(this.x, this.y, other.x, other.y);
            if (distance < 120) {
              p.push();
              p.colorMode(p.HSB, 360, 100, 100, 1);
              const lineAlpha = p.map(distance, 0, 120, 0.3, 0);
              p.stroke(240, 40, 60, lineAlpha);
              p.strokeWeight(0.5);
              p.line(this.x, this.y, other.x, other.y);
              p.pop();
            }
          }
        }

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight);
          
          for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
          }
        };

        p.draw = () => {
          p.background(8, 12, 20);
          
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

      if (canvasRef.current) {
        p5Instance = new p5(sketch, canvasRef.current);
      }

      return () => {
        if (p5Instance) {
          p5Instance.remove();
        }
      };
    });
  }, [isClient]);

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 -z-10"
      style={{ 
        width: '100vw', 
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#081420' // p5の背景色と同じ色を設定
      }}
    />
  );
};

export default P5Background;