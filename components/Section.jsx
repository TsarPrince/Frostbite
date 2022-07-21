import { useState, useRef, useEffect } from 'react';
import Card from './Card'
import { PaySection } from './PaySection';
function loadScript(src){
  return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src;
      script.onload = () => {
          resolve(true)
      }
      script.onerror = ()=>{
          resolve(false)
      }
      document.body.appendChild(script)
  })
}
export const Section = ({ name, members }) => {
  const getColor = (name) => {
    if (name == 'axios') return '#5271ff';
    if (name == 'gsoc') return '#f8edeb';
    if (name == 'estrella') return '#5271ff';
    if (name == 'zephyr') return '#f8edeb';
    if (name == 'icpc') return '#5271ff';
  }
  
  const col = (getColor(name)==='#5271ff')?'#f8edeb':'#5271ff'
  console.log(getColor(name), col)
  // COROUSEL ----------------------------------------------------------------------------------------------------------------------------
  // const maxScrollWidth = useRef(0);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const carousel = useRef(null);

  // const movePrev = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex((prevState) => prevState - 1);
  //   }
  // };

  // const moveNext = () => {
  //   if (
  //     carousel.current !== null &&
  //     carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
  //   ) {
  //     setCurrentIndex((prevState) => prevState + 1);
  //   }
  // };

  // const isDisabled = (direction) => {
  //   if (direction === 'prev') {
  //     return currentIndex <= 0;
  //   }

  //   if (direction === 'next' && carousel.current !== null) {
  //     return (
  //       carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
  //     );
  //   }

  //   return false;
  // };

  // useEffect(() => {
  //   if (carousel !== null && carousel.current !== null) {
  //     carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
  //   }
  // }, [currentIndex]);

  // useEffect(() => {
  //   maxScrollWidth.current = carousel.current
  //     ? carousel.current.scrollWidth - carousel.current.offsetWidth
  //     : 0;
  // }, []);
  // COROUSEL ----------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={'px-8 py-32 z-0 relative shadow-inner'}
      style={{
        backgroundColor: getColor(name),
        boxShadow: `${(getColor(name) == '#ef233c') ? 'inset 0 0 5px 5px #00000033' : ''}`
      }}>
      <div className='absolute -z-10 -bottom-8 right-8 flex flex-row justify-center items-center w-full'>
        <PaySection bgcolor={col} color={getColor(name)} />
        <p className={`text-outline-dark inline select-none text-transparent uppercase font-extrabold text-[200px]`}>
          {name}
        </p>
      </div>
      <div className='flex justify-center'>
      <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
      {/* COROUSEL ----------------------------------------------------------------------------------------------------------------------------}
        {/* <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div> */}
        {/* <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        > */}
        {/* // COROUSEL ----------------------------------------------------------------------------------------------------------------------------*/}
        <div className="relative flex gap-1 overflow-scroll scroll-smooth snap-x snap-mandatory touch-pan-x z-0" >
          {
            members.map(member => <Card key={member.rollno} props={member} />)
          }
        </div>
        {/* </div> */}
      </div>
    </div>
      </div>
    </div>
  )
}
