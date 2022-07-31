import { useState, useRef, useEffect } from 'react';

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
export const PaySection = ({bgcolor, color}) => {
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
    return(
        <div className='btn cursor-pointer'>
          <a className='inline-block mr-5 text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700' onClick={displayRazorpay} target="_blank" rel='noopener noreferrer' id='rzp-button1'
              style={{
                backgroundColor: `${bgcolor}`,
                color: `${color}`
              }}
          >
            Donate 500rs
          </a>
        </div>
    )
}