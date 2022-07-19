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
  PoweredBy
} from 'react-instantsearch-dom';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Search() {
  const searchClient = algoliasearch(
    'JQL15WD72T',
    '5af633b8fe05e08d22f181ade7aee679'
  );
 
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="name" searchClient={searchClient}>
        <div className="left-panel">
          <RefinementList attribute="name" />
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel grid-cols-4">
          <div>
            <SearchBox />
            <PoweredBy />
          </div>
          <div className="ais-PoweredBy ais-PoweredBy--light">
            <a href="..." target="_blank" className="ais-PoweredBy-link" aria-label="Search by Algolia" rel="noopener noreferrer">
            </a>
          </div>
          <Link href='/api/algoliaSearch'>
            <div className='bg-blue-600 w-20 h-20 rounded-full p-6 cursor-pointer fixed bottom-3 right-3 mt-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" className='active:transition-all duration-[10000] active:rotate-180' viewBox="0 0 512 512" fill='white'>
                <path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
              </svg>
            </div>
          </Link>
          <Hits hitComponent={Hit} />
          <Pagination />
          <div className="mb-5"></div>
        </div>
      </InstantSearch>
      <Footer />
    </div>

  )
}
