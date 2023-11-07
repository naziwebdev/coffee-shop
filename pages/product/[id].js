import React from 'react'
import ProductDetail from '@/components/templates/Product/ProductDetail'

export default function Product({ product }) {

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  )
}


export async function getStaticPaths(context) {

  const resProduct = await fetch(`http://localhost:4000/menu`)
  const dataProduct = await resProduct.json()

  const paths = dataProduct.map(item => {
    return {
      params: { id: String(item.id) }
    }
  })

  return {
    paths,
    fallback: false,
  }

}



export async function getStaticProps(context) {
  const { params } = context

  const resProductDetail = await fetch(`http://localhost:4000/menu/${params.id}`)
  const dataProductDetail = await resProductDetail.json()

  return {
    props: {
      product: dataProductDetail,
    }
  }
}


