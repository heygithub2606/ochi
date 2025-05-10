import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
    <div className='w-full border-t-[1px] mt-20 border-[#a1b562] pt-10 flex gap-5' >
    <div className='w-1/2'>
        <h1 className='text-6xl'>Our Approach : </h1>
        <button className='  flex  uppercase gap-10  items-center px-10 py-6 bg-zinc-900 mt-5 rounded-full text-white'>Read More
        <div className='w-3 h-3 bg-zinc-100 rounded-full '></div>
        </button>
    </div>
    <div className='w-1/2 h-[70vh] bg-[#a1b562] rounded-3xl'>

    </div>
    </div>
    </div>
  )
}

export default About
