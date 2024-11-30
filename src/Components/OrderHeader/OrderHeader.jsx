import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from './OrderHeader.module.css';
import LOGO from '../../Assets/LOGO 1.svg';
import male from '../../Assets/male.svg';

export default function OrderHeader() {
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

    const handleProfile = ()=>{
        navigate('/profilepage');
        console.log("clicking");
    }
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
            <div className={Styles.profile} onClick={handleProfile}>
                <img src={male} alt="male_logo" />
                <h1>Hey Mike</h1>
            </div>
        </div>
    </>
  )
}
