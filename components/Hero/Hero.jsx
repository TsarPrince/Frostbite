/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { Section } from "./Section";
import { data_json } from './data';

const Hero = () => {

  const data = data_json;

  return (
    <div className='bg-white overflow-hidden'>
      <div className="relative">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                One stop
                <span className="relative z-0 inline-block">
                  <span className="before:bg-pink-500/90 before:-inset-1 before:-skew-y-3 before:absolute before:z-[-1] text-white">
                    solution
                  </span>
                </span>
                for all your information needs.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-500">Need to know who can help you with GSOC? Need to know who can help you become 5 star coder? Need to know who can help you become a full stack developer? Start here</p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img src="/grid/iiitl_admin.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="/grid/iiitl_grass.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="/grid/iiitl_ground.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="/grid/iiitl_cloud.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="/grid/iiitl_equinox.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="/grid/iiitl_side.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="/grid/iiitl_rainy.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href='/search'><a className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Visit all profiles</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <Section name="axios" members={[data.abhinay, data.vinamr]} />
        <Section name="gsoc" members={[data.AyushJain, data.KarishmaV, data.NehalSharma, data.PrerakM, data.YashV]} />
        <Section name="estrella" members={[data.ashleysha, data.prince]} />
        <Section name="zephyr" members={[data.vinamr, data.sameep, data.gaurav, data.abhinay, data.ashleysha, data.prince]} />
        <Section name="icpc" members={[data.sameep, data.ashleysha, data.vinamr, data.vinamr]} />
      </div>

    </div>

  );
};

export default Hero;
