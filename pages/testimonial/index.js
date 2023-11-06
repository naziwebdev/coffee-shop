import React from 'react'
import Header from '@/components/modules/Header/Header'
import TestimonialDetail from '@/components/templates/Testimonial/TestimonialDetail'

export default function Testimonial({data}) {
  return (
    <div>
      <Header route={'testimonial'} />
      <TestimonialDetail comments={data}/>
    </div>
  )
}

export async function getStaticProps() {
  
  const res = await fetch('http://localhost:4000/comments')
  const data = await res.json()

  return {
    props:{
      data
    },
    revalidate : 60 * 60 * 12
  }
}
