import React, { Profiler } from 'react'
import { client, urlFor } from '../../lib/client';
import Profile from '../../components/Profile'
const slug = ({ details }) => {
  console.log(details)
  
  return (
    <div>
      <Profile name={details.name} tags={details.tags} description={details.description} type={details._type} images={details.image} roomno={details.room_no} gender={details.gender} email={details.email} rollno={details.rollno} phoneno={details.phone_number}></Profile>
    </div>
  )
}
export default slug


export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const details = await client.fetch(`*[_type == "student" && slug.current == "${slug}"][0]`);
  // console.log(details)
  return {
    props: {
      details
    }
  }
}

export const getStaticPaths = async () => {
  const studentQuery = '*[_type == "student"]{ slug }';
  const students = await client.fetch(studentQuery);
  const paths = students.map(student => ({
    params: {
      slug: student.slug.current
    }
  }))
  // console.log(paths)
  return {
    paths: paths,
    fallback: true
  }
}