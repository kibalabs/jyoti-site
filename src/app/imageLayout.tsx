import NavBar from './navbar';
import Image from 'next/image';
import Footer from './footer';
import { mainFont, titleFont } from './fonts';

interface ImageLayoutProps {
  imageUrl: string;
  imageDescription: string;
  imageCenterPoint?: string;
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default function ImageLayout(props: ImageLayoutProps) {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-[url('/about.jpg')] bg-cover bg-top bg-no-repeat bg-scroll">
      <NavBar />
      <div className={`flex-grow flex flex-row items-stretch backdrop-blur-3xl backdrop-brightness-50 ${mainFont.className}`}>
        <div className={`hidden lg:flex lg:w-1/3 xl:w-1/2`}>
          <Image
            src={props.imageUrl}
            alt={props.imageDescription}
            width={1000}
            height={1000}
            className={`w-full h-full`}
            style={{objectFit: 'cover', objectPosition: props.imageCenterPoint ?? '50% 50%'}}
          />
        </div>
        <main className="flex flex-col items-center w-full h-full lg:w-2/3 xl:w-1/2 px-14 lg:px-24">
          <div className="mt-10 relative flex flex-col place-items-center text-center lg:text-left" style={{maxWidth: 'calc(min(95%, 56rem))'}}>
            <h1 className={`${titleFont.className} text-5xl font-bold mb-5`}>{props.title}</h1>
            <div className={`flex flex-row mb-8 lg:mb-12`} style={{width: '25em', height: '0.1em', maxWidth: '100%'}}>
              <div className='w-1/5 h-full bg-sky-500 mx-1' />
              <div className='w-1/5 h-full bg-teal-500 mx-1' />
              <div className='w-1/5 h-full bg-yellow-500 mx-1' />
              <div className='w-1/5 h-full bg-amber-500 mx-1' />
              <div className='w-1/5 h-full bg-orange-500 mx-1' />
            </div>
            <div className='mb-8 lg:mb-12 rounded-lg overflow-hidden lg:hidden'>
              <Image
                src={props.imageUrl}
                alt={props.imageDescription}
                width={500}
                height={500}
                style={{maxHeight: '60vh', objectFit: 'contain', width: '100%'}}
              />
            </div>
            {props.children}
            <div className='grow mt-16'></div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
