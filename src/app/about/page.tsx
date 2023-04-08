import { Noto_Serif_Khojki } from 'next/font/google'
import NavBar from '../navbar';
import Image from 'next/image';
import Footer from '../footer';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export default function About() {
  return (
    <div className="w-screen h-screen bg-[url('/about.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between backdrop-blur-3xl backdrop-brightness-50">
        <div className="mt-16 relative flex flex-col place-items-center text-center max-w-4xl">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-8 lg:mb-12`}>About Jyoti Patel</h1>
          <div className='mb-8 lg:mb-12 rounded-lg overflow-hidden'>
            <Image
              src="/about.jpg"
              alt="Jyoti Patel"
              width={500}
              height={500}
              style={{maxHeight: '60vh', objectFit: 'contain', width: '100%'}}
            />
          </div>
          <p className={`${mainFont.className} mb-4 text-xl`}>Jyoti Patel is an author and winner of the 2021 #Merky Books New Writers’ Prize. Her debut novel The Things That We Lost is out now.</p>
          <p className={`${mainFont.className} mb-4 text-xl`}>An extract of The Things That We Lost was chosen as the winning submission from over 2,000 entries for the 2021 #Merky Books New Writers’ Prize, a competition that aims to discover unpublished, underrepresented writers aged 16-30 from the UK and Ireland. The panel of judges included #Merky Books founder Stormzy, Candice Brathwaite, Emma Dabiri, Guz Khan, and Katarina Johnson-Thompson.</p>
          <p className={`${mainFont.className} mb-8 lg:mb-12 text-xl`}>Jyoti is a graduate of the University of East Anglia’s Creative Writing Prose Fiction MA and was selected as one of <a className='text-yellow-300' href='https://www.theguardian.com/books/2023/jan/08/meet-the-10-best-new-novelists-for-2023'>The Observer’s 10 Best New Novelists for 2023</a>. Her writing has previously been published as part of We Present’s ‘Literally’ series and in the anthology for the 2022 Bristol Short Story Prize, for which she was shortlisted.</p>
        </div>
        <span className={`${mainFont.className} mt-4 mb-2`}>Follow along with me at:</span>
        <a
          href='https://twitter.com/Jyoti__Patel'
          className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-neutral-800/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-3.5 w-3.5"
            fill="#1da1f2" //#1da1f2
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          <span className={`${mainFont.className} font-semibold`} style={{color: '#1da1f2'}}>Twitter</span>
        </a>
        <a
          href='https://www.instagram.com/jyotisbooks/'
          className="flex flex-row items-baseline group rounded-lg border border-transparent px-4 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-neutral-800/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-3.5 w-3.5"
            fill="#c13584" // #c13584
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className={`${mainFont.className} font-semibold`} style={{color: '#c13584'}}>Instagram</span>
        </a>
        <div className='grow mt-16'></div>
      </main>
      <Footer />
    </div>
  )
}
