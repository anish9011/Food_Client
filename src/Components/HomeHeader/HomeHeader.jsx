import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './HomeHeader.module.css';

export default function HomeHeader() {
    const [active, setActive] = useState('Home');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavigation = (item) => {
        if (item === 'Home') {
            setActive('Home'); // Keep "Home" active even if clicked
        } else {
            setActive('Home'); // Always set to "Home" when another item is clicked
        }

        if (item === 'Restaurants') {
            navigate('/productpage/McDonalds', { state: { selectedRestaurant: item } }); // Pass the selected restaurant as state
        }
    };

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
                        onClick={() => handleNavigation(item)} // Use handleNavigation
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
        <div className={Styles.container}>
            <div className={Styles.firstContainer}>
                <p>Order Restaurant food, takeaway and groceries.</p>
                <h1>Feast Your Senses,</h1>
                <h2>Fast and Fresh</h2>
                <h3>Enter a postcode to see what we deliver</h3>
                <input
                    type="text"
                    id="input-box"
                    placeholder="e.g. EC4R 3TE"
                />
                <button>Search</button>
            </div>
            <div className={Styles.secondContainer}>
                <div className={Styles.orangeImage}>
                    <img src="orange.png" alt="orange_image"/>
                </div>
                <div className={Styles.loodlesImage}>
                <img src="Loodles.svg" alt="loodles_image"/>
                </div>
                <div className={Styles.eatingImage}>
                <img src="Eating.svg" alt="eating_image"/>
                </div>
                <div className={Styles.floatImage1}>
                <img src="Float.svg" alt="floating_image"/>
                </div>
                <div className={Styles.floatImage2}>
                <img src="Float.svg" alt="floating_image"/>
                </div>
                <div className={Styles.floatImage3}>
                <img src="Float.svg" alt="floating_image"/>
                </div>
            </div>
        </div>
    </>
    );
}
