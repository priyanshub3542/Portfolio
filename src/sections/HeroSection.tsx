import React, { useEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

declare global {
  interface Window {
    VANTA: any;
  }
}

const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Resume'];

const HeroSection: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x0c0c0c,
          points: 9.0,
          maxDistance: 29.0,
          spacing: 20.0,
        });
      }
    };

    // Vanta scripts may load after React mounts, so retry
    if (window.VANTA) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA) {
          initVanta();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={vantaRef}
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 flex-wrap gap-3 sm:gap-4 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium uppercase tracking-wider
                text-sm sm:text-base md:text-xl lg:text-2xl
                transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#FFFFFF', textShadow: '0 0 20px rgba(0,0,0,0.8)' }}
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading - Two Lines */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <FadeIn delay={0.15} y={40} className="overflow-hidden w-full text-center">
          <h1 className="font-black uppercase tracking-tight leading-[0.9] w-full">
            <span
              className="block"
              style={{
                fontSize: 'clamp(5rem, 16vw, 240px)',
                color: '#FFFFFF',
                textShadow: '0 0 40px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              Hi,
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(3.5rem, 11vw, 180px)',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #A8C0D0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))',
              }}
            >
              i&apos;m priyanshu
            </span>
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-10 relative">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug
              max-w-[200px] sm:max-w-[260px] md:max-w-[320px]"
            style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1.75rem)',
              color: '#FFFFFF',
              textShadow: '0 0 15px rgba(0,0,0,0.7)',
            }}
          >
            a data analyst driven by extracting insights and building data solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
