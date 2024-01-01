import React, { useMemo, useState } from "react";
import loadingBg from "../../assets/loadingBg.png";
import Logo from "../../assets/sLogo.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { appConstants } from "../../config/appConstants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { clearAllProducts, setSelectedDeigns } from "../../redux/features/printfulSlice";

const ProductLoading = () => {
  const [loading, setloading] = useState(false);
  const [processedProducts, setProcessedProducts] = useState(0);
  const _queuedProducts = useSelector((state) => state.printful?.queuedProducts ?? []);
  const token = useSelector(state => state.auth.token);
  const queuedProducts = useMemo(() => {
    return _queuedProducts.map(p => {
      return {...p, sync_product: {...p?.sync_product, external_id: p?.sync_product?.product_id}}
    })
  }, [_queuedProducts])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startUploading = async () => {
    if (queuedProducts?.length > 0) {
      setloading(true);
      for (let i = 0; i < queuedProducts.length; i++) {
        const product = queuedProducts[i];
        await axios
          .post(`https://animade-production.up.railway.app/cproduct/`, product, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            console.log("uploaded", res.data);
            setProcessedProducts((prev) => ++prev);
          })
          .catch(console.error);
      }
      toast.success("Products uploaded successfully. Navigating back.", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      dispatch(setSelectedDeigns([]))
      dispatch(clearAllProducts());
      setTimeout(() => {
        navigate('/single-input');
      }, 2000)
      setProcessedProducts(0);
      setloading(false);
    } else {
      toast.warn("No products selected for uploading", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
    }
  };

  return (
    <div
      className="h-[100vh] w-full p-4"
      style={{
        backgroundImage: `url(${loadingBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div>
        <img src={Logo} height={80} width={80} alt="logo" />
      </div>

      <div className="flex flex-col justify-center items-center h-[60vh] text-center font-normal">
        <h2 className="text-[48px]">
          We are uploading your <br />
          products, this may take a <br />
          few moments.{" "}
        </h2>
        <div>{loading && <span className="special-spinner"></span>}</div>
        {loading && (
          <h2>
            Uploading: <br /> {processedProducts + 1} Of {queuedProducts?.length}
          </h2>
        )}

        <button disabled={loading} onClick={startUploading}>
          {loading ? "Uploading" : "Start Uploading"}
        </button>
      </div>
    </div>
  );
};

export default ProductLoading;
