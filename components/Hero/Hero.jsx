/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Section } from "./Section";
import { data_json } from './data';

const Hero = () => {

  const data = data_json;

  return (
    <div className="relative bg-white overflow-hidden">

      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 ">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg flex-col-reverse md:flex-row flex items-center  w-full">
            <div className='md:shrink-0 mt-20 text-center md:text-left md:mt-0 max-w-xl'>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                One stop solution for all your information needs.
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Need to know who can help you with GSOC? Need to know who can help you become 5 star coder? Need to know who can help you become a full stack developer? Start here
              </p>
            </div>
            <img className="lg:block lg:ml-80" src="/frostbite-dark.svg" alt="Workflow" />
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"></div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="w-full h-full object-center object-cover" />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="w-full h-full object-center object-cover" />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="w-full h-full object-center object-cover" />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="w-full h-full object-center object-cover" />
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section name="axios" members={[data.abhinay, data.vinamr]} />
      <Section name="gsoc" members={[data.AyushJain,data.KarishmaV,data.NehalSharma,data.PrerakM,data.YashV]} />
      <Section name="estrella" members={[data.ashleysha, data.prince]} />
      <Section name="zephyr" members={[data.vinamr, data.sameep, data.gaurav, data.abhinay, data.ashleysha, data.prince]} />
      <Section name="icpc" members={[data.sameep, data.ashleysha, data.vinamr, data.vinamr]} />

    </div>
  );
};

export default Hero;
