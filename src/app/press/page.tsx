import { Metadata } from 'next';
import { mainFont } from '../fonts';
import ImageLayout from '../imageLayout';
import { getLinkTextColorCss } from '../util';
import { IPressItem, createMetadata, getPageData } from './data';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata();
}

export default async function PressPage(): Promise<React.ReactElement> {
  const pageData = await getPageData();
  return (
    <ImageLayout imageUrl={pageData.BodyImageUrl} imageDescription={pageData.Title} title={pageData.BodyTitle} imageCenterPoint='30% 100%'>
      {pageData.PressItems.map((pressItem: IPressItem, index: number): React.ReactElement => (
        <a
          key={index}
          className={`${mainFont.className} ${getLinkTextColorCss(index)} mb-8 text-center`}
          href={pressItem.Link}
        >
          <b>{pressItem.Source}</b>
          <br />
          {pressItem.Text}
        </a>
      ))}
    </ImageLayout>
  )
}
