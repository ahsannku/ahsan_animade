import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../api"; // Replace with your API library
import Image from "../../assets/Rectangle 4.png";
import { Button } from "../../components";
import { customAlert } from "../../utils/alert";

const Upload = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedVariantId } = useParams();

  const updatePass = async () => {
    setLoading(true);
    try {
      // Your update password logic here
    } catch (error) {
      // Handle errors
    }
  };

  // Example dummy image links
  const dummyImage1 = "https://example.com/image1.jpg";
  const dummyImage2 = "https://example.com/image2.jpg";
  const { state } = useLocation();
  const selectedDesignsData = state?.selectedDesignsData || [
    { imageUrl: dummyImage1, thumbnailUrl: dummyImage1 },
    { imageUrl: dummyImage2, thumbnailUrl: dummyImage2 },
    // You can add more dummy image objects as needed
  ];
  const { variantId } = useParams();

  const { access_token } = useSelector((state) => state.printful);

  // Define the category options
  const categoryOptions = [
    "T-shirt",
    "Posters",
    "Long sleeve shirts",
    "Phone cases",
    "Stickers",
  ];

  // Mapping of category to variant_id
  const categoryToVariantId = {
    "T-shirt": 473,
    Posters: 1349,
    "Long sleeve shirts": 3448,
    "Phone cases": 7910,
    Stickers: 10163,
  };

  const handleUploadProducts = async () => {
    console.log("Selected Designs:", selectedDesignsData); // Log selected designs
    console.log("Access Token:", access_token); // Log the access token
    console.log("Variant IDs:", selectedVariantId); // Log variantIds
    console.log("Selected Designs:", selectedDesignsData); // Log selected designs

    setLoading(true);

    try {
      // Iterate over the selected designs and call the API for each product
      for (const design of selectedDesignsData) {
        const { imageUrl, thumbnailUrl } = design;
        console.log("Design:", design);

        const variantId = categoryToVariantId[data.selectedCategory];
        console.log("Image URL:", imageUrl); // Log image URL for debugging
        console.log("Thumbnail URL:", thumbnailUrl); // Log thumbnail URL for debugging

        const productData = {
          sync_product: {
            name: data.productName,
            thumbnail: design,
          },
          sync_variants: [
            {
              retail_price: data.retailPrice,
              variant_id: selectedVariantId,
              files: [
                {
                  url: design,
                },
                {
                  type: "back",
                  url: design,
                },
              ],
            },
          ],
        };

        // Make a separate API request for each product
        const res = await api.post(
          `https://backednlatestanimade-production.up.railway.app/printful-proxy/`,
          productData,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
      }

      setLoading(false);
      customAlert("Products Added Successfully!", "success");
    } catch (error) {
      setLoading(false);
      customAlert("Something went wrong!", "error");
      console.error("Error adding products to Printful:", error);
    }
  };
  const baseFields = [
    {
      type: "text",
      placeholder: "Item Name",
      label: "Name",
    },
    {
      type: "textarea",
      placeholder: "Provide a detailed description of your creation",
      label: "Description",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex gap-6 relative lg:flex-col ">
        <div className="h-[110px] w-[110px] lg:h-[150px] lg:w-[150px] rounded-xl lg:rounded-3xl overflow-hidden border-4 border-solid">
          <img src={Image} alt="" />
        </div>
        <div className="h-[110px] w-[110px] lg:h-[150px] lg:w-[150px] rounded-xl lg:rounded-3xl overflow-hidden border-4 border-solid border-[#7d50ff] text-lg flex justify-center items-center">
          Products
        </div>
      </div>
      <div className="">
        <h3 className={`text-lg lg:text-2xl font-bold mb-4`}>
          products will be uploaded to printful store that is authorized make
          sure to connect ot printful before upload
        </h3>
        <div className="mb-8">
          <h5 className="text-lg sm:text-xl md:text-3xl text-[32px] font-bold font-poppins gap-3 flex">
            <span className="font-normal">
              <Link to="/settings">Settings</Link>
            </span>
            <IoIosArrowBack /> Upload Products
          </h5>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUploadProducts();
          }}
          className="w-full flex flex-col border-2 rounded-md p-2 md:p-4 gap-2 md:gap-5 lg:gap-10"
        >
          <div className="flex flex-col md:flex-row w-full lg:items-center justify-between lg:mt-10">
            <label className="text-lg font-semibold md:text-2xl md:font-bold">
              Product name
            </label>
            <input
              className="relative bg-white text-[#140e18] rounded-lg h-[54px] sm:h-[60px] px-[18px] text-[20px] md:w-3/5"
              type="text"
              placeholder="Product label"
              value={data.productName}
              onChange={(e) =>
                setData({
                  ...data,
                  productName: e.target.value,
                })
              }
              required={true}
            />
          </div>

          <div className="flex flex-col md:flex-row w-full lg:items-center justify-between">
            <label className="text-lg font-semibold md:text-2xl md:font-bold">
              Retail Price
            </label>
            <input
              className="relative bg-white text-[#140e18] rounded-lg h-[54px] sm:h-[60px] px-[18px] text-[20px] md:w-3/5"
              type="number"
              placeholder="Retail price"
              value={data.retailPrice}
              onChange={(e) =>
                setData({
                  ...data,
                  retailPrice: e.target.value,
                })
              }
              required={true}
            />
          </div>
          <label className="text-lg font-semibold md:text-2xl md:font-bold">
            Description
          </label>
          <textarea
            className="relative bg-white text-[#140e18] rounded-xl h-[54px] sm:h-[60px] px-[18px] flex justify-between items-center py-4 text-[20px] min-h-[300px]" // Apply the desired CSS class for styling
            rows="4"
            placeholder="Provide a detailed description of your creation"
          ></textarea>
          <Button type="submit" loading={loading} className={"w-fit ml-auto"}>
            Upload Selected Products
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
