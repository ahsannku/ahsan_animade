import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/Rectangle 4.png";
import { Accordion, Button, Cell, Modal } from "../../components";

const SingleDrop = () => {
  const navigate = useNavigate();
  const [rempveAll, setRemoveAll] = useState(false);
  const [rempve, setRemove] = useState(false);
  const [uploadAll, setUploadAll] = useState(false);
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
  const dropClasses = `drop-button text-base md:text-xs  lg:text-xl w-2/3 font-normal px-3`

  return (
    <>
      <div className=''>
        <div className='flex items-center gap-1 md:gap-6 mb-8'>
          <button className='back__btn' onClick={() => navigate(-1)}>
            <IoIosArrowBack />
          </button>
          <h2 className='text-lg md:text-[32px] font-poppins font-bold gap-3 flex items-center '>
            <Link to="/drops">Drops</Link> <IoIosArrowForward />
            <span className="font-normal">World of Giants</span>
          </h2>
        </div>
        <div className=''>
          <Accordion>
            <div className="flex flex-col md:flex-row justify-center items-center flex-1 relative w-full gap-2 md:gap-0">
              <Cell flex="3">
                <div className="flex flex-col md:flex-row items-center gap-4 md:w-full relative">
                  <img src={Image} alt="" className="h-[120px] w-[120px] md:h-[75px] md:w-[75px] lg:w-[100px] lg:h-[100px] rounded-2xl border-2" />
                  <span>{drop?.name}</span>
                </div>
              </Cell>
              <Cell flex="1">
                {drop?.products?.length} <span> Products</span>
              </Cell>
              <Cell flex="1">
                <button
                  onClick={() => setRemoveAll(true)}
                  className={`${dropClasses} gray`}
                >
                  Remove All
                </button>
              </Cell>
              <Cell flex="1">
                <button className={`${dropClasses} purple`}>Edit All</button>
              </Cell>
              <Cell flex="1">
                <button
                  className={`${dropClasses}`}
                  onClick={() => setUploadAll(true)}
                >
                  Upload All
                </button>
              </Cell>
              <span
              className={`absolute top-0 right-0 md:relative md:bg-transparent px-1 md:text-white rounded-md bg-white text-black cursor-pointer lg:px-5 lg:h-18 lg:w-24 flex items-center justify-center text-base lg:text-3xl ${
                open && "rotate-180"
              }`}
              onClick={() => setOpen((prev) => !prev)}
            >
                <BsChevronDown />
              </span>
            </div>
            {open && (
              <div className='flex flex-col w-full relative '>
                {drop?.products.map((product, i) => (
                  <div
                  className="flex items-center mt-6 flex-col md:flex-row py-5 mx-2 md:mx-0 md:py-0 rounded-2xl bg-[rgba(75,74,74,.38)] md:bg-transparent gap-2 md:gap-0"
                  key={i}
                >
                    <Cell flex="3">
                    <div className="flex flex-col md:flex-row  items-center gap-4 md:w-full drop_connection">
                      <img
                        src={Image}
                        alt=""
                        className="h-[120px] w-[120px] md:h-[75px] md:w-[75px] lg:w-[100px] lg:h-[100px] rounded-2xl border-2"
                      />
                        <span>{product?.name}</span>
                      </div>
                    </Cell>
                    <Cell flex="1">
                      {product.brand.map((b, i) => (
                        <span key={i} >
                          {b}
                        </span>
                      ))}
                    </Cell>
                    <Cell flex="1">
                      <button
                        className={`${dropClasses} gray`}
                        onClick={() => setRemove(true)}
                      >
                        Remove
                      </button>
                    </Cell>
                    <Cell flex="1">
                      <button className={`${dropClasses} purple`}>Edit</button>
                    </Cell>
                    <Cell flex="1">
                      <button className={`${dropClasses}`}>Upload</button>
                    </Cell>
                    <span
                    className={`absolute top-0 right-0 md:relative md:bg-transparent md:text-white rounded-md bg-white text-black cursor-pointer md:px-3 lg:h-18 lg:w-24 flex items-center justify-center text-base lg:text-3xl ${
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
      {rempveAll && (
        <Modal
          setState={setRemoveAll}
          title="Confirm Remove All"
          buttons={
            <div className='flex justify-between gap-24'>
              <Button className={'flex-1'} type="button">Go Back</Button>
              <Button className={'flex-1'} type="button">Remove Products</Button>
            </div>
          }
        >
          <div >
            <p>
              Are you sure you want to remove these 8 Products from your{" "}
              <span>World of Giants</span> drop?
            </p>
            <p>
              You can always re-create products with these designs when you are
              ready from <span>your profile</span>.
            </p>
          </div>
        </Modal>
      )}
      {rempve && (
        <Modal
          setState={setRemove}
          title="Confirm Delete"
          buttons={
            <div className='flex justify-between gap-24'>
              <Button className={'flex-1'} type="button">Go Back</Button>
              <Button className={'flex-1'} type="button">Yes - Delete Drop</Button>
            </div>
          }
        >
          <div>
            <p>
              Are you sure you want to delete your <span>World of Giants </span>
              Drop?
            </p>
          </div>
        </Modal>
      )}
      {uploadAll && (
        <Modal
          setState={setUploadAll}
          title="Confirm Upload"
          buttons={
            <div className='flex justify-between gap-24'>
              <Button className={'flex-1'} type="button">Go Back</Button>
              <Button className={'flex-1'} type="button">Start Upload</Button>
            </div>
          }
        >
          <div>
            <p>
              Are you ready to upload <span>135 Products</span> from
              <span> World Of Giants</span>?
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SingleDrop;
