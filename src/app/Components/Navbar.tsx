'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';

function Navbar() {
  const [nav,setNav] = useState(false);
  const links = [
 {
  id:1,
  title:"Home",
  link:"#Home"
 },
 {
  id:2,
  title:"Portfolio",
  link:"#Portfolio"
 },
 {
  id:3,
  title:"Experience",
  link:"#Experience"
 },
 {
  id:4,
  title:"About",
  link:"#About"
 },
 {
  id:5,
  title:"Contact",
  link:"#Contact"
 },
 
  ];

  const router = useRouter()
  return (

    <div
      className="flex justify-between items-center  h-20  w-screen
    text-white fixed bg-black px-4 z-50"
    >
      <div onClick={()=>router.push('/')}>
        <h1 className="text-5xl cursor-pointer  font-signature ml-2 mt-3">Portfolio</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, title,link }) => (
          <li
            key={id}
            className="px-5 cursor-pointer capitalize font-medium
          text-gray-500 hover:scale-110 duration-200 hover:text-white"
          >
            <Link href={link} >{title}</Link>
          </li>
        ))}
      </ul> 
      <div onClick={()=>setNav(!nav)} className='md:hidden'>
        {nav ?<FaTimes size={30}/> :<FaBars size={30}/>}
      </div>{nav&&
      <motion.ul initial={{x:"-100%"}}
      animate={{x:0}}
      transition={{type:"tween", duration:0.2,ease:"easeOut"}}
      className={` flex flex-col items-start justify-start z-10
       absolute top-20 right-0 left-0 h-screen
       bg-gradient-to-l to-black from-gray-800 text-gray-500`}>
        {links.map(({id,title,link})=>(
          <li key={id} className={`${id == 1 ? "pt-24 pl-10" : ""} pl-10  capitalize font-semibold py-6 text-4xl`}>
    
            <Link onClick={()=> setNav(!nav)} href={link}>{title}</Link>
          </li>
        ))
        }
        

      </motion.ul>
      }
    </div>
  );
}

export default Navbar;
