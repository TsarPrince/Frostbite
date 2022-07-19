import React from 'react'

import { client, urlFor } from '../lib/client';

import Card from '../components/Card';
import Hero from '../components/Hero';
import Footer from '../components/Footer';



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
const index = ({ pets, students, faculties }) => {

     
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
        "key": "rzp_test_1xLFW3XMUr7klD", 
        "amount": "50000", 
        "currency": "INR",
        "name": "Frostbite",
        "description": "Donate to your favorite clubs",
        "image": "https://frostbite-two.vercel.app/Snow.svg",
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

  return (
    <div>
      <Hero />
      <div className='flex flex-col items-center md:items-start 2xl:flex-row'>
        <div>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              pets.map(pet => <Card props={pet} key={pet.slug.current} />)
            }
          </div>
        </div>
        <div>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              students.map(student => <Card props={student} key={student.slug.current} />)
            }
          </div>
        </div>
        <div>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              faculties.map(faculty => <Card props={faculty} key={faculty.slug.current} />)
            }
          </div>
        </div>
      </div>
      <div className='btn cursor-pointer'>
        <a className='App-link bg-blue-500 p-5 text-white rounded-md' onClick={displayRazorpay} target="_blank" rel='noopener noreferrer' id='rzp-button1'>
          Donate 500rs
        </a>
      </div>
      <Footer />
    </div>

  )
}

// useEffect in Reactjs = getServerSideProps in Nextjs
export const getServerSideProps = async () => {
  const petQuery = '*[_type == "pet"]';
  const pets = await client.fetch(petQuery);

  const studentQuery = '*[_type == "student"]';
  const students = await client.fetch(studentQuery);

  // console.log(students)

  const facultyQuery = '*[_type == "faculty"]';
  const faculties = await client.fetch(facultyQuery);

  return {
    props: { pets, students, faculties }
  }
}

export default index