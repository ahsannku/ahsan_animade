import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ManageIcon } from "../../icons";
import { logout } from "../../redux/services/logout";
import { settingsLinks } from "../../utils/data";

const Settings = () => {
  const { isLoaing } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={''}>
      <h5 className="mb-8 text-[32px] font-bold font-poppins">Settings</h5>
      <div className='flex flex-col  md:w-[600px]  gap-6'>
        {settingsLinks.map((link, i) => (
          <Link to={link.to} key={i} className='text-base lg:text-2xl flex items-center gap-6  border-2 border-solid rounded-xl md:rounded-3xl p-3 md:p-6 bg-[#140e18]'>
            <link.icon className={'h-7 w-7 md:h-10 md:w-10'}/>
            {link.label}
          </Link>
        ))}
        <button
          className='text-base lg:text-2xl flex items-center gap-6 bg-[#140e18] border-2 border-solid  rounded-xl md:rounded-3xl p-3 md:p-6'
          onClick={async () =>
            await dispatch(logout()).then((res) => {
              if (!res?.error) {
                toast.success("Success Logout!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "toast__fiy",
                });
                navigate("/");
              } else {
                toast.error(res?.error.message, {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "toast__fiy",
                });
              }
            })
          }
          disabled={isLoaing}
        >
          {isLoaing ? (
            <span className="special-spinner"></span>
          ) : (
            <>
              <ManageIcon className={'h-7 w-7 md:h-10 md:w-10'}/>
              Log Out
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Settings;
