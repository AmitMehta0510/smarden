import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // For Products dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle Products dropdown
  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>

      <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Solutions</li>

          {/* Products with dropdown */}
          <li
            className="products-dropdown"
            onMouseEnter={toggleProductsMenu}
            onMouseLeave={toggleProductsMenu}
          >
            Products
            <ul className={`dropdown ${isProductsOpen ? "show" : ""}`}>
              <li>
                <Link to="/products/plug-play">Plug & Play</Link>
              </li>
              <li>
                <Link to="/products/smart-switches">
                  Smarden Smart Switches
                </Link>
              </li>
              <li>
                <Link to="/products/smart-door-lock">
                  Smarden Smart Door Lock
                </Link>
              </li>
              <li>
                <Link to="/products/touch-switches">Touch Switches</Link>
              </li>
              <li>
                <Link to="/products/smart-mcb">Smart MCB</Link>
              </li>
              <li>
                <Link to="/products/smart-sensors">Smart Sensors</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Blog</li>
          <li>Media Center</li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Mobile Application</li>
        </ul>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
