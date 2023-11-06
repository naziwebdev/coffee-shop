import React from 'react'
import Header from '@/components/modules/Header/Header'
import ReserveDetail from '@/components/templates/Reservation/ReserveDetail'

export default function Reservation() {
  return (
    <div>
      <Header route={'reservation'} />
      <ReserveDetail/>
    </div>
  )
}
