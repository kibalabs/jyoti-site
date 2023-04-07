import { Courgette, Inter } from 'next/font/google'

const titleFont = Courgette({ subsets: ['latin'], weight: ['400'], fallback: ['cursive'] });
const mainFont = Inter({ subsets: ['latin'], fallback: ['system-ui'] });

export default function Books() {
  return (
    <div className="w-screen h-screen bg-[url('/books.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <main className="flex min-h-screen flex-col items-center justify-between backdrop-blur-3xl backdrop-brightness-50 grow">
        <a className={`${mainFont.className} mt-8 mb-4`} href='/'>Home</a>
        <div className="mt-16 relative flex flex-col place-items-center text-center max-w-4xl">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-8 lg:mb-12`}>Jyoti Patel&apos;s Books</h1>
          <h2 className={`${titleFont.className} text-3xl font-bold mb-8 lg:mb-12`}>The Things That We Lost</h2>
        </div>
        <img
          src="/books-banner.jpg"
          alt="Jyoti Patel"
          style={{objectFit: 'contain', width: '100%'}}
        />
        <div className="grow"></div>
        <div className="mt-16 relative flex flex-col place-items-center text-center max-w-4xl">
          <p className={`${mainFont.className} mt-4 text-xl font-bold`}>An Observer Best Debut Novel of 2023</p>
          <p className={`${mainFont.className} mt-4 text-xl font-bold`}>Winner of the #Merky Books New Writers’ Prize</p>
          <a className={`${mainFont.className} mt-8 text-xl text-yellow-600`} href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529186338'>Hardback</a>
          <a className={`${mainFont.className} mt-8 text-xl text-yellow-600`} href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529119442'>Ebook</a>
          <a className={`${mainFont.className} mt-8 text-xl text-yellow-600`} href='https://www.penguin.co.uk/books/448416/the-things-that-we-lost-by-patel-jyoti/9781529906912'>Audiobook</a>
          <p className={`${mainFont.className} mt-4 text-xl`}></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘This is a big book, full of assured and affecting writing.‘ <em>The Guardian</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘One of the best books I&apos;ve read this year.‘ <em>gal-dem</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘A delicate and empathic debut.’ <em>The Observer</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘Feted as one of the debut writers of the year.’ <em>Stylist</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘A thoughtful meditation on family, grief and the lengths we‘ll go to protect the ones we love.‘ <em>Good Housekeeping</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘A deftly assured debut novel about a fractured family and how words left unspoken can be more devastating than the truth.‘ <em>Red Magazine</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘A deeply reflective, searching depiction of grief.’ <em>The Times Literary Supplement</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘Highly recommended.’ <em>Huffington Post</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘An assured debut from a vital new voice. About family, grief and belonging, Patel weaves an intricate story that will stay with you.‘<em> Nikesh Shukla.</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘Immeasurably moving, a poignant and touching story about love and family bonds, and an especially tender portrait of a mother and son.’ <em>Huma Qureshi</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘Brilliant.‘ <em>Candice Brathwaite</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘Incredibly moving, this is an immersive novel focusing on grief but also love and relationships. I fell in love with Avani and Nik, characters so real I could hardly believe they&apos;re fictional. Jyoti Patel is a hugely exciting new writer.‘  <em>Louise Hare</em></p>
          <p className={`${mainFont.className} mt-4 text-xl`}>‘This is a captivating, deeply moving book written with eloquence and beauty. It left me wanting to read more of Jyoti&apos;s words. An exciting new talent.’ <em>Mohsin Zaidi</em></p>
          <div className={`${mainFont.className} mb-8 lg:mb-20`}></div>
        </div>
        <div className='grow'></div>
        <div className='mt-16 mb-2 mr-2 self-end' style={{opacity: 0.25}}>
          <p>Website by <a href='https://www.kibalabs.com'>Kiba Labs</a></p>
        </div>
      </main>
    </div>
  )
}
