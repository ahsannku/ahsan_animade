import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import bgImage from "../../assets/star-bg3.png";
import { Sidebar } from "../../components";
import UserAccountLimit from "../../components/UserAccountLimit";
import { toast } from "react-toastify";

const UserLayout = ({ noHeader }) => {
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       toast.warn("Please use desktop for a better experience.", {
  //         position: toast.POSITION.TOP_RIGHT,
  //         className: "toast__fiy",
  //       });
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div
      className={`layout`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "auto",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Sidebar />
      <div className="flex flex-col p-6 pb-24 flex-grow relative max-w-[1450px]">
        {!noHeader && (
          <header className="pl-2.5 mb-8">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <NavLink
                  to="/single-input"
                  className={`link ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                >
                  <span>Single Input</span>
                </NavLink>
                <NavLink
                  to="/ask-ai"
                  className={`link ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                >
                  <span>Ask AI</span>
                </NavLink>
              </div>

              <div className="hidden lg:block">
                <UserAccountLimit />
              </div>
            </nav>
          </header>
        )}
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
