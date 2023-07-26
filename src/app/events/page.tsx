import React from 'react';
import { mainFont } from '../fonts';
import ImageLayout from '../imageLayout';
import { getLinkTextColorCss } from '../util';
import { IEvent, createMetadata, getPageData } from './data';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata();
}

export default async function EventsPage(): Promise<React.ReactElement> {
  const pageData = await getPageData();
  return (
    <ImageLayout imageUrl={pageData.BodyImageUrl} imageDescription={pageData.Title} title={pageData.BodyTitle} imageCenterPoint='30% 30%'>
      {pageData.Events.map((eventItem: IEvent, index: number): React.ReactElement => (
        <React.Fragment key={index}>
          <span>{eventItem.Date}</span>
          <a
            className={`${mainFont.className} ${getLinkTextColorCss(index)} mb-8 text-center font-bold`}
            href={eventItem.Link}
          >
            {eventItem.Title}
          </a>
        </React.Fragment>
      ))}
    </ImageLayout>
  )
}
