import React from 'react'
import Image from 'next/image';
import mars from '../public/mars.svg'
import Link from 'next/link'
import { urlFor } from '../lib/client';
const Card = ({ props: { slug, image, name, gender, description, tags, rollno } }) => {
  let linkURL
  if(rollno)
  linkURL = "/profile/"+rollno.toLowerCase() 
  return (
    <Link href={linkURL || '/'}>
      <div className='max-w-sm rounded-xl cursor-pointer shadow-md m-4 overflow-hidden shrink-0 md:flex md:max-w-lg'>
        <div className='md:shrink-0'>
        </div>
        <div className='p-6 space-y-4'>
          <div className='h-96 w-72 overflow-hidden cursor-pointer'>
            <img key={image[0]._key} src={urlFor(image[0])} className='h-52 w-full md:w-full md:h-full object-cover hover:opacity-70 transition-all hover:scale-125' alt={name}></img>
          </div>
          <div>
            <p className='text-xl font-semibold'>{name}</p>
            <p className='text-sm text-emerald-400'>{gender}</p>
          {/* </div>
          <ul className='marker:text-sky-400 list-disc ml-6 text-slate-500'>
            {
              description.map(desc => (
                <li key={desc}>{desc}</li>
              ))
            }
          </ul>
          <div>
            {
              tags && tags.map(tag => (
                <p key={tag} className='bg-slate-100 text-slate-700 font-semibold inline-block rounded-full px-2 mr-1 mb-1 border-2 border-transparent hover:border-slate-200'>{tag}</p>
              ))
            }*/}
          </div> 
        </div>
      </div>

    </Link>
  )
}
export default Card