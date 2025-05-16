"use client"

import testImg from '../../public/HomeBanner1.jpg'
import Buttons from "./Buttons"
import { X } from 'lucide-react';
import Image from "next/image";
import { FaGlobeAsia } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

interface CardModalProps {
  onClose: () => void;
}

export default function CardModal({ onClose }: CardModalProps) {
  const handleBunny = () => {
    console.log("hi");
  };

  return (
    <div className="bg-black/40 min-h-screen w-full fixed z-50 inset-0 flex items-center justify-center p-4 md:p-12">
      <div
        className="bg-black text-white w-full max-w-[95%] sm:max-w-3xl rounded-2xl mt-20 relative shadow-lg "
        style={{ boxShadow: '0 0 20px 4px rgba(255, 255, 255, 0.3)' }}
      >
       
        <div className="relative w-full h-32 md:h-64">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition cursor-pointer z-50"
          >
            <X size={26} />
          </button>

          <Image
            src={testImg}
            alt="programImg"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
            priority
          />
        </div>

      
        <section className="px-5 sm:px-8 md:px-16 py-4 sm:py-8 md:py-12">

        
          <div className="mb-3 md:mb-6 mt-1 flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
            <div className="flex flex-wrap gap-4 text-[0.75rem] md:text-base">
              <p className="text-cyan-400 flex items-center gap-2">
                <FaGlobeAsia /> <span >Sociaty</span> 
              </p>
              <h4 className="flex items-center gap-2 font-extralight">
                <LuClock3 />
                <span>Created May 15, 2025</span>
              </h4>
            </div>

          
            <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
              <div className="w-full sm:w-72 h-2 bg-neutral-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <p className="mt-2 font-thin text-[0.75rem] md:text-sm">1000000 / 1000000 IDRX</p>
            </div>
          </div>

    
          <div className="mb-2 md:mb-4 flex flex-col sm:flex-row sm:items-end sm:gap-4">
            <h2 className="text-sm md:text-lg lg:text-xl font-thin">
              Donasi KitaBisa.com Untuk Palestine
            </h2>
            <h2 className="font-thin text-[0.75rem] md:text-sm text-neutral-300">
              By Ahmad Reza Radiant
            </h2>
          </div>


          <p className="font-thin text-neutral-300 text-[0.75rem] md:text-base mb-2 md:mb-5">
            Kitabisa.com membuka donasi untuk membantu warga Palestina yang terdampak krisis kemanusiaan. Mari bersama ringankan penderitaan mereka dengan berdonasi melalui platform terpercaya ini.
          </p>


          <p className="font-thin text-neutral-300 text-xs sm:text-sm mb-3 sm:mb-10 break-words">
            PIC Address : 0x82jian2d98dnaij89fsie12ej89ca8adnu9mjioa9u2jasdalkkodaiopiodawi
          </p>


          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center">
            {["Program Link", "History Withdraw", "Contribute"].map((label, idx) => (
              <Buttons
                key={idx}
                className="text-white font-light border-[2px] border-cyan-500 py-2 px-4 rounded-xl hover:border-cyan-600 hover:bg-cyan-500 cursor-pointer text-[0.75rem] md:text-md w-full md:w-56 text-center"
                onClick={handleBunny}
                type="button"
              >
                {label}
              </Buttons>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
}
