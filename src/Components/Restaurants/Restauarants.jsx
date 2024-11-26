import React from 'react';
import Styles from './Restaurants.module.css';

export default function Restaurants() {
    const handleRestaurant = (restaurantName) => {
        console.log(`Order placed for ${restaurantName}`);
        // Add further logic here (e.g., API calls, navigation, etc.)
    };

    return (
        <div className={Styles.container}>
            <h1>Similar Restaurants</h1>
            <div className={Styles.flexBox}>
                <button onClick={() => handleRestaurant('McDonalds')}>
                    <img src="McDonalds.svg" alt="McDonalds" />
                </button>
                <button onClick={() => handleRestaurant('Papajohns')}>
                    <img src="Papajohns.svg" alt="Papajohns" />
                </button>
                <button onClick={() => handleRestaurant('KFC')}>
                    <img src="KFC.svg" alt="KFC" />
                </button>
                <button onClick={() => handleRestaurant('Texas')}>
                    <img src="Texas.svg" alt="Texas" />
                </button>
                <button onClick={() => handleRestaurant('Burger King')}>
                    <img src="BurgerKing.svg" alt="Burger King" />
                </button>
                <button onClick={() => handleRestaurant('Shaurma')}>
                    <img src="Shaurma.svg" alt="Shaurma" />
                </button>
            </div>
        </div>
    );
}
