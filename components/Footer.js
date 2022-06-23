import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='grid gap-4 grid-cols-4 py-5 bg-gray-200'>
            <div className='text-center'>
                Logo goes here...
            </div>
            <div className=''>
                <h1 className=''>About</h1>
                <p className=''>About us 1</p>
                <p className=''>About us 2</p>
                <p className=''>About us 3</p>
                <p className=''>About us 4</p>
                <p className=''>About us 5</p>
            </div>
            <div className=''>
            <h1 className=''>Academics</h1>
                <p className=''>Academics 1</p>
                <p className=''>Academics 2</p>
                <p className=''>Academics 3</p>
                <p className=''>Academics 4</p>
                <p className=''>Academics 5</p>
            </div>
            <div className=''>
                <h1>Contact Us</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer