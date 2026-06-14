import React from 'react';
import FadeIn from '../components/FadeIn';

const skillsData = [
  {
    number: '01',
    category: 'Programming',
    skills: ['Python', 'SQL'],
  },
  {
    number: '02',
    category: 'ML / DL Libraries',
    skills: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'Statsmodels', 'OpenCV'],
  },
  {
    number: '03',
    category: 'Data Libraries',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    number: '04',
    category: 'Visualization & BI',
    skills: ['Power BI (DAX)', 'Tableau', 'Excel (Pivot Tables, VLOOKUP, XLOOKUP, Dashboards)'],
  },
  {
    number: '05',
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    number: '06',
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Jupyter Notebook', 'VS Code', 'Streamlit'],
  },
  {
    number: '07',
    category: 'Concepts',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'ETL Pipelines',
      'RFM Segmentation',
      'Time-Series Forecasting',
      'Business Intelligence',
    ],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-transparent rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-white font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3.5rem, 14vw, 190px)' }}
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto">
        {skillsData.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.08} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(215, 226, 234, 0.15)' } : {}),
              }}
            >
              <span
                className="font-black text-[#D7E2EA] flex-shrink-0 leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </span>
              <div className="flex flex-col gap-5 pt-2 sm:pt-4 flex-1">
                <h3
                  className="font-semibold uppercase text-[#D7E2EA] tracking-wide"
                  style={{ fontSize: 'clamp(1.3rem, 3vw, 2.8rem)' }}
                >
                  {item.category}
                </h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-3 rounded-full font-normal border border-[#D7E2EA]/15 text-[#D7E2EA] bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 transition-colors"
                      style={{ fontSize: 'clamp(1.05rem, 2vw, 1.55rem)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
