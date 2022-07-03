import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='dark:bg-gray-900'>
      <div className='w-full bg-slate-100 h-1 dark:hidden'></div>
      <div className="md:flex justify-around py-16 dark:text-white">
        {/* <img className="block  h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /> */}
        <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
        <div className="address">
          <p className='mb-2 text-lg font-bold'>IIIT Lucknow</p>
          <p className='my-2'>Chak Ganjaria</p>
          <p className='my-2'>Lucknow - 226002</p>
          <Link href="contact@iiitl.ac.in"><p className="underline dark:text-white dark:hover:text-gray-300 text-blue-800 cursor-pointer ">contact@iiitl.ac.in</p></Link>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2279701453244!2d81.02184131504255!3d26.800868883175877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1656853892123!5m2!1sen!2sin" width="250" height="250"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <h1 className='mb-2 text-lg font-bold'>External Links</h1>
          <Link href='#4'><p className='my-2 cursor-pointer hover:text-gray-600'>IIIT Allahabad</p></Link>
          <Link href='#5'><p className='my-2 cursor-pointer hover:text-gray-600'>IIIT Coordination Forum</p></Link>
          <Link href='#6'><p className='cursor-pointer hover:text-gray-600'>UPIC</p></Link>
        </div>
        <div>
          <h1 className='mb-2 text-lg font-bold'>Useful Links</h1>
          <Link href='#7'><p className='my-2 cursor-pointer hover:text-gray-600'>Academic Calender</p></Link>
          <Link href='#8'><p className='my-2 cursor-pointer hover:text-gray-600'>Course Structure</p></Link>
          <Link href='#9'><p className='my-2 cursor-pointer hover:text-gray-600'>List of Holidays</p></Link>
          <Link href='#10'><p className='cursor-pointer hover:text-gray-600'>Official Forms & Formats</p></Link>
        </div>
        <div>
          <p  className='mb-2 text-lg font-bold'>Additional Resources</p>
          <Link href='#11'><p className='my-2 cursor-pointer hover:text-gray-600'>Fee Structure</p></Link>
          <Link href='#12'><p className='my-2 cursor-pointer hover:text-gray-600'>Seat Matrix</p></Link>
          <Link href='#13'><p className='cursor-pointer hover:text-gray-600'>RTI</p></Link>
        </div>
      </div>
    </div>
    
  )
}

export default Footer