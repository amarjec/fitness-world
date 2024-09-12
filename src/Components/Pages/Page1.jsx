import React from 'react'

const Page1 = () => {
  return (
    <>
    {/* part 1 */}
    <div className='w-full h-[75vh] leading-[9vw] relative px-4'>
        <div className='absolute top-[27%]'> 
        <h1 className='font-bold text-[9vw] -tracking-widest'>MEMBERSHIP</h1>   
        <h1 className='font-bold text-[9vw] -tracking-wider ml-56 '>WITH <span className='text-[#FB5607]'>BEST BENEFITS</span></h1>
        </div>
       
    </div>
    {/* part 2 */}
    <div className='w-full h-[150vh] overflow-hidden'>
        {/* part-2 Section A */}
        <div className='w-full h-1/4 flex justify-between'>
        <div className='w-[40vw] h-full flex '>
            <img className='w-1/2 h-full object-cover' src="https://assets-global.website-files.com/64a9b04469265b578b40676b/64aaff6dbe0981d7f02fa916_img1-min-p-500.jpg" alt="" />
             {/* box with circle and text */}
            <div className='w-1/2 h-full bg-[#1B1B1B]'>
            <div className='w-[20.5vw] h-[20.5vw] -ml-1 -mt-4  bg-black rounded-full items-center flex justify-center'>
                <p className='text-center font-semibold text-xl uppercase leading-none tracking-tight'>Unparalleled<br />Personal Training
                </p>
            </div>
            </div>
        </div>
        <div className='w-[40vw] h-full'>
            <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/64a9b04469265b578b40676b/64aaff7944ef515609f496bf_img2-min-p-500.jpg" alt="" />
        </div>
        </div>
         {/* part-2 Section B */}
        {/* box with circle and text */}
        <div className='w-[20vw] h-[20vw] bg-[#1B1B1B] ml-[58.9vw]'>
            <div className='w-[20.5vw] h-[20.5vw] -m-1  bg-black rounded-full items-center flex justify-center'>
                <p className='text-center font-semibold text-xl uppercase leading-none tracking-tight'>Unrivaled Group <br /> Fitness classes</p>
            </div>
        </div>
         {/* part-2 Section c */}
         <div className='w-full h-2/4 flex'> 
         {/* box with circle and text */}
        <div className='w-[20vw] h-[20vw] bg-[#1B1B1B]'>
            <div className='w-[20.5vw] h-[20.5vw] -m-1  bg-black rounded-full items-center flex justify-center'>
                <p className='text-center font-semibold text-xl uppercase leading-none tracking-tight'>Studios and luxury <br /> amenities
                </p>
            </div>
        </div>
        <div className=' w-full h-full'>
            <video className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64aa746a096cb13826284397_HUDSON_169_Desktop%20min-transcode.mp4" autoPlay muted loop></video>
        </div>
         </div>
        
    </div>

    </>
  )
}

export default Page1