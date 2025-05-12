import FundGoalSection from "@/components/Home Comps/FundGoalSection";
import HomeSection from "@/components/Home Comps/HomeSection";
import HowItWorkSection from "@/components/Home Comps/HowItWorkSection";


export default function HomeRaisers() {

    return (
        <section className="relative min-h-screen">



            <div className="relative z-10">
                <HomeSection />  
                <FundGoalSection />
                <HowItWorkSection />
            </div>
        </section>
    )
}