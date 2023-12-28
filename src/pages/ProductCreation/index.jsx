import React, { Fragment, useEffect, useState } from "react";
import ProductCreationHeader from "../../components/ProductCreationHeader";
import ProductCreationFooter from "../../components/ProductCreationFooter";
import ProductBar from "../../components/ProductBar";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FooterBtns from "../../components/FooterBtns";

const ProductCreation = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [productToDelete, setProductToDelete] = useState({})
  const selectedDesigns = useSelector((state) => state.printful.selectedDeigns);
  const navigate = useNavigate()

  useEffect(() => {
    console.log('selectedDesigns', selectedDesigns);
  }, [selectedDesigns])

  const handleSaveProducts = () => {
    navigate('/product-loading');
  }

  const handleFooterBackClick = () => {
      navigate(-1);
  }

  return (
    <div className=" px-[50px] py-[20px] ">
      <ProductCreationHeader type="product" />
      <div className="my-[20px]">
        {selectedDesigns?.map((item, i) => {
          return (
            <Fragment key={item?.id ?? `ProductBar-${i}`}>
              <ProductBar item={item}  setProductToDelete={setProductToDelete}/>
            </Fragment>
          );
        })}
        {
          selectedDesigns?.length === 0 && 
          <h2 className="text-center">No Designs Selected</h2>
        }
      </div>
      <div>
        <FooterBtns>

        <ProductCreationFooter
          edit={isEdit}
          rightBtnText="Upload Products"
          leftBtnText="Go Back"
          leftBtnClickHandler={handleFooterBackClick}
          rightBtnClickHandler={handleSaveProducts}
        />
        </FooterBtns>
      </div>
    </div>
  );
};

export default ProductCreation;
