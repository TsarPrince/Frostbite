import React from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const router = useRouter();

  const url = '/api/signup';
  const onSubmit = async (e) => {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let rollno = document.querySelector('#rollno').value.toLowerCase();
    let password = document.querySelector('#password').value;
    const data = { name, rollno, password }
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    const json = await response.json();
    if (response.status == 400) {
      toast.error(json.error);
    } else if (response.status == 200) {
      toast.success('User created successfully. Please Login.');
      router.push('/login');
    }
  }

  return (
    <>
      <Toaster />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="/frostbite-dark.svg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have one?&nbsp;
              <Link href='/login'>
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Login Here </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="rollno" className="sr-only">Roll Number</label>
                <input id="rollno" name="rollno" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Roll Number" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div>
              <button type="submit" className="select-none group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <div className="h-4 w-4 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='fill-indigo-500 group-hover:fill-indigo-400'><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" /></svg>
                  </div>
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Login