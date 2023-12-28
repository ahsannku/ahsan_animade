import React, { useState } from "react";
import Appy from "../Appy";
import axios from "axios";
import config from "../../config";
import { toast } from "react-toastify";

const Banner = () => {

  const [designs, setDesigns] = useState([]);
  const [prompt, setprompt] = useState('');
  const [loading, setloading] = useState(false);

  const handleAskAi = async () => {
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
        prompt: prompt,
        model_id: "sdxl",
        safety_checker: "yes",
        safety_checker_type	:"blur",
        negative_prompt: prompt,
        width: '512',
        height: '512',
        samples: 4,
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
            <div className="glass-effect p-6" data-aos="fade-right">
              {/* <select className="bg-transparent border border-[#8A738A] w-full px-4 py-3 rounded-lg text-white mb-4 ">
                <option value="">Lorem ipsum dolor sit amet.</option>
                <option value="">Lorem ipsum dolor sit amet.</option>
                <option value="">Lorem ipsum dolor sit amet.</option>
              </select> */}
              <p className="text-paraColor mb-6">
                This allows users to input a general theme, and will use GPT-4
                to generate a list of potential prompts for users to choose from
                and generate
              </p>
              <textarea
                value={prompt}
                onChange={onPromptChange}
                name=""
                id=""
                cols="40"
                rows="4"
                className="bg-transparent text-white mb-8 outline-none border border-[#8A738A] w-full px-4 py-3 rounded-lg "
              />

              <button disabled={loading} onClick={handleAskAi} className="flex items-center px-4 py-3 w-32 rounded-lg mb-4 hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 font-bold  bg-primary text-white">
                Ask AI
                {
                  loading && <span className="spinner"></span>
                }
              </button>
              {/* <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#8A738A] accent-border bg-[#8A738A] border border-[#8A738A]"
                  />{" "}
                  A dog eating a hot dog in photorealistic style
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#8A738A] accent-border bg-[#8A738A] border border-[#8A738A]"
                  />{" "}
                  A dog eating a hot dog in photorealistic style
                </label>{" "}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#8A738A] accent-border bg-[#8A738A] border border-[#8A738A]"
                  />{" "}
                  A dog eating a hot dog in photorealistic style
                </label>{" "}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#8A738A] accent-border bg-[#8A738A] border border-[#8A738A]"
                  />{" "}
                  A dog eating a hot dog in photorealistic style
                </label>
              </div> */}
            </div>
          {designs?.length > 0 && <div
              className="grid grid-cols-2 gap-4 glass-effect p-6"
              data-aos="fade-left"
            >
              {
                designs.map((d ) => (
                  <img src={d} alt="" />
                ))
              }
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
