
// import ProgramCard from "@/components/ProgramCard"
import { FaArrowRight } from "react-icons/fa"

export default function FeaturesRaisers() {
   return (
    <>
        <div className="bg-black pt-46">
        <div className="pointer-events-none fixed inset-0 -z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
            <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
        </div>
        <div className="max-w-[100rem] min-h-screen mx-auto px-4 sm:px-6 lg:px-16  text-white pb-24 z-10">

            <div className="flex justify-between items-center pb-8 md:pb-16 px-4" >
                <div className="text-2xl md:text-4xl font-light tracking-tighter">
                    <span>Explore </span>
                    <span className="text-cyan-400">Fund</span>
                    <span className="text-white">raisers</span>
                    <span> Programs </span>
                </div>
                <p className="text-md sm:text-xl  text-neutral-400 hover:text-neutral-500 text-sm flex items-center gap-1 md:gap-4 group cursor-pointer">Back To Home <FaArrowRight className="group-hover:translate-x-1 duration-300 group-hover:text-neutral-500 cursor-pointer"/></p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12 justify-items-center px-5">
                <p>coming soon</p>
            </div>
        </div>
    </div>
    

    </>
   ) 
}