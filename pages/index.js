import React from 'react'

import { client, urlFor } from '../lib/client';

import Card from '../components/Card';
import Hero from '../components/Hero';
	
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
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Head from 'next/head';





const index = ({ pets, students, faculties }) => {
  const searchClient = algoliasearch(
    'JQL15WD72T',
    '5af633b8fe05e08d22f181ade7aee679'
  );

  
  return (
    <div>
      <div className="ais-InstantSearch">
        {/* <h1>React InstantSearch e-commerce demo</h1> */}
        <InstantSearch indexName="name" searchClient={searchClient}>
          <div className="left-panel">
            {/* <ClearRefinements /> */}
            {/* <h2>Brands</h2> */}
            <RefinementList attribute="name" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel grid-cols-4">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>

       {/* <div className='flex flex-col items-center md:items-start 2xl:flex-row'>
        <div>
          <p className='text-purple-600 font-bold text-3xl text-center uppercase py-4'># Furry Companions</p>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              pets.map(pet => <Card props={pet} key={pet.slug.current} />)
            }
          </div>
        </div>
        <div>
          <p className='text-emerald-400 font-bold text-3xl text-center uppercase py-4'># Students</p>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              students.map(student => <Card props={student} key={student.slug.current} />)
            }
          </div>
        </div>
        <div>
          <p className='text-pink-600 font-bold text-3xl text-center uppercase py-4'># Faculties</p>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              faculties.map(faculty => <Card props={faculty} key={faculty.slug.current} />)
            }
          </div>
        </div>
      </div>  */}
    </div>
  )
}

// useEffect in Reactjs = getServerSideProps in Nextjs
export const getServerSideProps = async () => {
  const petQuery = '*[_type == "pet"]';
  const pets = await client.fetch(petQuery);

  const studentQuery = '*[_type == "student"]';
  const students = await client.fetch(studentQuery);
  
  // console.log(students)

  const facultyQuery = '*[_type == "faculty"]';
  const faculties = await client.fetch(facultyQuery);

  return {
    props: { pets, students, faculties }
  }
}

export default index