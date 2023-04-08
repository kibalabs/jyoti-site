import { Noto_Serif_Khojki } from 'next/font/google'
import Head from 'next/head';
import 'animate.css';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/home.jpg')] md:bg-[url('/home-large.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Jyoti Patel</title>
        <meta name="description" content={'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.'} />
        <meta property="og:title" content={'Jyoti Patel'} />
        <meta property="og:description" content={'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Jyoti__Patel" />
        <meta name="twitter:title" content="Jyoti Patel" />
        <meta name="twitter:description" content='Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.' />
        <meta name="twitter:image" content="https://jyoti-site.vercel.app/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between px-8 sm:px-24 backdrop-brightness-50 grow">
        <div className="grow"></div>
        <div className="mt-16 lg:mt-0 relative flex flex-col place-items-center text-center">
          <h1 className={`${titleFont.className} text-6xl lg:text-7xl font-bold`}>Jyoti Patel</h1>
          <p className={`${mainFont.className} mt-6 lg:mt-8 mb-4 text-xl`}>Author of the prize-winning novel &quot;The Things That We Lost&quot;, published by #Merky Books.</p>
        </div>
        <div className='grow'></div>
        <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-5 text-center justify-center">
          <a
            href="/about"
            className="group animate__animated animate__fadeInLeft px-8 py-4 transition-colors hover:text-orange-700 underline decoration-orange-700"
            style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>About</span>
          </a>
          <a
            href="/books"
            className="group animate__animated animate__fadeInLeft animate__delay-1s px-8 py-4 transition-colors hover:text-amber-700 underline decoration-amber-700"
            style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Books</span>
          </a>
          <a
            href="/press"
            className="group animate__animated animate__fadeInLeft animate__delay-2s px-8 py-4 transition-colors hover:text-yellow-700 underline decoration-yellow-700"
            style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Press</span>
          </a>
          <a
            href="/events"
            className="group animate__animated animate__fadeInLeft animate__delay-3s px-8 py-4 transition-colors hover:text-teal-700 underline decoration-teal-700"
            style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Events</span>
          </a>
          <a
            href="/contact"
            className="group animate__animated animate__fadeInLeft animate__delay-4s px-8 py-4 transition-colors hover:text-sky-700 underline decoration-sky-700"
            style={{ textUnderlineOffset: '0.5em', textDecorationThickness: '0.2em'}}
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Contact</span>
          </a>
        </div>
        <div className='flex flex-row align-center mt-8 md:mt-0'>
          <a
            href='https://twitter.com/Jyoti__Patel'
            className="flex flex-row items-baseline group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3.5 w-3.5"
              fill="#aaa" //#1da1f2
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            <span className={`${mainFont.className} font-semibold`} style={{color: '#aaa'}}>Twitter</span>
          </a>
          <a
            href='https://www.instagram.com/jyotisbooks/'
            className="flex flex-row items-baseline group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3.5 w-3.5"
              fill="#aaa" // #c13584
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className={`${mainFont.className} font-semibold`} style={{color: '#aaa'}}>Instagram</span>
          </a>
        </div>
        <div className='mt-4 mb-2 mr-2 self-end' style={{opacity: 0.25}}>
          <p>Website by <a href='https://www.kibalabs.com'>Kiba Labs</a></p>
        </div>
      </main>
    </div>
  )
}
