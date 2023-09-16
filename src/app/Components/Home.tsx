
import React, { Suspense} from 'react';
import me from '../../../public/css.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../../sanity/lib/client';
import Img from './SanityImage';
import Loading from './Loading';

interface IAuthor {
  _id:string
  image:{
 
    asset:Object
    alt:string
  }
  name:string
  firstLineText:string
  description:string
}

export const revalidate = 3600
 async function  Hero() {
 

   const authorData:IAuthor = await client.fetch(`*[_type == "author"] {
    firstLineText,
      description,
      image{
      asset,
        alt
      },
    _id
    
  }[0]
  `)
  // console.log("auther data : ",authorData);

  

  
  return (
    <div className='overflow-x-hidden'>
    

    <div id='Home'
      
      className=" h-screen w-screen bg-gradient-to-b from-black
    via-black to-gray-800  pb-20"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold text-white
          "
          >
          {authorData.firstLineText}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {authorData.description}
          </p>
          <div>
            <Link href='#Portfolio'  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer 
            
            '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>

                <MdOutlineKeyboardArrowRight size={25}  className='ml-1'/>
              </span>
              
            </Link>
          </div>
          </div>
        <div className='-mt-32 md:-mt-0'>
          <Img
            imageData={authorData.image.asset}
            alt={authorData.image.alt}
            className="rounded-2xl mx-auto md:w-[500px] md:h-[350px] w-[360px] h-[280px] object-top object-cover"
            width={350} height={280} priority={true} quality={100}
            />
        </div>
      </div>
    </div>
    </div>

  );
}

export default Hero;
