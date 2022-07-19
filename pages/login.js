import React, { useEffect } from 'react'
import { client, urlFor } from '../lib/client';
import Footer from '../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const router = useRouter();
  // const notify = () => toast.custom((t) => (
  //   <div className={`${t.visible?'animate-enter':'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
  //     <div className="flex-1 w-0 p-4">
  //       <div className="flex items-start">
  //         <div className="flex-shrink-0 pt-0.5">
  //           <img
  //             className="h-10 w-10 rounded-full"
  //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
  //             alt=""
  //           />
  //         </div>
  //         <div className="ml-3 flex-1">
  //           <p className="text-sm font-medium text-gray-900">
  //             Emilia Gates
  //           </p>
  //           <p className="mt-1 text-sm text-gray-500">
  //             Sure! 8:30pm works great!
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex border-l border-gray-200">
  //       <button
  //         onClick={() => toast.dismiss(t.id)}
  //         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //       >
  //         Close
  //       </button>
  //     </div>
  //   </div>
  // ))

  const url = '/api/login';
  const onSubmit = async (e) => {
    e.preventDefault();

    let rollno = document.querySelector('#rollno').value.toLowerCase();
    let password = document.querySelector('#password').value;
    const data = { rollno, password }
    
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
      
      const details = await client.fetch(`*[_type == "student" && slug.current == "${json.rollno}"][0]`);
      if (details) {
        localStorage.setItem('user', JSON.stringify(details));
        toast.success(`Welcome back, ${json.name.split(" ")[0]}`);
        router.push('/')
      } else {
        toast.success(`Welcome back, ${json.name.split(" ")[0]}`);
        toast.error(`Unfortunately, we don't have your information yet`);
        router.push('/submitInfo')
      }
    }
  }
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="/frostbite-dark.svg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Don&apos;t have one?&nbsp;
              <Link href='/signup'>
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Create Here </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="rollno" className="sr-only">Roll Number</label>
                <input id="rollno" name="rollno" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Roll Number" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div>

              {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"> Forgot your password? </a>
              </div> */}
            </div>

            <div>
              <button type="submit" className="select-none group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <div className="h-4 w-4 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='fill-indigo-500 group-hover:fill-indigo-400'><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" /></svg>
                  </div>
                </span>
                Sign in
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