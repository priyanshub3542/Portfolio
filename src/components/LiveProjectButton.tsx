import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  className = '',
  href = 'https://github.com/priyanshub3542',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        font-medium uppercase tracking-widest text-center
        px-10 py-3.5 sm:px-12 sm:py-4
        text-base sm:text-lg
        cursor-pointer transition-colors hover:bg-[#D7E2EA]/10 text-decoration-none ${className}`}
    >
      GitHub Project
    </a>
  );
};

export default LiveProjectButton;
