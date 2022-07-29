import { useState, useRef, useEffect } from 'react';
import Card from '../Card'
import { PaySection } from '../PaySection';
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
export const Section = ({ name, members }) => {
  const getColor = (name) => {
    if (name == 'axios') return '#5271ff';
    if (name == 'gsoc') return '#f8edeb';
    if (name == 'estrella') return '#5271ff';
    if (name == 'zephyr') return '#f8edeb';
    if (name == 'icpc') return '#5271ff';
  }

  const col = (getColor(name) === '#5271ff') ? '#f8edeb' : '#5271ff'
  return (
    <div className={'px-8 py-32 z-0 relative shadow-inner'}
      style={{
        backgroundColor: getColor(name),
        boxShadow: `${(getColor(name) == '#ef233c') ? 'inset 0 0 5px 5px #000' : ''}`
      }}>
      <div className='absolute -z-10 -bottom-8 right-8 flex flex-row justify-center items-center w-full'>
        <PaySection bgcolor={col} color={getColor(name)} />
        <p className={`text-outline-dark inline select-none text-transparent uppercase font-extrabold text-[180px]`}>
          {name}
        </p>
      </div>
      <div className='flex justify-center'>
        <div className="carousel my-12 mx-auto">
          <div className="relative overflow-hidden">
            <div className="relative flex gap-1 overflow-auto scroll-smooth snap-x snap-mandatory z-0" >
              {
                members.map(member => <Card key={member.rollno} props={member} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
