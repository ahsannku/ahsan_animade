import { MantineProvider } from '@mantine/core';
import React from "react";

import {
  Appy,
  Faq,
  Footer,
  Header,
  Mano
} from "../../components";
import Asko from "../Asko";
import styles from "./.module.scss";
const Howito = () => (
  <>
  <Header/>
 <section className={styles.hero__section}>
  <Mano />
    </section> 
    <Appy/>
     {/* <SlideOnee /> */}
         
  {/* <Banner/> */}
    {/* <HowWorks /> */}
    <Asko></Asko>
    {/* <Singo/> */}

<MantineProvider>
    <Faq/>
    </MantineProvider>
<Footer/>
  </>
);

export default Howito;
