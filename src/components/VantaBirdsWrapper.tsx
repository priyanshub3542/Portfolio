import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaBirdsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && window.VANTA.BIRDS && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          birdSize: 1.20,
          wingSpan: 24.00,
          speedLimit: 3.00,
          separation: 52.00,
          alignment: 45.00,
          cohesion: 29.00,
          quantity: 4.00,
        });
      }
    };

    if (window.VANTA && window.VANTA.BIRDS) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA && window.VANTA.BIRDS) {
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
    <div ref={vantaRef} className="relative w-full">
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default VantaBirdsWrapper;
