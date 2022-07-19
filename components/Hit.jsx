import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { urlFor } from '../lib/client';

export default function Hit(props) {
    // console.log(props)
    let linkURL
    if(props.hit.rollno)
    linkURL = "/profile/"+props.hit.rollno.toLowerCase() 
  return (
    // <div>
    //   {/* <img src={props.hit.image} align="left" alt={props.hit.name} /> */}
    //   <div className="hit-name">
    //     <Highlight attribute="name" hit={props.hit} />
    //   </div>
    //   <div className="hit-description ">
    //     <Highlight attribute="description" hit={props.hit} />
    //   </div>
    //   <div className="hit-price">{props.hit.rollno}</div>
    // </div>
    <Link href={linkURL || '/'}>
      <div className='max-w-sm rounded-xl cursor-pointer shadow-md m-4 overflow-hidden shrink-0 md:flex md:max-w-fit'>
        <div className='md:shrink-0'>
        </div>
        <div className='p-6 space-y-4 flex flex-col justify-center'>
          <div className='h-96 w-72 overflow-hidden cursor-pointer'>
            
            {props.hit.image? <img key={props.hit.image[0]._key} src={urlFor(props.hit.image[0])} className='h-52 w-full md:w-full md:h-full object-cover hover:opacity-70 transition-all hover:scale-125' alt={name}></img>:<div></div>}
          </div>
          <div>
          <Highlight attribute="name" hit={props.hit} />
          {/* <Highlight attribute="description" hit={props.hit} /> */}
            <p className='text-sm text-emerald-400'>{props.hit.gender}</p>
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
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
