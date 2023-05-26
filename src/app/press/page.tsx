import { mainFont } from '../fonts';
import ImageLayout from '../imageLayout';

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

interface PressItem {
  link: string;
  title: string;
  text: string;
}

const pressItems: PressItem[] = [{
  link: 'https://www.theguardian.com/books/2022/dec/22/the-things-that-we-lost-by-jyoti-patel-review-a-family-history-unlocked',
  title: 'Guardian',
  text: 'The Things That We Lost by Jyoti Patel review – a family history unlocked',
}, {
  link: 'https://www.theguardian.com/books/2023/jan/08/meet-the-10-best-new-novelists-for-2023',
  title: 'Guardian / Observer',
  text: 'Meet the 10 best new novelists for 2023',
}, {
  link: 'https://www.the-tls.co.uk/articles/the-things-that-we-have-lost-jyoti-patel-book-review-rabeea-saleem/',
  title: 'The TLS',
  text: 'In truth’s wake. An affecting debut about bereavement and alterity',
}, {
  link: 'https://www.dazeddigital.com/life-culture/article/58029/1/jyoti-patel-identity-the-things-that-we-lost-merky-books-winner/',
  title: 'Dazed',
  text: 'Jyoti Patel: ‘We can hold space for all parts of our identity’',
}, {
  link: 'https://www.bbc.co.uk/programmes/m001gx6v',
  title: 'BBC Radio 4 Front Row',
  text: 'Debut novelist Jyoti Patel',
}, {
  link: 'https://www.youtube.com/watch?v=7NryizH-y8s&list=PLXjqQf1xYLQ5q7sTlD7K66f5xgXAqR_rZ&index=2',
  title: 'Channel 4 News',
  text: 'How do you ask someone the question: “Where are you from?” Jyoti Patel on identity and belonging',
}, {
  link: 'https://podcasters.spotify.com/pod/show/artistsinresidence/episodes/Write-a-debut-novel-about-identity--loss--and-belonging-with-Jyoti-Patel-e1ujcab?fbclid=PAAabcnVo7syl0VufhlyCvqKe5DgSFOyBl1UoRmfrmL7xxOrtX9bBIy7ugnaM',
  title: 'artists in residence podcast',
  text: 'Write a debut novel about identity loss and belonging with Jyoti Patel',
}];

const getTextColorCss = (index: number): string => {
  const colors = ['sky', 'teal', 'yellow', 'orange'];
  const color = colors[index % colors.length];
  return `text-${color}-200 hover:text-${color}-500`;
}

export default function Press() {
  return (
    <ImageLayout imageUrl='/signing2.jpg' imageDescription='Jyoti Patel Press' title='Press' imageCenterPoint='30% 100%'>
      {pressItems.map((pressItem: PressItem, index: number): React.ReactElement => (
        <a
          key={index}
          className={`${mainFont.className} ${getTextColorCss(index)} mb-8 text-center`}
          href={pressItem.link}
        >
          <b>{pressItem.title}</b>
          <br />
          {pressItem.text}
        </a>
      ))}
    </ImageLayout>
  )
}
