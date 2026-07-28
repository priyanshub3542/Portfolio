import React, { useCallback } from 'react';
import { jsPDF } from 'jspdf';
import FadeIn from '../components/FadeIn';

const ResumeSection: React.FC = () => {
  const handleDownloadPDF = useCallback(async () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = `${import.meta.env.BASE_URL}resume.jpg`;

    img.onload = () => {
      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Scale image to fit A4 width while maintaining aspect ratio
      const imgRatio = img.height / img.width;
      const scaledHeight = pdfWidth * imgRatio;

      if (scaledHeight <= pdfHeight) {
        // Image fits on one page
        pdf.addImage(img, 'JPEG', 0, 0, pdfWidth, scaledHeight);
      } else {
        // Scale to fit page height
        const scaledWidth = pdfHeight / imgRatio;
        const xOffset = (pdfWidth - scaledWidth) / 2;
        pdf.addImage(img, 'JPEG', xOffset, 0, scaledWidth, pdfHeight);
      }

      // Open PDF in new tab
      const pdfBlob = pdf.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      window.open(url, '_blank');
    };
  }, []);

  return (
    <section
      id="resume"
      className="bg-transparent rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-white font-black uppercase text-center mb-8 sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 190px)' }}
        >
          Resume
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 sm:gap-14">
        {/* Resume Preview */}
        <FadeIn delay={0.15} y={30}>
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer bg-white p-4"
            onClick={handleDownloadPDF}
            style={{ boxShadow: '0 0 60px rgba(255,255,255,0.15), 0 25px 50px rgba(0,0,0,0.5)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}resume.jpg`}
              alt="Priyanshu Bisht Resume"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </FadeIn>

        {/* Open as PDF Button */}
        <FadeIn delay={0.3} y={20}>
          <button
            onClick={handleDownloadPDF}
            className="rounded-full text-white font-medium uppercase tracking-widest text-center
              px-12 py-5 sm:px-16 sm:py-6
              text-base sm:text-lg md:text-xl
              cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
              outline: '2px solid white',
              outlineOffset: '-3px',
            }}
          >
            Open Resume as PDF
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResumeSection;
