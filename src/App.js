import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import { TokenProvider } from './Context/TokenContext'; // Import TokenProvider
// import ProtectedRoute from './ProtectedRoutes/ProtectedRoutes.js'; // Import ProtectedRoute
 import Demo from'./Components/Demo/Demo.jsx';
import HomePage from './Pages/HomePage.jsx';
import OrderPage from './Pages/OrderPage.jsx';
import AddressPage from './Pages/AddressPage.jsx';
import PaymentPage from './Pages/PaymentPage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import PublicOrderPage from './Pages/PublicOrderPage.jsx';

function App() {
  return (
    <Router>
      <TokenProvider> {/* Wrap everything inside TokenProvider to access context */}
        <Routes>
          <Route path="/" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/productpage/:restaurantName" element={<ProductPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/orderpage" element={<OrderPage/>} />
          <Route path="/addresspage" element={<AddressPage/>} />
          <Route path="/paymentpage" element={<PaymentPage/>} />
          <Route path="/profilepage" element={<ProfilePage/>} />
          <Route path="/publicorderpage" element={<PublicOrderPage/>} />
          {/* <Route 
            path="/homepage" 
            element={
              <ProtectedRoute>
                <HomePage/> 
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/productpage/:restaurantName" 
            element={
              <ProtectedRoute>
                <ProductPage /> 
              </ProtectedRoute>
            } 
          /> */}
        </Routes>
      </TokenProvider>
    </Router>
  );
}

export default App;
