import { Metadata } from "next";
import { HOST } from "../util";

export interface IQuote {
  Text: string;
  Source: string;
}

export interface PageData {
  Title: string;
  Description: string;
  Quotes: IQuote[];
}

export const getPageData = async (): Promise<PageData> => {
  const responseData = await fetch(`${HOST}/api/book-page?populate=deep`).then((res) => res.json());
  return responseData.data.attributes as PageData;
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
      card: "summary_large_image",
      title: pageData.Title,
      description: pageData.Description,
      site: "@Jyoti__Patel",
      images: {
        url: 'https://jyoti-site.vercel.app/icon.png',
      },
    },
  }
}
