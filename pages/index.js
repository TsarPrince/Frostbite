import React from 'react'

import { client, urlFor } from '../lib/client';

import Card from '../components/Card';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer';
import Head from 'next/head';
import Script from 'next/script';



function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = src;
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}
const index = () => {
  return (
    <div>
      <Head>
        {/* <!-- Hotjar Tracking Code for https://frostbite-two.vercel.app/ --> */}
        <script>
          {(function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 3330601, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')}
        </script>
      </Head>
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