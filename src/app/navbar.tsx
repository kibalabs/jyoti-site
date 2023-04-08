'use client'
import React from 'react';
import { Noto_Serif_Khojki } from 'next/font/google'
import Image from 'next/image';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const path = typeof window !== 'undefined' ? window.location.pathname : null;
  console.log('path', path);
  return (
    <nav className="flex items-center p-3 flex-wrap backdrop-blur-3xl" style={{backgroundColor: 'rgba(0, 0, 0, 0.7'}}>
      <a href="/" className="p-2 mr-4 inline-flex items-center">
        <Image src='/favicon.png' alt='jyoti patel' className={`mr-4 rounded`} width='100' height='100' style={{maxHeight: '2em', maxWidth: '2em', objectFit: 'contain' }} />
        <span className={`${mainFont.className} text-xl text-white font-bold tracking-wide`}>Jyoti Patel</span>
      </a>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17H20M4 12H20M4 7H20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div id="navigation" className={`${isMobileMenuOpen ? '' : 'hidden'} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className="flex flex-col lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto">
          <a
            href="/"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors ${path === '/' ? 'text-slate-300' : ''} hover:text-slate-300`}
          >
            <span>Home</span>
          </a>
          <a
            href="/about"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors ${path === '/about' ? 'text-sky-300' : ''} hover:text-sky-300`}
          >
            <span>About</span>
          </a>
          <a
            href="/books"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors ${path === '/books' ? 'text-teal-300' : ''} hover:text-teal-300`}
          >
            <span>Books</span>
          </a>
          <a
            href="/press"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors ${path === '/press' ? 'text-yellow-300' : ''} hover:text-yellow-300`}
          >
            <span>Press</span>
          </a>
          <a
            href="/events"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors ${path === '/events' ? 'text-amber-300' : ''} hover:text-amber-300`}
          >
            <span>Events</span>
          </a>
          <a
            href="/contact"
            className={`${mainFont.className} lg:inline-flex lg:w-auto w-full border border-transparent px-3 py-2 rounded items-center justify-center transition-colors ${path === '/contact' ? 'text-orange-300' : ''} hover:text-orange-300`}
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
