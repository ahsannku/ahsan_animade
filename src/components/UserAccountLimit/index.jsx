import React, { useEffect, useState } from "react";
import { RocketIcon } from "../../icons";
import Button from "../Button";
import { useNavigate, Link } from "react-router-dom";

const UserAccountLimit = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenWithQuotes = localStorage.getItem("token");
    const token = tokenWithQuotes ? tokenWithQuotes.replace(/"/g, "") : ""; // Remove quotes

    if (token) {
      fetch(
        " https://animade-production.up.railway.app/api/users/profile/",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`, // Include the token without quotes
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleUpgradeClick = (e) => {
    e.preventDefault();
    navigate("/pricing", { state: { fromApp: true } });
  };

  const getUserDesigns = () => {
    if(!userData?.designs_remaining){
      return 0;
    }
    if(userData?.designs_remaining < 0){
      return 'Unlimited';
    }
    return userData?.designs_remaining;
  }

  return (
    <div className="flex flex-col md:flex-row lg:items-center gap-1 md:gap-3">
      <Link
        onClick={handleUpgradeClick}
        className={`w-fit hover:bg-white hover:text-custom-red hover:border-custom-red drop-button`}
      >
        Upgrade
      </Link>
      <div className="flex items-center ">
        <span className="design">
          {getUserDesigns()} designs
        </span>
        <div className="flex items-center">
          <span className="design">
            {userData?.subscription_plan || "unknown"} plan
          </span>
          <RocketIcon />
        </div>
      </div>
    </div>
  );
};

export default UserAccountLimit;
