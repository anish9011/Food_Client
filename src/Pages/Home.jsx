import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx';
import Header from '../Components/Header/Header.jsx';
import BannerRestaurant from '../Components/BannerRestaurant/BannerRestaurant.jsx';
import Testimonials from '../Components/Testimonials/Testimonials.jsx';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BannerRestaurant/>
      <Testimonials/>
    </div>
  )
}
