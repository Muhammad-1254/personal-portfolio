import React from 'react'
import {AiOutlineCiCircle, AiOutlineClockCircle, AiOutlineCloudDownload, AiOutlineLoading, AiOutlineLoading3Quarters, AiOutlineReload, AiOutlineUpCircle} from 'react-icons/ai'
const Loading = ({size}:any) => {
  return (
    <div className='w-screen h-screen z-50 
    flex items-center justify-center '>
        <div className='text-sky-400/95
        relative animate-[spin_1.8s_linear_infinite]'>

        <AiOutlineLoading3Quarters size={size}/>

        <div className='text-sky-400
        absolute w-full h-full top-0 right-0 left-0
        flex items-center justify-center animate-[spin_1.5s_linear_infinite]'>
        <AiOutlineLoading3Quarters size={size/1.3}/>


            <div className='text-sky-500
            animate-[spin_1s_linear_infinite]
            absolute flex items-center justify-center'>
                <AiOutlineLoading3Quarters size={size/1.85}/>
                
            </div>
        </div>
        </div>
        <div className='text-sky-700/90
        absolute animate-none'>
                    <AiOutlineCloudDownload  size={size/5}/>
                </div>
    </div>
  )
}

export default Loading