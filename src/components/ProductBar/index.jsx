import React, { useEffect, useMemo, useRef, useState } from "react";
import Cell from "../Cell";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPrintfulproduct } from "../../redux/services/getPrintfulProducts";
import { deleteQueuedProduct, setSelectedDesignForProduct } from "../../redux/features/printfulSlice";
import { getSinglePrintfulProduct } from "../../redux/services/getSinglePrintfulProduct";
import EditListingDialogue from "../ListingDialogue/EditListingDialogue";


const Accordion = ({ children, noborderTop }) => {
  return (
    <div
      className={`py-[24px] xl:p-4 lg:p-3.5 border-t border-b border-[#c4c4c4] ${
        noborderTop && "border-t-0 pt-0"
      }`}
    >
      <div className="flex items-center justify-between flex-col">
        {children}
      </div>
    </div>
  );
};

const ProductBar = ({ item }) => {
  const { image, desc } = item;

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const currentEditProduct = useRef(null);

  const queuedProducts = useSelector(state => state.printful?.queuedProducts ?? []);
  const { singleProduct, loading, error, selectedDesignForProductCreation } = useSelector(
    (state) => state.printful
  );
  
  const currentDesignProducts = useMemo(() => {
    return queuedProducts.filter(qp => qp.sync_product.external_id === item.id)
  }, [queuedProducts, item.id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(item.id);
    console.log('queuedProducts', queuedProducts)
  }, [queuedProducts]);

  const createProductHandler = () => {
    dispatch(setSelectedDesignForProduct(item));
    dispatch(getPrintfulproduct());
    navigate("/product-collection");
  };

  const handleRemoveProduct = (product) => {
    dispatch(deleteQueuedProduct(product))
  }

  const handleEditProduct = (product) => {
    currentEditProduct.current = product;
    dispatch(getSinglePrintfulProduct(product?.sync_product?.printfulId));
    setOpenModal(true);
  }

  // useEffect(() => {
  //   if(singleProduct){
  //   }
  // }, [singleProduct]);

  return (
    <Accordion>
      <div className="flex flex-col md:flex-row justify-center items-center flex-1 relative w-full gap-2 md:gap-0">
        <Cell flex="1.2" className="border-r-[1px] border-[#7B63AB]">
          <div className="flex flex-col md:flex-row items-center gap-4 md:w-full relative">
            <img
              src={image}
              alt=""
              className="h-[75px] w-[75px] lg:h-[100px] lg:w-[100px] rounded-2xl border-2"
            />
            <span>{"Selected Design"}</span>
          </div>
        </Cell>
        <Cell flex="1" className="border-x-[1px] border-[#7B63AB]">
          {currentDesignProducts?.length ?? 0} <span> Products</span>
        </Cell>
        <Cell flex="1.2" className="border-x-[1px] border-[#7B63AB]">
          {/* <Link
            to=""
            className="drop-button red"
            onClick={createProductHandler}
          >
            Create Product
          </Link> */}

          <span className="drop-button red" onClick={createProductHandler}>
            Create Product
          </span>
        </Cell>
        <span
          className={`absolute top-0 right-0 md:relative md:bg-transparent px-1 md:text-white rounded-md bg-white text-black cursor-pointer lg:px-5 lg:h-18 lg:w-24 flex items-center justify-center text-base lg:text-3xl py-1 ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <BsChevronDown color="#7B63AB" />
        </span>
      </div>
      {open && (
        <div className="flex flex-col w-full relative ">
          {currentDesignProducts?.map((product, i) => (
            <div
              className="flex items-center mt-6 flex-col md:flex-row py-5 mx-2 md:mx-0 md:py-0 rounded-2xl bg-[rgba(75,74,74,.38)] md:bg-transparent gap-2 md:gap-0"
              key={product.sync_product.id}
            >
              <Cell flex="1.2">
                <div className="flex flex-col md:flex-row  items-center gap-4 md:w-full drop_connection">
                  <img
                    src={product?.sync_variants?.[0]?.files?.[0]?.url}
                    alt=""
                    className="h-[75px] w-[75px] lg:h-[100px] lg:w-[100px] rounded-2xl border-2"
                  />
                  <span>{product?.sync_product?.name}</span>
                </div>
              </Cell>
              <Cell flex="1" className="">
                {product?.sync_variants?.length} <span>Variants</span>
              </Cell>
              <Cell flex="1.2" className="flex flex-row ">
                <button onClick={() => handleRemoveProduct(product)} className="w-1/2 drop-button rounded-xl gray lg:mx-2">Remove</button>
                |
                <button onClick={() => handleEditProduct(product)} className="w-1/2 lg:mx-2 drop-button rounded-xl purple">Edit</button>
              </Cell>

              <span
                className={`absolute top-0 right-0 md:relative md:bg-transparent md:text-white rounded-md bg-white text-black cursor-pointer md:px-3 lg:h-18 lg:w-24 flex items-center justify-center text-3xl ${
                  open && "rotate-180"
                }`}
              ></span>
            </div>
          ))}
        </div>
      )}
      {!loading && openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100000]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-dark-blue-1 opacity-80"
            onClick={() => setOpenModal(false)}
          ></div>
          <div className="text-base z-[100] bg-[#2c3135] rounded-lg h-[95%] border w-[90%] xl:w-[70%] text-center md:text-2xl overflow-scroll">
            <EditListingDialogue
              singleProduct={singleProduct}
              setOpenModal={setOpenModal}
              queuedProduct={currentEditProduct.current}
            />
          </div>
        </div>
      )}
    </Accordion>
  );
};

export default ProductBar;
