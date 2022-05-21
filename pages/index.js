import React from 'react'

import { client } from '../lib/client';
import { urlFor } from '../lib/client';

const index = ({ pets, students }) => {

  return (
    <div>
      {
        pets.map(pet => {
          return <div key={pet.slug.current} style={{'margin': '1rem', 'padding': '1rem', 'border':'2px solid black'}}> 
            {
              pet.image.map(petImg => <img key={petImg._key} src={urlFor(petImg)} width='100px'></img>)
            }
            <p>{pet.name}</p>
            <p>{pet.gender}</p>
            {pet.description.map(desc => <p key={desc}>{desc}</p>)}

          </div>

        })
      }
      {
        students.map(student => {
          return <div key={student.slug.current} style={{'margin': '1rem', 'padding': '1rem', 'border':'2px solid black'}}>
            {
              student.image.map(studentImg => <img key={studentImg._key} src={urlFor(studentImg)} width='100px'></img>)
            }
            <p>{student.name}</p>
            <p>{student.gender}</p>
            {student.description.map(desc => <p key={desc}>{desc}</p>)}

          </div>

        })
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