import React from 'react'
import Header from '@/components/modules/Header/Header'
import ContactDtail from '@/components/templates/Contact/ContactDtail'

export default function Contact() {
  return (
    <div>
      <Header route={'contact'} />
      <ContactDtail />
    </div>
  )
}
