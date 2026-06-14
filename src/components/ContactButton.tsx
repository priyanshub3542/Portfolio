import React from 'react';

const ContactButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <a
      id="contact-button"
      href="mailto:bishtpriyanshu3542@gmail.com"
      className={`inline-block rounded-full text-white font-medium uppercase tracking-widest text-center
        px-10 py-3.5 sm:px-12 sm:py-4 md:px-14 md:py-5
        text-sm sm:text-base md:text-lg
        cursor-pointer transition-opacity hover:opacity-90 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
        textDecoration: 'none',
      }}
    >
      Contact Me
    </a>
  );
};

export default ContactButton;
