import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function LandingPage() {
  return (
    <div className='w-full h-ful bg-zinc-900 pt-1'>
      <div className='text-structure mt-40 pl-20 '>
        {["We Create", "Eye Opening", "Presentations"].map((item,index)=>{
      return (
        <div className='masker'>  
          <div className='w-fit flex '>  
            {index === 1 && (<div className =' mt-[1vw] w-[9vw] h-[5vw] -top-[1.2vw] bg-red-500 mt-2 rounded-md'></div>)}
            <h1 className='uppercase text-7xl leading-[7vw] font-["Founders_Grotesk_X-Condensed"] font-bold items-center'>
              {item}
            </h1>
          </div>
        </div>
      );
        })}
        
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-10 py-5'>
        {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>
        <p className='text-md font-light tracking-tight leading-none'>{item} </p>)}

      <div className='start flex items-center gap-5'>
        <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm capitalize'>start the project</div>
            <div className='w-10 h-10  flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
                </span>
            </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage
