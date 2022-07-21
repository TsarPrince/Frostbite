import { useState, useRef, useEffect } from 'react';
import Card from './Card'
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
    if (name == 'axios') return '#ef233c';
    if (name == 'gsoc') return '#f8edeb';
    if (name == 'estrella') return '#ef233c';
    if (name == 'zephyr') return '#f8edeb';
    if (name == 'icpc') return '#ef233c';
  }
  async function displayRazorpay(){

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
        alert('Network Error!')
        return
    }

    const data = await fetch('./api/razorpay', { method: 'POST' }).then((t) => 
        t.json()
    )
    console.log(data)
    var options = {
        "key": "rzp_test_vQi5k24ZgUEONx", 
        "amount": "50000", 
        "currency": "INR",
        "name": "Frostbite",
        "description": "Donate to your favorite clubs",
        "image": "https://frostbite-two.vercel.app/favicon.ico",
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
    document.getElementById('rzp-button1').onclick = function(e){
        rzp1.open();
        e.preventDefault();
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }
  const col = (getColor(name)==='#ef233c')?'#f8edeb':'#ef233c'
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
        <div className='btn cursor-pointer mr-auto ml-32'>
          <a className='App-link bg-blue-500 p-5 text-white rounded-md shadow-2xl' onClick={displayRazorpay} target="_blank" rel='noopener noreferrer' id='rzp-button1'
              style={{
                backgroundColor: `${col}`,
                color: `${getColor(name)}`
              }}
          >
            Donate 500rs
          </a>
        </div>
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
