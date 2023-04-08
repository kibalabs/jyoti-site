'use client'
import React from 'react';
import { Noto_Serif_Khojki } from 'next/font/google'
import Image from 'next/image';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  return (
    <nav className="flex items-center p-3 flex-wrap" style={{backgroundColor: 'rgba(0, 0, 0, 0.7'}}>
      <a href="/" className="p-2 mr-4 inline-flex items-center">
        <Image src='/favicon.png' alt='jyoti patel' className={`mr-4`} width='100' height='100' style={{maxHeight: '2em', maxWidth: '2em', objectFit: 'contain' }} />
        <span className={`${mainFont.className} text-xl text-white font-bold tracking-wide`}>Jyoti Patel</span>
      </a>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17H20M4 12H20M4 7H20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div id="navigation" className={`${isMobileMenuOpen ? '' : 'hidden'} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className="flex flex-col lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto">
          <a
            href="/"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors hover:border-slate-700 hover:bg-slate-800/30`}
          >
            <span>Home</span>
          </a>
          <a
            href="/about"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors hover:border-orange-700 hover:bg-orange-800/30`}
          >
            <span>About</span>
          </a>
          <a
            href="/books"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors hover:border-amber-700 hover:bg-amber-800/30`}
          >
            <span>Books</span>
          </a>
          <a
            href="/press"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors hover:border-yellow-700 hover:bg-yellow-800/30`}
          >
            <span>Press</span>
          </a>
          <a
            href="/events"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors hover:border-teal-700 hover:bg-teal-800/30`}
          >
            <span>Events</span>
          </a>
          <a
            href="/contact"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors hover:border-sky-700 hover:bg-sky-800/30`}
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
