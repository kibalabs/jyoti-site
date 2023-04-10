import { mainFont } from '../fonts';
import ImageLayout from '../imageLayout';

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
    <ImageLayout imageUrl='/contact.jpg' imageDescription='Jyoti Patel Contact' title='Contact' imageCenterPoint='50% 30%'>
      <p className={`${mainFont.className}`}>Jyoti is represented by literary agent <a href='https://greeneheaton.co.uk/agents/holly-faulks/' className='text-sky-300 hover:text-sky-500'>Holly Faulks at Greene & Heaton</a> and film and TV agent <a href='https://theagency.co.uk/the-agents/emily-hickman/' className='text-sky-300 hover:text-sky-500'>Emily Hickman at The Agency.</a></p>
    </ImageLayout>
  )
}
