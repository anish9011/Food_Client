import React, { useState, useEffect } from 'react';
import Styles from './OrderDetails.module.css';
import arrow from '../../Assets/rightarrow.svg';
import loc from '../../Assets/locmark.svg';
import leftarrow from '../../Assets/arrow-left.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function OrderDetails() {
  const [cartItems, setCartItems] = useState([]); // State to store the cart items
  const [error, setError] = useState(null); // State for any error that might occur
  const [loading, setLoading] = useState(true); // State for loading indicator
  const navigate = useNavigate();
  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (!token) {
        console.error('No token found');
        setError('No token found');
        return;
      }

      console.log('Fetching cart with token:', token); // Optional: Log the token for debugging

      // Send the request to fetch the cart items
      const response = await axios.get('http://localhost:5000/api/usercart', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (response.status === 200) {
        setCartItems(response.data.data.cartItems); // Set the fetched cart items in the state
        console.log('Cart items fetched:', response.data.data.cartItems);
      } else {
        console.error('Failed to fetch cart items:', response.data.message);
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setError('An error occurred while fetching cart items.');
    } finally {
      setLoading(false); // Set loading to false after the request finishes
    }
  };

  // Call fetchCartItems when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message or spinner
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

const handleAddress=()=>{
    navigate('/addresspage')
}

const handlePayment=()=>{
    navigate('/paymentpage')
}
  return (
    <>
      <div className={Styles.arrowbanner}>
        <img src={leftarrow} alt="arrow_image" />
        <h1>Your Order Details</h1>
      </div>
      <div className={Styles.flexBox}>
        <div className={Styles.firstFlex}>
          {cartItems.map((item, index) => (
            <div key={index} className={Styles.innerFlex}>
              <div className={Styles.image}>
                <img src={item.imageUrl} alt="food_image" />
              </div>
              <div className={Styles.itemFood}>
                <h1>{item.name}</h1>
                <h2>{item.quantity}x item</h2>
              </div>
              <h1>{item.price}</h1> {/* Price of the item */}
            </div>
          ))}
          <div className={Styles.notes}>
            <h1>Notes</h1>
            <input type="text" placeholder="Add order notes" className={Styles.input} />
          </div>
        </div>
        <div className={Styles.secondFlex}>
          <div className={Styles.outerFlex}>
            <div className={Styles.markFlex}>
              <div className={Styles.mark}>
                <img src={loc} alt="locmark" />
              </div>
              <div className={Styles.address} onClick={handleAddress}>
                <h1>Delivery Address</h1>
                <h2>
                  45, Green Street, Sector 12 iosdfhoi jfpio iopj oijh apsjopasdjpa sdpj opajd
                  aspdojaposdjpaosd asdjopas
                </h2>
              </div>
              <div className={Styles.arrowRight}>
                <img src={arrow} alt="arrow mark" />
              </div>
            </div>
          </div>
          <div className={Styles.taxiItems}>
            <div className={Styles.item}>
              <h1>Items</h1>
              <h2>₹{cartItems.reduce((total, item) => total + item.price, 0)}</h2> {/* Summing up all item prices */}
            </div>
            <div className={Styles.tax}>
              <h1>Sales Tax</h1>
              <h2>₹10</h2> {/* Static Sales Tax, or you can dynamically calculate if needed */}
            </div>
          </div>
          <div className={Styles.subTotal}>
            <h1>SubTotal ({cartItems.length} items)</h1> {/* Display number of items dynamically */}
            <h2>₹{cartItems.reduce((total, item) => total + item.price, 0) + 10}</h2> {/* Subtotal with Sales Tax */}
          </div>
          <div className={Styles.button} onClick={handlePayment}>
            <button>Choose Payment Method</button>
          </div>
        </div>
      </div>
    </>
  );
}
