import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginGuard = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     if (token) {
  //       navigate("/single-input");
  //     }
  //   }, []);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [navigate, token]);
  useEffect(() => {
    if(token){
      navigate('/single-input')
    }

  }, [navigate, token])

  if (token)
    return (
      <div className="container">
        {/* <h4 className='text-center px-5 py-10 bg-[#ffffff6b] text-white w-fit mx-auto rounded-md'>You logged in now!</h4> */}
        <span className="special-spinner"></span>
      </div>
    );

  if (!token) return children;
};

export default LoginGuard;
