"use client"

import { useState } from "react";
import ContributeModal from "@/components/ContributeModal";
import AboutUsSection from "@/components/Home Comps/AboutUsSection";
import ExploreSection from "@/components/Home Comps/ExploreSection";
import FundGoalSection from "@/components/Home Comps/FundGoalSection";
import HomeSection from "@/components/Home Comps/HomeSection";
import HowItWorkSection from "@/components/Home Comps/HowItWorkSection";
import CardModal from "@/components/CardModal";


export default function HomeRaisers() {

    const [contributeIsOpen, setContributeIsOpen] = useState<boolean>(false);
    const [cardIsOpen, setCardIsOpen] = useState<boolean>(false);



    return (
        <section className="relative min-h-screen">



            <div className="relative z-10">
                <HomeSection onOpen={() => setContributeIsOpen(true)}/>  

                {contributeIsOpen && <ContributeModal onClose={() => setContributeIsOpen(false)}/> }
                
                {cardIsOpen &&                 <CardModal onClose={() => setCardIsOpen(false)}/>}

                <FundGoalSection />
                <ExploreSection onOpen={() => setCardIsOpen(true)} />
                <HowItWorkSection />
                <AboutUsSection />
            </div>
        </section>
    )
}