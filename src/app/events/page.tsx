import { mainFont } from '../fonts';
import ImageLayout from '../imageLayout';

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
    <ImageLayout imageUrl='/events.jpg' imageDescription='Jyoti Patel Events' title='Events' imageCenterPoint='30% 30%'>
      <span>22 April 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-sky-200 hover:text-sky-500 mb-8`}
        href='https://www.roundhouse.org.uk/whats-on/2023/in-the-round-festival-2023/merky-books-literature-festival-day-1/'
      >
        #Merky Books Literature Festival
      </a>
      <span>23 April 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-teal-200 hover:text-teal-500 mb-8`}
        href='https://www.cambridgeliteraryfestival.com/events/ali-smith-debut-writers/'
      >
        Cambridge Literature Festival
      </a>
      <span>26 May 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-yellow-200 hover:text-yellow-500 mb-8`}
        href='https://nationalcentreforwriting.org.uk/whats-on/intricate-worlds/'
        >
        Caleb Azumah Nelson & Jyoti Patel in conversation
      </a>
      <span>3 June 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-yellow-200 hover:text-yellow-500 mb-8`}
        href='https://www.hayfestival.com/p-20271-stormzy-five-years-of-merky-books.aspx'
      >
        Hay Festival
      </a>
      {/* <a
        className={`${mainFont.className} text-center font-bold text-orange-200 hover:text-orange-500 mb-8`}
        href=''
      >
        something
      </a> */}
    </ImageLayout>
  )
}
