// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { Button } from "../";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/services/logout";
// import { customAlert } from "../../utils/alert";
// import styles from "./.module.scss";

// // import React, { useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import Logo from "../../assets/logo.png";
// // import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// // import { useSelector, useDispatch } from "react-redux";
// // import { logout } from "../../redux/services/logout";
// // import { customAlert } from "../../utils/alert";
// // import styles from "./Header.module.scss";

// const Header = () => {
//   const { token, isLoaing } = useSelector((state) => state.auth);
//   const [openMenu, setOpenMenu] = useState(false);
//   const dispatch = useDispatch();

//   return (
//     <Navbar expand="md" className={styles.header}>
//       <Container>
//         <Navbar.Brand as={Link} to="/" className={styles.logo}>
//           <img className={styles.logo__img} src={Logo} alt="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => setOpenMenu((prev) => !prev)}
//           className={styles.toggle__menu}
//         >
//           {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className={`ml-auto ${openMenu ? styles.open : ""}`}>
//             {/* Your navigation links go here */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/images/logo.svg";
import menu from "/assets/icons/menu.svg";
import cross from "/assets/icons/cross.svg";
import user from "/assets/images/user.svg";

const Header = () => {
  const navLinks = [
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "How it works",
      link: "/How-it-works",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Log In",
      link: "/login",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full -mb-24 top-0 left-0 relative z-[999]">
      <div className="flex items-center justify-between py-4 md:px-10 max-w-[1210px] mx-auto px-7 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center order-2 tablet:order-1">
          <NavLink to="/" className="">
            <img src={Logo} alt="hoobank" className="w-[124px] h-[32px] " />
          </NavLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute top-6 cursor-pointer md:hidden !order-1"
        >
          <img
            src={open ? cross : menu}
            alt=""
            className="w-[28px] h-[28px] object-contain "
          />
        </div>
        <div className="flex justify-center items-center gap-8 tablet:order-2">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black tablet:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-198px] "
            }`}
          >
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="md:ml-8 text-base font-light md:my-0 my-7 opacity-100"
              >
                <NavLink to={item.link} className="text-white">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="/register"
            className="border-primary border-2 btn-md hover:bg-primary hover:text-white duration-500 font-bold hidden tablet:flex order-3"
          >
            Sign Up
          </a>
        </div>
        <div className="flex tablet:hidden order-3 ">
          <a href="/register">
            <img src={user} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

