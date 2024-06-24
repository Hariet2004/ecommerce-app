import React from "react";
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className="header">
      {/* Image logo */}
      <div className="header__logo">
        <img
          className="image"
          src="https://links.papareact.com/f90"
          alt="Logo"
        />
      </div>
      
      {/* Search bar */}
      <div className="header__search">
        <input type="text" placeholder="Search items or products" />
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>
      
      {/* Navigation options */}
      <div className="header__nav">
        <div className="header__option">
          <h4>Hello Wambui</h4>
          <h4>Accounts & Lists</h4>
        </div>
        
        <div className="header__option">
          <h4>Return</h4>
          <h4>& Orders</h4>
        </div>
        
        <div className="header__optionCart">
          <ShoppingCartIcon className="header__cartIcon" />
          <span className="header__cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
