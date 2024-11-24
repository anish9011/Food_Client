import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Home from './Pages/Home.jsx';
import { TokenProvider } from './Context/TokenContext'; // Import TokenProvider
import ProtectedRoute from './ProtectedRoutes/ProtectedRoutes.js'; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <TokenProvider> {/* Wrap everything inside TokenProvider to access context */}
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home /> 
              </ProtectedRoute>
            } 
          />
        </Routes>
      </TokenProvider>
    </Router>
  );
}

export default App;
