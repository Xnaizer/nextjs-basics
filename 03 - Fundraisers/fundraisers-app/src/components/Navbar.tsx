'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import FundraisersLogo from "../../public/Fundraisers.svg";
import Buttons from "./Buttons"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  const handleConnectWallet = () => {
    console.log('hi')
  }
  

  const handleScroll = () => {
    if(window.scrollY >= 50 ){
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  },[]);

  return (
    <nav className={`fixed top-0 left-0  z-50 shadow-md bg-black w-full px-4 lg:px-8 ${scrollActive ? "shadow-[0_2px_10px_rgba(255,255,255,0.15)] shadow-cyan-400" : ""} transition-shadow duration-300 `} >
      <section className="max-w-[100rem] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between py-4 ">
        
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={FundraisersLogo} alt="Logo" width={32} height={21} />
          <div>
            <span className="text-cyan-400 text-2xl font-light tracking-tighter">Fund</span>
            <span className="text-white text-2xl font-light tracking-tighter">raisers</span>
          </div>
        </div>

        
        <div className="lg:hidden ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="text-white w-8 pt-2 h-10" /> : <Menu className="text-white w-8 pt-2 h-10" />}
          </button>
        </div>

        
        <div
          className={`w-full lg:w-auto lg:flex items-center justify-between gap-12 text-white text-lg text-[1.04rem] tracking-tight font-readex font-light transition-all duration-300 ease-in-out
          ${menuOpen ? 'flex flex-col mt-12 space-y-1 ' : 'hidden'} lg:flex lg:flex-row lg:space-y-0`}
        >
          <h2 className="hover:text-cyan-400 cursor-pointer">Home</h2>
          <h2 className="hover:text-cyan-400 cursor-pointer">Explore</h2>
          <h2 className="hover:text-cyan-400 cursor-pointer">How It Work</h2>
          <h2 className="hover:text-cyan-400 cursor-pointer">About Us</h2>

          
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <Buttons className={`text-white font-light border-[3px] border-cyan-500 py-2 px-4 rounded-xl hover:border-cyan-700 hover:bg-cyan-600 cursor-pointer w-full lg:w-auto ${menuOpen ? "mb-12" : ""}`} onClick={handleConnectWallet} type="button">Connect Wallet</Buttons>
          </div>

        </div>
      </section>
    </nav>
  );
}
