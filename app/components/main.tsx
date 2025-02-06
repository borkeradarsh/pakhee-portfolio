import Image from 'next/image'

export default function Main() {
  return (
    <>
      <section className='sec w-full h-full mt-8 md:mt-16 lg:mt-24'>
        <div className='relative flex items-center justify-center'>
          <div className='relative max-w-screen-xxl w-3/4'>
            <Image src="/images/bg.png" alt="img" className='img z-30 w-full h-full' layout="responsive" width={1258} height={100}/>

            <div className="absolute z-40 top-12 flex flex-col w-1/2 -left-6 h-full transform -translate-x-0">
              <Image src="/images/frame.png" alt='oimg1' className='oimg1 w-full h-auto' layout="responsive" width={1000} height={377}/>
            </div>
          

            {/* New Image on the bg below the oimg images */}
            <div className="absolute z-35 top-1/3 w-full h-1/3 bg-[#582A2A] justify-center items-center flex">
            <div className='absolute left-0 sm:left-4 lg:left-10 xl:left-12 text-start justify-center z-40'>
              <h1 className='nam text-[#100E0E] text-3xl md:text-5xl lg:text-6xl xl:text-7xl'>PAKHEE</h1>
            </div>
            <div className='absolute left-3 sm:left-7 lg:left-16 xl:left-16 top-1/2 text-center justify-center z-40'>
              <h1 className='snam text-[#ffffff] text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>PAKHEE</h1>
            </div>
            <div className='absolute items-center justify-start'>
              <h1 className='nam text-[#100E0E] z-36 opacity-50 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Pakhee</h1>
            </div>
              <div className='absolute text-start justify-center h-auto w-1/4 left-3/4'>
                <Image src="/images/img5.png" alt="new-image" className='w-full h-full' layout="responsive" width={348} height={683}/>
              </div>
              <div className="absolute z-35 w-2/3 h-3/4 bg-[#484545] flex items-center justify-center">
                <div className="absolute w-2/5 left-1/2 ">
                    <Image src="/images/img4.png" alt="new-image" className='w-full h-full object-cover' layout="responsive" width={629} height={100}/>
                  </div>
              </div>
              <div className='absolute flex items-center justify-center w-2/3 top-full mt-1'>
                <Image src={"/images/midimg.png"} alt="midimg" className='w-full h-auto' layout="responsive" width={659} height={540}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sec w-full h-full'>
        <div className='relative flex items-center justify-center'>
          <div className='relative max-w-screen-xxl w-3/4'>
            <Image src="/images/bg.png" alt="img" className='img z-30 w-full h-auto' layout="responsive" width={1258} height={100}/>

            <div className="secti absolute z-40 top-1/4 w-4/5 left-1/2 transform -translate-x-1/2 -translate-y-full flex flex-col items-center justify-center">
              <Image src="/images/secimg.png" alt="new-image-top" className='w-full h-auto object-cover' layout="responsive" width={629} height={100}/>
                <div className='absolute z-42 top-0 w-1/2 left-1/4 '>
                  <h1 className='details text-[#100E0E] bg-white text-center align-center pb-20 sm:pb-36 lg:pb-56 text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>DETAILS</h1>
                </div>
            </div>
            <div className='absolute flex flex-col items-center justify-center top-1/4 left-1/2 transform -translate-x-1/2'>
              <h1 className='collab text-center font-extrabold opacity-50 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>COLLABORATIONS</h1>
              <h2 className='jewel text-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>WITH JEWELRY BRANDS</h2>
            </div>
            <div className='circle absolute z-38 top-1/2 w-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
              <Image src="/images/circle.png" alt="new-image-top" className='w-full h-auto object-cover' layout="responsive" width={629} height={100}/>
            </div>
            <div className='scroll-container absolute z-40 top-1/2 w-full h-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
              <div className='animate-scroll'>
                <Image src="/images/scroll.png" alt="circle1" className='scroll-image' layout="responsive" width={445} height={490}/>
              </div>
            </div>
            <div className='state absolute bg-[#582A2A] z-34 flex flex-col w-full h-1/3 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2'>
              <div className='absolute opacity-50 flex flex-col items-center justify-center top-1/4 left-1/2 transform -translate-x-1/2'>
                <h1 className='story text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>MY STORY</h1>
              </div>
              <div className='absolute opacity-50 flex flex-col items-center justify-center top-1/3 left-1/2 transform -translate-x-1/2'>
                <h1 className='mystory text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>MY STORY</h1>
                </div>
              <div className='absolute flex flex-col items-center mt-2 w-2/5 h-full justify-center top-1/2 left-1/2 transform -translate-x-1/2'>
                <Image src="/images/group.png" alt="group" className='w-full h-auto object-cover' layout="responsive" width={629} height={100}/>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}