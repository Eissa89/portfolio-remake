import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[10] px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex flex-row items-center gap-3">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-black"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-black select-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center text-[23px] text-black">
          <a
            href="#labs"
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Labs
          </a>
          <span>,&nbsp;</span>
          <a
            href="#studio"
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Studio
          </a>
          <span>,&nbsp;</span>
          <a
            href="#openings"
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Openings
          </a>
          <span>,&nbsp;</span>
          <a
            href="#shop"
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Shop
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Get in touch
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          className="md:hidden p-2 flex flex-col gap-[5px] focus:outline-none focus:ring-2 focus:ring-black rounded"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 text-[32px] font-medium text-black">
          <a
            href="#labs"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Labs
          </a>
          <a
            href="#studio"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Studio
          </a>
          <a
            href="#openings"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Openings
          </a>
          <a
            href="#shop"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Shop
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="underline underline-offset-2 hover:opacity-60 transition-opacity focus:outline-none focus:ring-1 focus:ring-black rounded"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </>
  );
};
