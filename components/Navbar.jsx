import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../lib/client';


export default function Navbar() {
  // const [clicked, setClicked] = React.useState(false)
  const [active, setActive] = useState('home')
  const activeLinkStyle = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
  const activeLinkStyleMobile = 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
  const inactiveLinkStyle = 'text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
  const inactiveLinkStyleMobile = 'text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium'

  const toggleUserMenu = () => {
    document.querySelector('#user-menu').classList.toggle('hidden');
  }
  const toggleMobileMenu = () => {
    document.querySelector('#mobile-menu').classList.toggle('hidden');
    document.querySelector('#hamburger-icon').classList.toggle('hidden');
    document.querySelector('#close-icon').classList.toggle('hidden');
  }

  if (typeof window == 'undefined') return <></>

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className="flex items-center lg:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMobileMenu}>
              <span className="sr-only">Open main menu</span>
              {/* Hamburger menu */}
              <svg className="block h-6 w-6" id='hamburger-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close button */}
              <svg className="hidden h-6 w-6" id='close-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <Link href='/'>
              <Image className='cursor-pointer' src='/frostbite.svg' width={120} height={27} alt='Frostbite logo'></Image>
            </Link>
            {/* Desktop Links */}
            <div className="hidden lg:flex lg:ml-6 items-center">
              <div className="flex space-x-4">
                <Link href="/" aria-current="page">
                  <div onClick={() => { setActive('home') }} className={`${(active == 'home') ? activeLinkStyle : inactiveLinkStyle}`}>
                    Home
                  </div>
                </Link>
                <Link href="/submitInfo">
                  <div onClick={() => { setActive('submitInfo') }} className={`${(active == 'submitInfo') ? activeLinkStyle : inactiveLinkStyle}`}>
                    Submit Information
                  </div>
                </Link>
                <Link href="/aboutUs">
                  <div onClick={() => { setActive('aboutUs') }} className={`${(active == 'aboutUs') ? activeLinkStyle : inactiveLinkStyle}`}>
                    About us
                  </div>
                </Link>
                <Link href="/chat">
                  <div onClick={() => { setActive('chat') }} className={`${(active == 'chat') ? activeLinkStyle : inactiveLinkStyle}`}>
                    Chat
                  </div>
                </Link>
                <Link href="/search">
                  <div onClick={() => { setActive('search') }} className={`${(active == 'search') ? activeLinkStyle : inactiveLinkStyle}`}>
                    Search
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Search icon */}
            <Link href='/search'>
              <button type="button" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Search</span>
                <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
              </button>
            </Link>

            {
              (localStorage.getItem('user'))
                ? (
                  <div>
                    {/* Profile Avatar */}
                    <div className="ml-3 relative">
                      <div onClick={toggleUserMenu}>
                        <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-expanded="false" aria-haspopup="true">
                          <span className="sr-only">Open user menu</span>
                          <img id='profile-avatar' className="h-8 w-8 object-cover rounded-full" src={urlFor(JSON.parse(localStorage.getItem('user')).image[0])} alt="profile avatar" />
                        </button>
                      </div>
                      {/* User Menu */}
                      <div id='user-menu' className="z-50 hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out duration-300" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                        <Link href={`/profile/${JSON.parse(localStorage.getItem('user')).rollno.toLowerCase()}`}><a onClick={toggleUserMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem">Your Profile</a></Link>
                        <Link href='/login'><a onClick={() => {localStorage.removeItem('user'); toggleUserMenu();}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem">Sign out</a></Link>
                      </div>
                    </div>
                  </div>
                )
                : (
                  <div className='hidden lg:flex lg:items-center px-2'>
                    <Link href="/login">
                      <div onClick={() => { setActive('login') }} className={`${(active == 'login') ? activeLinkStyle : inactiveLinkStyle}`}>
                        Login
                      </div>
                    </Link>
                    {/* Divider */}
                    <div className='w-px h-4 bg-white'></div>
                    <Link href="/signup">
                      <div onClick={() => { setActive('signup') }} className={`${(active == 'signup') ? activeLinkStyle : inactiveLinkStyle}`}>
                        SignUp
                      </div>
                    </Link>
                  </div>
                )
            }

          </div>
        </div>
      </div>

      <div className="hidden lg:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href='/'><a onClick={() => { setActive('home'); toggleMobileMenu() }} className={`${(active == 'home') ? activeLinkStyleMobile : inactiveLinkStyleMobile}`} aria-current="page">Home</a></Link>
          <Link href='/submitInfo'><a onClick={() => { setActive('submitInfo'); toggleMobileMenu() }} className={`${(active == 'submitInfo') ? activeLinkStyleMobile : inactiveLinkStyleMobile}`}>Submit Information</a></Link>
          <Link href='/aboutUs'><a onClick={() => { setActive('aboutUs'); toggleMobileMenu() }} className={`${(active == 'aboutUs') ? activeLinkStyleMobile : inactiveLinkStyleMobile}`}>About Us</a></Link>
          <Link href='/chat'><a onClick={() => { setActive('chat'); toggleMobileMenu() }} className={`${(active == 'chat') ? activeLinkStyleMobile : inactiveLinkStyleMobile}`}>Chat</a></Link>
          <Link href='/search'><a onClick={() => { setActive('search'); toggleMobileMenu() }} className={`${(active == 'search') ? activeLinkStyleMobile : inactiveLinkStyleMobile}`}>Search</a></Link>
          <Link href='/login'><a onClick={() => { setActive('login'); toggleMobileMenu() }} className={`${(active == 'login') ? activeLinkStyleMobile : inactiveLinkStyleMobile}`}>Login</a></Link>
          <Link href='/signup'><a onClick={() => { setActive('signup'); toggleMobileMenu() }} className={`${(active == 'signup') ? activeLinkStyleMobile : inactiveLinkStyleMobile}`}>Sign Up</a></Link>
        </div>
      </div>
    </nav>
  )
}