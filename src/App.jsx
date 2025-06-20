import React from "react";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import BackgroundAudio from "./components/BackgroundAudio";
import CartIcon from "./components/CartIcon";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import BootLoader from "./components/BootLoader";
import ShutdownOverlay from "./components/ShutdownOverlay";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="relative z-10 min-h-screen">
      <BootLoader />
      <ShutdownOverlay />
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProductGrid />
              </>
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <CartIcon />
        <BackgroundAudio />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
