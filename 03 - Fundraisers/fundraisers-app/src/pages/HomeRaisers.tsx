"use client"

import { useState } from "react";
import ContributeModal from "@/components/ContributeModal";
import AboutUsSection from "@/components/Home Comps/AboutUsSection";
import ExploreSection from "@/components/Home Comps/ExploreSection";
import FundGoalSection from "@/components/Home Comps/FundGoalSection";
import HomeSection from "@/components/Home Comps/HomeSection";
import HowItWorkSection from "@/components/Home Comps/HowItWorkSection";
import CardModal from "@/components/CardModal";
import { ProgramType } from "@/constants/ProgramData.constant";


export default function HomeRaisers() {

    const [contributeIsOpen, setContributeIsOpen] = useState<boolean>(false);
    const [cardIsOpen, setCardIsOpen] = useState<boolean>(false);
    const [historyIsOpen, setHistoryIsOpen] = useState<boolean>(false);
    const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(null)


    const handleOpenContributeCard = () => {
        setContributeIsOpen(true);
        setCardIsOpen(false);
        setHistoryIsOpen(false);
    }

    const handleCardClose = () => {
        setCardIsOpen(false);
        setHistoryIsOpen(false);
    }


    return (
        <section className="relative min-h-screen">



            <div className="relative z-10">
                <HomeSection onOpen={() => setContributeIsOpen(true)}/>  

                {contributeIsOpen && <ContributeModal onCardClose={() => setContributeIsOpen(false)}
                isContributeOpen={contributeIsOpen}    
                /> }
                
                {cardIsOpen && <CardModal 
                onCardClose={ handleCardClose} onContributeCard={handleOpenContributeCard}
                onHistoryOpen={() => setHistoryIsOpen(!historyIsOpen)} 
                isHistoryOpen={historyIsOpen}
                isCardOpen={cardIsOpen}
                program={selectedProgram}
                />}

                <FundGoalSection />
                <ExploreSection onOpen={() => setCardIsOpen(true)} selectedCard={setSelectedProgram} />
                <HowItWorkSection />
                <AboutUsSection />
            </div>
        </section>
    )
}