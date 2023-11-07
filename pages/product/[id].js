import React from 'react'
import ProductDetail from '@/components/templates/Product/ProductDetail'
import Comments from '@/components/templates/Product/Comments'

export default function Product({ product , comments}) {

  return (
    <div>
      <ProductDetail product={product} />
      <Comments comments={comments} />
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

  const resComments = await fetch(`http://localhost:4000/comments`)
  const dataComments = await resComments.json()

  const commentsRelatedProduct = dataComments.filter(item => item.productID === Number(params.id))

  return {
    props: {
      product: dataProductDetail,
      comments:commentsRelatedProduct
    },
    revalidate : 60 * 60 * 12 
  }
}


