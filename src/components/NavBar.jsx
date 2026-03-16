import React, { useState, useEffect, useRef } from "react";
import "../blocks/navbar.css";
import logo from "../assets/images/favIcon.svg";
function NavBar() {
  return (
    <>
      <div className="nav__container">
        <a className="nav__button" href="#">
          <img src={logo} alt="fork and knife logo" className="nav_image"></img>
        </a>
      </div>
    </>
  );
}

export default NavBar;
