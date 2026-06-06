"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.radius = Math.random() * 1.5 + 1;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx = -this.vx;
    if (this.y < 0 || this.y > h) this.vy = -this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(34, 197, 94, 0.5)";
    ctx.fill();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip on mobile to save CPU/GPU — the CSS gradients are enough
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    // Reduce particle count on tablet vs desktop
    const isTablet = window.innerWidth < 1024;
    const particleCount = isTablet ? 18 : 30;
    const connectionDistance = 130;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let offscreen: HTMLCanvasElement | null = null;
    let lastFrameTime = 0;
    const frameDuration = 1000 / 30; // Cap at 30fps to save CPU

    // Pre-render the static dot grid once to an offscreen canvas
    const buildDotGrid = (w: number, h: number) => {
      offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const oCtx = offscreen.getContext("2d");
      if (!oCtx) return;
      oCtx.fillStyle = "rgba(34, 197, 94, 0.035)";
      for (let x = 0; x < w; x += 32) {
        for (let y = 0; y < h; y += 32) {
          oCtx.beginPath();
          oCtx.arc(x, y, 1, 0, Math.PI * 2);
          oCtx.fill();
        }
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildDotGrid(canvas.width, canvas.height);
    };

    const init = () => {
      resize();
      window.addEventListener("resize", resize);
      particles = Array.from(
        { length: particleCount },
        () => new Particle(canvas.width, canvas.height),
      );
    };

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Pause rendering when tab is not visible
      if (document.hidden) return;

      // Throttle to ~30fps
      if (now - lastFrameTime < frameDuration) return;
      lastFrameTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Blit the pre-rendered dot grid (single drawImage call, very cheap)
      if (offscreen) ctx.drawImage(offscreen, 0, 0);

      const w = canvas.width;
      const h = canvas.height;

      // Update particles
      particles.forEach((p) => p.update(w, h));

      // Draw constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${(1 - dist / connectionDistance) * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
        particles[i].draw(ctx);
      }
    };

    init();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
