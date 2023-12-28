import React, { useState } from "react"; // Make sure to import useState
import { Button, Input } from "../";
import { IoCaretForwardOutline } from "react-icons/io5";

const GenerateForm = ({
  type,
  placeholder,
  onSubmit,
  setData,
  data,
  loading,
  max,
  model,
  availableModels,
}) => {
  const [extraWords, setExtraWords] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      ...data,
      extraWords: extraWords.split(",").map((word) => word.trim()), // Split the extra words into an array and trim whitespace
    };
    const requestDatadec = {
      decrement_value: data.samples, // Assuming 'samples' contains the number you want to send
    };
    // Add a new field "generatedSamples" to the requestData object
    requestData.generatedSamples = requestData.samples || 1; // Use "samples" value as the number of generated samples, default to 1 if not available
    // const tokenWithQuotes = localStorage.getItem("token");
    const token = "fddf";

    if (token) {
      // Make the POST request to www.test.com/test with the requestData
      fetch(
        " https://animade-production.up.railway.app/api/decrease-designs/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`, // Include the authorization header
          },
          body: JSON.stringify(requestDatadec),
        }
      ).catch((error) => {
        console.error("Error sending POST request:", error);
      });
    }
    onSubmit(requestData);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className={`flex flex-col max-w-[600px]`}
    >
      <Input
        type="textarea"
        value={data?.prompt || ""}
        placeholder={placeholder}
        onChange={(e) => setData({ ...data, prompt: e.target.value })}
        required={true}
      />
      <div className={"flex items-center mt-3 gap-2 lg:gap-5"}>
        {model ? (
          <></>
        ) : (
          <>
            <span className="text-base lg:text-xl">Images per prompt </span>
            <input
              className="bg-white text-dark-blue py-1.5 lg:py-4 text-lg text-center rounded-lg lg:px-4"
              type="number"
              required
              min="1"
              max={max || "4"}
              value={data?.samples}
              onChange={(e) => {
                setData({
                  ...data,
                  samples: e.target.value,
                  n: +e.target.value,
                });
              }}
            />
          </>
        )}
        <Button className={'flex-1 lg:py-3.5'} color="purple" type="submit" loading={loading}>
            {type === "ai" ? "Ask Ai" : "Generate"}
            <IoCaretForwardOutline />
        </Button>
      </div>
    </form>
  );
};

export default GenerateForm;
