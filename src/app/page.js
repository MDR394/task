'use client'
import Header from "@/components/header/home-header";
import Calculator from "@/components/calculator";
import Cart from "@/components/card/features-card"
import LogoCarousel from "@/components/slider/slider"

export default function Home() {
  
const logos = [
  { src: '/logo.png', alt: 'Logo 1' },
  { src: '/logo.png', alt: 'Logo 1' },
  { src: '/logo.png', alt: 'Logo 1' },
  { src: '/logo.png', alt: 'Logo 1' },
  { src: '/logo.png', alt: 'Logo 1' },
  // Add more logos as needed
];
  return (
    <>
        <Header />

        {/* *********************    Our Vision     *************************** */}

        <section className="mt-[400px] w-11/12 mx-auto">
          <h1 className="text-center font-Power text-[64px]">Our Vision</h1>
          <p className="font-Roboto text-[22px] text-[#B7B4BB] mt-3">With a market worth over $2,531 billion and more than 2.5 billion users worldwide, casino games, mobile games, sports betting and lottery games offer huge potential for competitive tournaments. We aim to energize this ecosystem by launching digital tournaments where participants feed a jackpot via their registrations, then compete to win it.
              <br /><br />
            Our vision is to create an active omichain community where users of different blockchains can explore, learn, and win, while benefiting from collaborative opportunities and immersive experiences. We aim to transform engagement in digital games into a rewarding experience, paving the way for self-improvement and business opportunities.
            </p>
            <Calculator />
        </section>

         {/* *********************    Feature     *************************** */}

         <section className="mt-9 w-11/12 mx-auto">
         <h1 className="text-center font-Power text-[64px]">Feature</h1>
         <div className="flex flex-col md:flex-row gap-5 mt-5">
        <Cart src="/lotto.png" title="Lotto Stock" detail="Choose the 6 stocks Market that will be the best performers tomorrow and win the jackpot." />
        <Cart  src="/card-2.png" title="Casino Competition​" detail="Win the jackpot by guessing the number where the ball will land; closest or exact guesses triumph." />
        <Cart  src="/card-3.jpeg" title="Race for Thrillx" detail="Maximize your score by covering a set distance within a specified time to avoid elimination and win the jackpot." />
        <Cart  src="/card-4.png" title="Sport Betting Competition" detail="Earn points by accurately predicting match details. The top 10 to 50 players with the most points share the jackpot." />
         </div>
         </section>

         {/* ************************     Slider         **************************** */}

         <section className="mt-9 w-9/12 mx-auto">
            <LogoCarousel logos={logos} />
        </section>
    </>
  );
}
