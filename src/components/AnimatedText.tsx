import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.replace(/\s/g, '').length;
  let charIndexCounter = 0;

  return (
    <p ref={ref} className={`relative ${className}`} style={style}>
      {words.map((word, wIdx) => {
        const wordChars = word.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char) => {
              const currentIdx = charIndexCounter++;
              return (
                <AnimatedChar
                  key={currentIdx}
                  char={char}
                  index={currentIdx}
                  total={totalChars}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: any;
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({
  char,
  index,
  total,
  scrollYProgress,
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline">
      <span className="invisible">{char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
