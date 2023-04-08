import { Noto_Serif_Khojki } from 'next/font/google'
import NavBar from '../navbar';
import Image from 'next/image';

const titleFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });
const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export default function About() {
  return (
    <div className="w-screen h-screen bg-[url('/about.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between backdrop-blur-3xl backdrop-brightness-50">
        <div className="mt-16 relative flex flex-col place-items-center text-center max-w-4xl">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-8 lg:mb-12`}>Jyoti Patel&apos;s Books</h1>
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
          <p className={`${mainFont.className} mb-12 lg:mb-24 text-xl`}>Jyoti is a graduate of the University of East Anglia’s Creative Writing Prose Fiction MA and was selected as one of <a className='text-yellow-600' href='https://www.theguardian.com/books/2023/jan/08/meet-the-10-best-new-novelists-for-2023'>The Observer’s 10 Best New Novelists for 2023</a>. Her writing has previously been published as part of We Present’s ‘Literally’ series and in the anthology for the 2022 Bristol Short Story Prize, for which she was shortlisted.</p>
        </div>
        <span className={`${mainFont.className} mb-4`}>Follow along with me at:</span>
        <a className={`${mainFont.className} mb-4 text-xl text-yellow-600`} href='https://instagram.com/jyotipatel14'>Instagram</a>
        <a className={`${mainFont.className} mb-8 text-xl text-yellow-600`} href='https://twitter.com/jyotipatel14'>Twitter</a>
        <div className='grow'></div>
        <div className='mt-16 mb-2 mr-2 self-end' style={{opacity: 0.25}}>
          <p>Website by <a href='https://www.kibalabs.com'>Kiba Labs</a></p>
        </div>
      </main>
    </div>
  )
}
