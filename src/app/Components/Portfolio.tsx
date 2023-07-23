
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Img from './SanityImage';
import { client } from '../../../sanity/lib/client';
import Link from 'next/link';
import moment from 'moment'





export interface IPortfolio {
  _id:string
  title:string
  slug:{
    current:string
  }
  code:string
  demo:string
  publishedAt:string
  mainImage:{
    asset:Object
  },
  

}

// export const revalidate = 3600

async function Portfolio() {
  
  const data:IPortfolio[]= await client.fetch(`*[_type == "projects"] |  order(publishedAt desc) {
    _id,
      title,
      slug{
      current
      },
  publishedAt,
    demo,
    
    code,
    mainImage{
    asset
    },
   }
  `)
  // console.log("data: ",data);
 
  
  return (
    <div
      
      className=" bg-gradient-to-b from-gray-800 to-black  w-screen text-white  pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="flex gap-1 md:gap-3 py-6">
            Check out some of my work right here{' '}
            <MdOutlineKeyboardArrowRight size={30} className="rotate-90" />
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-8
        mx-auto px-2"
        >
          {data?.map(({ _id,code,demo,mainImage,slug,title,publishedAt}) => (
          <div key={_id} className="relative shadow-md shadow-gray-600 rounded-lg group h-[300px] ">
          <Img
            className="z-10 rounded-t-md  h-[80%] object-cover object-center w-full md:group-hover:h-[85%] duration-200"
            imageData={mainImage.asset}
            alt="reactPic"
            height={280}
            width={350}
            priority={false}
            quality={60}
          />
          <div className='z-20 absolute w-full h-[80%] md:group-hover:h-[85%] top-0 rounded-t-md
          bg-gradient-to-b from-transparent   to-black/50 md:group-hover:to-black/30 md:duration-200 ' />
         
          <div className='z-30 flex flex-col items-start justify-end pl-4 pb-2
          absolute top-0 h-[80%]  w-full '>
          <h1 className='text-lg mx-auto pb-2 font-semibold text-sky-600 md:group-hover:text-sky-500'>{title}</h1>
          <p className=' font-semibold text-sm  md:group-hover:text-gray-200'>
            <span className='text-xs text-gray-400'>Published At: </span>
            {moment(publishedAt).format("DD MMM, YYYY")}

            </p>
          </div>
          <div className="flex items-center justify-end h-[20%] md:group-hover:h-[15%] w-full text-center duration-200">
            <Link target='_blank' href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
           Demo
            </Link>
            <div className='w-[1px] h-[75%] bg-gray-300'/>
            <Link target='_blank' href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
          Code
            </Link>
          </div>
        </div>

          ))}


        </div>
      </div>
    </div>
  );
}

export default Portfolio;
