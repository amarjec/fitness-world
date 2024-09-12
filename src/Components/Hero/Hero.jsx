import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-full h-[145vh]'>
      <div className='w-full h-[45vh] flex justify-center text-center relative'>
        <div className='absolute top-[47.5%]'>
          <div className='w-full h-4 bg-black absolute top-[28.5%]' ></div>
        <p className='font-bold text-9xl leading-[7vw] tracking-tighter abolute'>IT'S NOT FITNESS. <br /> <span className='text-[#FB5607]'>IT'S LIFE.</span></p>
        </div>
      </div>
      <div className='w-full h-[100vh]'>
        <video className='w-full h-screen object-cover' src="https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64aa5c2c3ad9b2d89416ca2b_Gym%201%20min-transcode.mp4" autoPlay muted loop></video>

      </div>
    </div>
    
    </>
  )
}

export default Hero