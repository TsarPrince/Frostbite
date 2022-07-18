import React from 'react'
import Link from 'next/link'

export default function Profiles() {
  return (
    <div>
      <div className='profile-background'>
        <img className='h-48 md:h-auto md:max-h-64 object-cover  w-full' src='/profile-bg.jpg'></img>
      </div>
      <div className='relative px-4 md:px-8 lg:px-16'>
        <div className='inline-block w-32 h-32 md:w-40 md:h-40 absolute -translate-y-1/2'>
          <img className='rounded-full border-4 border-white' src='user.jpg'></img>
        </div>

        <div className='pt-24 pb-8 space-x-3 flex justify-start md:py-8 md:justify-end'>
          {/* 1 (w) + 0.875 (pl) + 0.875 (pr) = 2.75rem */}
          <button className='flex items-center px-[0.875rem] py-[0.875rem] border border-slate-300 shadow-sm rounded-md text-slate-500 hover:bg-slate-50 hover:shadow-md'>
            <svg className="w-4 h-4" viewBox="0 0 16 4" fill='currentColor'> <circle cx="8" cy="2" r="2"></circle> <circle cx="2" cy="2" r="2"></circle> <circle cx="14" cy="2" r="2"></circle> </svg>
          </button>
          {/* 1 (w) + 0.875 (pl) + 0.875 (pr) = 2.75rem */}
          <button className='flex items-center px-[0.875rem] py-[0.875rem] border border-slate-300 shadow-sm rounded-md text-indigo-500 hover:bg-slate-50 hover:shadow-md'>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill='currentColor'> <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z"></path> </svg>
          </button>
          {/* 1.75 (line-height) + 0.5 (pt) + 0.5 (pb) = 2.75rem */}
          <button className='flex items-center px-4 py-2 space-x-2 border border-transparent shadow-sm rounded-md bg-indigo-500 text-white text-lg font-semibold hover:bg-indigo-600 hover:shadow-md'>
            <svg className="w-4 h-4" fill='currentColor' viewBox="0 0 11 8"> <path d="m.457 4.516.969-.99 2.516 2.481L9.266.702l.985.99-6.309 6.284z"></path> </svg>
            <span>Following</span>
          </button>
        </div>

        <div className='space-y-3'>
          <div className='flex space-x-2'>
            <h1 className='text-2xl md:text-3xl font-bold text-slate-800'>Carolyn McNeail</h1>
            <svg className="w-6 h-6 text-orange-400" viewBox="0 0 16 16" fill='currentColor'> <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z"></path> </svg>
          </div>
          <div>
            <p className='text-lg text-slate-600'>
              Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.
            </p>
          </div>
          <div className='flex space-x-4 text-lg text-slate-600'>
            <div className='flex items-center space-x-2'>
              <svg className="w-5 h-5 text-slate-500" fill='currentColor' viewBox="0 0 16 16"> <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z"></path> </svg>
              <span>Milan, IT</span>
            </div>
            <div className='flex items-center space-x-2'>
              <svg className="w-5 h-5 text-slate-500" fill='currentColor' viewBox="0 0 16 16"> <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z"></path> </svg>
              <span className='text-indigo-500'>carolinmcneail.com</span>
            </div>
          </div>
        </div>

        <div>

          <div className='mt-8 space-x-2 md:space-x-4 border-b-2 flex overflow-scroll md:overflow-hidden'>
            <button className='p-2 text-lg text-indigo-500 border-b-2 border-indigo-500 translate-y-[2px] font-semibold hover:text-indigo-600 hover:border-indigo-600'>General</button>
            <button className='p-2 text-lg text-slate-600 font-semibold hover:text-slate-500'>Connections</button>
            <button className='p-2 text-lg text-slate-600 font-semibold hover:text-slate-500'>Contributions</button>
          </div>

          <div className='md:grid md:grid-cols-3 md:gap-x-24 lg:gap-x-48 mt-8'>

            <div className='md:col-span-2 space-y-12'>
              {/* About me */}
              <div className='max-w-3xl space-y-2'>
                <p className='text-slate-800 text-xl font-semibold'>About Me</p>
                <p className='text-slate-600 text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  <br />
                  Consectetur adipiscing elit, sed do eiusmod tempor magna aliqua.
                </p>
              </div>

              {/* Departments */}
              <div className='space-y-2'>
                <p className='text-slate-800 text-xl font-semibold'>Departments</p>
                {/* Card container */}
                <div className='space-y-4 md:space-y-0 md:flex md:space-x-4'>
                  {/* Card #1 */}
                  <div className='border rounded-md max-w-sm p-6 space-y-2'>
                    <div className='flex items-center space-x-4'>
                      <div className='bg-gray-800 inline-block p-3 rounded-full'>
                        <svg className='w-6 h-6' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon3-b"> <stop stopColor="#E2E8F0" offset="0%" /> <stop stopColor="#94A3B8" offset="100%" /> </linearGradient> <linearGradient x1="50%" y1="24.537%" x2="50%" y2="99.142%" id="icon3-c"> <stop stopColor="#334155" offset="0%" /> <stop stopColor="#334155" stopOpacity="0" offset="100%" /> </linearGradient> <path id="icon3-a" d="M16 0l16 32-16-5-16 5z" /> </defs> <g transform="rotate(90 16 16)" fill="none" fillRule="evenodd"> <mask id="icon3-d" fill="#fff"> <use xlinkHref="#icon3-a" /> </mask> <use fill="url(#icon3-b)" xlinkHref="#icon3-a" /> <path fill="url(#icon3-c)" mask="url(#icon3-d)" d="M16-6h20v38H16z" /> </g> </svg>
                      </div>
                      <p className='text-lg font-semibold text-slate-600'>Acme Marketing</p>
                    </div>
                    <p className='text-slate-600 text-lg'>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                    <div>
                      <div className='flex justify-between items-center'>
                        <div className='-space-x-4'>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-01.jpg'></img>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-02.jpg'></img>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-03.jpg'></img>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-04.jpg'></img>
                        </div>
                        <Link href='/'><a className='text-indigo-500 text-lg font-semibold'>View &rarr;</a></Link>
                      </div>
                    </div>
                  </div>
                  {/* Card #2 */}
                  <div className='border rounded-md max-w-sm p-6 space-y-2'>
                    <div className='flex items-center space-x-4'>
                      <div className='bg-gray-800 inline-block p-3 rounded-full'>
                        <svg className='w-6 h-6' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon2-b"> <stop stopColor="#BAE6FD" offset="0%" /> <stop stopColor="#38BDF8" offset="100%" /> </linearGradient> <linearGradient x1="50%" y1="25.718%" x2="50%" y2="100%" id="icon2-c"> <stop stopColor="#0284C7" offset="0%" /> <stop stopColor="#0284C7" stopOpacity="0" offset="100%" /> </linearGradient> <path id="icon2-a" d="M16 0l16 32-16-5-16 5z" /> </defs> <g transform="rotate(90 16 16)" fill="none" fillRule="evenodd"> <mask id="icon2-d" fill="#fff"> <use xlinkHref="#icon2-a" /> </mask> <use fill="url(#icon2-b)" xlinkHref="#icon2-a" /> <path fill="url(#icon2-c)" mask="url(#icon2-d)" d="M16-6h20v38H16z" /> </g> </svg>
                      </div>
                      <p className='text-lg font-semibold text-slate-600'>Acme Marketing</p>
                    </div>
                    <p className='text-slate-600 text-lg'>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                    <div>
                      <div className='flex justify-between items-center'>
                        <div className='-space-x-4'>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-01.jpg'></img>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-02.jpg'></img>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-03.jpg'></img>
                          <img className='rounded-full w-10 h-10 inline-block border-4 border-white' src='/avatar-04.jpg'></img>
                        </div>
                        <Link href='/'><a className='text-indigo-500 text-lg font-semibold'>View &rarr;</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work History */}
              <div className='max-w-3xl space-y-2'>
                <p className='text-slate-800 text-xl font-semibold'>Work History</p>
                <div className='border rounded-md p-4 md:py-6 md:px-8 space-y-8'>

                  <div className='space-y-2 md:flex md:justify-between md:items-center'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-8 h-8 bg-orange-400 text-white rounded-full'>
                        <svg fill='currentColor' viewBox="0 0 32 32"> <path d="M21 14a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5.75.75 0 0 1-.75.75Zm-7 10a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 0 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z"></path> </svg>
                      </div>
                      <div>
                        <p className='text-lg'>Senior Product Designer</p>
                        <p className='text-slate-500'>Remote . April, 2020 - Today</p>
                      </div>
                    </div>
                    <div className='ml-12 space-x-2 text-slate-500'>
                      <span className='border rounded-full px-2 py-1 shadow-sm hover:text-slate-600 hover:border-slate-300'>Marketing</span>
                      <span className='border rounded-full px-2 py-1 shadow-sm hover:text-slate-600 hover:border-slate-300'>+4</span>
                    </div>
                  </div>

                  <div className='space-y-2 md:flex md:justify-between md:items-center'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-8 h-8 bg-indigo-500 text-white rounded-full'>
                        <svg viewBox="0 0 32 32" fill='currentColor'> <path d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z"></path> </svg>
                      </div>
                      <div>
                        <p className='text-lg'>Senior Product Designer</p>
                        <p className='text-slate-500'>Milan, IT . April, 2018 - April 2020</p>
                      </div>
                    </div>
                    <div className='ml-12 space-x-2 text-slate-500'>
                      <span className='border rounded-full px-2 py-1 shadow-sm hover:text-slate-600 hover:border-slate-300'>Marketing</span>
                      <span className='border rounded-full px-2 py-1 shadow-sm hover:text-slate-600 hover:border-slate-300'>+4</span>
                    </div>
                  </div>

                  <div className='space-y-2 md:flex md:justify-between md:items-center'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-8 h-8 bg-indigo-500 text-white rounded-full'>
                        <svg viewBox="0 0 32 32" fill='currentColor'> <path d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z"></path> </svg>
                      </div>
                      <div>
                        <p className='text-lg'>Senior Product Designer</p>
                        <p className='text-slate-500'>Milan, IT . April, 2018 - April 2020</p>
                      </div>
                    </div>
                    <div className='ml-12 space-x-2 text-slate-500'>
                      <span className='border rounded-full px-2 py-1 shadow-sm hover:text-slate-600 hover:border-slate-300'>Marketing</span>
                      <span className='border rounded-full px-2 py-1 shadow-sm hover:text-slate-600 hover:border-slate-300'>+4</span>
                    </div>
                  </div>
                </div>

                <div className='p-8'></div>
              </div>
            </div>

            <div className='md:col-span-1 space-y-2 pl-2 pb-8'>
              <div>
                <p className='text-lg'>Title</p>
                <p className='text-slate-600'>Senior Product Designer</p>
              </div>
              <div>
                <p className='text-lg'>Location</p>
                <p className='text-slate-600'>Milan, IT - Remote</p>
              </div>
              <div>
                <p className='text-lg'>Email</p>
                <p className='text-slate-600'>carolinmcneail@acme.com</p>
              </div>
              <div>
                <p className='text-lg'>Birthdate</p>
                <p className='text-slate-600'>4 Aril, 1987</p>
              </div>
              <div>
                <p className='text-lg'>Joined Acme</p>
                <p className='text-slate-600'>7 April, 2017</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
