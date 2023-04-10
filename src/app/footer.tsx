import React from 'react';
import { Noto_Serif_Khojki } from 'next/font/google'

const mainFont = Noto_Serif_Khojki({ subsets: ['latin'], fallback: ['system-ui'] });

export default function Footer() {
  return (
    <div className={`py-4 px-2 flex flex-col backdrop-blur-3xl`} style={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
      <p className={`${mainFont.className} self-center`} style={{opacity: 0.2}}>Website by <a href='https://www.kibalabs.com'>Kiba Labs</a></p>
    </div>
  );
}
