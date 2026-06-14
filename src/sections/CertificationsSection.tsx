import React from 'react';
import FadeIn from '../components/FadeIn';

const certifications = [
  {
    provider: 'Google',
    title: 'Data Analysis with Python',
    source: 'Coursera',
    description: 'Developed proficiency in exploratory data analysis (EDA), data cleaning, statistical analysis, and interactive visualizations on real-world datasets using Python, Pandas, NumPy, Matplotlib, and Seaborn.',
    image: '/google-cert.png',
  },
  {
    provider: 'IBM',
    title: 'Machine Learning with Python',
    source: 'Coursera',
    description: 'Mastered supervised and unsupervised machine learning algorithms including regression, classification, clustering, and predictive modeling. Built projects utilizing Scikit-Learn and related data libraries.',
    image: '/ibm-cert.png',
  },
  {
    provider: 'Deloitte',
    title: 'Data Analytics Job Simulation',
    source: 'Forage',
    description: 'Completed practical job-simulation tasks in data analysis and forensic technology. Analyzed data sets, drafted summaries of insights, and presented technical solutions mimicking real-world project deliveries.',
    image: '/deloitte-cert.png',
  },
];

const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
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
          Certifications
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {certifications.map((cert, idx) => (
          <FadeIn
            key={idx}
            delay={idx * 0.1}
            y={30}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-[30px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/2"
          >
            {/* Certificate Image Frame */}
            <div className="w-full lg:w-[45%] flex-shrink-0 group overflow-hidden rounded-2xl border-2 border-[#D7E2EA]/10 shadow-lg relative">
              <a href={cert.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={`${cert.provider} ${cert.title} Certificate`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0C0C0C]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-base sm:text-lg font-medium uppercase tracking-widest border border-white px-5 py-2.5 rounded-full">
                    View Full Certificate
                  </span>
                </div>
              </a>
            </div>

            {/* Certificate Details */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded text-sm sm:text-base font-bold uppercase tracking-wider bg-[#D7E2EA] text-[#0C0C0C]">
                  {cert.provider}
                </span>
                <span className="text-[#D7E2EA]/50 text-base sm:text-lg font-light uppercase tracking-wider">
                  {cert.source}
                </span>
              </div>

              <h3
                className="text-[#D7E2EA] font-semibold uppercase leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
              >
                {cert.title}
              </h3>

              <p
                className="text-[#D7E2EA]/75 font-light leading-relaxed"
                style={{ fontSize: 'clamp(1.05rem, 2vw, 1.4rem)' }}
              >
                {cert.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
