"use client"

import Image from "next/image";
import tesImg from "../../public/HomeBanner1.jpg";
import { FaGlobeAsia, FaArrowRight } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

interface ProgramCardProps {
  onOpen: () => void;
}



export default function ProgramCard({onOpen}: ProgramCardProps) {
  return (
    <section className="w-full max-w-sm lg:max-w-md bg-neutral-950 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-cyan-500/50 transition-shadow duration-300"
    onClick={onOpen}
    >
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={tesImg}
          alt="programImg"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          priority
        />
      </div>

      <div className="p-6 md:p-8">
        <p className="text-cyan-400 flex items-center gap-2 text-sm md:text-base">
          <FaGlobeAsia /> Sociaty
        </p>

        <h2 className="text-white text-lg md:text-xl py-2 pt-3 leading-snug">
          Donasi KitaBisa.com Untuk Palestine
        </h2>

        <p className="text-neutral-400 text-sm md:text-base leading-relaxed tracking-tight pb-4">
          Kitabisa.com membuka donasi untuk membantu warga Palestina yang
          terdampak krisis kemanusiaan. Mari bersama ringankan penderitaan
          mereka dengan berdonasi melalui platform terpercaya ini.
        </p>

        <div className="flex justify-between items-center pt-2 text-[0.7rem] md:text-sm">
          <h4 className="flex items-center gap-2">
            <LuClock3 />
            Created May 15, 2025
          </h4>

          <a
            href="#"
            className="text-cyan-400 hover:text-cyan-500 flex items-center gap-1 md:gap-2 group"
          >
            Read More <FaArrowRight className="group-hover:translate-x-1 duration-300 group-hover:text-cyan-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
