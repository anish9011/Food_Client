import React from 'react'
import Address from '../Components/Address/Address.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import OrderHeader from '../Components/OrderHeader/OrderHeader.jsx';

export default function AddressPage() {
  return (
    <>
        <Navbar/>
        <OrderHeader/>
        <Address/>
    </>
  )
}
