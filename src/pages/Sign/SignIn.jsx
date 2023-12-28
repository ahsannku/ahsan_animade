import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { Button, Input, Modal, Title } from "../../components";
import { getUser } from "../../redux/services/getUser";
import { login } from "../../redux/services/login";
import { customAlert } from "../../utils/alert";
import {
  emailValidation,
  formValidation,
  userNameMsg,
  userNameValidation,
} from "../../utils/validators";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoaing } = useSelector((state) => state.auth);
  const [data, setData] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

  const inputChangeHandler = (e, id) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(data)).then((res) => {
      if (!res?.error) {
        setTimeout(() => {
          navigate("/single-input");
        }, 1000);
      }
    });
    dispatch(getUser());
  };

  const sendEmail = async () => {
    setloading(true);
    try {
      await api.post("/password_reset/", { email });
      setloading(false);
      customAlert("check Your Email !", "success");
      navigate("/reset__password");
    } catch (error) {
      setloading(false);
      customAlert(error?.response?.data?.email[0], "error");
    }
  };

  return (
    <>
      <div className="w-screen min-h-screen flex justify-center items-center">
        <div className="lg:w-[38%] md:w-[60%] w-full px-4">
          <div className="border-b border-gray-300 mx-auto">
            <Title align="center">
              <span className="block">Your dream products,</span>
              <span className="block">made possible.</span>
            </Title>
          </div>
          <form
            className=" mt-8 w-full lg:w-5/6 mx-auto "
            onSubmit={submitFormHandler}
          >
            <div className="">
              <div className="flex flex-col gap-6">
                <Input
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => inputChangeHandler(e, "username")}
                  error={error?.response?.data?.username}
                  validation={(e) => userNameValidation(e)}
                  errorMsg={userNameMsg}
                  required={true}
                  value={data?.username || ""}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => inputChangeHandler(e, "password")}
                  value={data.password || ""}
                  error={error?.response?.data?.password}
                  required={true}
                />
              </div>
              <button
                type="button"
                onClick={() => setOpenPopup(true)}
                className="text-right text-[16px] w-fit ml-auto block mt-2"
              >
                Forgot Password
              </button>
              <button
                type="submit"
                className={`flex items-center justify-center mt-6 w-full border-radius-10 bg-[#c70025] font-bold text-[18px] rounded-md py-[10px] gap-2 ${
                  isLoaing ? "loading opacity-0" : ""
                } ${
                  isLoaing ||
                  (!formValidation(
                    userNameValidation(data?.username),
                    data.password
                  ) &&
                    "cursor-not-allowed bg-custom-gray")
                }`}
                disabled={
                  isLoaing ||
                  !formValidation(
                    userNameValidation(data?.username),
                    data.password
                  )
                }
              >
                {isLoaing ? (
                  <span className="w-6 h-6 border-2 border-white rounded-full border-opacity-25 animate-spin"></span>
                ) : (
                  <>
                    Sign In
                    <AiOutlineLogin className="h-[24px] w-[24px]" />
                  </>
                )}
              </button>

              {error && (
                <p className="text-[14px] text-custom-red text-center bg-[#ffcccc] rounded-md p-[10px] mt-2 font-semibold">
                  {error?.message}
                </p>
              )}
              <Link
                to="/register"
                className="text-[16px] text-center bg-gray-opacity block mx-auto mt-2 p-[10px]"
              >
                Not a member?
                <span className="font-bold text-[#f59e0b]"> Sign up now</span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {openPopup && (
        <Modal
          setState={setOpenPopup}
          title="What is the email associated with your account"
          buttons={
            <div className="flex w-full  justify-center gap-12">
              <Button
                onClick={() => setOpenPopup(false)}
                type="button"
                color="gray"
                className={"flex-1"}
              >
                Cancel
              </Button>
              <Button
                type="button"
                disabled={!emailValidation(email) || loading}
                loading={loading}
                onClick={sendEmail}
                className={`flex-1 ${
                  emailValidation(email) ? "bg-custom-red" : ""
                }`}
              >
                Send
              </Button>
            </div>
          }
        >
          <div className=" flex justify-between gap-14 items-center ">
            <label className="w-1/3 flex">Your Email</label>
            <Input
              className={"flex-1 flex"} 
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              value={email || ""}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignIn;
