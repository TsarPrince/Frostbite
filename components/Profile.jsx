import Link from 'next/link'
import React, { useState } from 'react'
import { urlFor } from '../lib/client'
// {props.type[0].toUpperCase() + props.type.substring(1)}
// {props.rollno}
// {firstName}
// {lastName}
// {props.gender}
// {props.phoneno}
// {branch}
// {props.roomno || 'NA'}
// {props.email}
// {props.dob || 'NA'}
// {allTags}
// {allDescription}
const Profile = (props) => {

  const [activeTab, setActiveTab] = useState('general');


  // console.log(props.dob)
  let branchSmo = props.rollno.slice(1, 3)
  const branchSmol = branchSmo.toUpperCase();
  let branch = ""
  if (branchSmol === "CI")
    branch = "Computer Science with Artificial Intelligence"
  else if (branchSmol === "CB")
    branch = "Computer Science with Business"
  else if (branchSmol === "CS")
    branch = "Computer Science"
  else if (branchSmol === "IT")
    branch = "Information Technology"

  const linkedinURL = props.linkedin ? "https://www.linkedin.com/in/" + props.linkedin : "NA"
  const allTags = props.tags ? props.tags.map((prev) => {
    return (
      <span className="md:text-lg text-slate-600 inline px-2" key={prev}>{prev} </span>
    )
  }) : ['No tag available']

  // console.log({ data })
  const allDescription = props.description ? props.description.map((prev) => {
    return (
      <div className='space-y-2 md:flex md:justify-between md:items-center' key={prev}>
        <div className='flex items-center space-x-4'>
          <div className='w-8 h-8 bg-indigo-500 flex justify-center items-center text-white rounded-full'>
            {/* <svg viewBox="0 0 32 32" fill='currentColor' className='even:hidden odd:block'> <path d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z"></path> </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" className='' fill='white' height={20} viewBox="0 0 640 512"><path d="M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z" /></svg>
          </div>
          <div>
            <p className='text-lg'>{prev}</p>
            <p className='text-slate-500'>{props.name}</p>
          </div>
        </div>
      </div>
    )
  }) : ['No description available']
  const allDescriptionPara = props.description ? props.description.map((prev) => {
    return (
      <div className="text-slate-600 text-lg inline" key={prev}>{prev}. </div>
    )
  }) : ['No description available']
  const allCards = props.parDetails ? props.parDetails.map((prevProps) => {
    console.log(prevProps)
    const allDescriptionParaTech = prevProps ? prevProps.description.map((prev) => {
      return (
        <div className="text-slate-600 text-lg inline" key={prev}>{prev}. </div>
      )
    }) : ['No description available']

    return (
      <div className='border rounded-md w-3/4 md:w-4/5 lg:w-2/5 p-6 space-y-2' key={prevProps}>
        <div className='flex items-center space-x-4'>
          <div className='inline-block rounded-full ring-2 ring-blue-600  ring-offset-2'>
            {prevProps.image ? <img key={prevProps.image[0]._key} src={urlFor(prevProps.image[0])} width="40" height="40" alt="" className='object-cover w-10 h-10 rounded-full' /> : <img src='/Default.png' className='rounded-full w-10 h-10 object-cover border-4 border-white' alt={props.name}></img>}
          </div>
          <p className='text-lg font-semibold text-slate-600'>{prevProps.name}</p>
        </div>
        <p className='text-slate-600 text-lg'>
          {allDescriptionParaTech}
        </p>
        <div>
          <div className='flex justify-between items-center'>

            <Link href={`/profile/${prevProps.rollno.toLowerCase()}`}><a className='text-indigo-500 text-lg font-semibold mt-auto ml-auto'>View &rarr;</a></Link>
          </div>
        </div>
      </div>
    )
  }) : <span>No Tech Relatives found</span>
  return (
    <div>
      <div className='profile-background'>
        <img className='h-48 md:h-auto md:max-h-64 object-cover  w-full' src='/profile-bg.jpg'></img>
      </div>
      <div className='relative px-4 md:px-8 lg:px-16'>
        <div className='inline-block w-32 h-32 md:w-40 md:h-40 absolute -translate-y-1/2'>

          {props.images ? <img key={props.images[0]._key} src={urlFor(props.images[0])} className='rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-white' alt={props.name}></img> : <img src='/Default.png' className='rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-white' alt={props.name}></img>}
        </div>

        <div className='pt-24 pb-8 space-x-3 flex justify-start md:py-8 md:justify-end'>
          {/* 1 (w) + 0.875 (pl) + 0.875 (pr) = 2.75rem */}
          <button className='flex items-center px-[0.875rem] py-[0.875rem] border border-slate-300 shadow-sm rounded-md text-slate-500 hover:bg-slate-50 hover:shadow-md'>
            <svg className="w-4 h-4" viewBox="0 0 16 4" fill='currentColor'> <circle cx="8" cy="2" r="2"></circle> <circle cx="2" cy="2" r="2"></circle> <circle cx="14" cy="2" r="2"></circle> </svg>
          </button>
          {/* 1 (w) + 0.875 (pl) + 0.875 (pr) = 2.75rem */}
          <Link href='/chat'>
            <button className='flex items-center px-[0.875rem] py-[0.875rem] border border-slate-300 shadow-sm rounded-md text-indigo-500 hover:bg-slate-50 hover:shadow-md'>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill='currentColor'> <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z"></path> </svg>
            </button>
          </Link>
          {/* 1.75 (line-height) + 0.5 (pt) + 0.5 (pb) = 2.75rem */}
          <Link href={props.url}>
            <button className='flex items-center px-4 py-2 space-x-2 border border-transparent shadow-sm rounded-md bg-indigo-500 text-white md:text-lg font-semibold hover:bg-indigo-600 hover:shadow-md'>
              <svg height={20} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" /></svg>
              <span>Get JSON</span>
            </button>
          </Link>
        </div>

        <div className='space-y-3'>
          <div className='flex space-x-2'>
            <h1 className='text-2xl md:text-3xl font-bold text-slate-800'>{props.name}</h1>
            <svg className="w-6 h-6 text-orange-400" viewBox="0 0 16 16" fill='currentColor'> <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z"></path> </svg>
          </div>
          <div>
            <p className='md:text-lg text-slate-600 divide-x-2 divide-slate-600 divide-opacity-70'>
              {allTags}
            </p>
          </div>
          <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 md:text-lg text-slate-600'>
            <div className='flex items-center space-x-2'>
              <svg className="w-5 h-5 text-slate-500" fill='currentColor' viewBox="0 0 16 16"> <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z"></path> </svg>
              <span>{branch}</span>
            </div>
            <Link href={`mailto:${props.email}`}>
              <div className='flex items-center space-x-2 cursor-pointer hover:underline'>
                <svg className="w-5 h-5 text-slate-500" fill='currentColor' viewBox="0 0 16 16"> <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z"></path> </svg>
                <span className='text-indigo-500'>{props.email}</span>
              </div>
            </Link>
            <Link href={linkedinURL}>
              <div className='flex items-center space-x-2 cursor-pointer hover:underline'>
                <svg className="w-5 h-5 text-slate-500" fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                <span className='text-indigo-500'>{linkedinURL}</span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className='mt-8 space-x-2 md:space-x-4 border-b-2 flex overflow-scroll md:overflow-hidden'>
            <button className={`p-2 md:text-lg font-semibold ${(activeTab == 'general') ? 'text-indigo-500 border-b-2 border-indigo-500 font-semibold hover:text-indigo-600 hover:border-indigo-600' : 'text-slate-600 hover:text-slate-500'}`} onClick={() => { setActiveTab('general') }}>General</button>
            <button className={`p-2 md:text-lg font-semibold ${(activeTab == 'gallery') ? 'text-indigo-500 border-b-2 border-indigo-500 font-semibold hover:text-indigo-600 hover:border-indigo-600' : 'text-slate-600 hover:text-slate-500'}`} onClick={() => { setActiveTab('gallery') }}>Photo Gallery</button>
          </div>

          {(activeTab == 'general')
            ? <div className='md:grid md:grid-cols-3 md:gap-x-24 lg:gap-x-48 mt-8'>

              <div className='md:col-span-2 space-y-12'>
                {/* About me */}
                <div className='max-w-3xl space-y-2'>
                  <p className='text-slate-800 text-xl font-semibold'>About Me</p>
                  <p className='text-slate-600 text-lg'>
                    {allDescriptionPara}
                  </p>
                </div>

                {/* Tech Relatives */}
                <div className='space-y-2'>
                  <p className='text-slate-800 text-xl font-semibold'>Tech Relatives</p>
                  {/* Card container */}
                  <div className='space-y-4 md:space-y-0 md:flex md:space-x-4'>
                    {allCards}
                  </div>
                </div>

                {/* Description */}
                <div className='max-w-3xl space-y-2'>
                  <p className='text-slate-800 text-xl font-semibold'>Experience</p>
                  <div className='border max-w-md rounded-md p-4 md:py-6 md:px-8 space-y-8'>
                    {allDescription}
                  </div>

                  <div className='p-8'></div>
                </div>
              </div>

              <div className='md:col-span-1 space-y-2 pl-2 pb-8'>
                <div className='flex items-center'>
                  <div className="w-8 h-8 flex justify-center items-center mr-4 bg-orange-400 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' height={20} viewBox="0 0 576 512"><path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z" /></svg>
                  </div>
                  <div>
                    <p className='text-lg'>Roll Number</p>
                    <p className='text-slate-600'>{props.rollno.toUpperCase()}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className="w-8 h-8 flex justify-center items-center  mr-4 bg-orange-400 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' height={20} viewBox="0 0 512 512"><path d="M495.9 132.2C505.8 137.9 512 148.5 512 160V480C512 497.7 497.7 512 480 512C462.3 512 448 497.7 448 480V178.6L256 68.86L64 178.6V480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480V160C0 148.5 6.153 137.9 16.12 132.2L240.1 4.216C249.1-1.405 262-1.405 271.9 4.216L495.9 132.2zM216 168C216 145.9 233.9 128 256 128C278.1 128 296 145.9 296 168C296 190.1 278.1 208 256 208C233.9 208 216 190.1 216 168zM224 512C210.7 512 200 501.3 200 488V313.5L173.1 363.4C166.8 375 152.3 379.4 140.6 373.1C128.1 366.8 124.6 352.3 130.9 340.6L168.7 270.3C184.1 241.8 213.9 223.1 246.2 223.1H265.8C298.1 223.1 327.9 241.8 343.3 270.3L381.1 340.6C387.4 352.3 383 366.8 371.4 373.1C359.7 379.4 345.2 375 338.9 363.4L312 313.5V488C312 501.3 301.3 512 288 512C274.7 512 264 501.3 264 488V400H248V488C248 501.3 237.3 512 224 512V512z" /></svg>
                  </div>
                  <div>
                    <p className='text-lg'>Room Number</p>
                    <p className='text-slate-600'>{props.roomno || 'NA'}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className="w-8 h-8 mr-4 flex justify-center items-center  bg-orange-400 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' height={20} viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
                  </div>
                  <div>
                    <p className='text-lg'>Email</p>
                    <p className='text-slate-600'>{props.email || 'NA'}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className="w-8 h-8 mr-4 flex justify-center items-center  bg-orange-400 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' height={20} viewBox="0 0 448 512"><path d="M352 111.1c22.09 0 40-17.88 40-39.97S352 0 352 0s-40 49.91-40 72S329.9 111.1 352 111.1zM224 111.1c22.09 0 40-17.88 40-39.97S224 0 224 0S184 49.91 184 72S201.9 111.1 224 111.1zM383.1 223.1L384 160c0-8.836-7.164-16-16-16h-32C327.2 144 320 151.2 320 160v64h-64V160c0-8.836-7.164-16-16-16h-32C199.2 144 192 151.2 192 160v64H128V160c0-8.836-7.164-16-16-16h-32C71.16 144 64 151.2 64 160v63.97c-35.35 0-64 28.65-64 63.1v68.7c9.814 6.102 21.39 11.33 32 11.33c20.64 0 45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C114.1 348.3 139.4 367.1 160 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C242.1 348.3 267.4 367.1 288 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C370.1 348.3 395.4 367.1 416 367.1c10.61 0 22.19-5.227 32-11.33V287.1C448 252.6 419.3 223.1 383.1 223.1zM352 373.3c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66c-11.27 0-22.09-3.121-32-7.377v87.38C0 497.7 14.33 512 32 512h384c17.67 0 32-14.33 32-32v-87.38c-9.91 4.256-20.73 7.377-32 7.377C390 399.1 365.8 384.3 352 373.3zM96 111.1c22.09 0 40-17.88 40-39.97S96 0 96 0S56 49.91 56 72S73.91 111.1 96 111.1z" /></svg>
                  </div>
                  <div>
                    <p className='text-lg'>Birthdate</p>
                    <p className='text-slate-600'>{props.dob || 'NA'}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className="w-8 h-8 mr-4 flex justify-center items-center  bg-orange-400 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' height={20} viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                  </div>
                  <div>
                    <p className='text-lg'>Phone Number</p>
                    <p className='text-slate-600'>+91 {props.phoneno || 'NA'}</p>
                  </div>
                </div>
              </div>
            </div>

            : <div className='py-12'>
              <div className='border p-4 flex flex-wrap transition-all'>
                {props.images.map(image => (
                  <img key={image._key} src={urlFor(image)} className='max-h-40 md:max-h-52 rounded-lg m-2' alt={image.name}></img>
                ))}
              </div>
            </div>}
            
        </div>
      </div>
    </div>
  )
}
//roll number

//room number
// 
// //email
// 
// //birthdate
// 
// //phone number
// 
// //description
// 
export default Profile;