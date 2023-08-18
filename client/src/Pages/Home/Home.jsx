import React from 'react'
import "./Home.scss"
import Slider from '../../Component/Slider/Slider'
import FeaturedProducts from '../../Component/FeaturedProducts/FeaturedProducts'
import Categories from '../../Component/Categories/Categories'
import Contact from '../../Component/Contact/Contact'
const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <FeaturedProducts type={"Featured"}/>
        <Categories/>
        <FeaturedProducts type={"Trending"}/>
        <Contact/>
    </div>
  )
}

export default Home