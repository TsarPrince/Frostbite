import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div>
        <div className="address">
          <p>IIIT Lucknow</p>
          <p>Chak Ganjaria</p>
          <p>Lucknow - 226002</p>
          <p className="text-white">contact@iiitl.ac.in</p>
        </div>
        <div>
          <h1>External Links</h1>
          <p>IIIT Allahabad</p>
          <p>IIIT Coordination Forum</p>
          <p>UPIC</p>
        </div>
        <div>
          <h1>Useful Links</h1>
          <p>Academic Calender</p>
          <p>Course Structure</p>
          <p>List of Holidays</p>
          <p>Official Forms & Formats</p>
        </div>
        <div>
          <h1></h1>
          <p>Fee Structure</p>
          <p>Seat Matrix</p>
          <p>RTI</p>
        </div>
      </div>
    </div>
  )
}

export default Footer