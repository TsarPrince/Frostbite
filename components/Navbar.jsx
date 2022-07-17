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

              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="65" preserveAspectRatio="xMidYMid meet" version="1.0" transform='scale(3)'><defs><g/><clipPath id="id1"><path d="M 125 149.128906 L 146 149.128906 L 146 209.878906 L 125 209.878906 Z M 125 149.128906 " clipRule="nonzero"/></clipPath></defs><g fill="#545454" fillOpacity="1"><g transform="translate(42.503221, 195.748698)"><g><path d="M 23.839844 -27.101562 L 23.839844 -33.15625 L 4.292969 -33.15625 L 4.292969 0 L 11.222656 0 L 11.222656 -13.585938 L 22.121094 -13.585938 L 22.121094 -19.574219 L 11.222656 -19.574219 L 11.222656 -27.101562 Z M 23.839844 -27.101562 "/></g></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(67.926727, 195.748698)"><g><path d="M 21.800781 0 L 29.945312 0 L 21.109375 -12.875 C 21.914062 -13.101562 22.601562 -13.378906 23.222656 -13.722656 C 26.574219 -15.488281 27.925781 -18.792969 27.925781 -22.945312 C 27.925781 -26.894531 26.59375 -30.039062 23.359375 -31.757812 C 21.640625 -32.628906 19.414062 -33.15625 15.191406 -33.15625 L 4.292969 -33.15625 L 4.292969 0 L 11.175781 0 L 11.175781 -12.230469 L 14.089844 -12.230469 Z M 11.175781 -27.398438 L 14.226562 -27.398438 C 16.890625 -27.398438 18.378906 -27.238281 19.4375 -26.433594 C 20.421875 -25.65625 20.996094 -24.371094 20.996094 -22.511719 C 20.996094 -20.558594 20.421875 -19.253906 19.296875 -18.472656 C 18.289062 -17.761719 16.84375 -17.644531 14.226562 -17.644531 L 11.175781 -17.644531 Z M 11.175781 -27.398438 "/></g></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(99.10478, 195.748698)"><g/></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(111.311734, 195.748698)"><g/></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(123.518688, 195.748698)"><g/></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(135.725642, 195.748698)"><g/></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(147.932596, 195.748698)"><g/></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(160.139551, 195.748698)"><g/></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(172.335244, 195.748698)"><g><path d="M 15.328125 0.457031 C 22.558594 0.457031 27.695312 -3.144531 27.695312 -9.453125 C 27.695312 -16.175781 21.800781 -18.082031 16.773438 -19.597656 C 13.011719 -20.722656 9.753906 -21.5 9.753906 -24.277344 C 9.753906 -26.824219 12.117188 -27.996094 14.890625 -27.996094 C 18.011719 -27.996094 20.238281 -26.550781 21.273438 -23.359375 L 27.511719 -24.898438 C 26.183594 -31.253906 20.308594 -33.617188 14.480469 -33.617188 C 7.824219 -33.617188 2.777344 -30.128906 2.777344 -24.023438 C 2.777344 -17.828125 7.984375 -16.0625 12.851562 -14.546875 C 16.890625 -13.308594 20.558594 -12.34375 20.582031 -9.085938 C 20.605469 -6.402344 18.378906 -5.164062 15.441406 -5.164062 C 11.976562 -5.164062 9.40625 -6.929688 8.445312 -10.738281 L 1.628906 -9.179688 C 2.640625 -2.960938 8.191406 0.457031 15.328125 0.457031 Z M 15.328125 0.457031 "/></g></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(202.095431, 195.748698)"><g><path d="M 23.519531 -33.15625 L 0.917969 -33.15625 L 0.917969 -27.101562 L 8.835938 -27.101562 L 8.835938 0 L 15.648438 0 L 15.648438 -27.101562 L 23.519531 -27.101562 Z M 23.519531 -33.15625 "/></g></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(226.532285, 195.748698)"><g><path d="M 22.097656 -17.507812 C 24.691406 -18.769531 25.953125 -21.15625 25.953125 -24.070312 C 25.953125 -29.714844 22.191406 -33.15625 15.03125 -33.15625 L 4.292969 -33.15625 L 4.292969 0 L 17.945312 0 C 24.941406 0 28.339844 -3.695312 28.339844 -9.292969 C 28.339844 -14.019531 25.839844 -16.476562 22.097656 -17.507812 Z M 15.097656 -27.445312 C 18.175781 -27.445312 19.621094 -25.839844 19.621094 -23.636719 C 19.621094 -21.386719 18.335938 -19.640625 15.398438 -19.640625 L 10.921875 -19.640625 L 10.921875 -27.445312 Z M 16.660156 -5.898438 L 10.921875 -5.898438 L 10.921875 -14.339844 L 16.523438 -14.339844 C 20.398438 -14.339844 21.660156 -12.253906 21.660156 -10.050781 C 21.660156 -7.894531 20.375 -5.898438 16.660156 -5.898438 Z M 16.660156 -5.898438 "/></g></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(256.705489, 195.748698)"><g><path d="M 4.292969 0 L 11.175781 0 L 11.175781 -33.15625 L 4.292969 -33.15625 Z M 4.292969 0 "/></g></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(272.147745, 195.748698)"><g><path d="M 23.519531 -33.15625 L 0.917969 -33.15625 L 0.917969 -27.101562 L 8.835938 -27.101562 L 8.835938 0 L 15.648438 0 L 15.648438 -27.101562 L 23.519531 -27.101562 Z M 23.519531 -33.15625 "/></g></g></g><g fill="#545454" fillOpacity="1"><g transform="translate(296.584599, 195.748698)"><g><path d="M 23.519531 -27.101562 L 23.519531 -33.15625 L 4.292969 -33.15625 L 4.292969 0 L 23.519531 0 L 23.519531 -6.082031 L 11.222656 -6.082031 L 11.222656 -13.585938 L 22.121094 -13.585938 L 22.121094 -19.574219 L 11.222656 -19.574219 L 11.222656 -27.101562 Z M 23.519531 -27.101562 "/></g></g></g><g clipPath="url(#id1)"><path fill="#545454" d="M 137.261719 195.679688 L 137.261719 163.332031 L 145.457031 155.179688 C 145.457031 155.179688 146.65625 153.988281 145.457031 152.792969 C 144.257812 151.601562 143.054688 152.792969 143.054688 152.792969 L 137.261719 158.554688 L 137.261719 150.816406 C 137.261719 150.816406 137.261719 149.128906 135.566406 149.128906 C 133.871094 149.128906 133.871094 150.816406 133.871094 150.816406 L 133.871094 158.554688 L 128.078125 152.792969 C 128.078125 152.792969 126.878906 151.601562 125.679688 152.792969 C 124.476562 153.988281 125.679688 155.179688 125.679688 155.179688 L 133.871094 163.332031 L 133.871094 195.679688 L 125.679688 203.828125 C 125.679688 203.828125 124.476562 205.023438 125.679688 206.214844 C 126.878906 207.40625 128.078125 206.214844 128.078125 206.214844 L 133.871094 200.453125 L 133.871094 208.191406 C 133.871094 208.191406 133.871094 209.878906 135.566406 209.878906 C 137.261719 209.878906 137.261719 208.191406 137.261719 208.191406 L 137.261719 200.453125 L 143.054688 206.214844 C 143.054688 206.214844 144.257812 207.40625 145.457031 206.214844 C 146.65625 205.023438 145.457031 203.828125 145.457031 203.828125 Z M 137.261719 195.679688 " fillOpacity="1" fillRule="nonzero"/></g><path fill="#545454" d="M 163.769531 184.339844 C 163.332031 182.710938 161.691406 183.148438 161.691406 183.148438 L 150.5 186.128906 L 122.332031 169.953125 L 119.332031 158.824219 C 119.332031 158.824219 118.894531 157.195312 117.253906 157.632812 C 115.613281 158.070312 116.054688 159.699219 116.054688 159.699219 L 118.175781 167.570312 L 111.433594 163.699219 C 111.433594 163.699219 109.964844 162.855469 109.117188 164.316406 C 108.269531 165.777344 109.738281 166.621094 109.738281 166.621094 L 116.476562 170.492188 L 108.5625 172.597656 C 108.5625 172.597656 106.921875 173.035156 107.363281 174.664062 C 107.800781 176.296875 109.441406 175.859375 109.441406 175.859375 L 120.632812 172.878906 L 148.804688 189.054688 L 151.804688 200.183594 C 151.804688 200.183594 152.242188 201.816406 153.882812 201.378906 C 155.519531 200.941406 155.082031 199.3125 155.082031 199.3125 L 152.960938 191.441406 L 159.699219 195.308594 C 159.699219 195.308594 161.171875 196.152344 162.019531 194.695312 C 162.867188 193.230469 161.398438 192.386719 161.398438 192.386719 L 154.660156 188.519531 L 162.570312 186.410156 C 162.570312 186.410156 164.210938 185.972656 163.769531 184.339844 Z M 163.769531 184.339844 " fillOpacity="1" fillRule="nonzero"/><path fill="#545454" d="M 162.570312 172.597656 L 154.65625 170.488281 L 161.398438 166.621094 C 161.398438 166.621094 162.867188 165.773438 162.019531 164.3125 C 161.167969 162.847656 159.699219 163.695312 159.699219 163.695312 L 152.960938 167.5625 L 155.082031 159.695312 C 155.082031 159.695312 155.519531 158.0625 153.882812 157.625 C 152.242188 157.191406 151.804688 158.820312 151.804688 158.820312 L 148.804688 169.949219 L 120.632812 186.128906 L 109.445312 183.148438 C 109.445312 183.148438 107.804688 182.710938 107.363281 184.339844 C 106.921875 185.972656 108.566406 186.40625 108.566406 186.40625 L 116.476562 188.515625 L 109.738281 192.382812 C 109.738281 192.382812 108.269531 193.230469 109.121094 194.691406 C 109.96875 196.152344 111.433594 195.308594 111.433594 195.308594 L 118.175781 191.4375 L 116.054688 199.304688 C 116.054688 199.304688 115.613281 200.9375 117.253906 201.375 C 118.894531 201.8125 119.332031 200.183594 119.332031 200.183594 L 122.332031 189.050781 L 150.507812 172.875 L 161.695312 175.859375 C 161.695312 175.859375 163.335938 176.296875 163.777344 174.664062 C 164.207031 173.035156 162.570312 172.597656 162.570312 172.597656 Z M 162.570312 172.597656 " fillOpacity="1" fillRule="nonzero"/></svg>

              <div className="hidden sm:flex sm:ml-6 items-center">
                <div className="flex space-x-4">

                  <div className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/" aria-current="page">Home</Link>
                  </div>

                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/submitInfo">Submit Information</Link>
                  </div>

                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/aboutUs">About us</Link>

                  </div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/login">Login</Link>
                  </div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/chat">Chat</Link>
                  </div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/search">Search</Link>
                  </div>

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