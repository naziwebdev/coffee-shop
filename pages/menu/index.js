import React from 'react'
import Header from '@/components/modules/Header/Header'
import MenuDetail from '@/components/templates/Menu/MenuDetail'

export default function Menu({data}) {
  return (
    <div>
      <Header route={'menu'} />
      <MenuDetail menu={data}/>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:4000/menu')
  const data = await res.json()

  return {
    props:{
      data
    },
    revalidate : 60 * 60 * 12
  }
}
