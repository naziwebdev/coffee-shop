import Slider from "@/components/templates/Index/Slider/Slider"
import About from "@/components/templates/Index/About/About"
import Services from "@/components/templates/Index/Services/Services"
import Offer from "@/components/templates/Index/Offer/Offer"
import Menu from "@/components/templates/Index/Menu/Menu"
import Reservation from "@/components/templates/Index/Reservation/Reservation"
import Testimonial from "@/components/templates/Index/Testimonial/Testimonial"

export default function Home() {
  return (
    <>
    <Slider/>
    <About/>
    <Services/>
    <Offer/>
    <Menu/>
    <Reservation/>
    <Testimonial/>
    </>
  )
}
