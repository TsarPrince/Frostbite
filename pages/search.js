import React from 'react'

import Hit from '../components/Hit';
import algoliasearch from 'algoliasearch/lite';

import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  PoweredBy,
  VoiceSearch,
  MenuSelect,
  connectStateResults
} from 'react-instantsearch-dom';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Search() {
  const searchClient = algoliasearch(
    'JQL15WD72T',
    '5af633b8fe05e08d22f181ade7aee679'
  );
  const showFilters = true;
  // const showFilters = false;
  const [seeMore, setSeeMore] = useState(showFilters);
  let styles
  if (seeMore) {
    styles = {
      display: 'flex'
    }
  }
  else {
    styles = { display: 'none' }
  }
  const setDisplay = () => {
    setSeeMore(prev => !prev)

  }
  // console.log(Hit)
  const logic = (typeof window !== "undefined" && screen.width > 768) ? { display: 'none' } : { display: 'flex' }
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="name" searchClient={searchClient}>
        <div className="left-panel">
          <RefinementList attribute="name" />
          <Configure hitsPerPage={9} />
        </div>
        <div className="right-panel grid-cols-4">
          <div className='flex flex-col'>
            <div className="flex searchbarDiv py-4 w-3/4 mx-auto">
              <div className="ml-auto w-1/2">
                <SearchBox />
              </div>
              <div className="mr-auto ml-3">
                <VoiceSearch searchAsYouSpeak={true} />
              </div>
            </div>
            <div className="ml-auto mr-auto">
              <PoweredBy />

            </div>
          </div>
          <div className="ais-PoweredBy ais-PoweredBy--light">
            <a href="..." target="_blank" className="ais-PoweredBy-link" aria-label="Search by Algolia" rel="noopener noreferrer">
            </a>
          </div>
          <Link href='/api/algoliaSearch'>
            <div className='bg-blue-600 w-20 h-20 rounded-full p-6 cursor-pointer fixed bottom-3 right-3 mt-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" className='active:transition-all duration-[10000] active:rotate-180 z-10' viewBox="0 0 512 512" fill='white'>
                <path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
              </svg>
            </div>
          </Link>
          <div className="seeFilters hidden md:hidden" style={logic} onClick={setDisplay}>
            <p className='md:hidden text-white bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-800 cursor-pointer mx-auto'>See Filters</p>
          </div>
          <div className="menuSelect flex flex-col md:flex-row mx-auto justify-around" style={styles}>
            <div className="menu w-3/4 mx-auto mt-2 md:mt-0 md:w-1/6">
              <p>Branch</p>
              <MenuSelect className='' attribute='branch' />
            </div>
            <div className="menu w-3/4 mx-auto mt-2 md:mt-0 md:w-1/6">
              <p>Gender</p>
              <MenuSelect className='' attribute='gender' />
            </div>
            <div className="menu w-3/4 mx-auto mt-2 md:mt-0 md:w-1/6">
              <p>Tags</p>
              <MenuSelect className='' attribute='tags' />
            </div>
            <div className="menu w-3/4 mx-auto mt-2 md:mt-0 md:w-1/6">
              <p>Description</p>
              <MenuSelect className='' attribute='description' />
            </div>
            <div className="menu w-3/4 mx-auto mt-2 md:mt-0 md:w-1/6">
              <p>Year</p>
              <MenuSelect className='' attribute='year' />
            </div>
          </div>
          <Results>
            <Hits hitComponent={Hit} />
          </Results>
          <Pagination />
          <div className="mb-5"></div>
        </div>
      </InstantSearch>
      <Footer />
    </div>

  )
}

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div className='flex justify-center py-52 px-5'>No results have been found for  <div className='inline font-bold ml-1'>{searchState.query}</div>.</div>
    )
);
