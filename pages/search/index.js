import React from 'react'
import Header from '@/components/modules/Header/Header'
import SearchResult from '@/components/templates/Search/SearchResult'

export default function Search({ data }) {
  console.log(data)
  return (
    <div>
      <Header route={'search'} />
      <SearchResult searchResult={data} />
    </div>
  )
}


export async function getServerSideProps(context) {

  const { query } = context

  const res = await fetch('http://localhost:4000/menu')
  const data = await res.json()

  const searchResult = data.filter(item => (item.type.toLowerCase().includes(query.q.toLowerCase()) || item.title.toLowerCase().includes(query.q.toLowerCase())))

  return {
    props: {
      data: searchResult,
    }
  }

}