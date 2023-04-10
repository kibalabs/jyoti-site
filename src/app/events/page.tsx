import { Noto_Serif_Khojki } from 'next/font/google'
import NavBar from '../navbar';
import Image from 'next/image';
import Footer from '../footer';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export const metadata = {
  title: 'Jyoti Patel | Events',
  description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  openGraph: {
    title: 'Jyoti Patel | Events',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Jyoti Patel | Events',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
    site: "@Jyoti__Patel",
    images: {
      url: 'https://jyoti-site.vercel.app/icon.png',
    },
  },
};

export default function Press() {
  return (
    <div className="w-screen bg-[url('/events.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <div className={`min-h-screen h-full flex flex-row items-stretch backdrop-blur-3xl backdrop-brightness-50`}>
        <div className={`hidden lg:flex lg:w-1/3 xl:w-1/2 h-full`}>
          <Image
            src="/events.jpg"
            alt="Jyoti Patel"
            width={1000}
            height={1000}
            className={`w-full h-full`}
            style={{objectFit: 'cover', objectPosition: '30% 30%'}}
          />
        </div>
        <main className="flex flex-col items-center w-full lg:w-2/3 xl:w-1/2 px-14 lg:px-24">
          <div className="mt-10 relative flex flex-col place-items-center text-center lg:text-left max-w-4xl">
            <h1 className={`${titleFont.className} text-5xl font-bold mb-5`}>Events</h1>
            <div className={`flex flex-row mb-8 lg:mb-12`} style={{width: '25em', height: '0.1em'}}>
              <div className='w-1/5 h-full bg-sky-500 mx-1' />
              <div className='w-1/5 h-full bg-teal-500 mx-1' />
              <div className='w-1/5 h-full bg-yellow-500 mx-1' />
              <div className='w-1/5 h-full bg-amber-500 mx-1' />
              <div className='w-1/5 h-full bg-orange-500 mx-1' />
            </div>
            <div className='mb-8 lg:mb-12 rounded-lg overflow-hidden lg:hidden'>
              <Image
                src="/events.jpg"
                alt="Jyoti Patel"
                width={500}
                height={500}
                style={{maxHeight: '60vh', objectFit: 'contain', width: '100%'}}
              />
            </div>
            <span>22 April 2023</span>
            <a
              className='text-center font-bold text-sky-200 hover:text-sky-500 mb-8'
              href='https://www.roundhouse.org.uk/whats-on/2023/in-the-round-festival-2023/merky-books-literature-festival-day-1/'
            >
              #Merky Books Literature Festival
            </a>
            <span>23 April 2023</span>
            <a
              className='text-center font-bold text-teal-200 hover:text-teal-500 mb-8'
              href='https://www.cambridgeliteraryfestival.com/events/ali-smith-debut-writers/'
            >
              Cambridge Literature Festival
            </a>
            <span>26 May 2023</span>
            <a
              className='text-center font-bold text-yellow-200 hover:text-yellow-500 mb-8'
              href='https://nationalcentreforwriting.org.uk/whats-on/intricate-worlds/'
              >
              Caleb Azumah Nelson & Jyoti Patel in conversation
            </a>
            <span>3 June 2023</span>
            <a
              className='text-center font-bold text-yellow-200 hover:text-yellow-500 mb-8'
              href='https://www.hayfestival.com/p-20271-stormzy-five-years-of-merky-books.aspx'
            >
              Hay Festival
            </a>
            {/* <a
              className='text-center font-bold text-orange-200 hover:text-orange-500 mb-8'
              href=''
            >
              something
            </a> */}
            <div className='grow mt-16'></div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
