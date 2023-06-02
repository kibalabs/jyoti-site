import React from 'react';
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

interface EventItem {
  link: string;
  title: string;
  date: string;
}

const eventItems: EventItem[] = [{
//   link: 'https://nationalcentreforwriting.org.uk/whats-on/intricate-worlds/',
//   title: 'Caleb Azumah Nelson & Jyoti Patel in conversation',
//   date: '26 May 2023',
// }, {
  link: 'https://www.hayfestival.com/p-20271-stormzy-five-years-of-merky-books.aspx',
  title: 'Hay Festival',
  date: '4 June 2023',
}, {
  link: 'https://www.bl.uk/events/jlf-jaipur-literature-festival-at-the-british-library',
  title: 'Jaipur Literary Festival at the British Library',
  date: '11 June 2023',
}, {
  link: 'https://www.glastonburyfestivals.co.uk/silver-hayes-announces-its-glastonbury-2023-line-up/',
  title: 'Glastonbury Festival - Silver Hayes',
  date: '24 June 2023',
}, {
  link: 'https://www.womad.co.uk',
  title: 'WOMAD Festival',
  date: '28 July 2023',
}, {
  link: 'https://primadonnafestival.com/year-2023/',
  title: 'Primadonna Festival',
  date: '30 July 2023',
}];

const getTextColorCss = (index: number): string => {
  const colors = ['sky', 'teal', 'yellow', 'orange'];
  const color = colors[index % colors.length];
  return `text-${color}-200 hover:text-${color}-500`;
}

export default function Press() {
  return (
    <ImageLayout imageUrl='/events.jpg' imageDescription='Jyoti Patel Events' title='Events' imageCenterPoint='30% 30%'>
      {eventItems.map((eventItem: EventItem, index: number): React.ReactElement => (
        <React.Fragment key={index}>
          <span>{eventItem.date}</span>
          <a
            className={`${mainFont.className} ${getTextColorCss(index)} mb-8 text-center font-bold`}
            href={eventItem.link}
          >
            {eventItem.title}
          </a>
        </React.Fragment>
      ))}
    </ImageLayout>
  )
}
