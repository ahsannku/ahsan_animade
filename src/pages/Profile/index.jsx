import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultImage from "../../assets/profile.png";
import { Button, Cardo, FooterBtns } from "../../components";
import ProductCreationFooter from "../../components/ProductCreationFooter";
import UserAccountLimit from "../../components/UserAccountLimit";
import { useNavigate } from "react-router-dom";
import { setSelectedDeigns } from "../../redux/features/printfulSlice";
import { getAllSyncProducts } from "../../redux/services/getAllSyncProducts";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns";
// import { setSelectedDeigns } from "../../redux/features/userSlice";

// const productData = {
//   sync_product: {
//     name: "1st product",
//   },
//   sync_variants: [
//     {
//       variant_id: 1,
//       files: [
//         {
//           url: "https://s3.staging.printful.com/products/172/6883_1527683114.jpg",
//         },
//       ],
//     },
//   ],
// };

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  // const { allSyncProducts, loading, error } = useSelector(
  //   (state) => state.printful
  // );
  const [selectedItems, setSelectedItems] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCreatedDesigns());
  }, [])

  const deselectHandler = () => {
    setSelectedItems([]);
  };
  const designsSlectionHandler = () => {

    // console.log(selectedItems);
    dispatch(setSelectedDeigns(selectedItems));
    navigate("/product-creation");
  };

  // const designsSlectionHandler = () => {
  //   console.log(selectedItems);
  //   dispatch(setSelectedDeigns(selectedItems)).then(() => {
  //     dispatch(getAllSyncProducts());
  //     navigate("/product-creation");
  //   });
  // };

  // const designsSlectionHandler = async () => {
  //   console.log(selectedItems);

  //   try {
  //     await dispatch(getAllSyncProducts());

  //     dispatch(setSelectedDeigns(selectedItems));

  //     navigate("/product-creation");
  //   } catch (error) {
  //     console.error("Error fetching sync products:", error);
  //   }
  // };

  const designs = useSelector((state) => state.user.createdDesigns);
  console.log(designs);
  return (
    <>
      <div className="">
        <header className=" my-3 mb-10">
          <nav className="flex flex-col-reverse md:flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            <div
              className={
                "flex flex-col md:flex-row items-center gap-4 lg:gap-10 "
              }
            >
              <img
                src={DefaultImage}
                alt="user__image"
                className="md:h-[90px] md:w-[90px] h-[130px] w-[130px] lg:h-[200px] lg:w-[200px]"
              />
              <span className="text-[26px] lg:text-[32px] font-bold font-poppins">
                Hello, {user?.username || "User"}
              </span>
            </div>
            <UserAccountLimit />
          </nav>
        </header>
        <div className="">
          <h3 className="text-lg lg:text-2xl font-bold mb-4 font-poppins">
            Past Designs ({designs?.length ?? 0})
          </h3>
          <Cardo
            showImageAttribute={true}
            list={designs}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
      </div>
      <FooterBtns>
      {selectedItems.length > 0 ? (
          <ProductCreationFooter
            selected={true}
            count={selectedItems.length}
            rightBtnText="Create Your Products"
            leftBtnText="Deselect All"
            leftBtnClickHandler={deselectHandler}
            rightBtnClickHandler={designsSlectionHandler}
          />
      ) : (
          <div className="ml-auto">
            <Button to="/">Create Your Products</Button>
          </div>

      )}
      </FooterBtns>

    </>
  );
};

export default Profile;
