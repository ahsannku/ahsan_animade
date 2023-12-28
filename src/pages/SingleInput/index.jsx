import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Cardo,
  CardsList,
  FooterBtns,
  GenerateForm,
} from "../../components";
import { addCreatedDesign } from "../../redux/services/addsaveddesigns";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns"; // Import the getCreatedDesigns action
import { printfulAuth } from "../../redux/services/printfulAuth";
import { textToImage } from "../../redux/services/textToImage";
import ProductCreationFooter from "../../components/ProductCreationFooter";
import { setSelectedDeigns } from "../../redux/features/printfulSlice";

const SingleInput = () => {
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [data, setData] = useState({ samples: 3 });
  const dispatch = useDispatch();
  const { textToImageResluts, error, isLoading, isError } = useSelector(
    (state) => state.AIResults
  );
  const location = useLocation();
  const navigate = useNavigate();

  const clientId = import.meta.VITE_APP_PRINTFUL__CLIENT__ID;

  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );

  const { createdDesigns } = useSelector(
    (state) => state // Update the selector to include createdDesigns
  );
    console.log(error, isLoading, isError);
  
  const { access_token, products, loadind } = useSelector(
    (state) => state.printful
  );

  useEffect(() => {
    // Step 3: Automatically add the generated images to saved designs when available
    if (textToImageResluts && textToImageResluts.length > 0) {
      console.log(textToImageResluts)
      // // Assuming you want to save all the generated images automatically.
      // textToImageResluts.forEach((generatedImage) => {
      //   const description = data.prompt; // You can set a default description if needed.
      //   const number = 1; // Set your desired default number here.

      //   // Dispatch the addCreatedDesign action to add the generated image to saved designs
      //   dispatch(
      //     addCreatedDesign({
      //       image: generatedImage,
      //       desc: description,
      //       number: number || "Your fallback default value",
      //     })
      //   );
      // });
    }
  }, [textToImageResluts, dispatch]);

  useEffect(() => {
    if (token && !access_token) {
      dispatch(printfulAuth(token));
    }
  }, [access_token, dispatch, token]);


  useEffect(() => {
    dispatch(getCreatedDesigns());
  }, [dispatch]);


  const handleUploadProducts = () => {
    // Prepare your data here
    const selectedDesignsData = {
      selectedDesigns: selectedDesigns,
      // Other data if needed
    };

    // Navigate to the Upload Products screen with the data as route state
    navigate("/choose-products", { state: selectedDesignsData });
  };

  const toggleCardSelection = (image) => {
    // Check if the card is already selected
    if (selectedDesigns.includes(image)) {
      setSelectedDesigns(selectedDesigns.filter((item) => item !== image));
    } else {
      setSelectedDesigns([...selectedDesigns, image]);
    }
  };

  // console.log("Selected Designs are: ", selectedDesigns);


  const handleGenerateImage = () => {
    dispatch(textToImage(data));
  };

  // const designs = useSelector((state) => state.user.createdDesigns);
  const deselectHandler = () => {
    setSelectedDesigns([]);
  };

  const designsSelectionHandler = () => {
    dispatch(setSelectedDeigns(selectedDesigns))
    navigate("/product-creation");
  };

  return (
    <>
      <div className={""}>
        <h3 className="text-lg lg:text-2xl font-bold mb-2">
          Create designs from your wildest dreams
        </h3>
        <GenerateForm
          type="single-input"
          placeholder="What do you want to see? Be specific."
          onSubmit={() => dispatch(textToImage(data))}
          setData={setData}
          data={data}
          loading={isLoading}
        />
        {/* <button onClick={generateImages}>Submit</button> */}
        <section className={"py-2 "}>
          <h4 className="text-lg lg:text-2xl font-bold mb-2">
            Output ({textToImageResluts?.length || 0})
          </h4>
          {isLoading ? (
            <span className={"special-spinner h-14 w-14 border-[6px]"}></span>
          ) 
          // : isError?.status !== "success" ? (
          //   <>
          //     {isError?.messege?.prompt && (
          //       <p className="custom_error">{isError?.messege?.prompt[0]}</p>
          //     )}
          //     {isError?.messege?.samples && (
          //       <p className="custom_error">{isError?.messege?.samples[0]}</p>
          //     )}
          //     {isError?.message && (
          //       <p className="custom_error">{isError?.message}</p>
          //     )}
          //   </>
          // )
           : error ? (
            <p className="custom_error">Error...!</p>
          ) : !textToImageResluts ? (
            <h5>Search For Images</h5>
          ) : !textToImageResluts?.length ? (
            <h5>No Results</h5>
          ) : (
            <CardsList
              list={textToImageResluts || []}
              toggleCardSelection={toggleCardSelection}
              selectedDesigns={selectedDesigns}
            />
          )}
          {error && <p className="custom_error">Please upgrade your plan</p>}
        </section>
        <section className={"py-2"}>
          <h4 className="text-lg lg:text-2xl font-bold mb-2">
            Selected Designs ({selectedDesigns.length})
          </h4>
          <Cardo list={selectedDesigns} />
        </section>
      </div>
      <FooterBtns>
          {selectedDesigns.length === 0 ? (
        <div className="ml-auto">
            <Button
              type={"button"}
              className={"w-fit"}
              onClick={handleUploadProducts}
            >
              Choose Your Platform
            </Button>
            </div>
          ) : (
            <ProductCreationFooter
              selected={true}
              count={selectedDesigns.length}
              rightBtnText="Create Products"
              leftBtnText="Deselect All"
              leftBtnClickHandler={deselectHandler}
              rightBtnClickHandler={designsSelectionHandler}
            />
          )}
      </FooterBtns>
    </>
  );
};

export default SingleInput;
