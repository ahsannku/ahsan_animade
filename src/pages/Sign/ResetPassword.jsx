import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { Input, Title } from "../../components";
import { customAlert } from "../../utils/alert";
import {
  confirmPassMsg,
  confirmPassValidation,
  formValidation,
  passMsg,
  passValidation,
} from "../../utils/validators";

const ResetPassword = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    setError(false);
    try {
      await api.post("/password_reset/confirm/", {
        token: data.token,
        password: data.password,
      });
      setloading(false);
      customAlert("Reset Your Password successfully !", "success");
      setData({});
      navigate("/");
    } catch (error) {
      setloading(false);
      setError(error);
      customAlert(error?.response?.data?.detail, "error");
    }
  };

  return (
    <>
      <div className='w-screen min-h-screen flex justify-center items-center'>
        <div className="lg:w-[38%] md:w-[60%] w-full px-4">
          <div className='border-b border-gray-300 mx-auto'>
            <Title align="center">
              <div className=''>Check your email</div>
            </Title>
          </div>
            <form className=" mt-8 w-full lg:w-5/6 mx-auto " onSubmit={submitFormHandler}>
              <div className="flex flex-col gap-6">
                <Input
                  type="text"
                  placeholder="Enter Your Token"
                  onChange={(e) =>
                    setData({
                      ...data,
                      token: e.target.value,
                    })
                  }
                  error={error?.response?.data?.detail}
                  value={data?.token || ""}
                  validation={(e) => e.length > 0}
                  errorMsg="This Field Can't Be Empty"
                  required={true}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                  value={data?.password || ""}
                  error={error?.response?.data?.password}
                  validation={(e) => passValidation(e)}
                  errorMsg={passMsg}
                  required={true}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      confirmpassword: e.target.value,
                    })
                  }
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
                  loading ? "loading opacity-0" : ""
                } ${
                  loading ||
                  !formValidation(
                    confirmPassValidation(data?.confirmpassword, data.password),
                    passValidation(data?.password),
                  )
                    && "cursor-not-allowed bg-custom-gray"
                    
                }`}
                disabled={
                  loading ||
                  !formValidation(
                    data?.token,
                    passValidation(data?.password),
                    confirmPassValidation(data?.confirmpassword, data.password)
                  )
                }
              >
                {loading ? (
                  <span className="w-6 h-6 border-2 border-white rounded-full border-opacity-25 animate-spin"></span>
                ) : (
                  <>Reset Your password</>
                )}
              </button>
              {error && (
                <p className="text-[14px] text-custom-red text-center bg-[#ffcccc] rounded-md p-[10px] mt-2 font-semibold">
                {error?.message}
              </p>
              )}
            </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
