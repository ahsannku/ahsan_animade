import React from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import { Button, Title } from "..";
import yourImage from "../../assets/howwork.png";
import what from "../../assets/vericalo.png";

const Fees2 = () => {
  return (
    <section className={`my-10`}>
      <div className="container">
        <Title align="center">
          What We<span> Offer</span>
        </Title>
        {window.innerWidth <= 990 ? (
          <img
            src={what}
            alt="Description"
            className="mx-auto"
            style={{ width: "341px" }}
          />
        ) : (
          <img src={yourImage} alt="Description" />
        )}
        <Button className='my-2 mx-auto lg:mx-0 w-fit' to={'/How-it-works'}> How it works! <IoCaretForwardOutline /></Button>
      </div>
    </section>
  );
};

export default Fees2;
