import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/logo.png";

const Footer = () => {
  return (
    <footer className="custom-container mt-14 overflow-x-hidden z-50 relative">
      <div className="flex justify-center tablet:justify-between gap-6 border-b border-paraColor pb-4 tablet:pb-0 tablet:border-0 items-center flex-col tablet:flex-row">
        <Link to="/" className="w-40">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="flex gap-2 mobile:gap-4 tablet:gap-6 laptop:gap-8">
          <a href="/">Home</a>
          <a href="/How-it-works" className="whitespace-nowrap">
            How it Works
          </a>
          <a href="/pricing">Pricing</a>
          <a href="/Contact-us">Contact</a>
          <a href="/about-us" className="whitespace-nowrap">
            About Us
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center my-8 flex-col tablet:flex-row gap-2">
        <div>
          <p className="opacity-60">Copyright 2023. All rights reserved by Animade</p>
        </div>
        <div className="flex justify-center items-center gap-8  ">
          <NavLink to="/privacy" className="">
            Privacy Policy
          </NavLink>
          <NavLink to="/privacy" className="">
            Terms & Conditions
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
