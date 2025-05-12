'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';
import { Menu, X } from "lucide-react";
import FundraisersLogo from "../../public/Fundraisers.svg";
import Buttons from "./Buttons"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  // const router = useRouter();


  const handleConnectWallet = () => {
    console.log('hi')
  }
  
const menuItems = [
  { label: "Home", targetId: "HomeSection" },
  { label: "Explore", targetId: "ExploreSection" },
  { label: "How It Work", targetId: "HowItWorkSection" },
  { label: "About Us", targetId: "AboutUsSection" },
];

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
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-4 lg:px-8 transition-shadow backdrop-blur-sm duration-300 bg-transparent  ${
        scrollActive ? "shadow-[0_2px_10px_rgba(255,255,255,0.15)] shadow-cyan-400" : ""
      }`}
    >
      <section className="max-w-[100rem] mx-auto flex flex-wrap items-center justify-between py-4">
        
        
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={FundraisersLogo} alt="Logo" width={32} height={21} />
          <div>
            <span className="text-cyan-400 text-2xl font-light tracking-tighter">Fund</span>
            <span className="text-white text-2xl font-light tracking-tighter">raisers</span>
          </div>
        </div>

        
        <div className="lg:hidden ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? (
              <X className="text-white w-8 pt-2 h-10" />
            ) : (
              <Menu className="text-white w-8 pt-2 h-10" />
            )}
          </button>
        </div>

        
        <div
          className={`w-full lg:w-auto flex-col lg:flex-row gap-10 lg:gap-16 items-center bg-transparent text-white text-lg font-readex font-light 
            transition-all duration-300 ease-in-out overflow-hidden
            ${menuOpen ? "flex mt-6" : "hidden"} lg:flex`}
        >
          {menuItems.map(({ label, targetId }) => (
            <h2
              key={label}
              onClick={() => {
                const target = document.getElementById(targetId);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                  setMenuOpen(false);
                }
              }}
              className="hover:text-cyan-400 cursor-pointer"
            >
              {label}
            </h2>
          ))}

          <div className="w-full lg:w-auto   lg:mt-0 flex justify-center text-center">
            <Buttons
              className="text-white font-light border-[3px] border-cyan-500 py-2 px-4 rounded-xl hover:border-cyan-700 hover:bg-cyan-600 cursor-pointer w-full lg:w-auto "
              onClick={() => {
                setMenuOpen(false); // optionally close menu on click
                handleConnectWallet();
              }}
              type="button"
            >
              Connect Wallet
            </Buttons>
          </div>

        </div>

      </section>
    </nav>

  );
}
