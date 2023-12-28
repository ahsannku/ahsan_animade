import React from "react";
import { MantineProvider } from "@mantine/core";

import { Banner, ContactUs, Hero, Header, Faq, Mano, SlideOnee, Footer, Appy } from "../../components";
// import styles from "./.module.scss";
import Singo from "../singo"; // Adjust the relative path based on your project structure
import Asko from "../Asko";
import Particle from "../../components/Particle";

const Howitworks = () => (
  <>
    <div className="!overflow-hidden">
      <Header />
        <Mano />
        <Banner/>
       {/* <Appy /> */}
      {/* <Singo /> */}
      <MantineProvider>
        <Faq />
      </MantineProvider>
      <Particle/>
      <Footer />
    </div>
  </>
);

export default Howitworks;
