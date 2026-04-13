interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

export function initParticleGrid(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let animationId: number;
  let particles: Particle[] = [];
  const spacing = 60;
  const maxDist = 120;
  const dotColor = 'rgba(0, 212, 255, 0.2)';
  const lineColor = 'rgba(0, 212, 255, 0.04)';

  function resize() {
    const parent = canvas.parentElement;
    if (!parent) return;
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = parent.clientWidth * dpr;
    canvas.height = parent.clientHeight * dpr;
    canvas.style.width = parent.clientWidth + 'px';
    canvas.style.height = parent.clientHeight + 'px';
    ctx!.scale(dpr, dpr);
    createParticles(parent.clientWidth, parent.clientHeight);
  }

  function createParticles(w: number, h: number) {
    particles = [];
    const cols = Math.ceil(w / spacing) + 1;
    const rows = Math.ceil(h / spacing) + 1;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: i * spacing,
          y: j * spacing,
          baseX: i * spacing,
          baseY: j * spacing,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    }
  }

  function draw() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx!.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (!prefersReducedMotion) {
        p.x += p.vx;
        p.y += p.vy;

        const dx = p.x - p.baseX;
        const dy = p.y - p.baseY;
        if (Math.abs(dx) > 15) p.vx *= -1;
        if (Math.abs(dy) > 15) p.vy *= -1;
      }

      ctx!.fillStyle = dotColor;
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
      ctx!.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < maxDist) {
          ctx!.strokeStyle = lineColor;
          ctx!.lineWidth = 0.5;
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(p2.x, p2.y);
          ctx!.stroke();
        }
      }
    }

    if (!prefersReducedMotion) {
      animationId = requestAnimationFrame(draw);
    }
  }

  resize();
  draw();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    resize();
    draw();
  });

  return () => cancelAnimationFrame(animationId);
}
