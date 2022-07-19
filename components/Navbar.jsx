import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  // const [clicked, setClicked] = React.useState(false)
  const [styles, setStyles] = useState({ visibility: "hidden" })
  function focus() {
    setStyles({ visibility: "visible" })
  }
  function blur() {
    setStyles({ visibility: "hidden" })
  }

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                {/* Hamburger menu */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                
                {/* Close button */}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">   
              <Link href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="300" zoomAndPan="magnify" viewBox="0 0 224.87999 60" height="80" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="id1"><path d="M 80 12.042969 L 93 12.042969 L 93 45.777344 L 80 45.777344 Z M 80 12.042969 " clipRule="nonzero"/></clipPath><clipPath id="id2"><path d="M 70.351562 16 L 102.585938 16 L 102.585938 42 L 70.351562 42 Z M 70.351562 16 " clipRule="nonzero"/></clipPath></defs><g fill="white" fillOpacity="1"><g transform="translate(34.692929, 37.943015)"><g><path d="M 13.246094 -15.054688 L 13.246094 -18.421875 L 2.382812 -18.421875 L 2.382812 0 L 6.234375 0 L 6.234375 -7.546875 L 12.289062 -7.546875 L 12.289062 -10.875 L 6.234375 -10.875 L 6.234375 -15.054688 Z M 13.246094 -15.054688 "/></g></g></g><g fill="white" fillOpacity="1"><g transform="translate(48.816742, 37.943015)"><g><path d="M 12.109375 0 L 16.636719 0 L 11.726562 -7.152344 C 12.175781 -7.277344 12.558594 -7.433594 12.902344 -7.625 C 14.761719 -8.605469 15.515625 -10.441406 15.515625 -12.746094 C 15.515625 -14.941406 14.773438 -16.6875 12.976562 -17.644531 C 12.019531 -18.128906 10.785156 -18.421875 8.4375 -18.421875 L 2.382812 -18.421875 L 2.382812 0 L 6.207031 0 L 6.207031 -6.792969 L 7.828125 -6.792969 Z M 6.207031 -15.222656 L 7.902344 -15.222656 C 9.382812 -15.222656 10.210938 -15.132812 10.796875 -14.6875 C 11.34375 -14.253906 11.664062 -13.539062 11.664062 -12.503906 C 11.664062 -11.421875 11.34375 -10.695312 10.722656 -10.261719 C 10.160156 -9.867188 9.355469 -9.804688 7.902344 -9.804688 L 6.207031 -9.804688 Z M 6.207031 -15.222656 "/></g></g></g><g fill="white" fillOpacity="1"><g transform="translate(66.137445, 37.943015)"><g/></g></g><g fill="white" fillOpacity="1"><g transform="translate(72.918915, 37.943015)"><g/></g></g><g fill="white" fillOpacity="1"><g transform="translate(79.700385, 37.943015)"><g/></g></g><g fill="white" fillOpacity="1"><g transform="translate(86.481855, 37.943015)"><g/></g></g><g fill="white" fillOpacity="1"><g transform="translate(93.263325, 37.943015)"><g/></g></g><g fill="white" fillOpacity="1"><g transform="translate(100.044795, 37.943015)"><g/></g></g><g fill="white" fillOpacity="1"><g transform="translate(106.820009, 37.943015)"><g><path d="M 8.515625 0.253906 C 12.53125 0.253906 15.386719 -1.746094 15.386719 -5.253906 C 15.386719 -8.988281 12.109375 -10.046875 9.320312 -10.886719 C 7.226562 -11.511719 5.417969 -11.945312 5.417969 -13.488281 C 5.417969 -14.902344 6.730469 -15.550781 8.273438 -15.550781 C 10.007812 -15.550781 11.242188 -14.75 11.816406 -12.976562 L 15.285156 -13.832031 C 14.546875 -17.363281 11.28125 -18.675781 8.042969 -18.675781 C 4.347656 -18.675781 1.542969 -16.738281 1.542969 -13.347656 C 1.542969 -9.90625 4.4375 -8.921875 7.140625 -8.082031 C 9.382812 -7.394531 11.421875 -6.859375 11.433594 -5.046875 C 11.449219 -3.558594 10.210938 -2.867188 8.578125 -2.867188 C 6.65625 -2.867188 5.226562 -3.851562 4.691406 -5.964844 L 0.90625 -5.097656 C 1.464844 -1.644531 4.550781 0.253906 8.515625 0.253906 Z M 8.515625 0.253906 "/></g></g></g><g fill="white" fillOpacity="1"><g transform="translate(123.353028, 37.943015)"><g><path d="M 13.066406 -18.421875 L 0.511719 -18.421875 L 0.511719 -15.054688 L 4.90625 -15.054688 L 4.90625 0 L 8.695312 0 L 8.695312 -15.054688 L 13.066406 -15.054688 Z M 13.066406 -18.421875 "/></g></g></g><g fill="white" fillOpacity="1"><g transform="translate(136.928715, 37.943015)"><g><path d="M 12.277344 -9.726562 C 13.714844 -10.429688 14.417969 -11.753906 14.417969 -13.371094 C 14.417969 -16.507812 12.328125 -18.421875 8.351562 -18.421875 L 2.382812 -18.421875 L 2.382812 0 L 9.96875 0 C 13.855469 0 15.742188 -2.050781 15.742188 -5.164062 C 15.742188 -7.789062 14.355469 -9.152344 12.277344 -9.726562 Z M 8.386719 -15.246094 C 10.097656 -15.246094 10.898438 -14.355469 10.898438 -13.128906 C 10.898438 -11.882812 10.1875 -10.914062 8.554688 -10.914062 L 6.066406 -10.914062 L 6.066406 -15.246094 Z M 9.253906 -3.277344 L 6.066406 -3.277344 L 6.066406 -7.96875 L 9.179688 -7.96875 C 11.332031 -7.96875 12.035156 -6.808594 12.035156 -5.582031 C 12.035156 -4.386719 11.320312 -3.277344 9.253906 -3.277344 Z M 9.253906 -3.277344 "/></g></g></g><g fill="white" fillOpacity="1"><g transform="translate(153.691183, 37.943015)"><g><path d="M 2.382812 0 L 6.207031 0 L 6.207031 -18.421875 L 2.382812 -18.421875 Z M 2.382812 0 "/></g></g></g><g fill="white" fillOpacity="1"><g transform="translate(162.269998, 37.943015)"><g><path d="M 13.066406 -18.421875 L 0.511719 -18.421875 L 0.511719 -15.054688 L 4.90625 -15.054688 L 4.90625 0 L 8.695312 0 L 8.695312 -15.054688 L 13.066406 -15.054688 Z M 13.066406 -18.421875 "/></g></g></g><g fill="white" fillOpacity="1"><g transform="translate(175.845685, 37.943015)"><g><path d="M 13.066406 -15.054688 L 13.066406 -18.421875 L 2.382812 -18.421875 L 2.382812 0 L 13.066406 0 L 13.066406 -3.378906 L 6.234375 -3.378906 L 6.234375 -7.546875 L 12.289062 -7.546875 L 12.289062 -10.875 L 6.234375 -10.875 L 6.234375 -15.054688 Z M 13.066406 -15.054688 "/></g></g></g><g clipPath="url(#id1)"><path fill="white" d="M 87.414062 37.890625 L 87.414062 19.929688 L 91.988281 15.40625 C 91.988281 15.40625 92.65625 14.742188 91.988281 14.078125 C 91.320312 13.417969 90.648438 14.078125 90.648438 14.078125 L 87.414062 17.277344 L 87.414062 12.980469 C 87.414062 12.980469 87.414062 12.042969 86.46875 12.042969 C 85.523438 12.042969 85.523438 12.980469 85.523438 12.980469 L 85.523438 17.277344 L 82.289062 14.078125 C 82.289062 14.078125 81.617188 13.417969 80.949219 14.078125 C 80.28125 14.742188 80.949219 15.40625 80.949219 15.40625 L 85.523438 19.929688 L 85.523438 37.890625 L 80.949219 42.417969 C 80.949219 42.417969 80.28125 43.078125 80.949219 43.742188 C 81.617188 44.402344 82.289062 43.742188 82.289062 43.742188 L 85.523438 40.542969 L 85.523438 44.839844 C 85.523438 44.839844 85.523438 45.777344 86.46875 45.777344 C 87.414062 45.777344 87.414062 44.839844 87.414062 44.839844 L 87.414062 40.542969 L 90.648438 43.742188 C 90.648438 43.742188 91.320312 44.402344 91.988281 43.742188 C 92.65625 43.078125 91.988281 42.417969 91.988281 42.417969 Z M 87.414062 37.890625 " fillOpacity="1" fillRule="nonzero"/></g><g clipPath="url(#id2)"><path fill="white" d="M 102.210938 31.597656 C 101.964844 30.691406 101.050781 30.933594 101.050781 30.933594 L 94.804688 32.589844 L 79.082031 23.605469 L 77.40625 17.425781 C 77.40625 17.425781 77.160156 16.523438 76.246094 16.765625 C 75.332031 17.007812 75.578125 17.914062 75.578125 17.914062 L 76.761719 22.28125 L 73 20.132812 C 73 20.132812 72.179688 19.664062 71.707031 20.476562 C 71.230469 21.289062 72.050781 21.757812 72.050781 21.757812 L 75.8125 23.90625 L 71.394531 25.074219 C 71.394531 25.074219 70.480469 25.316406 70.726562 26.222656 C 70.972656 27.128906 71.886719 26.886719 71.886719 26.886719 L 78.132812 25.230469 L 93.859375 34.214844 L 95.53125 40.394531 C 95.53125 40.394531 95.777344 41.296875 96.691406 41.054688 C 97.605469 40.8125 97.363281 39.90625 97.363281 39.90625 L 96.175781 35.539062 L 99.9375 37.6875 C 99.9375 37.6875 100.761719 38.15625 101.234375 37.34375 C 101.707031 36.53125 100.886719 36.0625 100.886719 36.0625 L 97.125 33.914062 L 101.542969 32.746094 C 101.542969 32.742188 102.457031 32.5 102.210938 31.597656 Z M 102.210938 31.597656 " fillOpacity="1" fillRule="nonzero"/><path fill="white" d="M 101.542969 25.074219 L 97.125 23.902344 L 100.886719 21.753906 C 100.886719 21.753906 101.707031 21.285156 101.234375 20.476562 C 100.757812 19.664062 99.9375 20.132812 99.9375 20.132812 L 96.179688 22.28125 L 97.363281 17.910156 C 97.363281 17.910156 97.605469 17.003906 96.691406 16.761719 C 95.777344 16.519531 95.53125 17.425781 95.53125 17.425781 L 93.859375 23.605469 L 78.132812 32.589844 L 71.886719 30.933594 C 71.886719 30.933594 70.972656 30.691406 70.726562 31.59375 C 70.480469 32.5 71.398438 32.742188 71.398438 32.742188 L 75.8125 33.914062 L 72.050781 36.0625 C 72.050781 36.0625 71.234375 36.53125 71.707031 37.34375 C 72.179688 38.152344 73 37.683594 73 37.683594 L 76.761719 35.535156 L 75.578125 39.90625 C 75.578125 39.90625 75.332031 40.8125 76.246094 41.054688 C 77.164062 41.296875 77.40625 40.390625 77.40625 40.390625 L 79.082031 34.210938 L 94.808594 25.230469 L 101.054688 26.886719 C 101.054688 26.886719 101.96875 27.128906 102.214844 26.222656 C 102.457031 25.316406 101.542969 25.074219 101.542969 25.074219 Z M 101.542969 25.074219 " fillOpacity="1" fillRule="nonzero"/></g></svg>

              </Link>           

              <div className="hidden sm:flex sm:ml-6 items-center">
                <div className="flex space-x-4">
                  <Link href="/" aria-current="page">
                    <div className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      Home
                    </div>
                  </Link>
                  <Link href="/submitInfo">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      Submit Information
                    </div>
                  </Link>

                  <Link href="/aboutUs">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      About us
                    </div>
                  </Link>
                  <Link href="/login">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      Login
                    </div>
                  </Link>
                  <Link href="/chat">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      Chat
                    </div>
                  </Link>
                  <Link href="/search">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      Search
                    </div>
                  </Link>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>


              <div className="ml-3 relative">
                <div onFocus={focus} onBlur={blur}>
                  <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>

                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out duration-300" style={styles} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">

            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>

    </div>
  )
}