import React from 'react';
import BooksPageContent from './content';
import { Metadata } from 'next';
import NavBar from '../navbar';
import Footer from '../footer';
import 'animate.css';

export async function generateMetadata(): Promise<Metadata> {
  // const responseData = await fetch(`http://127.0.0.1:1337/api/book-page?populate=deep`).then((res) => res.json())
  const responseData = await fetch(`https://jyoti-cms.kiba.dev/api/book-page?populate=deep`).then((res) => res.json())
  return {
    title: responseData.data.attributes.Title,
    description: responseData.data.attributes.Description,
  }
}

export default function BooksPage() {
  return (
    <div className="w-screen min-h-screen bg-[url('/books.jpg')] bg-cover bg-top bg-no-repeat bg-scroll overflow-y-scroll">
      <NavBar />
      <BooksPageContent />
      <Footer />
    </div>
  )
}
