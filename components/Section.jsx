import React, { useState, useEffect } from 'react'
import Card from './Card'
import { client } from '../lib/client';


export const Section = ({ name, members, fontSize }) => {
  const getColor = (name) => {
    if (name == 'axios') return '#ef233c';
    if (name == 'gsoc') return '#f8edeb';
    if (name == 'estrella') return '#ef233c';
    if (name == 'zephyr') return '#f8edeb';
    if (name == 'icpc') return '#ef233c';
  }
  return (
    <div className={'px-8 pt-24 pb-60 z-0 relative'} style={{backgroundColor: getColor(name)}}>
      <div className='absolute -z-10 -bottom-24 right-0'>
        <p className={`text-outline-dark select-none text-transparent uppercase font-extrabold text-[${fontSize}px]`}>
          {name}
        </p>
      </div>
      <div className='flex justify-center'>
        {
          members.map(member => <Card key={member.rollno} props={member} />)
        }
      </div>
    </div>
  )
}
