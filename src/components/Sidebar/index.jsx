import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/sLogo.png";
import { SidebarLinks } from "../../utils/data";
import { GrFormNext } from "react-icons/gr";
import { useSelector } from "react-redux";
import { UserIcon } from "../../icons";
import './style.css'

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div
        className={`overlay ${openSidebar ? 'show' : ""}`}
      ></div>
      <div className={`sidebar ${openSidebar ? 'open' : ""}`}>
        <button
          className='toggle__btn'
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          {/* {openSidebar ? <GrFormPrevious /> : <GrFormNext />} */}
          <GrFormNext />
        </button>
        <div className='sidebar__content'>
          <Link to="/" className='logo'>
            <img src={Logo} alt="logo" />
          </Link>
          <div className='list'>
            {SidebarLinks.map((link, i) => (
              <Link to={link.link || ""} key={i} className='link'>
                {link.icon}
                {link.label}
              </Link>
            ))}
            <Link to="/profile" className='link'>
              <UserIcon />
              <h1 style={{ marginTop: "5px" }}>{user?.username || "User"}</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
