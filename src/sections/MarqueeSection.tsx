import React, { useEffect, useRef, useState } from 'react';

const row1Skills = [
  'Python',
  'SQL',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'Power BI',
  'Tableau',
  'Excel',
  'PostgreSQL',
  'MySQL',
  'Git',
  'GitHub',
];

const row2Skills = [
  'Docker',
  'PyTorch',
  'TensorFlow',
  'Scikit-Learn',
  'OpenCV',
  'Streamlit',
  'Statsmodels',
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'Computer Vision',
  'ETL Pipelines',
  'Time-Series Forecasting',
];

// Triple for seamless scrolling
const row1Tripled = [...row1Skills, ...row1Skills, ...row1Skills];
const row2Tripled = [...row2Skills, ...row2Skills, ...row2Skills];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="marquee"
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves right */}
      <div
        className="flex gap-4 mb-4 select-none"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {row1Tripled.map((skill, i) => (
          <div
            key={`s1-${i}`}
            className="px-8 py-4 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] font-medium uppercase tracking-wider whitespace-nowrap flex-shrink-0"
            style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Row 2 - moves left */}
      <div
        className="flex gap-4 select-none"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {row2Tripled.map((skill, i) => (
          <div
            key={`s2-${i}`}
            className="px-8 py-4 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] font-medium uppercase tracking-wider whitespace-nowrap flex-shrink-0"
            style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
