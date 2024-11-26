import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx';
import Header from '../Components/Header/Header.jsx';
import BannerRestaurant from '../Components/BannerRestaurant/BannerRestaurant.jsx';
import Testimonials from '../Components/Testimonials/Testimonials.jsx';
import Restauarants from '../Components/Restaurants/Restauarants.jsx';
import Footer from '../Components/Footer/Footer.jsx';

export default function ProductPage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BannerRestaurant/>
      <Testimonials/>
      <Restauarants/>
      <Footer/>
    </div>
  )
}
