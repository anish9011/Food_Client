import React, { useState, useEffect } from 'react';
import Styles from './Header.module.css';

export default function Header() {
  const [active, setActive] = useState('Home'); // State to track the active item
  const [burgerImages, setBurgerImages] = useState([]);  // State for burger images
  const [friesImages, setFriesImages] = useState([]);    // State for fries images
  const [coldImages, setColdImages] = useState([]);    // State for fries images

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/image'); // Replace with your backend URL
        const data = await response.json();

        if (data.success) {
          setBurgerImages(data.burgerImages);  // Set burger images
          setFriesImages(data.friesImages);    // Set fries images
          setColdImages(data.coldImages);
        } else {
          console.error('Failed to fetch images:', data.message);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

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
          <h1>Hey Mike</h1>
        </div>
      </div>

      <div className={Styles.secHeader}>
        <h1>I'm lovin' it!</h1>
        <div className={Styles.McD}>
          <h1>McDonald’s East London</h1>
        </div>
        <div className={Styles.mainBannerImage}>
          <img
            src="https://res.cloudinary.com/dnsl58bbi/image/upload/v1732528431/your-folder-name/cg4jczbauvfoggt2ug4s.svg"
            alt="rectangle_image"
            />
              <div className={Styles.mainBannerStar}>
                <img src="Rectangle 64.svg" alt="rectangle_image" />
              </div>
        </div>
        <div className={Styles.imgOne}>
          <img src="OrderCompleted.svg" alt="orderCompleted" />
          <h1>Minimum Order: 12 GBP</h1>
        </div>
        <div className={Styles.imgTwo}>
          <img src="Moto.svg" alt="orderCompleted" />
          <h1>Delivery in 20-25 Minutes</h1>
        </div>
        <div className={Styles.clock}>
          <img src="Clock.svg" alt="clock_image" />
          <h1>Open until 3:00 AM</h1>
        </div>
      </div>

      <div className={Styles.search}>
        <h1>All Offers from McDonald’s East London</h1>
        <div className={Styles.searchContainer}>
          <img src="Search.svg" alt="search_image" className={Styles.searchIcon} />
          <input
            type="text"
            placeholder="Search from menu..."
            className={Styles.searchInput}
          />
        </div>
      </div>

      <div className={Styles.sideBanner}>
        {[
          'Offers',
          'Burgers',
          'Fries',
          'Snacks',
          'Salads',
          'Cold drinks',
          'Happy Meal®',
          'Desserts',
          'Hot drinks',
          'Sauces',
          'Orbit®',
        ].map((item, index) => (
          <span
            key={item}
            className={index === 0 ? Styles.roundedItem : Styles.normalItem}
          >
            {item}
          </span>
        ))}
      </div>

      <div className={Styles.discountSection}>
        <img
          src="https://res.cloudinary.com/dnsl58bbi/image/upload/v1732528912/your-folder-name/ppgop71a3j4gbv2wy4kz.svg"
          alt="discounted_image"
        />
        <img
          src="https://res.cloudinary.com/dnsl58bbi/image/upload/v1732528944/your-folder-name/qrlwrq6uy7hmvxhkolu8.svg"
          alt="discounted_image"
        />
        <img
          src="https://res.cloudinary.com/dnsl58bbi/image/upload/v1732529008/your-folder-name/fugedmmcet6ydhqkoewr.svg"
          alt="discounted_image"
        />
      </div>

      {/* Render images dynamically */}
      <div className={Styles.foodSection}>
        <div className={Styles.burgerSection}>
        <h1>Burgers</h1>
        <div className={Styles.foods}>
          {burgerImages.map((image) => (
            <div key={image.id} className={Styles.foodItem}>
              <div>
                <h1>{image.name}</h1>
                <h2>{image.about}</h2>
                <p>&#8377;{image.price} </p>
              </div>
              <div className={Styles.image}>
                <img src={image.imageUrl} alt={image.name} />
                <div className={Styles.addButton}>
                  <img src="Rectangle 47.svg" alt="addtocart_image"/>
                  <div className={Styles.innerbtn}>
                    <img src="Plus.svg" alt="addtocart_image"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className={Styles.friesSection}>
        <h1>Fries</h1>
        <div className={Styles.foods}>
          {friesImages.map((image) => (
            <div key={image.id} className={Styles.foodItem}>
              <div>
                <h1>{image.name}</h1>
                <h2>{image.about}</h2>
                <p>&#8377;{image.price} </p>
              </div>
              <div className={Styles.image}>
                <img src={image.imageUrl} alt={image.name} />
                <div className={Styles.addButton}>
                  <img src="Rectangle 47.svg" alt="addtocart_image"/>
                  <div className={Styles.innerbtn}>
                    <img src="Plus.svg" alt="addtocart_image"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className={Styles.friesSection}>
        <h1>Cold Drinks</h1>
        <div className={Styles.foods}>
          {coldImages.map((image) => (
            <div key={image.id} className={Styles.foodItem}>
              <div>
                <h1>{image.name}</h1>
                <h2>{image.about}</h2>
                <p>&#8377;{image.price} </p>
              </div>
              <div className={Styles.image}>
                <img src={image.imageUrl} alt={image.name} />
                <div className={Styles.addButton}>
                  <img src="Rectangle 47.svg" alt="addtocart_image"/>
                  <div className={Styles.innerbtn}>
                    <img src="Plus.svg" alt="addtocart_image"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
