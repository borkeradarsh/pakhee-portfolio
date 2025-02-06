import React from 'react'
import Image from 'next/image'


export default function Footer() {
  return (
    <div className='relative w-full bg-[#320C0C]'>
        <div className='relative w-full overflow-hidden '>
          <div className='animate-scroll'>
            <h2 className='creative text-center font-extrabold inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl'>MOVEMENT. INSPIRATION. CREATIVITY. GLITTER. ART. FUN. CONFIDENCE. </h2>
          </div>
        </div>
      <div className='relative items-center justify-center flex flex-col w-4/5 h-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4'>
        <Image src="/images/footimg.png" alt="img" className='img z-30 w-full h-auto' layout="responsive" width={1258} height={100}/>
      </div>
      <footer className='relative w-full h-auto bg-[#320C0C] bottom-2 transform translate-y-full'>
        <div className='relative flex items-center justify-center w-3/4 left-1/2 transform -translate-x-1/2'>
        <Image src="/images/foot.png" alt="img" className='img z-30 w-full h-auto' layout="responsive" width={1258} height={100}/>
        <div className='contact absolute top-0 w-full h-full flex items-center justify-center z-50 left-1/2 transform -translate-x-1/2'>
              <a href='mailto:adarshborker07@gmail.com' className='text-white text-xs sm:text-xl md:text-2xl lg:text-3xl underline mx-2'>GMAIL
              </a>
              <h1 className='text-white text-xs sm:text-xl md:text-2xl lg:text-3xl mx-2'> | </h1>
              <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className='text-white text-xs sm:text-xl md:text-2xl lg:text-3xl underline mx-2'> INSTAGRAM
              </a>
              <h1 className='text-white text-xs sm:text-xl md:text-2xl lg:text-3xl mx-2'> | </h1>
              <a href="https://www.pinterest.com/your-pinterest" target="_blank" rel="noopener noreferrer" className='text-white text-xs sm:text-xl md:text-2xl lg:text-3xl underline mx-2'> PINTEREST</a>
            </div>
        </div>
      </footer>
    </div>
  )
}
