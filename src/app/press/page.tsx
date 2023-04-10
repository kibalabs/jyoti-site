import { Noto_Serif_Khojki } from 'next/font/google'
import NavBar from '../navbar';
import Image from 'next/image';
import Footer from '../footer';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export const metadata = {
  title: 'Jyoti Patel | Press',
  description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  openGraph: {
    title: 'Jyoti Patel | Press',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Jyoti Patel | Press',
    description: 'Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.',
    site: "@Jyoti__Patel",
    images: {
      url: 'https://jyoti-site.vercel.app/icon.png',
    },
  },
};

export default function Press() {
  return (
    <div className="w-screen min-h-screen bg-[url('/press.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <div className={`min-h-screen h-full flex flex-row items-stretch backdrop-blur-3xl backdrop-brightness-50`}>
        <div className={`hidden lg:flex lg:w-1/3 xl:w-1/2 h-full`}>
          <Image
            src="/signing2.jpg"
            alt="Jyoti Patel"
            width={1000}
            height={1000}
            className={`w-full h-full`}
            style={{objectFit: 'cover', objectPosition: '30% 100%'}}
          />
        </div>
        <main className="flex flex-col items-center w-full lg:w-2/3 xl:w-1/2 px-14 lg:px-24">
          <div className="mt-10 relative flex flex-col place-items-center text-center lg:text-left max-w-4xl">
            <h1 className={`${titleFont.className} text-5xl font-bold mb-5`}>Press</h1>
            <div className={`flex flex-row mb-8 lg:mb-12`} style={{width: '25em', height: '0.1em'}}>
              <div className='w-1/5 h-full bg-sky-500 mx-1' />
              <div className='w-1/5 h-full bg-teal-500 mx-1' />
              <div className='w-1/5 h-full bg-yellow-500 mx-1' />
              <div className='w-1/5 h-full bg-amber-500 mx-1' />
              <div className='w-1/5 h-full bg-orange-500 mx-1' />
            </div>
            <div className='mb-8 lg:mb-12 rounded-lg overflow-hidden lg:hidden'>
              <Image
                src="/signing2.jpg"
                alt="Jyoti Patel"
                width={500}
                height={500}
                style={{maxHeight: '60vh', objectFit: 'contain', width: '100%'}}
              />
            </div>
            <a
              className='text-sky-200 hover:text-sky-500 mb-8 text-center'
              href='https://www.theguardian.com/books/2022/dec/22/the-things-that-we-lost-by-jyoti-patel-review-a-family-history-unlocked'
            >
              <b>Guardian</b><br/>The Things That We Lost by Jyoti Patel review – a family history unlocked
            </a>
            <a
              className='text-teal-200 hover:text-teal-500 mb-8 text-center'
              href='https://www.theguardian.com/books/2023/jan/08/meet-the-10-best-new-novelists-for-2023'
            >
              <b>Guardian / Observer</b><br/>Meet the 10 best new novelists for 2023
            </a>
            <a
              className='text-yellow-200 hover:text-yellow-500 mb-8 text-center'
              href='https://www.the-tls.co.uk/articles/the-things-that-we-have-lost-jyoti-patel-book-review-rabeea-saleem/'
            >
              <b>The TLS</b><br/>In truth’s wake. An affecting debut about bereavement and alterity
            </a>
            <a
              className='text-yellow-200 hover:text-yellow-500 mb-8 text-center'
              href='https://www.dazeddigital.com/life-culture/article/58029/1/jyoti-patel-identity-the-things-that-we-lost-merky-books-winner/'
            >
              <b>Dazed</b><br/>Jyoti Patel: ‘We can hold space for all parts of our identity’
            </a>
            <a
              className='text-orange-200 hover:text-orange-400 mb-8 text-center'
              href='https://www.bbc.co.uk/programmes/m001gx6v'
            >
              <b>BBC Radio 4 Front Row</b><br/>Debut novelist Jyoti Patel
            </a>
            <a
              className='text-sky-200 hover:text-sky-500 mb-8 text-center'
              href='https://www.youtube.com/watch?v=7NryizH-y8s&list=PLXjqQf1xYLQ5q7sTlD7K66f5xgXAqR_rZ&index=2'
            >
              <b>Channel 4 News</b><br/>How do you ask someone the question: “Where are you from?” Jyoti Patel on identity and belonging
            </a>
            <a
              className='text-teal-200 hover:text-teal-500 mb-8 text-center'
              href='https://podcasters.spotify.com/pod/show/artistsinresidence/episodes/Write-a-debut-novel-about-identity--loss--and-belonging-with-Jyoti-Patel-e1ujcab?fbclid=PAAabcnVo7syl0VufhlyCvqKe5DgSFOyBl1UoRmfrmL7xxOrtX9bBIy7ugnaM'
            >
              <b>artists in residence podcast</b><br/>Write a debut novel about identity loss and belonging with Jyoti Patel
            </a>
            <div className='grow mt-16'></div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
