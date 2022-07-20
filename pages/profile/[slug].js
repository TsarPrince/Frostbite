import React from 'react'
import { client, urlFor } from '../../lib/client';
import Profile from '../../components/Profile'
import Footer from '../../components/Footer';
const slug = ({ details, parDetails }) => {

  const { name, tags, description, _type, image, room_no, gender, email, rollno, phone_number, dob } = details;
  console.log(parDetails);
  return (
    <div>
      <Profile name={name} tags={tags} description={description} type={_type} images={image} roomno={room_no} gender={gender} email={email} rollno={rollno} phoneno={phone_number} dob={dob} parDetails={parDetails}></Profile>
      <Footer />
    </div>
  )
}
export default slug


// export const getStaticProps = async (context) => {
//   const slug = context.params.slug;
//   const details = await client.fetch(`*[_type == "student" && slug.current == "${slug}"][0]`);
//   // console.log(details)
//   return {
//     props: {
//       details
//     }
//   }
// }
// export const getStaticPaths = async () => {
//   const studentQuery = '*[_type == "student"]{ slug }';
//   const students = await client.fetch(studentQuery);
//   const paths = students.map(student => ({
//     params: {
//       slug: student.slug.current
//     }
//   }))

//   return {
//     paths: paths,
//     fallback: false
//   }
// }

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const details = await client.fetch(`*[_type == "student" && slug.current == "${slug}"][0]`);
  const parDetails = await client.fetch(`*[_type == "student" && slug.current match "*${slug.slice(7)}" && slug.current != "${slug}"]`)
  return {
    props: {
      details,
      parDetails
    }
  }
}
