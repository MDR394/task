'use client'
import Header from "@/components/header/home-header";
import Calculator from "@/components/calculator";
import Cart from "@/components/card/features-card";
import LogoCarousel from "@/components/slider/slider";
import ProgressBar from "@/components/progressbar/progress-bar";
import Image from "next/image";
import StepCard from "@/components/card/step-card";
import PieChart from "@/components/charts/pie-chart";
import TimeLine from "@/components/timeLine/timeLine";
import Accordions from "@/components/accordions/accordions";


export default function Home() {
  
const logos = [
  { src: '/slide1.png', alt: 'Logo 1' },
  { src: '/slide2.png', alt: 'Logo 2' },
  { src: '/slide3.png', alt: 'Logo 3' },
  { src: '/slide4.png', alt: 'Logo 4' },
  { src: '/slide5.png', alt: 'Logo 5' },
  { src: '/slide6.png', alt: 'Logo 6' },
  // Add more logos as needed
];

  return (
    <>
        <Header />
        <section className="w-11/12 mx-auto mt-[200px] md:mt-[400px]">
            <h1 className="text-center mt-12 text-xl font-Power">UNTIL LISTINGS AND LAUNCH OF MEME KOMBAT</h1>
            <div className="flex justify-center mt-5">
            <ProgressBar />
            </div>
            <h1 className="text-center mt-12 text-xl font-Power">CHOOSE YOUR CURRENCY</h1>
            <Calculator />
        </section>
        {/* *********************    Our Vision     *************************** */}

        <section className="w-11/12 mx-auto mt-12">
          <h1 className="text-center font-Power text-[44px] md:text-[64px]">Our Vision</h1>
          <p className="font-Roboto text-[22px] text-[#B7B4BB] mt-3">With a market worth over $2,531 billion and more than 2.5 billion users worldwide, casino games, mobile games, sports betting and lottery games offer huge potential for competitive tournaments. We aim to energize this ecosystem by launching digital tournaments where participants feed a jackpot via their registrations, then compete to win it.
              <br /><br />
            Our vision is to create an active omichain community where users of different blockchains can explore, learn, and win, while benefiting from collaborative opportunities and immersive experiences. We aim to transform engagement in digital games into a rewarding experience, paving the way for self-improvement and business opportunities.
            </p>
            
        </section>

         {/* *********************    Feature     *************************** */}

         <section className="mt-9 w-11/12 mx-auto">
         <h1 className="text-center font-Power text-[44px] md:text-[64px]">Feature</h1>
         <div className="flex flex-col md:flex-row gap-5 mt-5">
        <Cart src="/lotto.png" title="Lotto Stock" detail="Choose the 6 stocks Market that will be the best performers tomorrow and win the jackpot." />
        <Cart  src="/card-2.png" title="Casino Competition​" detail="Win the jackpot by guessing the number where the ball will land; closest or exact guesses triumph." />
        <Cart  src="/card-3.jpeg" title="Race for Thrillx" detail="Maximize your score by covering a set distance within a specified time to avoid elimination and win the jackpot." />
        <Cart  src="/card-4.png" title="Sport Betting Competition" detail="Earn points by accurately predicting match details. The top 10 to 50 players with the most points share the jackpot." />
         </div>
         </section>

         {/* ************************     Slider         **************************** */}

         <section className="mt-12 w-10/12 md:w-11/12 mx-auto" id="utility">
            <LogoCarousel logos={logos} />
        </section>

        {/* ******************************   EARN PASSIVE INCOME    *********************** */}

        <section className="flex flex-col-reverse md:flex-row mt-9 w-11/12 mx-auto bg-[#17151D] p-2 md:p-9 rounded-3xl">
          <div className="w-full md:w-2/4 flex flex-col">
            <p className="mx-auto mt-12 md:mt-[90px] px-3 py-2 bg-slate-300 inline rounded-3xl bg-gradient-to-r from-[#33E3A2] to-blue-500 text-black font-bold text-sm">EARN PASSIVE INCOME</p>
            <h1 className=" mt-5 text-[25px] md:text-[35px] font-light text-center leading-10">Earn NFT during presale as a VIP member and get passive income after each tournament</h1>
            <button className="mt-5 mx-auto px-6 py-4 rounded-full hover:bg-[#33E3A2] mb-[60px] border">LEARN MORE</button>
          </div>
          <div className="w-full md:w-2/4 flex justify-end mt-9"><Image className="origin-bottom-right md:mt-0 -mt-[80px] scale-105 md:scale-150" id="person" src={"/perrson-1.png"} width={"450"} height={"300"} alt="person"/></div>
        </section>

        {/* ******************************   How Staking Works    *********************** */}

        <section className="mt-[50px] w-11/12 mx-auto" id="steps">
          <h1 className="text-center font-Power text-[44px] md:text-[64px]">How Staking Works</h1>
          <p className="font-Roboto text-[22px] text-[#B7B4BB] mt-3">The point of $MK is not to just buy and trade, but to stake your token in Meme Kombat and bet on battles for the chance to win big! Alongside our regular battles we will also have larger, more hyped battles for people to participate in with large prizes for winners.
            </p>
        </section>
        <section className="mt-9 p-6 flex flex-col md:flex-row gap-[60px] md:gap-12 w-9/12 md:w-full mx-auto">
            <StepCard btnRotateDeg="-rotate-12" cardRotateDeg="rotate-3" src="/step1.png" title="BUY $THLX DURING PRESALE" step="1"/>
            <StepCard btnRotateDeg="-rotate-2" cardRotateDeg="-rotate-3" src="/step2.png" title="CHOOSE YOUR COMPETITION" step="2"/>
            <StepCard btnRotateDeg="-rotate-12" cardRotateDeg="rotate-3" src="/step3.png" title="STAKE TOKENS" step="3"/>
            <StepCard btnRotateDeg="-rotate-2" cardRotateDeg="-rotate-3" src="/step4.png" title="ENJOY THE GAME" step="4"/>
            <StepCard btnRotateDeg="-rotate-12" cardRotateDeg="rotate-3" src="/step5.png" title="WIN THE JACKPOT" step="5"/>
        </section>
{/* *********************      TOKENOMICS    ********************** */}
        <section id="tokens">
  <div className={`w-full`}>
    <div className="relative w-full">
      <Image src={'/tokenomics-bg.jpg'} width={"270"} height={"350"} alt="tokenomics-bg" className="-z-10 h-full w-full absolute object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black"></div>
      <div className="relative pb-[130px]">
          <h1 className=" font-Power text-[44px] md:text-[64px] text-white text-center mt-9">TOKENOMICS</h1>
          <div className="mt-[20px] w-11/12 mx-auto flex flex-col md:flex-row gap-12">
            {/* *********************       Left TOKENOMICS Column   ********************** */}
            <div className="w-full md:w-2/6">
              <h2 className="font-bold text-[20px]">50% PRESALE</h2>
              <h3 className="font-normal text-[17px] mt-4">Half of total token supply will be set aside for the thrillx presale. The intention is for all who buy the presale to participate in competition.</h3>
              <h2 className="font-bold text-[20px] mt-5">30% FOR STAKING AND COMPETITION REWARDS</h2>
              <h3 className="font-normal text-[17px] mt-4">We have set aside a large percentage of the supply to support that ecosystem and help maintain balance.</h3>
            </div>
            {/* *********************       Center TOKENOMICS Column   ********************** */}
            <div className="w-full md:w-2/6">
                <PieChart />
            </div>
            {/* *********************       Right TOKENOMICS Column   ********************** */}
            <div className="w-full md:w-2/6">
            <h2 className="font-bold text-[20px]">10% DEX</h2>
              <h3 className="font-normal text-[17px] mt-4">10% of the overall supply is reserved for pairing with a liquidity pool on a decentralized exchange.</h3>
              <h2 className="font-bold text-[20px] mt-5">10% COMMUNITY REWARDS</h2>
              <h3 className="font-normal text-[17px] mt-4">Thrillx is all about participation and community engagement so we have set aside a good amount of tokens for community.</h3>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>

 {/* *****************************       ROADMAP         **************************** */}
<section className="mt-12 pb-12" id="roadmap">
<h1 className=" font-Power text-[44px] md:text-[64px] text-white text-center mb-4 ">ROADMAP</h1>
  <TimeLine />
</section>

 {/* ************************      JOIN OUR PRIZE GAME!   **************************/}
 <section>
 <div className={`w-full`}>
    <div className="relative w-full">
      <Image src={'/screen.jpg'} width={"270"} height={"350"} alt="tokenomics-bg" className="-z-10 h-full w-full absolute object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/80"></div>
      <div className="relative pb-[100px] pt-[100px]">
          
          <div className="mt-[20px] w-11/12 mx-auto flex justify-center">
            {/* *********************       Left Column   ********************** */}
            <div className="w-[30%] flex flex-col justify-between items-center">
            <Image src={"/circle1.png"} width={30} height={30} alt="icon" className=""/>
            <div className="flex justify-end w-full">
            <Image src={"/bitcoin.png"} width={80} height={30} alt="icon" className="float-end"/>
            </div>
            </div>
            {/* *********************       Center Column   ********************** */}
            <div className="w-[40%">
            <h1 className=" font-Power text-[71px] text-white text-center leading-[92px]">JOIN OUR <br /> PRIZE <br /> GAME!</h1>
            </div>
            {/* *********************       Right Column   ********************** */}
            <div className="w-[30%] flex flex-col justify-between items-center">
            <Image src={"/ethereum2.png"} width={60} height={30} alt="icon" className=""/>
            <div className="flex justify-start w-full">
            <Image src={"/x.png"} width={30} height={30} alt="icon" className="float-end"/>
            </div>
            </div>
          </div>
      </div>
    </div>
  </div>
 </section>

 {/* ****************************         accordions        ************************ */}
 <section className="w-11/12 mt-6 md:w-[650px] mx-auto mb-[100px]">
  <Accordions />
 </section>

 {/* ************************      Footer Logo Area   **************************/}
 <section>
 <div className={`w-full`}>
    <div className="w-full">
      
      <div className="pb-[100px]">
          
          <div className="mt-[20px] w-11/12 mx-auto flex justify-center">
            {/* *********************       Left Column   ********************** */}
            <div className="w-[30%] flex flex-col justify-between items-center">
            <Image src={"/ethereum1.png"} width={30} height={30} alt="ethereum1"/>
            <div className="flex justify-end w-full">
            <Image src={"/circle3.png"} width={20} height={30} alt="circle3" className="float-end"/>
            </div>
            </div>
            {/* *********************       Center Column   ********************** */}
            <div className="w-[40%] flex flex-col items-center">
            <Image src={"/logo.png"} width={200} height={30} alt="logo"/>
            <h2 className="font-Power text-center text-[23px] mt-8">Get your spot WIN your <br /> prizes!</h2>
            </div>
            {/* *********************       Right Column   ********************** */}
            <div className="w-[30%] flex flex-col justify-between items-center">
            <Image src={"/x.png"} width={60} height={30} alt="x"/>
            <div className="flex justify-start w-full">
            <Image src={"/circle1.png"} width={30} height={30} alt="circle1" className="float-end"/>
            </div>
            </div>
          </div>
      </div>
    </div>
  </div>
 </section>

 <section className="w-11/12 mx-auto">
  <hr className="border-[#A8A8A8]"/>
  <div className="flex flex-col md:flex-row items-center md:justify-between mt-4 mb-7">
    <p className="text-center md:text-left">© 2023 THRILLX. All rights reserved. | EE -DIGITAL AGENCY</p>
    <p className="mt-4 md:mt-0">Privacy policy | Terms of use</p>
  </div>
 </section>
    </>
  );
}
