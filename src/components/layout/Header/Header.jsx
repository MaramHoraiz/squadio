import React from "react";

import ShoppingCart from "assets/SVG/ShoppingCart.svg";
import MenuIcon from "assets/SVG/MenuIcon.svg";
import Logo from "assets/SVG/FOLIO.svg";

import HeaderSearch from "./HeaderSearch";

import "./Style.css";

function Header() {
  const mobileMenu = ()=>{
    return(
      <ul className="navbar-menu hamburger">
      <li >
          <a href="#">
            {" "}
            <img src={MenuIcon} alt={"menu button"} />{" "}
          </a>
        </li>
        </ul>
    )
  }
  return (
    <nav className="headerApp white">
      <ul>
        <li>
          <a href="#">
            <img src={Logo} alt={"ZUMAR App logo"} />
          </a>
        </li>
        <li>
          <HeaderSearch />
        </li>
      </ul>
      <ul className="navbar">
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Orders</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img src={ShoppingCart} alt={"Shopping cart"} />{" "}
          </a>
        </li>
      </ul>
      {mobileMenu()}
    </nav>
  );
}
export default Header;
