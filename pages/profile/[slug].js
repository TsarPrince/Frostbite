import React from 'react'

import { client, urlFor } from '../../lib/client';


const slug = ({ details }) => {

  return (
    <div>
      {
        JSON.stringify(details)
      }
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