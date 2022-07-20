import React from 'react'
import Card from './Card'

export const Section = ({ name, members }) => {
  const getColor = (name) => {
    if (name == 'axios') return '#ef233c';
    if (name == 'gsoc') return '#f8edeb';
    if (name == 'estrella') return '#ef233c';
    if (name == 'zephyr') return '#f8edeb';
    if (name == 'icpc') return '#ef233c';
  }
  return (
    <div className={'px-8 py-32 z-0 relative shadow-inner'}
      style={{
        backgroundColor: getColor(name),
        boxShadow: `${(getColor(name) == '#ef233c') ? 'inset 0 0 5px 5px #00000033' : ''}`
      }}>
      <div className='absolute -z-10 -bottom-8 right-8'>
        <p className={`text-outline-dark select-none text-transparent uppercase font-extrabold text-[200px]`}>
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
