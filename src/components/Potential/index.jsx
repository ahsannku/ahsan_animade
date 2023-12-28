import React, { useState, useEffect } from "react";
import { Title } from "../";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { storage } from "../../firebase.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import "swiper/css";
import "swiper/css/free-mode";

const Potential = () => {
  const [nfts, setNfts] = useState([]);
  const [prints, setPrints] = useState([]);

  useEffect(() => {
    const fetchImages = async (folderName) => {
      const imageRef = ref(storage, folderName);
      let result = await listAll(imageRef);
      let urlPromises = result.items.map((imageItem) =>
        getDownloadURL(ref(storage, `${folderName}/${imageItem.name}`))
      );
      return Promise.all(urlPromises);
    };

    fetchImages("recentlyupdated").then(setNfts);
    fetchImages("recentlynft").then(setPrints);
  }, []);

  return (
    <section>
      <div className="potential_bg relative z-50">
        <div className="bg-gradient-to-t from-[#140E18] via-[#140E1889] to-[#140E1800] absolute bottom-0 bg-opacity-50 w-full h-full"></div>
        <div
          className="custom-container py-28 relative z-10"
          data-aos="zoom-in"
        >
          <h2 className="text-center laptop:text-5.5xl tablet:text-4.4xl text-2xl mb-12">
            Explore the{" "}
            <span className="gradient-text font-bold"> Potential</span>
          </h2>{" "}
          <div className="flex justify-center   gap-6">
            <div className="flex justify-center items-start flex-col gap-6">
              <img src="/assets/images/potential1.png" alt="" />
              <img src="/assets/images/potential2.png" alt="" />
              <img src="/assets/images/potential3.png" alt="" />
            </div>
            <div className="flex mt-16 flex-col gap-6">
              <img src="/assets/images/potential4.png" alt="" />
              <img src="/assets/images/potential5.png" alt="" />
              <img src="/assets/images/potential6.png" alt="" />
            </div>
            <div className="tablet:flex justify-center items-start flex-col gap-6 hidden ">
              <img src="/assets/images/potential7.png" alt="" />
              <img src="/assets/images/potential8.png" alt="" />
              <img src="/assets/images/potential9.png" alt="" />
            </div>
            <div className="tablet:flex justify-center items-start flex-col gap-6 hidden">
              <img src="/assets/images/potential10.png" alt="" />
              <img src="/assets/images/potential11.png" alt="" />
              <img src="/assets/images/potential12.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potential;
