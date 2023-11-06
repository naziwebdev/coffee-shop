import React from 'react'
import Header from '@/components/modules/Header/Header'
import About from '@/components/templates/Index/About/About'

export default function AboutPage() {
  return (
    <div>
      <Header route={'about'} />
      <About />
    </div>
  )
}
