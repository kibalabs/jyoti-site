import { Metadata } from 'next';
import { HOST } from '../util';

export interface PageData {
  Title: string;
  Description: string;
  Body: string;
  BodyTitle: string;
  BodyImageUrl: string;
}

export const getPageData = async (): Promise<PageData> => {
  const responseData = await fetch(`${HOST}/api/about-page?populate=deep`).then((res) => res.json());
  return {
    Title: responseData.data.attributes.Title,
    Description: responseData.data.attributes.Description,
    Body: responseData.data.attributes.Body,
    BodyTitle: responseData.data.attributes.BodyTitle,
    BodyImageUrl: responseData.data.attributes.BodyImage.data.attributes.url,
  };
}

export const createMetadata = async (): Promise<Metadata> => {
  const pageData = await getPageData();
  return {
    title: pageData.Title,
    description: pageData.Description,
    openGraph: {
      title: pageData.Title,
      description: pageData.Description,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.Title,
      description: pageData.Description,
      site: '@Jyoti__Patel',
      images: {
        url: 'https://jyoti-site.vercel.app/icon.png',
      },
    },
  }
}
