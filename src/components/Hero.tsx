import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { ActionPills } from './ActionPills';

export const Hero: React.FC = () => {
  const textToType =
    'Glad you stopped in. Good taste tends to find us. Now, what are we building?';

  const { displayed, done } = useTypewriter(textToType, 38, 600);

  return (
    <section className="relative z-[1] h-screen w-full flex flex-col justify-end md:justify-center pb-12 md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-xl relative z-10">
        {/* BLURRED INTRO LABEL */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#000',
            filter: 'blur(4px)',
          }}
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe's Adaptive Response Interface Agent
        </div>

        {/* TYPEWRITER */}
        <p
          className="text-black mb-5 sm:mb-6 font-normal min-h-[54px]"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
          }}
        >
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
          )}
        </p>

        {/* ACTION PILLS */}
        <ActionPills />
      </div>
    </section>
  );
};
