import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  date: string;
  techStack: string[];
  bullets: string[];
  githubUrl: string;
}

const projects: ProjectData[] = [
  {
    number: '01',
    category: 'Data Analysis & BI',
    name: 'E-Commerce Sales Analysis & Dashboard',
    date: 'May 2026 - Jun 2026',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Power BI (DAX)', 'Excel'],
    bullets: [
      'Analyzed 100,000+ e-commerce transactions using SQL (JOINs, CTEs, Window Functions) and Python to extract KPIs: Revenue, AOV, and CLV.',
      'Applied RFM segmentation; top 20% of customers generated 67% of $2.1M total revenue, enabling targeted retention strategies.',
      'Built interactive Power BI dashboard with DAX measures: Total Revenue ($2.1M), Monthly Growth (12%), Customer Retention Rate (34%).',
    ],
    githubUrl: 'https://github.com/priyanshub3542',
  },
  {
    number: '02',
    category: 'Time-Series & BI',
    name: 'Supply Chain Inventory Optimization',
    date: 'Apr 2026',
    techStack: ['Python', 'Pandas', 'NumPy', 'Statsmodels', 'SQL', 'Power BI', 'Excel'],
    bullets: [
      'Engineered ARIMA Time-Series Forecasting model on 100,000+ rows achieving 88% accuracy, reducing overstock by 15% across 500+ SKUs.',
      'Designed Power BI dashboard tracking Safety Stock, Reorder Points, and Inventory Turnover for real-time monitoring.',
      'Automated weekly data extraction and reporting pipelines using Python and SQL, saving 4+ hours/week.',
    ],
    githubUrl: 'https://github.com/priyanshub3542',
  },
  {
    number: '03',
    category: 'Deep Learning & CV',
    name: 'Video Surveillance Anomaly Detection',
    date: 'Nov 2025 - May 2026',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'CNN-LSTM', 'TensorFlow', 'Streamlit'],
    bullets: [
      'Developed real-time video surveillance system using deep learning to detect crowd anomalies (CSRNet), fire/smoke (YOLO), and violence (CNN-LSTM).',
      'Designed pipeline to process video frames and generate real-time anomaly alerts using PyTorch, TensorFlow, and OpenCV.',
      'Optimized performance using CUDA acceleration; built real-time monitoring interface with Streamlit.',
    ],
    githubUrl: 'https://github.com/priyanshub3542',
  },
];

const totalCards = projects.length;

const ProjectCard: React.FC<{ project: ProjectData; index: number }> = ({
  project,
  index,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/30
          bg-[#0C0C0C]/50 backdrop-blur-md p-6 sm:p-8 md:p-10 h-full flex flex-col origin-top justify-between"
        style={{ scale }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 flex-wrap gap-4">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
            <span
              className="font-black text-[#D7E2EA] leading-none hero-heading"
              style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-sm sm:text-base opacity-60">
                {project.category} &bull; {project.date}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2.4rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton className="self-center" href={project.githubUrl} />
        </div>

        {/* Content row (Description and Tech stack) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1 min-h-0 overflow-y-auto pr-2">
          {/* Bullet points (Left column) */}
          <div className="flex-1 md:w-[65%]">
            <h4 className="text-[#D7E2EA] font-bold uppercase tracking-widest text-base sm:text-lg mb-6 md:mb-8 opacity-50">
              Key Contributions & Impacts
            </h4>
            <ul className="list-disc pl-6 text-[#D7E2EA] font-light leading-relaxed space-y-6 md:space-y-10" style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)' }}>
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="opacity-90 tracking-wide">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack (Right column) */}
          <div className="md:w-[35%] flex flex-col border-t md:border-t-0 md:border-l border-[#D7E2EA]/10 pt-4 md:pt-0 md:pl-6">
            <h4 className="text-[#D7E2EA] font-bold uppercase tracking-widest text-base sm:text-lg mb-6 md:mb-8 opacity-50">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 rounded-full text-base sm:text-lg md:text-xl font-normal border border-[#D7E2EA]/20 text-[#D7E2EA]/90 bg-[#D7E2EA]/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
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
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
