'use client';

import { useEffect, useState, useRef, CSSProperties } from 'react';
import Image from 'next/image';
import '../components/animations.css';

export default function Main() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef(null);
  const requestRef = useRef<number | null>(null);
  const img4Ref = useRef<HTMLDivElement>(null);
  const midimgRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentMidimg = midimgRef.current;
    if (currentMidimg) {
      observer.observe(currentMidimg);
    }

    return () => {
      if (currentMidimg) {
        observer.unobserve(currentMidimg);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isVisible) {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        requestRef.current = requestAnimationFrame(() => {
          setScrollY(window.scrollY);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentFrame = frameRef.current;
    if (currentFrame) {
      observer.observe(currentFrame);
    }

    return () => {
      if (currentFrame) {
        observer.unobserve(currentFrame);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentImg4 = img4Ref.current;
    if (currentImg4) {
      observer.observe(currentImg4);
    }

    return () => {
      if (currentImg4) {
        observer.unobserve(currentImg4);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start: number | null = null;
      const duration = 1000; // Animation duration in milliseconds

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const top = Math.min(progress / duration, 1) * 100 - 100; // Calculate top value

        if (midimgRef.current) {
          midimgRef.current.style.top = `${top}%`;
        }

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentGroup = groupRef.current;
    if (currentGroup) {
      observer.observe(currentGroup);
    }

    return () => {
      if (currentGroup) {
        observer.unobserve(currentGroup);
      }
    };
  }, []);

  const frameStyle = {
    top: isVisible ? `${Math.min(scrollY / 6, window.innerHeight / 6)}px` : '0px',
    transition: 'top 1s ease-out', // Add transition for smooth scrolling
  };

  const center: CSSProperties = {
    position: 'absolute',
    top: '81%',
    transition: 'top 2s ease-out', // Smooth transition
    zIndex: 60,
  };

  const detailstyle: CSSProperties = {
    position: 'absolute',
    top: '-90%', // Initial position
    transition: 'top 2s ease-out', // Smooth transition
    zIndex: 60,
  };

  const groupStyle: CSSProperties = {
    top: isVisible ? `${Math.min(scrollY / 1, window.innerHeight / 24)}px` : '0px',
    transition: 'top 1s ease-out', // Add transition for smooth scrolling
    animationDelay: '1s',
  };

  // Add circleRef to your component's refs
  const circleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (circleRef.current) {
          circleRef.current.style.transform = entry.isIntersecting
            ? 'translate(-50%, 0%) scale(1.3)'
            : 'translate(-50%, 0%) scale(1)';
          circleRef.current.style.transition = 'transform 1s ease-out';
        }
      },
      { threshold: 0.1 }
    );

    const currentCircle = circleRef.current;
    if (currentCircle) {
      observer.observe(currentCircle);
    }

    return () => {
      if (currentCircle) {
        observer.unobserve(currentCircle);
      }
    };
  }, []);
  return (
    <>
      <section className='sec w-full h-full mt-8 md:mt-16 lg:mt-24'>
        <div className='relative flex items-center justify-center'>
          <div className='relative max-w-screen-xxl w-3/4'>
            <Image src="/images/bg.png" alt="img" className='img z-30 w-full h-full' layout="responsive" width={1258} height={100} />

            <div ref={frameRef} className="absolute z-40 flex flex-col w-1/4 md:w-1/3 -left-2 xl:-left-6 sm:-left-2 md:-left-3 h-full transform -translate-x-0" style={frameStyle}>
              <Image src="/images/frame.png" alt='oimg1' className='oimg1 w-full h-auto' layout="responsive" width={1000} height={377} />
            </div>

            {/* New Image on the bg below the oimg images */}
            <div className="absolute flex flex-col items-center justify-center w-full top-1/4 xl:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/5">
              <Image src="/images/secondsec.png" alt='secondsec' className='w-full h-auto' layout="responsive" width={659} height={540} />
              <div ref={img4Ref} className={`absolute z-40 top-15 w-1/4 left-1/2 transform translate-x-0 -translate-y-0 ${isVisible ? 'slide-in-left' : ''}`}>
                <Image src="/images/img4.png" alt="img4" className='w-full h-auto' layout="responsive" width={659} height={540} />
              </div>
            </div>
            <div className='absolute w-2/3 left-1/2 z-10 top-2/3 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/4'>
              <Image src="/images/Ellipse.png" alt="img4" className='w-full h-auto' layout="responsive" width={659} height={540} />
            </div>

            <div ref={midimgRef} className='absolute w-2/5 left-1/2 z-60 top-2/3 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-full' style={center}>
              <Image src="/images/midimg.png" alt="mid" className='w-full h-auto' layout="responsive" width={659} height={540} />
            </div>

            <div className='absolute w-full left-0 z-10 top-3/4 flex flex-col items-center justify-center'>
              <Image src="/images/hat.png" alt="img4" className='w-full h-auto' layout="responsive" width={659} height={540} />
              <div className='absolute w-4/5 left-1/2 z-30 top-3/4 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/4'>
              <Image src="/images/secimg.png" alt="secimg" className='w-full h-auto' layout="responsive" width={659} height={540} />
              </div>
              <div ref={midimgRef} className='absolute w-2/5 left-1/2 z-60 top-2/3 flex flex-col items-center justify-center transform -translate-x-1/2 translate-y-1/4' style={detailstyle}>
              <Image src="/images/details.png" alt="details" className='w-full h-auto' layout="responsive" width={659} height={540} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sec w-full h-full'>
        <div className='relative flex items-center justify-center'>
          <div className='relative max-w-screen-xxl w-3/4'>
            <Image src="/images/bg.png" alt="img" className='img z-30 w-full h-auto' layout="responsive" width={1258} height={100} />

            <div className='absolute z-40 flex flex-col items-center justify-center top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-full'>
              <h1 className='collab text-center font-extrabold opacity-50 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>COLLABORATIONS</h1>
              <h2 className='jewel text-center font-extrabold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>WITH JEWELRY BRANDS</h2>
            </div>
            <div ref={circleRef} className='absolute z-20 top-1/4 w-3/4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center'>
              <Image src="/images/circle.png" alt="new-image-top" className='w-full h-auto object-cover' layout="responsive" width={629} height={100} />
            </div>

            <div className='absolute overflow-hidden z-40 top-1/3 w-full left-1/2 transform -translate-x-1/2 translate-y-1/3 flex flex-row items-center justify-center'>
              <div className='carousel'>
                <div className='carousel-track'>
                  <Image src="/images/scroll.png" alt="scroll1" className='carousel-image' width={500} height={100} />
                  <Image src="/images/scroll.png" alt="scroll2" className='carousel-image' width={500} height={100} />
                </div>
              </div>
            </div>
            <div className='state absolute bg-[#11212E] z-30 flex flex-col w-full h-1/3 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
              <div className='absolute opacity-50 flex flex-col items-center justify-center top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='story text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>MY STORY</h1>
              </div>
              <div className='absolute opacity-50 flex flex-col items-center justify-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3'>
                <h1 className='mystory text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl'>MY STORY</h1>
              </div>
                <div ref={groupRef} className='absolute flex flex-col items-center w-2/5 h-full justify-center top-3/4 left-1/2 transform -translate-x-1/2 translate-y-2/3' style={groupStyle}>
                <Image src="/images/group.png" alt="group" className='w-full h-auto object-cover' layout="responsive" width={629} height={100} />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}