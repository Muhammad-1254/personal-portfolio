import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='w-screen h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'> 
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>submit the form below to get touch ith me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form method='POST' className='flex flex-col w-full md:w-1/2'
           action='https://getform.io/f/2a5de749-3767-4bb2-ab56-2f7464adc7b4  '>
            <input className='my-4 p-2 bg-transparent border-2 focus:outline-none text-white ' name='name' type='text' placeholder='enter your name' />
            <input className='my-4 p-2 bg-transparent border-2 focus:outline-none text-white ' name='email' type='text' placeholder='enter your e-mail' />
    <textarea name='message'   placeholder='enter your message'
    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
          <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto lex items-center
          rounded-md hover:scale-110 duration-300'>Let{"'"}s talk</button>
          </form>
        </div>
      </div>
      </div>
  )
}

export default Contact