import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/Rectangle 4.png";
import { Accordion, Cell } from "../../components";

const Financial = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const drop = {
    id: 1,
    name: "Giant Design",
    products: [
      {
        id: 1,
        name: "NFT Listing Name fsdfsafsdfds",
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
    <div className="">
      <div className="flex items-center gap-1 md:gap-6 mb-6 lg:mb-8">
        <button className="back__btn" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
        <h2 className="text-lg md:text-[32px] font-poppins font-normal lg:font-bold gap-3 flex items-center ">
          <span>Your Finances (Updated Daily)</span>
        </h2>
      </div>
      <div className={``}>
        <Accordion noborderTop={true}>
          <div className="hidden md:flex items-center flex-1 justify-center w-full relative border-b pb-6 mb-6">
            <Cell type="head" flex="2" size="small" noborder={true}></Cell>
            <Cell type="head" flex="1" size="small" finicial={true}>
              Marketplaces
            </Cell>
            <Cell type="head" flex="1" size="small" finicial={true}>
              Products
            </Cell>
            <Cell type="head" flex="1" size="small" finicial={true}>
              <span>Total Revenue</span> <span>(Inc. Fees)</span>
            </Cell>
            <Cell type="head" flex="1" size="small" finicial={true}>
              <span>Weekly Revenue</span> <span>(Inc. Fees)</span>
            </Cell>
            <span
              className={`absolute top-0 right-0 md:relative md:bg-transparent md:text-white rounded-md bg-white text-black cursor-pointer md:px-3 lg:h-18 lg:w-24 flex items-center justify-center text-3xl ${
                open && "rotate-180"
              }`}
            ></span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center flex-1 relative w-full gap-2 md:gap-0">
            <Cell flex="2">
            <div className="flex flex-col md:flex-row items-center gap-4 md:w-full relative">
                <img
                  src={Image}
                  alt=""
                  className="h-[120px] w-[120px] md:h-[75px] md:w-[75px] lg:w-[100px] lg:h-[100px] rounded-2xl border-2"
                />
                <span>{drop?.name}</span>
              </div>
            </Cell>
            <Cell flex="1" size="small" finicial={true}>
              {drop?.products?.length} <span> Marketplaces</span>
            </Cell>
            <Cell flex="1" size="small" finicial={true}>
              {drop?.products?.length} <span> Products</span>
            </Cell>
            <Cell flex="1" size="small" finicial={true}>
              <span>$2,539.86</span> <span> 1.97 ETH</span>
            </Cell>
            <Cell flex="1" size="small" finicial={true}>
              <span>$60.76</span> <span>0.00076 ETH</span>
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
                      className="h-[120px] w-[120px] md:h-[75px] md:w-[75px] lg:w-[100px] lg:h-[100px] rounded-2xl border-2"
                    />
                    <span>{product?.name}</span>
                  </div>
                </Cell>
                  <Cell flex="1" noborder={true} size="small" finicial={true}  className={'relative'}>
                    {product.brand.map((b, i) => (
                      <span
                        key={i}
                        className={`drop-span`}
                      >
                        {b}
                      </span>
                    ))}
                  </Cell>
                  <Cell flex="1" size="small" finicial={true}>
                    <button className={`${dropClasses} purple`}>View</button>
                  </Cell>
                  <Cell flex="1" size="small" finicial={true}>
                    <span  >$2,539.86</span>{" "}
                    <span >1.97 ETH</span>
                  </Cell>
                  <Cell flex="1" size="small" finicial={true}>
                    <span >$60.76</span>{" "}
                    <span >0.00076 ETH</span>
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

export default Financial;
