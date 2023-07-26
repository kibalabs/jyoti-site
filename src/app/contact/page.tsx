import React from 'react';
import { Metadata } from 'next';
import { mainFont } from '../fonts';
import ImageLayout from '../imageLayout';
import { createMetadata, getPageData } from './data';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata();
}

export default async function ContactPage(): Promise<React.ReactElement> {
  const pageData = await getPageData();
  return (
    <ImageLayout imageUrl={pageData.BodyImageUrl} imageDescription={pageData.Title} title={pageData.BodyTitle} imageCenterPoint='50% 30%'>
      <article className={`${mainFont.className} prose mb-4 lg:mb-12 text-xl`}>
        <ReactMarkdown>{pageData.Body}</ReactMarkdown>
      </article>
    </ImageLayout>
  )
}
