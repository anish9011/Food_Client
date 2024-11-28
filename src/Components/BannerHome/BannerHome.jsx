import React from 'react';
import Styles from './BannerHome.module.css';

export default function BannerHome() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.heading}>
          <h1>Up to -40% 🎊 Order.uk exclusive deals</h1>
        </div>
        <div className={Styles.flexbox}>
          <h1>Vegan</h1>
          <h1>Sushi</h1>
          <h2>Pizza & Fast food</h2>
          <h1>Others</h1>
        </div>
      </div>
      <div className={Styles.flexContents}>
        <img src="BurgerLondon.svg" alt="burgerLondon"/>
        <img src="CafeLondon.svg" alt="cafeLondon"/>
        <img src="Butterbrot London.svg" alt="butterbrotLondon"/>
      </div>
      <div className={Styles.content}>
        <div className={Styles.heading}>
        <h1>Order.uk Popular Categories 🤩</h1>
        </div>
        <div className={Styles.imageFlex}>
      <div className={Styles.imageContent}>
        <img src="BurgerandFast.svg" alt="Burger_image" />
        <div className={Styles.innerbody}>
          <h1>Burger Fastfood</h1>
          <p>21 Restaurants</p>
        </div>
      </div>
      <div className={Styles.imageContent}>
        <img src="Salads.svg" alt="Salad_image" />
        <div className={Styles.innerbody}>
          <h1>Salads</h1>
          <p>32 Restaurants</p>
        </div>
      </div>
      <div className={Styles.imageContent}>
        <img src="Pasta.svg" alt="Pasta_image" />
        <div className={Styles.innerbody}>
          <h1>Pasta & Casuals</h1>
          <p>4 Restaurants</p>
        </div>
      </div>
          <div className={Styles.imageContent}>
            <img src="Pizza.svg" alt="Pizza_image" />
            <div className={Styles.innerbody}>
              <h1>Pizza</h1>
              <p>32 Restaurants</p>
            </div>
          </div>
          <div className={Styles.imageContent}>
            <img src="Breakfast.svg" alt="Breakfast_image" />
            <div className={Styles.innerbody}>
              <h1>Breakfast</h1>
              <p>4 Restaurants</p>
            </div>
          </div>
          <div className={Styles.imageContent}>
            <img src="Soup.svg" alt="Soup_image" />
            <div className={Styles.innerbody}>
              <h1>Soups</h1>
              <p>32 Restaurants</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
