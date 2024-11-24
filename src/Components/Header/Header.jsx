import React, { useState } from 'react';
import Styles from './Header.module.css';

export default function Header() {
  const [active, setActive] = useState('Home'); // State to track the active item

  return (
    <>
      <div className={Styles.mainHeader}>
        <div className={Styles.mainImage}>
          <img src="LOGO 1.svg" alt="header_logo" />
        </div>
        <div className={Styles.title}>
          {['Home', 'Special Offers', 'Restaurants', 'Track Order'].map((item) => (
            <h1
              key={item}
              className={active === item ? Styles.active : ''}
              onClick={() => setActive(item)}
            >
              {item}
            </h1>
          ))}
        </div>
        <div className={Styles.profile}>
          <img src="male.svg" alt="male_logo" />
          <h1>Hey User</h1>
        </div>
      </div>
      <div className={Styles.secHeader}>
        <h1>I'm lovin' it!</h1>
        <div className={Styles.McD}>
          <h1>McDonald’s East London</h1>
        </div>
        <div className={Styles.imgOne}>
          <img src="OrderCompleted.svg" alt="orderCompleted" />
          <h1>Minimum Order: 12 GBP</h1>
        </div>
        <div className={Styles.imgTwo}>
          <img src="Moto.svg" alt="orderCompleted" />
          <h1>Delivery in 20-25 Minutes</h1>
        </div>
      </div>
    </>
  );
}
