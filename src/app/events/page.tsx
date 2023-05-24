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
      <span>26 May 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-sky-200 hover:text-sky-500 mb-8`}
        href='https://nationalcentreforwriting.org.uk/whats-on/intricate-worlds/'
        >
        Caleb Azumah Nelson & Jyoti Patel in conversation
      </a>
      <span>3 June 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-teal-200 hover:text-teal-500 mb-8`}
        href='https://www.hayfestival.com/p-20271-stormzy-five-years-of-merky-books.aspx'
      >
        Hay Festival
      </a>
      <span>11 June 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-yellow-200 hover:text-yellow-500 mb-8`}
        href='https://www.bl.uk/events/jlf-jaipur-literature-festival-at-the-british-library'
      >
        Jaipur Literary Festival at the British Library
      </a>
      <span>24 June 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-orange-200 hover:text-orange-500 mb-8`}
        href='https://www.glastonburyfestivals.co.uk/silver-hayes-announces-its-glastonbury-2023-line-up/'
      >
        Glastonbury Festival - Silver Hayes
      </a>
      <span>28  2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-sky-200 hover:text-sky-500 mb-8`}
        href='https://www.womad.co.uk'
      >
        WOMAD Festival
      </a>
      <span>30 July 2023</span>
      <a
        className={`${mainFont.className} text-center font-bold text-teal-200 hover:text-teal-500 mb-8`}
        href='https://primadonnafestival.com/year-2023/'
      >
        Primadonna Festival
      </a>
    </ImageLayout>
  )
}
