import React, { useRef, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Title } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyOtp } from "../../redux/services/verifynumber";
import { getUser } from "../../redux/services/getUser";

const VerifyNumber = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || {};
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const inputsRef = useRef(
    Array(6)
      .fill()
      .map(() => React.createRef())
  );

  const handleInputChange = (index) => (e) => {
    const values = [...otpValues];
    values[index] = e.target.value;
    setOtpValues(values);

    if (e.target.value.length === 1 && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  console.log(username);
  const otp = otpValues.join("");
  // console.log("otp is : ", otp);
  const data = {
    username,
    otp,
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    await dispatch(verifyOtp(data)).then((res) => {
      if (!res?.error) {
        setTimeout(() => {
          navigate("/single-input");
        }, 1000);
      }
    }); 
    console.log("getting user: ")
    dispatch(getUser());
  };

  // console.log("username is : ", username);
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="lg:w-[38%] md:w-[60%] w-full px-4">
        <div className=" mx-auto">
          <Title align="center">
            <div className="border-b border-gray-300 my-2 md:my-5 md:pb-5">
              <span>One last step</span>
            </div>
            <span>Verify your Phone Number</span>
          </Title>
        </div>
        <form
          className=" mt-8 w-full lg:w-5/6 mx-auto "
          onSubmit={handleOtpSubmit}
        >
          <p className="text-base text-center p-3">
            We sent a code to your phone number
          </p>

          <div className="confirmation__container">
            {Array.from({ length: 6 }, (_, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                className="confirmation__code"
                type="text"
                pattern="\d*"
                maxLength="1"
                onChange={handleInputChange(index)}
              />
            ))}
          </div>
          <div className=" flex flex-col gap-4 items-center justify-center">
            <button className="text-base text-center bg-gray-opacity p-2 w-full">
              Not working?
              <span className="text-custom-red font-bold">
                Request a new code (34)
              </span>
            </button>

            <button
              type="button"
              className="drop-button font-bold text-lg gray max-w-full "
            >
              I’m having trouble
            </button>
            <button
              type="submit"
              className="text-lg flex gap-3 drop-button font-bold max-w-full"
            >
              Submit
              <AiOutlineLogin className="h-7 w-7" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyNumber;
