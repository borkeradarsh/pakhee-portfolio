import './hero.css' // Make sure to import the CSS file

export default function Hero() {
  return (
    <div className='relative w-full bg-[#582A2A]'>
      <div className='relative h-[20rem] lg:h-[45rem] w-full md:h-[35rem] sm:h-[35rem]'>
        <video autoPlay muted loop
          className='video w-full h-full object-cover fixed top-0 left-0 z-0'
        >
          <source src='video.mp4' type='video/mp4'/>
        </video>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10'>
          <h1 className='name text-center font-extrabold text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl'>PAKHEE</h1>
          <h2 className='work text-center font-extrabold pt-12 px-4 text:4xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>MODEL | CONTENT CREATOR | 3D ARTIST | WEB DESIGNER</h2>
        </div>
      </div>
      <div className='relative w-full overflow-hidden xl:-mt-6 lg:-mt-24 md:mt-14 sm:mt-14'>
        <div className='animate-scroll'>
          <h2 className='creative text-center font-extrabold inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl'>MOVEMENT. INSPIRATION. CREATIVITY. GLITTER. ART. FUN. CONFIDENCE. </h2>
        </div>
      </div>
    </div>
  )
}