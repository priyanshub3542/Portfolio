import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ResumeSection from './sections/ResumeSection';

import VantaBirdsWrapper from './components/VantaBirdsWrapper';

function App() {
  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <VantaBirdsWrapper>
        <ResumeSection />
        <ServicesSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
      </VantaBirdsWrapper>
    </div>
  );
}

export default App;
