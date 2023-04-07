import { Courgette } from 'next/font/google'

const titleFont = Courgette({ subsets: ['latin'], weight: ['400'], fallback: ['cursive'] });
const mainFont = Courgette({ subsets: ['latin'], weight: ['400'], fallback: ['cursive'] });

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/home.jpg')] md:bg-[url('/home-large.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <main className="flex min-h-screen flex-col items-center justify-between px-8 sm:px-24 backdrop-brightness-50 grow">
        <div className="grow"></div>
        <div className="mt-16 lg:mt-0 relative flex flex-col place-items-center text-center">
          <h1 className={`${titleFont.className} text-6xl lg:text-7xl font-bold`}>Jyoti Patel</h1>
          <p className={`${mainFont.className} mt-6 lg:mt-8 mb-4 text-xl`}>Author of the prize-winning novel "The Things That We Lost", published by #Merky Books.</p>
        </div>
        <div className='grow'></div>
        <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-5 text-center justify-center">
          <a
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>About</span>
          </a>
          <a
            href="/books"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Books</span>
          </a>
          <a
            href="/press"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Press</span>
          </a>
          <a
            href="/events"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Events</span>
          </a>
          <a
            href="/contact"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <span className={`${mainFont.className} text-2xl font-semibold`}>Contact</span>
          </a>
        </div>
        <div className='mt-16 mb-2 mr-2 self-end' style={{opacity: 0.25}}>
          <p>Website by <a href='https://www.kibalabs.com'>Kiba Labs</a></p>
        </div>
      </main>
    </div>
  )
}
