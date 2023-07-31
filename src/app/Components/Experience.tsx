import React from 'react';

import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

import html from '../../../public/html.png';
import css from '../../../public/css.png';
import javascript from '../../../public/javascript.png';
import reactjs from '../../../public/react.png';
import nextjs from '../../../public/node.png';
import github from '../../../public/github.png';
import mongoDB from '../../../public/mongo.png';

import tailwind from '../../../public/tailwind.png';
import Image from 'next/image';

function Experience() {
    const techs = [
        {
        id:1,
        src:html,
        title:"HTML",
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:"CSS",
        style:'shadow-sky-400'
    },
    {
        id:3,
        src:javascript,
        title:"JavaScript",
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:reactjs,
        title:"React js",
        style:'shadow-blue-600'
    },
    {
        id:5,
        src:nextjs,
        title:"Node js",
        style:'shadow-green-500'
    },
    {
        id:6,
        src:mongoDB,
        title:"Mongo db",
        style:'shadow-green-300'
    },
    {
        id:7,
        src:github,
        title:"Github",
        style:'shadow-white'
    },
    {
        id:8,
        src:tailwind,
        title:"Tailwind",
        style:'shadow-sky-500'
    },
 
    ]
  return (
    <div id='Experience' className=' py-10 bg-gradient-to-b to-gray-800 from-black w-screen h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div id='Experience'  >
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='flex justify-start gap-2 md:gap:4 items-center py-6'>This is technologies I have Work on <MdOutlineKeyboardArrowRight className='rotate-90' size={30}/></p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
         {techs.map(({id,src,title,style})=>(
  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg
   ${style}`}>
  <Image className='w-20 mx-auto' src={src} alt="html" />
  <p className='mt-4'>{title}</p>
</div>
         ))}
        
        </div>
      </div>
    </div>
  );
}

export default Experience;
