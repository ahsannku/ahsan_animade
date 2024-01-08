import React, { useEffect, useRef, useState } from "react";
import Appy from "../Appy";
import axios from "axios";
import config from "../../config";
import { toast } from "react-toastify";
import { default_negative_prompt } from "../../utils/data";

const extraWords = "in 8 words maximum each describe four scenes in a json array exactly like this [scenedescribed1, scenedescribed2, scenedescribed3, scenedescribed4] where the four scenes include this phrase:";

const sandboxTypes = {
  ASK_AI: 'ASK_AI',
  TEXT_TO_IMAGE: 'TEXT_TO_IMAGE'
};

const options = [
  {type: sandboxTypes.ASK_AI, text: 'AskAI'},
  {type: sandboxTypes.TEXT_TO_IMAGE, text: 'Text to Image'},
];

const Banner = () => {
  const [designs, setDesigns] = useState([]);
  const [generatedOptions, setgeneratedOptions] = useState([]);
  const [prompt, setprompt] = useState('');
  const [loading, setloading] = useState(false);
  const [selectedSandbox, setSelectedSandbox] = useState(sandboxTypes.ASK_AI);

  const handleGenerate = () => {
    if(selectedSandbox === sandboxTypes.ASK_AI){
      setDesigns([]);
      setgeneratedOptions([]);
      handleAskAi();
    } else {
      setDesigns([]);
      handleTextToImage();
    }
  }

  const handleAskAi = async () => {
    try {
      if(!prompt){
        toast.error("Please add a prompt.", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        });
        return;
      }
      setloading(true);
      const content = ` ${extraWords} ${prompt}`;
      // console.log(content)
      const { data } = await axios.post(
        `${config.OPEN_AI_URL}/v1/chat/completions`,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: content }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.OPEN_AI_KEY}`,
          },
        }
      );
      let outputs = data.choices[0].message.content;
      if (String(outputs).startsWith("[")) {
        // handleAskAi();
        outputs = JSON.parse(outputs);
      } else if(String(outputs).startsWith("1.")) {
        const sentencesArray = outputs.split('\n');
        outputs = sentencesArray.map(sentence => sentence.replace(/^\d+\.\s/, ''));
      }
      console.log(outputs);
      setgeneratedOptions(outputs);
      setloading(false);
    } catch (error) {
      toast.error("Something went wrong.", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      console.error(error);
      setloading(false);
    }
  }

  const handleTextToImage = async (_prompt = "") => {
    try {
      if(!prompt){
        toast.error("Please add a prompt.", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        });
        return;
      }
      const requestData = {
        key: `${config.STABLE_KEY}`,
        prompt: _prompt ? _prompt : prompt,
        model_id: "sdxl",
        safety_checker: "yes",
        safety_checker_type	:"blur",
        negative_prompt: default_negative_prompt,
        width: '512',
        height: '512',
        samples: 4,
        // samples: 1,
        num_inference_steps: '20',
        seed: null,
        guidance_scale: 7.5,
        webhook: null,
        track_id: null,
      };
      setloading(true);
      const {data} = await axios.post('https://animade-production.up.railway.app/sandbox_images/', requestData);
      if(data?.status === "success"){
        setDesigns(data?.output ?? []);
      } else {
        setDesigns(data?.future_links ?? []);
      }
      setloading(false);
    } catch (error) {
      toast.error("Something went wrong.", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      console.error(error);
      setloading(false);
    }
  }

  const handleSuggesionSelect = (checked, option) => {
    if(checked){
      handleTextToImage(option);
    }
  }

  const handleSandboxChange = (e) => {
    const value = e.target.value;
    setSelectedSandbox(value);
  }

  const onPromptChange = (e) => {
    const value = e.target.value;
    setprompt(value);
  }

  return (
    <section className="relative">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px]"></div>
      <div className="whatwedo-bg py-28">
        <div className="relative custom-container z-10 ">
          <Appy />
          <h1 className="text-white font-title   font-bold laptop:text-5.5xl tablet:text-4.4xl text-2xl  tablet:text-center leading-tight mb-12">
            Discover Smart Prompts to <br />
            <span className="gradient-text ">Experience efficiency</span>
          </h1>
          <div className="flex justify-center flex-col laptop:flex-row gap-4">
            {/*  */}
            <div className="glass-effect p-6 grid w-3/5 sm:w-full" data-aos="fade-right">
              <select
                value={selectedSandbox}
                onChange={handleSandboxChange}
                className="bg-transparent border border-[#8A738A] w-full px-4 py-3 rounded-lg text-white mb-4 "
              >
                {options.map((o) => (
                  <option style={{ color: "black" }} value={o.type}>
                    {o.text}
                  </option>
                ))}
              </select>
              <p className="text-paraColor mb-6">
                This allows users to input a general theme, and will use GPT-4 to generate a list of potential prompts for users to choose from and
                generate
              </p>
              <textarea
                value={prompt}
                onChange={onPromptChange}
                name=""
                id=""
                cols="40"
                rows="4"
                style={{ border: "1px solid rgb(138 115 138 / 1)" }}
                className="bg-transparent text-white mb-8 outline-none border border-[#8A738A] w-full py-3 rounded-lg "
              />

              <button
                style={{ border: "2px solid rgb(199 0 37 / 1)" }}
                disabled={loading}
                onClick={handleGenerate}
                className="flex items-center justify-center px-4 py-3 w-32 rounded-lg mb-4 hover:text-primary hover:bg-transparent border-2 border-primary duration-300 font-bold  bg-primary text-white"
              >
                {options.find(op => op.type === selectedSandbox)?.text}
                {loading && <span className="spinner"></span>}
              </button>
              <div>
                {generatedOptions.map((go) => (
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      style={{ all: "revert" }}
                      className="accent-[#8A738A] accent-border bg-[#8A738A] border border-[#8A738A]"
                      onChange={(e) => handleSuggesionSelect(e.target.checked, go)}
                    />
                    {go}
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 glass-effect p-6 w-2/5 sm:w-full" data-aos="fade-left">
              {/* {
                designs.length === 0 && <div className="text-center"></div>
              } */}
              {designs.map((d) => (
                // <img src={d} alt="" />
                <OutputImage src={d}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


function OutputImage({ src }) {
  const [loaded, setLoaded] = useState(false);
  const [imageKey, setImageKey] = useState(1); // Use a key to force re-render
  const interval = useRef(null);
  
  const handleImageLoaded = () => {
    console.log('image loaded')
    clearInterval(interval.current)
    setLoaded(true);
  }

  const handleImageError = () => {
    console.log('image err')

    clearInterval(interval.current)

    interval.current = setInterval(() => {
      console.log('loading again')
      setImageKey(prev => ++prev);
    }, 10000);

  }

  return (
    <>
      {!loaded && <span className="spinner"></span>}
      <img key={imageKey} src={src} alt="" style={!loaded ? { display: "none" }:{}} onLoad={handleImageLoaded} onError={handleImageError}/>
    </>
  );
}


export default Banner;
