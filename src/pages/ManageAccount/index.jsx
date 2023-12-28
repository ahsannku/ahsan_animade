import axios from "axios";
import React, { useEffect, useState } from "react"; // useEffect
import { IoIosAdd, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { PlatFormCard } from "../../components";
import { getPrintfulproduct } from "../../redux/services/getPrintfulProducts";
import { printfulAuth } from "../../redux/services/printfulAuth";
import { customAlert } from "../../utils/alert";

const ManageAccount = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { access_token, products, error, loadind } = useSelector(
    (state) => state.printful
  );
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const clientId = import.meta.VITE_APP_PRINTFUL__CLIENT__ID;

  // ==== get token ======
  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );

  useEffect(() => {
    if (token && !access_token) {
      dispatch(printfulAuth(token));
    }
  }, [access_token, dispatch, token]);

  useEffect(() => {
    if (access_token && token) {
      dispatch(getPrintfulproduct());
    }
  }, [access_token, dispatch, token]);
  const fetchPrintfulProducts = async () => {
    try {
      const res = await axios.get(
        `https://animade-production.up.railway.app/api/get-printful-products/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      // Handle the response data as needed
      console.log(res.data); // Log the response data for demonstration
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error(error);
    }
  };
  // ==== add product ====== //#//
  const addProductToPrintFul = async () => {
    setisLoading(true);
    setisError(false);
    try {
      const res = await axios.post(
        `https://backednlatestanimade-production.up.railway.app/printful-proxy/`,
        {
          sync_product: {
            name: "T-Shirt",
            thumbnail: "https://picsum.photos/200/300",
          },
          sync_variants: [
            {
              retail_price: 21.0,
              variant_id: 4011,
              files: [
                {
                  url: "https://picsum.photos/200/300?image=1",
                },
                {
                  type: "back",
                  url: "https://picsum.photos/200/300?image=1",
                },
              ],
            },
            {
              retail_price: 21.0,
              variant_id: 4012,
              files: [
                {
                  url: "https://picsum.photos/200/300?image=1",
                },
                {
                  type: "back",
                  url: "https://picsum.photos/200/300?image=1",
                },
              ],
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setisLoading(false);
      setisError(false);
      customAlert("You Add A Product !", "success");
      dispatch(getPrintfulproduct());
    } catch (error) {
      setisLoading(false);
      setisError(error);
      customAlert("Some thing wrong !", "error");
    }
  };

  const title = (
    <h5 className="text-[32px] font-bold font-poppins flex flex-wrap gap-2">
      <span className="font-normal">
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Manage Accounts
    </h5>
  );

  if (loadind)
    return (
      <span
        className={`special-spinner absolute top-[50%] left-[50%] h-[100px] w-[100px] `}
      ></span>
    );

  return (
    <div className={""}>
      <div className="max-w-[800px] ">
        <div className="flex md:items-center flex-col md:flex-row md:justify-between gap-2 mb-5">
          <h5 className="text-xl lg:text-2xl font-bold">
            Printful Store - Print On Demand
          </h5>
          {!access_token && (
            <a
              href={`https://www.printful.com/oauth/authorize?client_id=app-4613042&redirect_url=https://www.animade.world/settings/manage-account`}
              target="_blank"
              className="flex text-base lg:text-2xl items-center gap-1 py-3 px-4 border-[2px] border-solid rounded-lg w-fit"
              rel="noreferrer"
            >
              <IoIosAdd className="text-[24px] lg:text-[34px]" />
              Link New Account
            </a>
          )}
        </div>
        {error?.message && (
          <p className="custom_error">{error?.message || "ERROR"}</p>
        )}
        {error?.response?.data?.result && (
          <p className="custom_error">
            {error?.response.data.result || "ERROR"}
          </p>
        )}
        {loadind && <span className={`special-spinner`}></span>}
        {!products?.length && access_token ? <p>No Products yet!</p> : ""}
        {!access_token ? (
          <p className="text-xl lg:text-2xl">You New A New Account !</p>
        ) : (
          ""
        )}
        {products?.length ? (
          <div className="">
            {new Array(3).fill("").map((_, i) => (
              <PlatFormCard key={i} type="Printful" />
            ))}
          </div>
        ) : (
          ""
        )}
        {access_token ? (
          <button
            style={{
              border: "2px solid #FFF",
              color: "#FFF",
              padding: "10px 24px",
              margin: "20px 0",
              borderRadius: "8px",
            }}
            onClick={async () => {
              await addProductToPrintFul();
              await fetchPrintfulProducts(); // Refresh the product list
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className={`special-spinner`}></span>
            ) : (
              "Add Product +"
            )}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ManageAccount;
