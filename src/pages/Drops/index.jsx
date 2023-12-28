import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { RocketIcon } from "../../icons";

const Drops = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const drops = [
    {
      id: "1",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "2",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "3",
      name: "Crypto Monkeys in space",
      upload: true,
    },
    {
      id: "4",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "5",
      name: "Crypto Monkeys in space",
      attention: true,
    },
    {
      id: "6",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "7",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "8",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "9",
      name: "Crypto Monkeys in space",
      products: 324,
    },
  ];

  return (
    <>
      <div className=''>
        <div className='flex items-center justify-between mb-5 lg:mb-8'>
          <h4 className='text-xl relative md:text-[32px] font-poppins font-bold pl-10 flex items-center drop_after '>Drop</h4>
          <div className='flex items-center text-lg md:text-xl font-bold'>
            <span className="flex px-4 pr-8">Free</span>
            <span className="flex items-center relative after-1  gap-4">
              30 designs <RocketIcon />
            </span>
          </div>
        </div>
        <div className='grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-20'>
          {drops.map((drop) => (
            <Link to={drop.id} className='text-center'>
              <div className='h-[200px] lg:h-[250px] rounded-xl bg-white mb-3'></div>
              <h4 className='text-sm lg:text-lg font-bold '>{drop.name}</h4>
              {drop.products && (
                <span className='text-sm lg:text-lg'>
                  {drop.products} Products
                </span>
              )}
              {drop.upload && (
                <span className='flex items-center justify-center text-base lg:text-xl text-[#00a959]'>
                  1 upload <span className="text-white text-sm lg:text-lg relative pl-8 drop-span">178 Queued</span>
                </span>
              )}
              {drop.attention && (
                <span className='text-sm lg:text-lg text-custom-red'>
                  Requires Your Attention
                </span>
              )}
            </Link>
          ))}
          <div
            className='flex items-center justify-center h-[200px] lg:h-[250px] border-[5px] rounded-xl cursor-pointer'
            onClick={() => {
              setOpenPopup(true);
            }}
          >
            <BsPlusLg className='text-4xl' />
          </div>
        </div>
        <div className='flex items-center justify-between mb-8'>
          <h4 className='text-xl lg:text-[32px] font-bold font-poppins pl-10 relative drop_complete'>Complete</h4>
        </div>
        <div className='grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-20'>
          {drops.map((drop) => (
            <Link to={`complete/${drop.id}`} className='text-center'>
              <div className='h-[200px] lg:h-[250px] rounded-xl bg-white mb-3'></div>
              <h4 className='text-sm lg:text-lg font-bold '>{drop.name}</h4>
              {drop.products && (
                <span className='text-sm lg:text-lg'>
                  {drop.products} Products
                </span>
              )}
              {drop.upload && (
                <span className='flex items-center justify-center text-base lg:text-xl text-[#00a959]'>
                  1 upload <span className="text-white relative text-sm lg:text-lg pl-8 drop-span">178 Queued</span>
                </span>
              )}
              {drop.attention && (
                <span className='text-sm lg:text-lg text-custom-red'>
                  Requires Your Attention
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
      {openPopup && (
        <Modal
          setState={setOpenPopup}
          title="Name your Drop"
          buttons={
            <div className="flex justify-between">
              <Button type="button">Create Drop</Button>
              <Button
                onClick={() => setOpenPopup(false)}
                type="button"
                color="gray"
              >
                Cancel
              </Button>
            </div>
          }
        >
          <div className='flex flex-col lg:flex-row gap-4 lg:items-center lg:gap-14'>
            <label className="text-lg lg:text-2xl">Drop Name</label>
            <Input className={'lg:flex-1 rounded-lg'} type="text" placeholder="Your Drop" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Drops;
