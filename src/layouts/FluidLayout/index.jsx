import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, Outlet, useNavigate } from "react-router-dom";
import bgImage from '../../assets/contact.png';
import Logo from "../../assets/logo.png";

const FluidLayout = () => {
  const navigate = useNavigate();

  return (
    <div className='max-w-[100vw] md:h-screen md:overflow-hidden relative' style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom'}}>
      <header className='flex items-center gap-10 left-5 top-5 z-10 absolute'>
        <button className='back__btn' onClick={() => navigate(-1)}>
          <IoIosArrowBack className="text-3xl"/>
        </button>
        <Link to="/" className='h-[40px]'>
          <img src={Logo} alt="logo" className="h-full w-full object-contain" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default FluidLayout;
