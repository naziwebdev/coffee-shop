import React from 'react'
import Header from '@/components/modules/Header/Header'
import ServicesDetail from '@/components/templates/Services/ServicesDetail'

export default function Service({ data }) {
  return (
    <div>
      <Header route={'services'} />
      <ServicesDetail services={data} />
    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch('http://localhost:4000/services')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}