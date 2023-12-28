import React, { useState } from "react";
import { Link } from "react-router-dom";

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./.module.scss";

const ProductCard = ({ product, onSelectionChange, isSelected }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(product[0]); // Initialize with the default product
  const [click, setClick] = useState(false); // Track click state

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);

    // Find the selected product based on color and size
    const updatedProduct = product.find(
      (p) =>
        p["Product Color"] === newColor && p["Product Size"] === selectedSize
    );

    // Update the selected product and call the onSelectionChange callback
    if (updatedProduct) {
      setSelectedProduct(updatedProduct);

      if (onSelectionChange) {
        onSelectionChange(
          updatedProduct["Variant ID"],
          updatedProduct["Product Price"],
          updatedProduct["Product Image"]
        );
      }
    }
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);

    // Find the selected product based on color and size
    const updatedProduct = product.find(
      (p) =>
        p["Product Color"] === selectedColor && p["Product Size"] === newSize
    );

    // Update the selected product and call the onSelectionChange callback
    if (updatedProduct) {
      setSelectedProduct(updatedProduct);

      if (onSelectionChange) {
        onSelectionChange(
          updatedProduct["Variant ID"],
          updatedProduct["Product Price"],
          updatedProduct["Product Image"]
        );
      }
    }
  };

  const handleClick = () => {
    // Change the background color and border width on click
    setClick(!click);

    // Save the Variant ID of the selected product
    if (onSelectionChange) {
      onSelectionChange(
        selectedProduct["Variant ID"],
        selectedProduct["Product Price"],
        selectedProduct["Product Image"]
      );
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row gap-3 lg:gap-10 p-2 items-center rounded-lg bg-dark-blue-1 `}
      onClick={handleClick}
    >
      <img
        className={`rounded-lg lg:rounded-2xl border-2 lg:border-4 p-4 lg:p-2 md:w-[90%] lg:w-[120px] lg:h-[100px] ${
          click && "product-box"
        }`}
        src={selectedProduct["Product Image"]}
        alt={selectedProduct["Product Name"]}
      />
      <div
        className={`border-2 lg:border-4 p-2 text-center flex flex-col md:flex-row items-center md:justify-between gap-2 rounded-lg lg:rounded-2xl md:w-full lg:h-[100px] ${
          click && "product-box"
        }`}
      >
        <div className="text-base lg:text-2xl font-semibold md:flex-1 lg:border-r-2 border-solid">
          {selectedProduct["Product Name"]}
        </div>
        <div className="md:flex-1 lg:border-r-2 border-solid">
          <select
            className="text-xl lg:text-lg font-bold cursor-pointer bg-dark-blue p-2 lg:p-2 rounded-md border-1 border-solid border-white w-[150px] lg:w-fit border-2 transition-colors duration-300 ease-in-out outline-none appearance-none"
            value={selectedColor}
            onChange={handleColorChange}
          >
            <option value="">Select Color</option>
            {product.map((p) => (
              <option key={p["Variant ID"]} value={p["Product Color"]}>
                {p["Product Color"]}
              </option>
            ))}
          </select>
        </div>
        <div className="md:flex-1">
          <select
            className="text-xl lg:text-lg font-bold cursor-pointer bg-dark-blue p-2 lg:p-2 rounded-md border-1 border-solid border-white w-[150px] lg:w-fit border-2 transition-colors duration-300 ease-in-out outline-none appearance-none"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value="">Select Size</option>
            {product.map((p) => (
              <option key={p["Variant ID"]} value={p["Product Size"]}>
                {p["Product Size"]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        className={`border-2 lg:border-4 p-2 px-5 text-center items-center flex rounded-lg lg:rounded-2xl w-full lg:w-fit lg:h-[100px] ${
          click && "product-box"
        }`}
      >
        <Link to="/">
          ${selectedProduct["Product Price"]}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
