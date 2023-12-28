import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const PaymentInformation = () => {
  return (
    <div>
      <div className="mb-8">
        <h5 className="text-lg sm:text-xl md:text-3xl text-[32px] font-bold font-poppins gap-3 flex">
          <span className="font-normal">
            <Link to="/settings">Settings</Link>
          </span>
          <IoIosArrowBack />
          <span>
            <Link to="/settings/payment">Payment & Billing</Link>
          </span>
          <IoIosArrowBack />
          Replace Payment Information
        </h5>
      </div>
    </div>
  );
};

export default PaymentInformation;
