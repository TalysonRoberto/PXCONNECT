import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let numParticles = window.innerWidth < 768 ? 40 : 100;
    const particlesArray = [];
    const mouse = { x: null, y: null };

    canvas.width = window.innerWidth;
    canvas.height = 600;

    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = (Math.random() - 0.5) * 1.2; // menos tremor
        this.speedY = (Math.random() - 0.5) * 1.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mantém dentro do canvas
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Interação com mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 50) {
            this.x -= dx / 20;
            this.y -= dy / 20;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(
          Math.round(this.x),
          Math.round(this.y),
          this.size,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function init() {
      particlesArray.length = 0; // limpa array
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = 'rgba(250,140,35,0.8)';
        particlesArray.push(new Particle(x, y, size, color));
      }
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(250,140,35,${1 - distance / 300})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    // Eventos
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
      // atualiza número de partículas conforme largura
      numParticles = window.innerWidth < 768 ? 40 : 100;

      // Mantém partículas existentes dentro do canvas
      particlesArray.forEach((p) => {
        if (p.x > canvas.width) p.x = canvas.width - p.size;
        if (p.y > canvas.height) p.y = canvas.height - p.size;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="canvasBg" />
    </div>
  );
}
