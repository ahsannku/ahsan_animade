import React, { useEffect, useState } from "react";
import { RocketIcon } from "../../icons";
import Button from "../Button";

const UserAccountLimit = () => {
  const [userData, setUserData] = useState(null);

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
  return (
    <div className="flex flex-col md:flex-row lg:items-center gap-1 md:gap-3">
      <Button to="/pricing" className={"w-fit"}>
        Upgrade
      </Button>
      <div className="flex items-center ">
        <span className="design">
          {userData?.designs_remaining || 0} designs
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
