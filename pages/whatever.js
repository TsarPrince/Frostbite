import React from 'react'
import Navbar from '../components/Navbar'
import Card from "../components/Card"
import { client, urlFor } from '../lib/client';

const index = ({ pets, students, faculties }) => {

  console.log(students)
  return (
    <div className='select-none'>
      <Navbar />
      {
        pets.map(pet => <Card props={pet} key={pet.slug.current} />)
      }
      {
        students.map(student => <Card props={student} key={student.slug.current} />)
      }
      {
        faculties.map(faculty => <Card props={faculty} key={faculty.slug.current} />)
      }
    </div>
  )
}

// useEffect in Reactjs = getServerSideProps in Nextjs
export const getServerSideProps = async () => {
  const petQuery = '*[_type == "pet"]';
  const pets = await client.fetch(petQuery);

  const studentQuery = '*[_type == "student"]';
  const students = await client.fetch(studentQuery);

  const facultyQuery = '*[_type == "faculty"]';
  const faculties = await client.fetch(facultyQuery);

  return {
    props: { pets, students, faculties }
  }
}

export default index