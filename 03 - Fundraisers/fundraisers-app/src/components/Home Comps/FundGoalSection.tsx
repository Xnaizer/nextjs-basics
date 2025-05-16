import { AiFillDollarCircle, AiOutlineFundProjectionScreen } from "react-icons/ai";


export default function FundGoalSection() {
  return (
    <section id="FundraisersGoal" className="bg-black bg-gradient-to-b from-blue-400 to-black/10 h-full w-full lg:pt-16 ">
      <div className="w-full max-w-[100rem] mx-auto flex flex-col lg:flex-col xl:flex-row justify-between items-start lg:gap-12  lg:p-16">

        <div className="w-full xl:w-1/2 p-8 lg:p-0">
          <h1 className="text-3xl sm:text-4xl text-white tracking-tight font-light ">
            <span className="text-cyan-400 ">Fund</span>raisers Goals
          </h1>
          <p className="text-neutral-200 pt-6  text-base sm:text-md md:text-xl font-light max-w-[100rem] leading-relaxed">
            Fundraisers is a decentralized crowdfunding platform that empowers impactful ideas to grow through blockchain transparency.
            By acting as a neutral connector between project creators and global supporters, we ensure every donation is traceable,
            every action is accountable, and every initiative — whether environmental, technological, creative, or humanitarian —
            has the space and tools it needs to thrive.
          </p>
        </div>
        
        <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-center p-10">
          <div className="bg-neutral-900 p-8 rounded-xl text-center border-2   border-cyan-700 shadow-md hover:shadow-cyan-500/50 transition-shadow duration-300">
            <AiFillDollarCircle className="text-5xl sm:text-6xl mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-medium text-white">Rp. 3,7 Billion</h2>
            <p className="text-base sm:text-lg pt-4 text-gray-300">IDRX Stablecoin</p>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl text-cyan-300 font-light">Total Managed Funds</p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl text-center border-2 border-cyan-700 shadow-md hover:shadow-cyan-500/50 transition-shadow duration-300 ">
            <AiOutlineFundProjectionScreen className="text-5xl sm:text-6xl mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">122+</h2>
            <p className="text-base sm:text-lg text-white pt-4">Projects</p>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl text-cyan-300 font-light">Total Managed Projects</p>
          </div>
        </div>
      </div>

    </section>
  );
}
