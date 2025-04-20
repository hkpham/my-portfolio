import React from 'react';

export const AnimatedIntro = () => {
  const words = ['Hi', 'there', '👋,', 'welcome', 'to', 'my', 'portfolio!'];

  return (
    <p className="pt-10 text-2xl md:text-4xl mb-6 flex flex-wrap justify-center gap-3">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fadeInWord"
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
        >
          {word}
        </span>
      ))}
    </p>
  );
};
