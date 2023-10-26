import React from 'react';
import Image from 'next/image';
import { mainFont, titleFont } from '../fonts';
import { Metadata } from 'next';
import NavBar from '../navbar';
import Footer from '../footer';
import 'animate.css';

import { getTextColorCss } from '../util';
import { IQuote, createMetadata, getPageData } from './data';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata();
}

export default async function BooksPage(): Promise<React.ReactElement> {
  const pageData = await getPageData();
  return (
    <div className="w-screen min-h-screen bg-[url('/books.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <Image
        src="/books-banner.jpg"
        alt="Jyoti Patel"
        width={1000}
        height={400}
        // maxHeight: '50vh',
        style={{ objectFit: 'cover', width: '100%', objectPosition: '100% 0%' }}
      />
      <main className="flex min-h-screen flex-col items-center justify-between backdrop-blur-3xl backdrop-brightness-50">
        <div className="mt-16 mx-16 relative flex flex-col place-items-center text-center" style={{ maxWidth: 'calc(min(95%, 56rem))' }}>
          <h1 className={`${titleFont.className} text-4xl font-bold mb-4`}>The Things That We Lost</h1>
          <div className={`flex flex-row mb-6 lg:mb-8`} style={{ width: '25em', height: '0.1em', maxWidth: '100%' }}>
            <div className='w-1/5 h-full bg-sky-500 mx-1' />
            <div className='w-1/5 h-full bg-teal-500 mx-1' />
            <div className='w-1/5 h-full bg-yellow-500 mx-1' />
            <div className='w-1/5 h-full bg-amber-500 mx-1' />
            <div className='w-1/5 h-full bg-orange-500 mx-1' />
          </div>
          <div className="grow"></div>
          <p className={`${mainFont.className} mt-4 text-xl font-bold`}>An Observer Best Debut Novel of 2023</p>
          <p className={`${mainFont.className} mt-1 text-xl font-bold`}>Winner of the #Merky Books New Writers’ Prize</p>
          <p className={`${mainFont.className} mt-8 text-xl`}>Order yours now:</p>
          <div className={`mt-2 flex flex-col sm:flex-row`}>
            <a
              href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529186345'
              className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:text-sky-300 underline decoration-sky-500"
              style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-2 h-3.5 w-3.5" viewBox="0 0 512 512"><path d="M439.91 112h-23.82a.09.09 0 00-.09.09V416a32 32 0 0032 32 32 32 0 0032-32V152.09A40.09 40.09 0 00439.91 112z"/><path d="M384 416V72a40 40 0 00-40-40H72a40 40 0 00-40 40v352a56 56 0 0056 56h342.85a1.14 1.14 0 001.15-1.15 1.14 1.14 0 00-.85-1.1A64.11 64.11 0 01384 416zM96 128a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16h-64a16 16 0 01-16-16zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 400zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 336zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 272zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 208zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 144z" /></svg>
              <span className={`${mainFont.className} text-xl font-semibold`}>Paperback</span>
            </a>
            <a
              href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529186338'
              className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:text-sky-300 underline decoration-sky-500"
              style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-2 h-3.5 w-3.5" viewBox="0 0 512 512"><path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z" /></svg>
              <span className={`${mainFont.className} text-xl font-semibold`}>Hardback</span>
            </a>
            <a
              href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529119442'
              className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:text-yellow-300 underline decoration-yellow-500"
              style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-2 h-3.5 w-3.5" viewBox="0 0 512 512"><path d="M477.29 400a27.75 27.75 0 002.71-12V108a28 28 0 00-28-28H60a28 28 0 00-28 28v280a27.75 27.75 0 002.71 12H0v32h512v-32z" /></svg>
              <span className={`${mainFont.className} text-xl font-semibold`}>Ebook</span>
            </a>
            <a
              href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529906912'
              className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:text-orange-300 underline decoration-orange-500"
              style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-2 h-3.5 w-3.5" viewBox="0 0 512 512"><path d="M411.16 97.45C368.43 55.85 311.88 32 256 32S143.57 55.85 100.84 97.45C56.45 140.67 32 196 32 256s26.84 118.49 45.42 152.25S121 480 144 480c32 0 96-32 96-32L128 240l-54.42 31.73a176.07 176.07 0 01-1-18.84c0-48.57 19.32-94.1 56.15-130C164.24 88.34 210 70 256 70s91.73 18.34 127.27 52.93c36.83 35.86 56.14 81.39 56.14 130a175.56 175.56 0 01-1 18.82L384 240 272 448s64 32 96 32c23 0 48-38 66.58-71.75S480 316 480 256s-24.45-115.33-68.84-158.55z" /></svg>
              <span className={`${mainFont.className} text-xl font-semibold`}>Audiobook</span>
            </a>
          </div>
          <p className={`${mainFont.className} mt-8`}></p>
          {pageData.Quotes.map((quote: IQuote, index: number): React.ReactElement => (
            <p key={index} className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>
              ‘{quote.Text}’
              <br />
              <span className={`leading-loose font-semibold ${getTextColorCss(index)}`}>{quote.Source}</span>
            </p>
          ))}
          <div className={`${mainFont.className} mb-8 lg:mb-20`}></div>
        </div>
        <div className='grow'></div>
      </main>
      <Footer />
    </div>
  )
}
