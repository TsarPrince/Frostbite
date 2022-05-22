import React from 'react'

import { client, urlFor } from '../lib/client';

import Card from '../components/Card';

const index = ({ pets, students }) => {

  return (
    <div>
      {
        pets.map(pet => <Card props={pet} key={pet.slug.current} />)
      }
      {
        students.map(student => <Card props={student} key={student.slug.current} />)
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

  return {
    props: { pets, students }
  }
}

export default index