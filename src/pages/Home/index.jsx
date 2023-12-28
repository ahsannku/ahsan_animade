import React from "react";
import {
  Banner,
  ContactUs,
  Fees,
  Hero,
  HowWorks,
  Mission,
  Potential,
  Fees2
} from "../../components";
import WhatWeOffer from "../../components/WhatWeOffer";
import Particle from "../../components/Particle";

const Home = () => (
  <div className="!overflow-hidden">
    <Hero />
    {/* <Banner /> */}
    <WhatWeOffer/>
    {/* <Fees2 /> */}
    <HowWorks />
    <Potential />
    <Fees />
    <Mission />
    <ContactUs />
    <Particle/>
  </div>
);

export default Home;
