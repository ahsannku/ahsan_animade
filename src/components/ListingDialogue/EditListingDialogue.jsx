import React, { useEffect, useState, useMemo } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import ProductCreationFooter from "../ProductCreationFooter";
import SelectComponent from "../SelectComponent";
import { toast } from "react-toastify";
import { editQueuedProduct } from "../../redux/features/printfulSlice";
import { useNavigate } from "react-router-dom";

const EditListingDialogue = ({ singleProduct, setOpenModal, queuedProduct = null }) => {
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [variantPrice, setVariantPrice] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const profit = useMemo(() => {
    const _productPrice = parseFloat(productPrice);
    const _variantPrice = parseFloat(variantPrice);
    if(isNaN(_productPrice) || isNaN(_variantPrice)){
      return 0;
    }
    if(_variantPrice > _productPrice){
      return 0;
    }
    return (_productPrice - _variantPrice).toFixed(2);
  }, [productPrice, variantPrice]);
  const { product, variants } = singleProduct;
  const { image, title, type } = product;
  const queuedProducts = useSelector(state => state.printful?.queuedProducts ?? []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log('queuedProducts chanhed', queuedProducts);
  }, [queuedProducts]);

  useEffect(() => {
    // console.log(queuedProduct);
    setData({
        itemName: queuedProduct?.sync_product?.name,
    })
    setVariantPrice(queuedProduct?.sync_variants?.[0]?.retail_price ?? '');
    if(queuedProduct?.sync_variants?.length > 0){
        const _selectedVariants = [];
        queuedProduct.sync_variants.forEach(variant => {
          const foundVariant = variants?.find(v => {
            return v.id === variant.variant_id
        })
          if(foundVariant){
            _selectedVariants.push(foundVariant);
          }
        });
        setSelectedVariants(_selectedVariants);
    }
  }, [queuedProduct, singleProduct]);

  const saveUpdatedProduct = () => {
    const productData = {
        sync_product: {
          name: data?.itemName,
          external_id: queuedProduct?.sync_product?.external_id,
          thumbnail:  queuedProduct?.sync_product?.thumbnail,
          product_id: queuedProduct?.sync_product?.product_id,
          printfulId: product?.id
        },
        sync_variants: selectedVariants.map((item) => ({
          variant_id: item.id,
          retail_price: variantPrice,
          files: [
            {
              url: item.image,
            },
          ],
        })),
      };
      dispatch(editQueuedProduct(productData))
      toast.success('Product updated in the queue for creation, Navigating to selected designs',{
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      setOpenModal(false);
  }

  const inputChangeHandler = (e, id) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
  };

  const variantSelectHandler = (item) => {
    if (
      selectedVariants.some((selectedVariant) => selectedVariant.id === item.id)
    ) {
      setSelectedVariants(
        selectedVariants.filter(
          (selectedVariant) => selectedVariant.id !== item.id
        )
      );
      setVariantPrice("");
    } else {
      setSelectedVariants([...selectedVariants, item]);
      setVariantPrice(item.price);
    }
  };

  const leftBtnClicked = () => {
    setOpenModal(false);
  };

  return (
    <div className=" w-full px-[50px] py-4">
      <div className="flex items-center">
        <div className=" h-full flex items-center w-[80px] border-r-[1px] border-[#FFFFFF]">
          <button className="" onClick={() => setOpenModal(false)}>
            <IoIosArrowBack fontSize={40} />
          </button>
        </div>

        <h2 className="text-xl lg:text-[32px] ml-10 font-bold">
          Edit Your Listing
        </h2>
      </div>

      <div className="flex flex-col gap-5 my-5">
        <div className="flex gap-5 h-[250px] lg:h-[300px]">
          <img
            src={image}
            alt=""
            className="w-[30%] rounded-3xl border-[3px] border-[#7b63ab]"
          />

          <div style={{overflowY:"scroll"}} className="w-[70%] rounded-[20px] px-[20px] py-[10px] border-[3px] border-[#7B63AB]">
            <div className="flex flex-col items-start">
              <label htmlFor="" className="">
                Title
              </label>
              <Input
                placeholder="Item title"
                type="text"
                className="text-left w-full"
                onChange={(e) => inputChangeHandler(e, "itemName")}
                value = {data?.itemName || ''}
              />
            </div>

            <div className="text-left mt-2 flex flex-col w-full">
              <label htmlFor="">Description</label>
              <Input
              type='textarea'
                placeholder="Provide a detailed description of your creation"
                className="!rounded-[10px] !min-h-[135px]"
                onChange={(e) => inputChangeHandler(e, "desc")}
                value = {data?.desc || ''}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="h-[162px] w-[30%] flex flex-col px-6 justify-center rounded-[20px] border-[3px] border-[#7B63AB]">
            <h2 className="text-xl lg:text-[20px] font-bold" style={{textTransform: 'capitalize'}}>{type?.toLowerCase()}</h2>
            <h4 className="text-sm lg:text-[17px] font-normal">{title}</h4>
          </div>

          <div className="w-[70%] h-[162px] rounded-[20px] px-[20px] py-[5px] border-[3px] border-[#7B63AB] flex items-center justify-between ">
            <div className="flex flex-col items-start">
              <label className="text-[20px] font-bold">Variants </label>
              <div className="h-[98px] flex flex-wrap mt-2 overflow-scroll">
                {variants.map((item, index) => (
                  <div
                    key={index}
                    className={`w-[40px] h-[40px] rounded-[5px] mx-[5px] my-[5px]`}
                    style={{
                      backgroundColor: `${item.color_code}`,
                      border: selectedVariants.some(
                        (selectedVariant) => selectedVariant.id === item.id
                      )
                        ? "2px solid #7B63AB"
                        : "",
                    }}
                    onClick={() => variantSelectHandler(item)}
                  ></div>
                ))}
              </div>
            </div>

            {/* <div className="h-[124px] rounded-[20px] px-[10px] py-[5px] border border-[ #7B63AB]">
              <div className="flex items-center justify-center">
                <h4 className="text-[20px] font-normal">Sizes</h4>
              </div>

              <div className="flex justify-between gap-2 items-center ">
                <div className="flex flex-col items-start ">
                  <label className="text-[20px] font-normal">From</label>
                  <SelectComponent />
                </div>

                <div className="flex flex-col items-start">
                  <label className="text-[20px] font-normal">To</label>
                  <SelectComponent />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex gap-5">
          <div className="h-[162px] w-[30%] rounded-[20px] flex overflow-hidden border-[3px] border-[#7B63AB]">
            <div className="flex items-center justify-center w-[50%] h-[100%]">
              <h4 className="text-lg lg:text-[20px] font-bold">Printful Price</h4>
            </div>
            <div className="flex items-center justify-center w-[50%] h-[100%] bg-[#6F6F6F]">
              <h4>
                {"$ "}
                {variantPrice}{" "}
              </h4>
            </div>
          </div>

          <div className="w-[70%] h-[162px] rounded-[20px] flex overflow-hidden border-[3px] border-[#7B63AB]">
            <div className="flex-1 flex justify-center items-center">
              <h4 className="text-xl lg:text-[20px] font-bold">Product Price</h4>
            </div>
            <div className="flex-1 bg-[#6F6F6F] flex h-full gap-5 items-center justify-center">
              <label htmlFor="price">$</label>
              <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="____.__" className=" w-[40%] text-left bg-transparent" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-center items-center h-[50%] border-[1px] border-[#7B63AB]">
                <h4 className="text-xl lg:text-[20px] font-bold">Profit Per Sale</h4>
              </div>
              <div className="flex justify-center items-center h-[50%]">
                <h4>{profit}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductCreationFooter
          rightBtnText="Save Changes"
          rightBtnClickHandler={saveUpdatedProduct}
          leftBtnText="Go Back"
          leftBtnClickHandler={leftBtnClicked}
        />
      </div>
    </div>
  );
};

export default EditListingDialogue;
