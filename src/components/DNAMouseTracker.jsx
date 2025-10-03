import { useEffect, useRef } from 'react';

const DNAMouseTracker = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // DNA particle class
    class DNAParticle {
      constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.side = side; // 'left' or 'right' for double helix
        this.size = Math.random() * 4 + 2;
        this.speed = 0.1;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.Life = Math.random() * 100 + 100;
        this.maxLife = this.life;
      }

      update(mouseX, mouseY, isDark) {
        // Follow mouse with offset for helix effect
        const offset = this.side === 'left' ? -30 : 30;
        const wave = Math.sin(this.angle) * 20;
        
        this.targetX = mouseX + offset + wave;
        this.targetY = mouseY + Math.sin(this.angle * 2) * 15;

        // Smooth movement
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;

        this.angle += 0.05;
        this.life--;

        // Color based on theme
        const baseColor = isDark ? '145, 55%, 55%' : '145, 65%, 35%';
        return this.life > 0;
      }

      draw(ctx, isDark) {
        ctx.save();
        
        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        const baseColor = isDark ? 'rgba(85, 175, 120,' : 'rgba(55, 135, 90,';
        
        gradient.addColorStop(0, baseColor + (this.opacity * 0.8) + ')');
        gradient.addColorStop(0.5, baseColor + (this.opacity * 0.4) + ')');
        gradient.addColorStop(1, baseColor + '0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = baseColor + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Handle mouse move
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      // Create new particles
      if (particlesRef.current.length < 50) {
        particlesRef.current.push(
          new DNAParticle(mouseRef.current.x, mouseRef.current.y, 'left'),
          new DNAParticle(mouseRef.current.x, mouseRef.current.y, 'right')
        );
      }
    };

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Check if dark mode
      const isDark = document.documentElement.classList.contains('dark');

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        const alive = particle.update(mouseRef.current.x, mouseRef.current.y, isDark);
        if (alive) {
          particle.draw(ctx, isDark);
        }
        return alive;
      });

      // Draw connections between nearby particles
      const connectionColor = isDark ? 'rgba(85, 175, 120, 0.15)' : 'rgba(55, 135, 90, 0.15)';
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.save();
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = (1 - distance / 80) * 2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default DNAMouseTracker;