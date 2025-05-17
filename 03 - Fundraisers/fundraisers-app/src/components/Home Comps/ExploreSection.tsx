"use client"

import { dummyData } from "@/constants/ProgramData.constant";
import ProgramCard from "../ProgramCard";
// import { FaArrowRight } from "react-icons/fa";

interface ExploreSectionProps {
  onOpen: () => void;
}


export default function ExploreSection({onOpen}: ExploreSectionProps) {
  return (
    <section
    id="ExploreSection"
    className="bg-black bg-gradient-to-b to-black h-full w-full md:pt-12 pt-10"
    >
    <div className="max-w-[100rem] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 p-4 md:p-8 ">
        <div className="w-full text-white px-4 sm:px-6 lg:px-16 mt-8">
        <div className="flex justify-between items-center mb-12 md:mb-16 px-4">
            <p className="text-xl sm:text-3xl">
            <span>Explore </span>
            <span className="text-cyan-400">Fund</span>
            <span className="text-white">raisers</span>
            <span> Programs </span>
            </p>
            
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 justify-items-center  sm:px-8">
            {dummyData.map((item, index) => (
              <ProgramCard 
                key={`${item.id}-${index}`}  
                onOpen={onOpen} 
                name={item.name}   
                desc={item.desc}
                category={item.category}
                createdAt={item.createdAt}
                photoUrl={item.photoUrl}
              />
            ))}
        </div>
        <h2 className="text-center pt-12">Explore More</h2>
        </div>
    </div>
    </section>

  );
}
