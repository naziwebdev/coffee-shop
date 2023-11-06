import React from 'react'
import Header from '@/components/modules/Header/Header'
import AboutDetail from '@/components/templates/About/AboutDetail'

export default function About() {
  return (
    <div>
      <Header route={'about'} />
      <AboutDetail />
    </div>
  )
}
