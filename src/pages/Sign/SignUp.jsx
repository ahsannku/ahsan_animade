import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input, Title } from "../../components";
import { getUser } from "../../redux/services/getUser";
import { register } from "../../redux/services/register";
import { countriesCodes } from "../../utils/data";
import {
  confirmPassMsg,
  confirmPassValidation,
  emailMsg,
  emailValidation,
  formValidation,
  passMsg,
  passValidation,
  phoneMsg,
  phoneValidation,
  userNameMsg,
  userNameValidation,
} from "../../utils/validators";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    code: countriesCodes[0].dial_code,
  });

  const inputChangeHandler = (e, id) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
  };
  // console.log(data.code);

  const usernameError = error?.response?.data?.username;

  return (
    <div className={"w-screen min-h-screen flex justify-center items-center"}>
      <div className="lg:w-[38%] md:w-[60%] w-full px-4 mt-24 md:mt-0">
        <div className="border-b border-gray-300 mx-auto">
          <Title align="center">
            <span className="block">Your dream products,</span>
            <span className="block">made possible.</span>
          </Title>
        </div>
        <form
          className=" mt-8 w-full lg:w-5/6 mx-auto "
          onSubmit={async (e) => {
            e.preventDefault();
            await dispatch(register(data)).then((res) => {
              if (!res?.error) {
                console.log("this condition is running", res.error)
                // setTimeout(() => {
                //   navigate("/vertify-number", { state: { username: data.username } });
                // }, 1000);
                navigate('/vertify-number', {state: {username: data.username}})

              }
            });
            
            // dispatch(getUser());
          }}
        >
          <div className={'flex flex-col gap-6'}>
              <Input
                type="text"
                placeholder="username"
                onChange={(e) => inputChangeHandler(e, "username")}
                validation={(e) => userNameValidation(e)}
                errorMsg={userNameMsg}
                required={true}
                value={data?.username || ""}
              />
              <Input
                type="number"
                placeholder="Phone number"
                onChange={(e) => inputChangeHandler(e, "phonenumber")}
                validation={(e) => phoneValidation(e)}
                errorMsg={phoneMsg}
                required={true}
                value={data?.phonenumber || ""}
                setData={setData}
                data={data}
              />
            <Input
              placeholder="Your Email"
              type="email"
              onChange={(e) => inputChangeHandler(e, "email")}
              validation={(e) => emailValidation(e)}
              errorMsg={emailMsg}
              required={true}
              value={data?.email || ""}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => inputChangeHandler(e, "password")}
              validation={(e) => passValidation(e)}
              errorMsg={passMsg}
              required={true}
              value={data?.password || ""}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => inputChangeHandler(e, "confirmpassword")}
              error={error?.response?.data?.confirmpassword}
              validation={(e) => confirmPassValidation(e, data?.password)}
              errorMsg={confirmPassMsg}
              required={true}
              value={data?.confirmpassword || ""}
            />
          </div>
          <button
                type="submit"
                className={`flex items-center justify-center mt-6 w-full border-radius-10 bg-[#c70025] font-bold text-[18px] rounded-md py-[10px] gap-2 ${
                  isLoading ? "loading opacity-0" : ""
                } ${
                  isLoading ||
                  !formValidation(
                    userNameValidation(data?.username),
                    userNameValidation(data?.username),
                phoneValidation(data?.phonenumber),
                emailValidation(data?.email),
                passValidation(data?.password),
                confirmPassValidation(data?.confirmpassword, data?.password)
                  )
                    && "cursor-not-allowed bg-custom-gray"
                    
                }`}
            disabled={
              isLoading ||
              !formValidation(
                userNameValidation(data?.username),
                phoneValidation(data?.phonenumber),
                emailValidation(data?.email),
                passValidation(data?.password),
                confirmPassValidation(data?.confirmpassword, data?.password)
              )
            }
          >
            {isLoading ? (
              <span ></span>
            ) : (
              <>
                Sign Up for FREE
                <AiOutlineLogin />
              </>
            )}
          </button>
          {usernameError && (
            <p>{usernameError}</p>
          )}
          <Link
                to="/login"
                className="text-[16px] text-center bg-gray-opacity block mx-auto mt-2 p-[10px]"
              >
                Have an account?
                <span className="font-bold text-[#f59e0b]"> Sign In</span>
              </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
