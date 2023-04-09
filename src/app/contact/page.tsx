import { Noto_Serif_Khojki } from 'next/font/google'
import NavBar from '../navbar';
import Image from 'next/image';
import Footer from '../footer';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export const metadata = {
  title: 'Jyoti Patel | Contact',
  description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  openGraph: {
    title: 'Jyoti Patel | Contact',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Jyoti Patel | Contact',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
    site: "@Jyoti__Patel",
    images: {
      url: 'https://jyoti-site.vercel.app/icon.png',
    },
  },
};

export default function Contact() {
  return (
    <div className="w-screen h-screen bg-[url('/contact.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between backdrop-blur-3xl backdrop-brightness-50">
        <div className="mt-8 mx-16 relative flex flex-col place-items-center text-center max-w-4xl">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-5`}>Contact</h1>
          <div className={`flex flex-row mb-8 lg:mb-12`} style={{width: '25em', height: '0.1em'}}>
            <div className='w-1/5 h-full bg-sky-500 mx-1' />
            <div className='w-1/5 h-full bg-teal-500 mx-1' />
            <div className='w-1/5 h-full bg-yellow-500 mx-1' />
            <div className='w-1/5 h-full bg-amber-500 mx-1' />
            <div className='w-1/5 h-full bg-orange-500 mx-1' />
          </div>
          <div className='mb-8 lg:mb-12 rounded-lg overflow-hidden'>
            <Image
              src="/contact.jpg"
              alt="Jyoti Patel"
              width={500}
              height={500}
              style={{maxHeight: '60vh', objectFit: 'contain', width: '100%'}}
            />
          </div>
          <p>Jyoti is represented by literary agent <a href='https://greeneheaton.co.uk/agents/holly-faulks/' className='text-sky-200 hover:text-sky-500'>Holly Faulks at Greene & Heaton</a> and film and TV agent <a href='https://theagency.co.uk/the-agents/emily-hickman/' className='text-teal-200 hover:text-teal-500'>Emily Hickman at The Agency.</a></p>
        </div>
        <div className='grow mt-16'></div>
      </main>
      <Footer />
    </div>
  )
}
