import { useEffect } from 'react'

import Image from 'next/image'
import Hero from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Portfolio from './Components/Portfolio'
import SocialLinks from './Components/SocialLinks'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'




export default   function  Home() {


 

 
  return (
    <main className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[1200px] mx-auto">
      <div className='flex flex-col items-center justify-normal mx-auto '>
      <Navbar/>
      <Hero />
      <Portfolio />
      <Experience/>
      <About/>

      <Contact/>
      </div>

      <SocialLinks/>
      
    </main>
  )
}




