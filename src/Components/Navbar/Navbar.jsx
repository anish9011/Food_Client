import React from 'react';
import Styles from './Navbar.module.css';

export default function Home() {
  return (
    <>
      <div className={Styles.mainBanner}>
        <img src="star.png" alt="star_logo" />
        <h1>
          Get 5% Off your first order,<span>Promo: ORDER5</span>
        </h1>
        <div className={Styles.location}>
          <img src="Location.svg" alt="location_logo" />
          <h1>
            Regent Street, A4, A4201, London <span>Change Location</span>
          </h1>
        </div>
        <div className={Styles.greenBox}>
          <div className={Styles.boxOne}>
            <img src="Basket.svg" alt="Basket_logo" />
            <h1>My Cart</h1>
          </div>
          <div className={Styles.boxTwo}></div>
          <div className={Styles.boxThree}>
            <img src="Forward.svg" alt="forward_image" />
          </div>
        </div>
      </div>
    </>
  );
}
