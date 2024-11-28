import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './Header.module.css';
import { useParams } from 'react-router-dom';
import LOGO from '../../Assets/LOGO 1.svg';
import male from '../../Assets/male.svg';
import Rectangle64 from '../../Assets/Rectangle 64.svg';
import OrderCompleted from '../../Assets/OrderCompleted.svg';
import Moto from '../../Assets/Moto.svg';
import Clock from '../../Assets/Clock.svg';
import Search from '../../Assets/Search.svg';
import Rectangle47 from '../../Assets/Rectangle 47.svg';
import Plus from '../../Assets/Plus.svg';
import share from '../../Assets/share-2.svg';
import shop from '../../Assets/Shoppingbasket.svg';
import Remove from '../../Assets/Remove.svg';
import Forward from '../../Assets/Forward.svg';
import side from '../../Assets/side.svg';
import bike from '../../Assets/bike.svg';
import store from '../../Assets/store.svg';
import Forward1 from '../../Assets/Forward1.svg';


export default function Header({ isCartOpen }) {
  const [active, setActive] = useState('Restaurants'); // State to track the active item
  const [burgerImages, setBurgerImages] = useState([]);  // State for burger images
  const [friesImages, setFriesImages] = useState([]);    // State for fries images
  const [coldImages, setColdImages] = useState([]);      // State for cold drinks images
  const [searchTerm, setSearchTerm] = useState('');      // State to store the search term
  const navigate = useNavigate(); // Initialize the navigate function
  const { restaurantName } = useParams();
  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/image'); // Replace with your backend URL
        const data = await response.json();

        if (data.success) {
          setBurgerImages(data.burgerImages);  // Set burger images
          setFriesImages(data.friesImages);    // Set fries images
          setColdImages(data.coldImages);      // Set cold drink images
        } else {
          console.error('Failed to fetch images:', data.message);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Filter the images based on the search term
  const filteredBurgers = burgerImages.filter(image =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredFries = friesImages.filter(image =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColdDrinks = coldImages.filter(image =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigation = (item) => {
    setActive('Restaurants'); // Always set "Restaurants" as active
    
    if (item === 'Home') {
        navigate('/homepage', { state: { selectedRestaurant: item } }); // Pass the selected restaurant as state
    }
};

  return (
    <>
       <div className={Styles.mainHeader}>
            <div className={Styles.mainImage}>
                <img src={LOGO} alt="header_logo" />
            </div>
            <div className={Styles.title}>
                {['Home', 'Special Offers', 'Restaurants', 'Track Order'].map((item) => (
                    <h1
                        key={item}
                        className={active === item ? Styles.active : ''}
                        onClick={() => handleNavigation(item)} // Use handleNavigation
                    >
                        {item}
                    </h1>
                ))}
            </div>
            <div className={Styles.profile}>
                <img src={male} alt="male_logo" />
                <h1>Hey Mike</h1>
            </div>
        </div>


      <div className={Styles.secHeader}>
        <h1>I'm lovin' it!</h1>
        <div className={Styles.McD}>
          <h1>{restaurantName} East London</h1>
        </div>
        <div className={Styles.mainBannerImage}>
          <img
            src="https://res.cloudinary.com/dnsl58bbi/image/upload/v1732528431/your-folder-name/cg4jczbauvfoggt2ug4s.svg"
            alt="rectangle_image"
          />
          <div className={Styles.mainBannerStar}>
            <img src={Rectangle64} alt="rectangle_image" />
          </div>
        </div>
        <div className={Styles.imgOne}>
          <img src={OrderCompleted} alt="orderCompleted" />
          <h1>Minimum Order: 12 GBP</h1>
        </div>
        <div className={Styles.imgTwo}>
          <img src={Moto} alt="orderCompleted" />
          <h1>Delivery in 20-25 Minutes</h1>
        </div>
        <div className={Styles.clock}>
          <img src={Clock} alt="clock_image" />
          <h1>Open until 3:00 AM</h1>
        </div>
      </div>

      <div className={Styles.search}>
        <h1>All Offers from McDonald’s East London</h1>
        <div className={Styles.searchContainer}>
          <img src={Search} alt="search_image" className={Styles.searchIcon} />
          <input
            type="text"
            placeholder="Search from menu..."
            className={Styles.searchInput}
            value={searchTerm} // Controlled input
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
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

      <div className={`${isCartOpen ? Styles.discount : Styles.discountSection}`}>
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

      <div className={Styles.foodSection}>
        {/* Render Burger Section only if there are matching items */}
        {filteredBurgers.length > 0 && (
          <div className={Styles.burgerSection}>
            <h1>Burgers</h1>
            <div className={`${isCartOpen ? Styles.foodsCart : Styles.foods}`}>
              {filteredBurgers.map((image) => (
                <div key={image.id} className={Styles.foodItem}>
                  <div>
                    <h1>{image.name}</h1>
                    <h2>{image.about}</h2>
                    <p>&#8377;{image.price}</p>
                  </div>
                  <div className={Styles.image}>
                    <img src={image.imageUrl} alt={image.name} />
                    <div className={Styles.addButton}>
                      <img src={Rectangle47} alt="addtocart_image" />
                      <div className={Styles.innerbtn}>
                        <img src={Plus} alt="addtocart_image" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Fries Section only if there are matching items */}
        {filteredFries.length > 0 && (
          <div className={Styles.friesSection}>
            <h1>Fries</h1>
            <div className={`${isCartOpen ? Styles.foodsCart : Styles.foods}`}>
              {filteredFries.map((image) => (
                <div key={image.id} className={Styles.foodItem}>
                  <div>
                    <h1>{image.name}</h1>
                    <h2>{image.about}</h2>
                    <p>&#8377;{image.price}</p>
                  </div>
                  <div className={Styles.image}>
                    <img src={image.imageUrl} alt={image.name} />
                    <div className={Styles.addButton}>
                      <img src={Rectangle47} alt="addtocart_image" />
                      <div className={Styles.innerbtn}>
                        <img src={Plus} alt="addtocart_image" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Cold Drinks Section only if there are matching items */}
        {filteredColdDrinks.length > 0 && (
          <div className={Styles.coldSection}>
            <h1>Cold Drinks</h1>
            <div className={`${isCartOpen ? Styles.foodsCart : Styles.foods}`}>
              {filteredColdDrinks.map((image) => (
                <div key={image.id} className={Styles.foodItem}>
                  <div>
                    <h1>{image.name}</h1>
                    <h2>{image.about}</h2>
                    <p>&#8377;{image.price}</p>
                  </div>
                  <div className={Styles.image}>
                    <img src={image.imageUrl} alt={image.name} />
                    <div className={Styles.addButton}>
                      <img src={Rectangle47} alt="addtocart_image" />
                      <div className={Styles.innerbtn}>
                        <img src={Plus} alt="addtocart_image" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {isCartOpen && <div className={Styles.cart}>
          <div className={Styles.shareLink}>
              <img src={share} alt="share2_image"/>
              <h1>Share this cart with your friends</h1>
              <button>Copy Link</button>
          </div>
          <div className={Styles.basket}>
            <div className={Styles.innerBasket}>
              <img src={shop} alt="basket_img"/>
              <h1>My Basket</h1>
            </div>
            <div className={Styles.price}>
              <h1>1x</h1>
              <div className={Styles.list}>
                <h1>&#x20B9;120</h1>
                <h2>Royal Cheese burger</h2>
              </div>
              <div className={Styles.delBtn}>
                <img src={Remove} alt="remove image"/>
              </div>
            </div>
            <div className={Styles.subTotal}>
              <div className={Styles.total}>
                  <h1>Sub Total:</h1>
                  <h2>&#x20B9;120.00</h2>
              </div>
              <div className={Styles.total}>
                  <h1>Discounts:</h1>
                  <h2>-&#x20B9;3.00</h2>
              </div>
              <div className={Styles.total}>
                  <h1>Delivery Fee:</h1>
                  <h2>&#x20B9;3.00</h2>
              </div>
            </div>
              <div className={Styles.toPay}>
                  <div className={Styles.pay}>
                    <h1>Total to pay</h1>
                    <h2>₹230.00</h2>
                  </div>
                  <div className={Styles.freeItem}>
                    <h1>Choose your free item..</h1>
                    <img src={Forward} alt="forward.svg"/>
                  </div>
                  <div className={Styles.freeItem}>
                    <h1>Apply Coupon Code here</h1>
                    <img src={side} alt="side.svg"/>
                  </div>
              </div>
              <div className={Styles.delivery}>
                <div className={Styles.innerDelivery}>
                  <div className={Styles.delBike}>
                    <img src={bike} alt="bike_image"/>
                    <h1>Delivery</h1>
                    <h2>Starts at 17:50</h2>
                  </div>
                  <div className={Styles.store}>
                    <img src={store} alt="store_image"/>
                    <h1>Collection</h1>
                    <h2>Starts at 16:50</h2>
                  </div>
                </div>
                <div className={Styles.checkOut}>
                  <img src={Forward1} alt="forward"/>
                  <h1>Checkout!</h1>
                </div>
              </div>
          </div>
      </div>}
    </>
  );
}
