import React, { useEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

declare global {
  interface Window {
    VANTA: any;
  }
}

const AboutSection: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && window.VANTA.CLOUDS && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x0,
          sunColor: 0x0,
          sunGlareColor: 0x0,
          sunlightColor: 0xefd18f,
          speed: 0.80
        });
      }
    };

    if (window.VANTA && window.VANTA.CLOUDS) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA && window.VANTA.CLOUDS) {
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
      id="about"
      ref={vantaRef}
      className="min-h-screen flex flex-col items-center justify-center relative
        px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Content */}
      <div className="flex flex-col items-center z-10 w-full max-w-7xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase leading-none tracking-tight text-center"
            style={{ 
              fontSize: 'clamp(4rem, 16vw, 220px)',
              color: '#FFFFFF',
              textShadow: '0 0 40px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="gap-10 sm:gap-14 md:gap-16 flex flex-col items-center mt-10 sm:mt-14 md:mt-16 w-full">
          <AnimatedText
            text="Data Analyst with hands-on expertise in Python, SQL, and Power BI, skilled in data cleaning, EDA, statistical analysis, ETL pipelines, and dashboard development to deliver actionable insights. Additional experience in Machine Learning, Deep Learning, Computer Vision, and NLP."
            className="font-bold text-center leading-relaxed w-full max-w-[1200px]"
            style={{ 
              fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
              color: '#D7E2EA',
              textShadow: '0px 2px 5px rgba(0,0,0,0.9), 0px 0px 20px rgba(0,0,0,1)'
            }}
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
