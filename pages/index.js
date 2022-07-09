import React from 'react'

import { client, urlFor } from '../lib/client';

import Card from '../components/Card';
import Hero from '../components/Hero';
	


const index = ({ pets, students, faculties }) => {

  return (
    <div>
      <Hero />
       <div className='flex flex-col items-center md:items-start 2xl:flex-row'>
        <div>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              pets.map(pet => <Card props={pet} key={pet.slug.current} />)
            }
          </div>
        </div>
        <div>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              students.map(student => <Card props={student} key={student.slug.current} />)
            }
          </div>
        </div>
        <div>
          <div className='md:flex 2xl:flex-col flex-wrap'>
            {
              faculties.map(faculty => <Card props={faculty} key={faculty.slug.current} />)
            }
          </div>
        </div>
      </div> 
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