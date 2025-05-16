'use client';

import Buttons from "./Buttons";
import { X } from 'lucide-react';

interface ContributeModalProps {
  onClose: () => void;
}

export default function ContributeModal({ onClose }: ContributeModalProps) {
  const handleBunny = () => {
    console.log("hi");
  };

  return (
    <div className="bg-black/40 min-h-screen w-full fixed z-50 inset-0 flex items-center justify-center shadow-2xl mt-10">
      <div
        className="bg-black text-white w-full max-w-[90%] sm:max-w-xl p-14 sm:p-16 md:p-20 pt-16 rounded-2xl relative"
        style={{
          boxShadow: '0 0 20px 4px rgba(255, 255, 255, 0.3)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition cursor-pointer"
        >
          <X size={26} />
        </button>

        <h2 className="text-center text-md md:text-xl font-thin mb-4 md:mb-8">
          Contribute To <span className="text-cyan-400">Fund</span>raisers
        </h2>

        <p className="font-thin text-neutral-300  text-sm md:text-md mb-4 md:mb-8">
          Fundraisers will receive the IDRX stablecoin you contribute to us. Once a program reaches its funding target, we will allocate the collected funds to the program&apos;s PIC (Person In Charge). You will be able to monitor each withdrawal made by the PIC and track exactly how the funds are being used, ensuring full transparency and accountability.
        </p>

        <input
          className="bg-black/80 w-full placeholder:text-white placeholder:font-thin p-2 md:p-3 rounded-lg text-white font-thin border-[2.5px] border-blue-500 mb-4 md:mb-8 placeholder:text-sm placeholder:md:text-md"
          placeholder="  Enter Amount"
          type="text"
        />

        <div className="flex flex-col gap-2 md:gap-4  w-full  items-center ">
          <Buttons
            className="text-white font-light border-[3px] border-cyan-500 md:py-2 px-4 rounded-xl hover:border-cyan-600 hover:bg-cyan-500 cursor-pointer h-12 text-sm md:text-md w-64"
            onClick={handleBunny}
            type="button"
          >
            Approve IDRX
          </Buttons>
          <Buttons
            className="text-white font-light border-[3px] border-cyan-500 md:py-2 px-4 rounded-xl hover:border-cyan-600 hover:bg-cyan-500 cursor-pointer h-12 text-sm md:text-md w-64"
            onClick={handleBunny}
            type="button"
          >
            Contribute
          </Buttons>
        </div>
      </div>
    </div>
  );
}
