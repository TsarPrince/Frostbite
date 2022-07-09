import React from 'react'
import { client, urlFor } from '../../lib/client';
import Profile from '../../components/Profile'
const slug = ({ details }) => {

  const { name, tags, description, _type, image, room_no, gender, email, rollno, phone_number, DOB } = details;
  return (
    <div>
      <Profile name={name} tags={tags} description={description} type={_type} images={image} roomno={room_no} gender={gender} email={email} rollno={rollno} phoneno={phone_number} dob={DOB}></Profile>
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
    fallback: false
  }
}