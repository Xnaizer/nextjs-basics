"use client";

import HomeImg1 from "../../../public/HomeBanner1.jpg"
import HomeImg2 from "../../../public/HomeBanner2.jpg"
import Buttons from "../Buttons";
import Image from "next/image";

export default function HomeSection() {

    const handleDummy = () => {
        console.log("hi")
    }

    return (
        <section id="HomeSection" className="w-full  bg-black/100 bg-gradient-to-t from-blue-400 to-black pt-16 md:pt-24 flex justify-center z-50">
            
            
            <div className="w-full max-w-[100rem] h-full flex flex-col lg:flex-row justify-between">

                
                <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
                    <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl tracking-tighter font-semibold leading-tight">
                        Revolutionizing Crowdfunding with <span className="bg-gradient-to-b from-cyan-400/100 to-blue-400 bg-clip-text text-transparent">
                        the Power of Blockchain
                        </span>.
                    </h1>
                    <p className="text-neutral-200 pt-6 pb-8 text-lg md:text-xl font-thin w-full max-w-xl">
                        Discover a transparent and secure way to support meaningful projects. Our blockchain-powered crowdfunding platform ensures that every fund is traceable, every transaction is tamper-proof, and every project is accountable — giving you full confidence in where your money goes.
                    </p>

                    <div className="gap-6 md:gap-12 w-full flex flex-col sm:flex-row pt-4 md:pt-8">
                        
                        <Buttons 
                            type="button" 
                            onClick={handleDummy}
                            className="text-white border-[3px] border-cyan-500 bg-cyan-400 py-4 px-6 w-full sm:w-48 rounded-xl hover:border-cyan-400 hover:bg-cyan-500 cursor-pointer"
                        >
                            Explore Program
                        </Buttons>   

                        
                        <Buttons 
                            type="button" 
                            onClick={handleDummy}
                            className="text-white border-[3px] border-cyan-500 py-4 px-6 w-full sm:w-48 rounded-xl bg-black hover:border-cyan-400 hover:bg-slate-900 cursor-pointer"
                        >
                            Contribute
                        </Buttons>                
                    </div>
                </div>

                
                <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6 md:gap-12 justify-center p-8 md:p-12 lg:p-16 ">
                    

                    
                    <div className="w-full md:w-1/2 p-[3px] rounded-lg bg-gradient-to-b from-cyan-500 to-purple-500 overflow-hidden">
                    <div className="relative z-0 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-full rounded-lg overflow-hidden shadow-2xl">
                        <Image
                        src={HomeImg1}
                        alt="Home1"
                        fill
                        className="object-cover rounded-lg"
                        />
                    </div>
                    </div>

                    
                    <div className="w-full md:w-1/2 p-[3px] rounded-lg bg-gradient-to-b from-cyan-500 to-purple-500 overflow-hidden">
                    <div className="relative z-0 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-full rounded-lg overflow-hidden shadow-2xl">
                        <Image
                        src={HomeImg2}
                        alt="Home2"
                        fill
                        className="object-cover rounded-lg "
                        />
                    </div>
                    </div>


                </div>

            </div>
        </section>
    );
}
