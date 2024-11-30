import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]); // State to store the cart items
  const [loading, setLoading] = useState(true);   // State for loading indicator
  const [error, setError] = useState(null);       // State for any error that might occur

  // Function to fetch the user's cart items
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
          Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
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
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading cart items...</p> // Show loading message until the data is fetched
      ) : error ? (
        <p>{error}</p> // Show error message if there's any error
      ) : (
        <div>
          <h2>Your Cart</h2>
          <div>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id}>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p> // If no cart items are found
            )}
          </div>
        </div>
      )}
    </div>
  );
}
