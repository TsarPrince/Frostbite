import React from 'react'

import { client, urlFor } from '../lib/client';

import Card from '../components/Card';
import Hero from '../components/Hero/Hero';
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
const index = () => {
  return (
    <div>
      <Hero />
      <Footer />
    </div>

  )
}

// useEffect in Reactjs = getServerSideProps in Nextjs
// export const getServerSideProps = async () => {
//   const petQuery = '*[_type == "pet"]';
//   const pets = await client.fetch(petQuery);

//   const studentQuery = '*[_type == "student"]';
//   const students = await client.fetch(studentQuery);

//   // console.log(students)

//   const facultyQuery = '*[_type == "faculty"]';
//   const faculties = await client.fetch(facultyQuery);

//   return {
//     props: { pets, students, faculties }
//   }
// }

export default index