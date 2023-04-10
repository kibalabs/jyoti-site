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

export default function Press() {
  return (
    <ImageLayout imageUrl='/signing2.jpg' imageDescription='Jyoti Patel Press' title='Press' imageCenterPoint='30% 100%'>
      <a
        className={`${mainFont.className} text-sky-200 hover:text-sky-500 mb-8 text-center`}
        href='https://www.theguardian.com/books/2022/dec/22/the-things-that-we-lost-by-jyoti-patel-review-a-family-history-unlocked'
      >
        <b>Guardian</b><br/>The Things That We Lost by Jyoti Patel review – a family history unlocked
      </a>
      <a
        className={`${mainFont.className} text-teal-200 hover:text-teal-500 mb-8 text-center`}
        href='https://www.theguardian.com/books/2023/jan/08/meet-the-10-best-new-novelists-for-2023'
      >
        <b>Guardian / Observer</b><br/>Meet the 10 best new novelists for 2023
      </a>
      <a
        className={`${mainFont.className} text-yellow-200 hover:text-yellow-500 mb-8 text-center`}
        href='https://www.the-tls.co.uk/articles/the-things-that-we-have-lost-jyoti-patel-book-review-rabeea-saleem/'
      >
        <b>The TLS</b><br/>In truth’s wake. An affecting debut about bereavement and alterity
      </a>
      <a
        className={`${mainFont.className} text-yellow-200 hover:text-yellow-500 mb-8 text-center`}
        href='https://www.dazeddigital.com/life-culture/article/58029/1/jyoti-patel-identity-the-things-that-we-lost-merky-books-winner/'
      >
        <b>Dazed</b><br/>Jyoti Patel: ‘We can hold space for all parts of our identity’
      </a>
      <a
        className={`${mainFont.className} text-orange-200 hover:text-orange-400 mb-8 text-center`}
        href='https://www.bbc.co.uk/programmes/m001gx6v'
      >
        <b>BBC Radio 4 Front Row</b><br/>Debut novelist Jyoti Patel
      </a>
      <a
        className={`${mainFont.className} text-sky-200 hover:text-sky-500 mb-8 text-center`}
        href='https://www.youtube.com/watch?v=7NryizH-y8s&list=PLXjqQf1xYLQ5q7sTlD7K66f5xgXAqR_rZ&index=2'
      >
        <b>Channel 4 News</b><br/>How do you ask someone the question: “Where are you from?” Jyoti Patel on identity and belonging
      </a>
      <a
        className={`${mainFont.className} text-teal-200 hover:text-teal-500 mb-8 text-center`}
        href='https://podcasters.spotify.com/pod/show/artistsinresidence/episodes/Write-a-debut-novel-about-identity--loss--and-belonging-with-Jyoti-Patel-e1ujcab?fbclid=PAAabcnVo7syl0VufhlyCvqKe5DgSFOyBl1UoRmfrmL7xxOrtX9bBIy7ugnaM'
      >
        <b>artists in residence podcast</b><br/>Write a debut novel about identity loss and belonging with Jyoti Patel
      </a>
    </ImageLayout>
  )
}
