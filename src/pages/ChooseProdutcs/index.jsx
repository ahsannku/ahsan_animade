import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FooterBtns } from "../../components";
import ProductCard from "../../components/ProductCard";
import productData from "./productData.json";
const ChooseProdutcs = () => {
  const [tshirtData, setTshirtData] = useState([]);
  const [selectedVariantId, setSelectedVariantId] = useState(null); // Store the selected variant ID
  const navigate = useNavigate();

  useEffect(() => {
    setTshirtData(productData);
  }, []);

  const handleDropdownChange = (variantId) => {
    // Set the selected variant ID when the dropdown changes
    setSelectedVariantId(variantId);
  };
  const { state } = useLocation();

  const selectedDesignsData = state?.selectedDesigns || []; // Default to an empty array if not present

  const handleclick = () => {
    // Navigate to the Upload page with the selected variant ID and selected designs as route state
    if (selectedVariantId !== null) {
      navigate(`/upload-products/${selectedVariantId}`, {
        state: { selectedDesignsData }, // Pass only selectedDesignsData
      });
    } else {
      // Handle the case when no variant is selected
      console.log("Please select a product before proceeding.");
    }
  };
  
  
  return (
    <>
      <div className='w-full '>
        <h3 className="text-xl md:text-[32px] font-bold mb-5 font-poppins">
          Which products would you like to print on?
        </h3>
        <div
          className={''}
        >
          <div className='text-base  font-normal md:text-2xl lg:font-bold mb-5'>
            <h5 >
              Choose from your Printful Templates
            </h5>
          </div>
          <div>
            {tshirtData.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onSelectionChange={handleDropdownChange}
                isSelected={selectedVariantId === product["Variant ID"]} // Check if the current product is selected
              />
            ))}
          </div>
        </div>
      </div>
      <FooterBtns>
        <div>
          <button onClick={handleclick}>Add Product Information</button>
        </div>
      </FooterBtns>
    </>
  );
};

export default ChooseProdutcs;
