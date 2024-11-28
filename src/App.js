import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import { TokenProvider } from './Context/TokenContext'; // Import TokenProvider
// import ProtectedRoute from './ProtectedRoutes/ProtectedRoutes.js'; // Import ProtectedRoute
// import Demo from'./Components/Demo.jsx';
import HomePage from './Pages/HomePage.jsx';
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
