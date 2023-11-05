import Slider from "@/components/templates/Index/Slider/Slider"
import About from "@/components/templates/Index/About/About"
import Services from "@/components/templates/Index/Services/Services"
import Offer from "@/components/templates/Index/Offer/Offer"
import Menu from "@/components/templates/Index/Menu/Menu"
import Reservation from "@/components/templates/Index/Reservation/Reservation"
import Testimonial from "@/components/templates/Index/Testimonial/Testimonial"

export default function Home({data}) {

  return (
    <>
    <Slider/>
    <About/>
    <Services services={data.services}/>
    <Offer/>
    <Menu menu={data.menu}/>
    <Reservation/>
    <Testimonial comments={data.comments}/>
    </>
  )
}


export async function getStaticProps() {

  const servicesRes = await fetch('http://localhost:4000/services')
  const services = await servicesRes.json()

  const menuRes = await fetch('http://localhost:4000/menu')
  const menu = await menuRes.json()

  const commentsRes = await fetch('http://localhost:4000/comments')
  const comments = await commentsRes.json()

  return {
    props:{
      data:{
         services, 
         menu,
         comments
      }
    },
    revalidate: 60 * 60 * 12 ,
  }
}