import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { Button, Input } from "../../components";
import { customAlert } from "../../utils/alert";
import {
  confirmPassMsg,
  confirmPassValidation,
  formValidation,
  passMsg,
  passValidation,
} from "../../utils/validators";

const ChangePassword = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const updatePass = async () => {
    setLoading(true);
    try {
      const formdata = new FormData();
      formdata.append("new_password", data.new_password);
      formdata.append("old_password", data.old_password);
      const res = await api.put("/change-password/", formdata);
      setLoading(false);
      customAlert(res?.data?.message, "success");
      setData({});
      navigate("/");
    } catch (error) {
      customAlert(error?.response?.data?.old_password[0], "error");
      setLoading(false);
      return error;
    }
  };

  return (
    <div className=''>
      <div className="mb-8">
      <h5 className='text-[27px] lg:text-[32px] font-bold font-poppins flex items-center flex-wrap gap-2'>
      <span className="font-normal">
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowForward /> Change Password
    </h5>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePass();
        }}
        className='lg:w-[840px] flex flex-col gap-5'
      >
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 '>
          <label className="text-lg md:text-xl lg:text-2xl font-bold whitespace-pre w-2/6 lg:w-2/5 ">Current Password</label>
          <Input
          className={'md:flex-1'}
            type="password"
            placeholder="Your Password"
            onChange={(e) =>
              setData({
                ...data,
                old_password: e.target.value,
              })
            }
            validation={(e) => passValidation(e)}
            errorMsg={passMsg}
            required={true}
            value={data?.old_password || ""}
          />
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8'>
          <label className="text-lg md:text-xl lg:text-2xl font-bold whitespace-pre w-2/6 lg:w-2/5 ">New Password</label>
          <Input
          className={'md:flex-1'}
            type="password"
            placeholder="New Password"
            onChange={(e) =>
              setData({
                ...data,
                new_password: e.target.value,
              })
            }
            validation={(e) => passValidation(e)}
            errorMsg={passMsg}
            required={true}
            value={data?.new_password || ""}
          />
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8'>
          <label className="text-lg md:text-xl lg:text-2xl font-bold whitespace-pre w-2/6 lg:w-2/5  ">Confirm Password</label>
          <Input
          className='md:flex-1'
            placeholder="Confirm Password"
            type="password"
            onChange={(e) =>
              setData({
                ...data,
                confirmpassword: e.target.value,
              })
            }
            validation={(e) => confirmPassValidation(e, data?.new_password)}
            errorMsg={confirmPassMsg}
            required={true}
            value={data?.confirmpassword || ""}
          />
        </div>
        <Button
        className={'w-fit ml-auto'}
          type="submit"
          loading={loading}
          disabled={
            !formValidation(
              passValidation(data?.old_password),
              passValidation(data?.new_password),
              confirmPassValidation(data?.confirmpassword, data.new_password)
            )
          }
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
