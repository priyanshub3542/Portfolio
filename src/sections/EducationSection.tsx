import React from 'react';
import FadeIn from '../components/FadeIn';

const education = [
  {
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    institution: 'Graphic Era Hill University, Dehradun, Uttarakhand, India',
    period: 'Aug 2022 - May 2026',
    gradeType: 'CGPA',
    grade: '6.5',
  },
  {
    degree: 'CBSE Board - Class XII',
    institution: 'Parwati Prema Jagati Saraswati Vihar, Nainital, Uttarakhand',
    period: 'May 2021 - Apr 2022',
    gradeType: 'Score',
    grade: '82%',
  },
  {
    degree: 'CBSE Board - Class X',
    institution: 'Parwati Prema Jagati Saraswati Vihar, Nainital, Uttarakhand',
    period: 'May 2019 - Apr 2020',
    gradeType: 'Score',
    grade: '88%',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="bg-transparent rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight
            mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 190px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-12 border-l border-[#D7E2EA]/10 pl-6 sm:pl-10 md:pl-14 ml-2 sm:ml-6">
        {education.map((edu, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} y={30} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-[31px] sm:-left-[47px] md:-left-[63px] top-2.5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#D7E2EA] border-4 border-[#0C0C0C]" />
            
            <div className="flex flex-col gap-2">
              <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-sm sm:text-base md:text-lg">
                {edu.period}
              </span>
              
              <h3 
                className="text-[#D7E2EA] font-bold tracking-tight uppercase leading-snug"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)' }}
              >
                {edu.degree}
              </h3>
              
              <p 
                className="text-[#D7E2EA]/80 font-light leading-relaxed"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}
              >
                {edu.institution}
              </p>
              
              <div className="mt-3">
                <span className="inline-block px-5 py-2.5 rounded-lg text-base sm:text-lg font-semibold tracking-wider uppercase border border-[#D7E2EA]/20 text-[#D7E2EA] bg-[#D7E2EA]/5">
                  {edu.gradeType}: {edu.grade}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
