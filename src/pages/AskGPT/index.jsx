import React, { useEffect, useState } from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Cardo,
  CardsList,
  CheckBox,
  FooterBtns,
  GenerateForm,
} from "../../components";
import { aiModels } from "../../redux/services/aiModels";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns";
import { textToImage } from "../../redux/services/textToImage";

const AskGPT = () => {
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [scenes, setScenes] = useState([]);
  const [selectedScene, setSelectedScene] = useState(null);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { error, isLoading, models } = useSelector((state) => state.AIResults);
  const [selectedSceneText, setSelectedSceneText] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUploadProducts = () => {
    // Prepare your data here
    const selectedDesignsData = {
      selectedDesigns: selectedDesigns,
      // Other data if needed
    };

    // Navigate to the Upload Products screen with the data as route state
    navigate("/choose-products", { state: selectedDesignsData });
  };

  const { access_token, products, loadind } = useSelector(
    (state) => state.printful
  );
  const toggleCardSelection = (image) => {
    // Check if the card is already selected
    if (selectedDesigns.includes(image)) {
      setSelectedDesigns(selectedDesigns.filter((item) => item !== image));
    } else {
      setSelectedDesigns([...selectedDesigns, image]);
    }
  };

  const clientId = import.meta.env.VITE_APP_PRINTFUL__CLIENT__ID;
  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );
  const handleGenerateImage = () => {
    dispatch(textToImage(data));
    // Optionally, you can show a loading state or a message indicating the image is being generated
    // until the textToImageResluts is updated with the generated images.
  };
  useEffect(() => {
    dispatch(getCreatedDesigns());
  }, [dispatch]);

  useEffect(() => {
    const responseScenes =
      models?.flatMap((model) =>
        model.split(/\d+\.\s+/).filter((scene) => scene.trim() !== "")
      ) || [];
    setScenes(responseScenes);
  }, [models]);

  const handleFormSubmit = () => {
    dispatch(aiModels(data))
      .then(() => {
        setIsVisible(true); 
        if (selectedScene !== null) {
          console.log("Selected Scene val:", selectedScene);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleFormSubmitgen = () => {
    if (selectedScene !== null) {
      const promptData = {
        prompt: selectedSceneText,
        samples: 3,
        n: 3,
      };

      dispatch(textToImage(promptData))
        .then((images) => {
          setGeneratedImages(images);
        })
        .catch((error) => {
          console.error("Error generating images:", error);
        });
    }
  };

  const handleCheckBoxChange = (value) => {
    setSelectedScene(value);
    if (value !== null && scenes[value] !== undefined) {
      console.log("Selected Scene Text:", scenes[value]);
      setSelectedSceneText(scenes[value]);
    }
      };

  return (
    <>
      <div>
        <h3 className="text-lg lg:text-2xl font-bold mb-2">Ask GPT-4 for some help</h3>
        <div className={'flex flex-col md:flex-row gap-4'}>
          <div className={'max-w-[600px] w-[100%]'}>
            <GenerateForm
              type="ai"
              placeholder="What do you want to see? Be specific."
              setData={setData}
              data={data}
              onSubmit={handleFormSubmit}
              loading={isLoading}
              max="10"
              model={true}
            />
          </div>
          <div className='flex flex-col gap-8 flex-1'>
            <div className='flex-1 flex flex-col gap-3 cursor-pointer'>
              {scenes.map((scene, index) => (
                <CheckBox
                  key={index}
                  label={scene || `AI output ${index + 1}`}
                  value={index}
                  availableModels={models}
                  selectedScene={selectedScene}
                  onChange={handleCheckBoxChange}
                />
              ))}
            </div>

            {isVisible && (
              <div className="flex justify-between items-center ml-auto">
                <Button
                  color="purple"
                  type="button"
                  onClick={handleFormSubmitgen}
                >
                  <div className="flex justify-between items-center ">
                    Create Selected <IoCaretForwardOutline />
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
        <section className={`py-5 `}>
          <h4 className="text-lg lg:text-2xl font-bold mb-2">Generated Images</h4>
          {isLoading ? (
            <span className={`special-spinner`}></span>
          ) : error ? (
            <p className="custom_error">{error?.message}</p>
          ) : generatedImages.payload &&
            generatedImages.payload.output.length > 0 ? (
            <CardsList
              list={generatedImages.payload.output}
              toggleCardSelection={toggleCardSelection}
              selectedDesigns={selectedDesigns}
              renderItem={(imageURL, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (selectedDesigns.includes(index)) {
                      setSelectedDesigns((prevSelected) =>
                        prevSelected.filter((i) => i !== index)
                      );
                    } else {
                      setSelectedDesigns((prevSelected) => [
                        ...prevSelected,
                        index,
                      ]);
                    }
                  }}
                >
                  <img src={imageURL} alt={`Generated Image ${index + 1}`} />
                </div>
              )}
            />
          ) : (
            <h5>No Generated Images</h5>
          )}
        </section>
        <section className={`py-5`}>
          <h4 className="text-lg lg:text-2xl font-bold mb-2">
            Selected Designs ({selectedDesigns.length || 0})
          </h4>
          <Cardo list={selectedDesigns} />
        </section>
      </div>
      <FooterBtns>
        <div className="ml-auto">
          <Button type={'button'} className={'w-fit'} onClick={handleUploadProducts}>Choose Your Platform</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default AskGPT;
