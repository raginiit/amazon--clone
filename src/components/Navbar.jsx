
import React from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Amazon(props) {
    return (
        <div class="Navbar">
      <div class="nav-logo border">
        <div class="logo"></div>
      </div>
      <div class=" nav-address border">
        <p class="add-first">Deliver to</p>
        <div class="add-icon">
          <LocationOnIcon />
          <p class="add-second">India</p>
        </div>
      </div>
      <div class="nav-search">
        <select class="search-select">
          <option>All</option>
        </select>
        <input placeholder="Search Amazon" class="search-input" />

        <div class="search-icon">
          <SearchIcon />
        </div>
      </div>
      <div class="nav-signin border ">
        <p>
          <span>Hello,sign in</span>
        </p>
        <p class="nav-second">Account & Lists</p>
      </div>

      <div class="nav-return  border">
        <p>
          <span>Returns</span>
        </p>
        <p class="nav-second"> & Orders</p>
      </div>
      <div class="nav-cart border">
        <ShoppingCartIcon/>
        Cart
      </div>
     
       </div>
    );
}

export default Amazon;