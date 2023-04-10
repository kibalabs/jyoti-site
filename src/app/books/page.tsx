import React from 'react';
import Image from 'next/image';
import NavBar from '../navbar';
import Footer from '../footer';
import 'animate.css';
import { mainFont, titleFont } from '../fonts';

export const metadata = {
  title: 'Jyoti Patel | Books',
  description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  openGraph: {
    title: 'Jyoti Patel | Books',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Jyoti Patel | Books',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
    site: "@Jyoti__Patel",
    images: {
      url: 'https://jyoti-site.vercel.app/icon.png',
    },
  },
};
export default function Books() {
  return (
    <div className="w-screen min-h-screen bg-[url('/books.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <Image
        src="/books-banner.jpg"
        alt="Jyoti Patel"
        width={1000}
        height={400}
        // maxHeight: '50vh',
        style={{objectFit: 'cover', width: '100%', objectPosition: '100% 0%'}}
      />
      <main className="flex min-h-screen flex-col items-center justify-between backdrop-blur-3xl backdrop-brightness-50">
        <div className="mt-16 mx-16 relative flex flex-col place-items-center text-center max-w-4xl">
          <h1 className={`${titleFont.className} text-4xl font-bold mb-4`}>The Things That We Lost</h1>
          <div className={`flex flex-row mb-6 lg:mb-8`} style={{width: '25em', height: '0.1em'}}>
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
          <div className={`mt-2 flex flex-row`}>
            <a
              href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529186338'
              className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:text-sky-300 underline decoration-sky-500"
              style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-2 h-3.5 w-3.5" viewBox="0 0 512 512"><path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/></svg>
              <span className={`${mainFont.className} text-xl font-semibold`}>Hardback</span>
            </a>
            <a
              href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529119442'
              className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:text-yellow-300 underline decoration-yellow-500"
              style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-2 h-3.5 w-3.5" viewBox="0 0 512 512"><path d="M477.29 400a27.75 27.75 0 002.71-12V108a28 28 0 00-28-28H60a28 28 0 00-28 28v280a27.75 27.75 0 002.71 12H0v32h512v-32z"/></svg>
              <span className={`${mainFont.className} text-xl font-semibold`}>Ebook</span>
            </a>
            <a
              href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529906912'
              className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:text-orange-300 underline decoration-orange-500"
              style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current mr-2 h-3.5 w-3.5" viewBox="0 0 512 512"><path d="M411.16 97.45C368.43 55.85 311.88 32 256 32S143.57 55.85 100.84 97.45C56.45 140.67 32 196 32 256s26.84 118.49 45.42 152.25S121 480 144 480c32 0 96-32 96-32L128 240l-54.42 31.73a176.07 176.07 0 01-1-18.84c0-48.57 19.32-94.1 56.15-130C164.24 88.34 210 70 256 70s91.73 18.34 127.27 52.93c36.83 35.86 56.14 81.39 56.14 130a175.56 175.56 0 01-1 18.82L384 240 272 448s64 32 96 32c23 0 48-38 66.58-71.75S480 316 480 256s-24.45-115.33-68.84-158.55z"/></svg>
              <span className={`${mainFont.className} text-xl font-semibold`}>Audiobook</span>
            </a>
          </div>
          <p className={`${mainFont.className} mt-8`}></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘This is a big book, full of assured and affecting writing.’<br/><span className={`leading-loose font-semibold text-sky-200`}>The Guardian</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘One of the best books I&apos;ve read this year.’<br/><span className={`leading-loose font-semibold text-teal-200`}>gal-dem</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘A delicate and empathic debut.’ <br/><span className={`leading-loose font-semibold text-yellow-200`}>The Observer</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘Feted as one of the debut writers of the year.’ <br/><span className={`leading-loose font-semibold text-amber-200`}>Stylist</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘A thoughtful meditation on family, grief and the lengths we‘ll go to protect the ones we love.’<br/><span className={`leading-loose font-semibold text-orange-200`}>Good Housekeeping</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘A deftly assured debut novel about a fractured family and how words left unspoken can be more devastating than the truth.’<br/><span className={`leading-loose font-semibold text-sky-200`}>Red Magazine</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘A deeply reflective, searching depiction of grief.’ <br/><span className={`leading-loose font-semibold text-teal-200`}>The Times Literary Supplement</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘Highly recommended.’ <br/><span className={`leading-loose font-semibold text-yellow-200`}>Huffington Post</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘An assured debut from a vital new voice. About family, grief and belonging, Patel weaves an intricate story that will stay with you.’ <br/><span className={`leading-loose font-semibold text-amber-200`}> Nikesh Shukla</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘Immeasurably moving, a poignant and touching story about love and family bonds, and an especially tender portrait of a mother and son.’ <br/><span className={`leading-loose font-semibold text-orange-200`}>Huma Qureshi</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘Brilliant.’<br/><span className={`leading-loose font-semibold text-sky-200`}>Candice Brathwaite</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘Incredibly moving, this is an immersive novel focusing on grief but also love and relationships. I fell in love with Avani and Nik, characters so real I could hardly believe they&apos;re fictional. Jyoti Patel is a hugely exciting new writer.’<br/><span className={`leading-loose font-semibold text-teal-200`}>Louise Hare</span></p>
          <p className={`${mainFont.className} mt-8 text-xl w-full max-w-xl`}>‘This is a captivating, deeply moving book written with eloquence and beauty. It left me wanting to read more of Jyoti&apos;s words. An exciting new talent.’ <br/><span className={`leading-loose font-semibold text-yellow-200`}>Mohsin Zaidi</span></p>
          <div className={`${mainFont.className} mb-8 lg:mb-20`}></div>
        </div>
        <div className='grow'></div>
      </main>
      <Footer />
    </div>
  )
}
