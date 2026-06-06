import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Contact from './pages/Contact/Contact';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

// Styles
import './styles/global.css';

const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Move focus to main element for accessibility
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [location.pathname]);

  return (
    <main 
      ref={mainRef} 
      tabIndex={-1} 
      key={location.pathname} 
      style={{ outline: 'none' }}
      className="animate-section"
    >
      {children}
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RouteWrapper><Home /></RouteWrapper>} />
        <Route path="/about" element={<RouteWrapper><About /></RouteWrapper>} />
        <Route path="/products" element={<RouteWrapper><Products /></RouteWrapper>} />
        <Route path="/products/:slug" element={<RouteWrapper><ProductDetail /></RouteWrapper>} />
        <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
};

export default App;
