import React, { useState, useEffect } from 'react';

const WHITE_PILLS = [
  'Pitch us an idea',
  'Come work here',
  'Send a brief hello',
  'See how we operate',
];

export const ActionPills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async () => {
    const email = 'hello@mainframe.co';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div
      className={`flex flex-wrap gap-y-1 transition-all duration-400 ease-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-[8px] pointer-events-none'
      }`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.4s',
        transitionTimingFunction: 'ease',
      }}
    >
      {WHITE_PILLS.map((pillText) => (
        <button
          key={pillText}
          type="button"
          className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
        >
          {pillText}
        </button>
      ))}

      {/* OUTLINE EMAIL PILL */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address hello@mainframe.co"
        className="inline-flex items-center justify-center gap-2 sm:gap-3 text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span>
          Reach us:{' '}
          <span className="underline underline-offset-1">
            hello@mainframe.co
          </span>
        </span>
        {copied ? (
          <span className="text-xs font-semibold uppercase tracking-wider">
            Copied!
          </span>
        ) : (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 flex-shrink-0"
            aria-hidden="true"
          >
            {/* Two overlapping rectangles */}
            <rect
              x="1.5"
              y="3.5"
              width="6"
              height="7"
              rx="0.75"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
            <rect
              x="4.5"
              y="1.5"
              width="6"
              height="7"
              rx="0.75"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
