import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Footer from '../features/footer/Footer'
import Hero from '../features/hero/Hero'
import Carousel from '../features/hero/Carousel'

export default function Home() {

  let slides = [
    "https://anherb.com/cdn/shop/articles/Web_1920_28.png?v=1669026133",
    "https://sunova.in/wp-content/uploads/2021/02/Herbal-Medicine-Why-do-people-use-it.jpg",
    "https://www.nutraingredients-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-asia.com/news/research/supplements-education-nz-healthcare-professionals-interested-in-herbal-medicine-training-as-usage-grows/12212044-1-eng-GB/Supplements-education-NZ-healthcare-professionals-interested-in-herbal-medicine-training-as-usage-grows.jpg"
  ]
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='w-[50%]  mx-auto pt-6 pb-6'>
     <Carousel slides={slides} />
    </div>
    <Footer/>
    </>
  )
}
