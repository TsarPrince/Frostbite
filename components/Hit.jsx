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
  console.log(props.hit.description)
  let linkURL
  if (props.hit.rollno)
    linkURL = "/profile/" + props.hit.rollno.toLowerCase()
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
      <div className='max-w-sm bg-white rounded-xl shadow-md m-4 overflow-hidden shrink-0 md:flex md:max-w-lg'>
      {
        props.hit.image && <Link href={linkURL || '/'}>
          <div className='md:shrink-0'>
            <img key={props.hit.image[0]._key} src={urlFor(props.hit.image[0])} className='h-52 w-full md:w-52 md:h-full object-cover cursor-pointer transition-all origin-[100%_50%] hover:opacity-80 hover:scale-110' alt={name}></img>
          </div>
        </Link>
      }
      <div className='bg-white p-6 space-y-4'>
        <div>
          {props.hit.name && <Link href={linkURL || '/'}>
            <p className='text-xl font-semibold decoration-dashed hover:text-indigo-500 hover:cursor-pointer hover:underline'>{props.hit.name}</p>
          </Link>}
          {props.hit.gender && <p className='text-sm font-semibold text-emerald-400'>{props.hit.gender}</p>}
        </div>
        {props.hit.description && <ul className='marker:text-sky-400 list-disc ml-6 text-slate-500'>
          {
            props.hit.description.map(desc => (
              <li key={desc}>{desc}</li>
            ))
          }
        </ul>}
        {props.hit.tags && <div>
          {
            props.hit.tags.map(tag => (
              <p key={tag} className='bg-slate-100 text-slate-700 font-semibold inline-block rounded-full px-2 mr-1 mb-1 border-2 border-transparent hover:border-slate-200'>{tag}</p>
            ))
          }
        </div>}
      </div>
    </div>
    </Link>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
