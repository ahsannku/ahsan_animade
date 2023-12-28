import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/Rectangle 4.png";
import { Accordion, Cell } from "../../components";

const SingleComplete = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const drop = {
    id: 1,
    name: "Giant Design",
    products: [
      {
        id: 1,
        name: "NFT Listing Name",
        brand: ["Opensea"],
      },
      {
        id: 2,
        name: "Product Listing Name",
        brand: ["Shopify"],
      },
      {
        id: 3,
        name: "Product Listing Name",
        brand: ["Opensea", "Etsy"],
      },
    ],
  };

  const dropClasses = `drop-button text-base  md:text-xl w-2/3 font-normal px-3`

  return (
    <div>
      <div className="flex items-center gap-1 md:gap-6 mb-6 lg:mb-8">
        <button className="back__btn" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
        <h2 className="text-lg md:text-[32px] font-poppins font-bold gap-3 flex items-center ">
          <Link to="/drops">Drops</Link> <IoIosArrowForward />
          <span className="font-normal">World of Giants</span>
        </h2>
      </div>
      <div className="">
        <Accordion>
          <div className="flex flex-col md:flex-row justify-center items-center flex-1 relative w-full gap-2 md:gap-0">
            <Cell flex="2">
              <div className="flex flex-col md:flex-row items-center gap-4 md:w-full relative">
                <img
                  src={Image}
                  alt=""
                  className="h-[120px] w-[120px]md:h-[75px] md:w-[75px] lg:w-[100px] lg:h-[100px] rounded-2xl border-2"
                />
                <span>{drop?.name}</span>
              </div>
            </Cell>
            <Cell flex="1.2">
              {drop?.products?.length} <span>  dsffdssdfsd</span>
            </Cell>
            <Cell flex="1">
              {drop?.products?.length} <span> Products</span>
            </Cell>
            <Cell flex="1.2">
              <Link to="/financial" className={`${dropClasses} green`}>
                Design Finances
              </Link>
            </Cell>
            <span
              className={`absolute top-0 right-0 md:relative md:bg-transparent px-1 md:text-white rounded-md bg-white text-black cursor-pointer lg:px-5 lg:h-18 lg:w-24 flex items-center justify-center text-base lg:text-3xl py-1 ${
                open && "rotate-180"
              }`}
              onClick={() => setOpen((prev) => !prev)}
            >
              <BsChevronDown />
            </span>
          </div>
          {open && (
            <div className="flex flex-col w-full relative ">
              {drop?.products.map((product, i) => (
                <div
                  className="flex items-center mt-6 flex-col md:flex-row py-5 mx-2 md:mx-0 md:py-0 rounded-2xl bg-[rgba(75,74,74,.38)] md:bg-transparent gap-2 md:gap-0"
                  key={i}
                >
                  <Cell flex="2">
                    <div className="flex flex-col md:flex-row  items-center gap-4 md:w-full drop_connection">
                      <img
                        src={Image}
                        alt=""
                        className="h-[120px] w-[120px]md:h-[75px] md:w-[75px] lg:w-[100px] lg:h-[100px] rounded-2xl border-2"
                      />
                      <span>{product?.name}</span>
                    </div>
                  </Cell>
                  <Cell flex="1.1" noborder={true}>
                    {product.brand.map((b, i) => (
                      <span key={i}>{b}</span>
                    ))}
                  </Cell>
                  <Cell flex="1.1">
                    <button className={`${dropClasses} purple`}>View</button>
                  </Cell>
                  <Cell flex="1.2">
                    <button className={`${dropClasses} green`}>
                      Product Finances
                    </button>
                  </Cell>
                  <span
                    className={`absolute top-0 right-0 md:relative md:bg-transparent md:text-white rounded-md bg-white text-black cursor-pointer md:px-3 lg:h-18 lg:w-24 flex items-center justify-center text-3xl ${
                      open && "rotate-180"
                    }`}
                  ></span>
                </div>
              ))}
            </div>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default SingleComplete;
