import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/footer/footer";
import FeaturesHeader from "@/components/header/features-header";

function page() {
  return (
    <>
      <FeaturesHeader />

      <section className="mt-[230px] md:mt-[400px] w-10/12 mx-auto flex flex-row md:flex-row justify-center flex-wrap md:flex-nowrap gap-5">
        <div className="w-2/5 flex flex-col items-center gap-2">
          <h1 className="font-Bakbak text-3xl">$</h1>
          <h1 className="font-Power text-[20px]">689,904</h1>
          <button className="text-[15px] font-Roboto py-2 px-5 rounded-full bg-gradient-to-t from-[#021133] via-[#021133] to-[#004F80]">
            Check Now
          </button>
        </div>

        <div className="w-2/5 flex flex-col items-center gap-2">
          <h1 className="font-Bakbak text-3xl">$</h1>
          <h1 className="font-Power text-[20px]">689,904</h1>
          <button className="text-[15px] font-Roboto py-2 px-5 rounded-full bg-gradient-to-t from-[#021133] via-[#021133] to-[#004F80]">
            Check Now
          </button>
        </div>

        <div className="w-2/5 flex flex-col items-center gap-2">
          <h1 className="font-Bakbak text-3xl">$</h1>
          <h1 className="font-Power text-[20px]">689,904</h1>
          <button className="text-[15px] font-Roboto py-2 px-5 rounded-full bg-gradient-to-t from-[#021133] via-[#021133] to-[#004F80]">
            Check Now
          </button>
        </div>

        <div className="w-2/5 flex flex-col items-center gap-2">
          <h1 className="font-Bakbak text-3xl">$</h1>
          <h1 className="font-Power text-[20px]">689,904</h1>
          <button className="text-[15px] font-Roboto py-2 px-5 rounded-full bg-gradient-to-t from-[#021133] via-[#021133] to-[#004F80]">
            Check Now
          </button>
        </div>

        <div className="w-2/5 flex flex-col items-center gap-2">
          <h1 className="font-Bakbak text-3xl">$</h1>
          <h1 className="font-Power text-[20px]">689,904</h1>
          <button className="text-[15px] font-Roboto py-2 px-5 rounded-full bg-gradient-to-t from-[#021133] via-[#021133] to-[#004F80]">
            Check Now
          </button>
        </div>
      </section>

      <section className="w-11/12 mx-auto mt-[80px] bg-[#D2E2F1] p-6 rounded-2xl mb-12">
        <div className="flex md:flex-row flex-col  gap-6">
          {/* ***********************     How to play Card      ************************* */}
          <div className="bg-white w-full md:w-[35%] rounded-2xl pb-3">
            <Image
              src={"/lotto.png"}
              width={600}
              height={200}
              alt="card"
              style={{
                borderRadius: "1rem",
                width: "100%",
                height: "200px",
                objectFit: "cover",
                objectPosition: "top", // You can adjust this value as needed
              }}
            />
            <h1 className="text-[21px] text-[#021133] font-Power font-extrabold ml-4 mt-4">
              How to play
            </h1>
            <div className="ml-4 mt-1 flex flex-row gap-8 w-full">
              <div className="flex flex-col gap-4 w-[40%]">
                <ul className="list-disc ml-4">
                  <li className="text-[14px] font-Roboto text-gray-500">
                    List Item #3
                  </li>
                  <li className="text-[14px] font-Roboto text-gray-500">
                    List Item #3
                  </li>
                  <li className="text-[14px] font-Roboto text-gray-500">
                    List Item #3
                  </li>
                </ul>
                <button className="text-[15px] font-Roboto py-2 px-5 rounded-xl bg-gradient-to-t from-[#021133] via-[#021133] to-[#004F80]">
                  Check Now
                </button>
              </div>

              <div className="flex flex-col items-center gap-4 bg-[#021133] rounded-xl py-3  w-[40%]">
                <button className="text-[15px] font-Roboto py-2 px-5 rounded-xl bg-gradient-to-t from-[#002655] via-[#021133] to-[#004F80]">
                  Check Now
                </button>
                <button className="text-[15px] font-Roboto py-2 px-5 rounded-xl bg-gradient-to-t from-[#002655] via-[#021133] to-[#004F80]">
                  Check Now
                </button>
              </div>
            </div>
          </div>
          {/* *******************************   Post Card 1    *************************** */}
          <div className="w-full md:w-[23.333%] bg-white rounded-2xl">
            <Image
              src={"/step3.png"}
              width={600}
              height={200}
              alt="card"
              style={{
                borderRadius: "1rem",
                width: "100%",
                height: "200px",
                objectFit: "cover",
                objectPosition: "top", // You can adjust this value as needed
              }}
            />
            <h1 className="text-[21px] text-[#021133] font-Power font-extrabold ml-4 mt-4">
              ENJOY THE GAME
            </h1>
            <div className="mx-4 mt-1 flex flex-col gap-2 ">
              <p className="text-[14px] font-Roboto text-gray-500">
                The point of $MK is not to just buy and trade, but to stake your
                token in Meme Kombat and bet on battles for the chance to win
                big! Alongside our
              </p>
              <p className="text-[14px] font-Roboto text-black">READ MORE »</p>
            </div>
          </div>
          {/* *******************************   Post Card 2    *************************** */}
          <div className="w-full md:w-[23.333%] bg-white rounded-2xl">
            <Image
              src={"/step4.png"}
              width={600}
              height={200}
              alt="card"
              style={{
                borderRadius: "1rem",
                width: "100%",
                height: "200px",
                objectFit: "cover",
                objectPosition: "top", // You can adjust this value as needed
              }}
            />
            <h1 className="text-[21px] text-[#021133] font-Power font-extrabold ml-4 mt-4">
              STAKE TOKENS
            </h1>
            <div className="mx-4 mt-1 flex flex-col gap-2 pb-2">
              <p className="text-[14px] font-Roboto text-gray-500">
                The point of $MK is not to just buy and trade, but to stake your
                token in Meme Kombat and bet on battles for the chance to win
                big! Alongside our
              </p>
              <p className="text-[14px] font-Roboto text-black">READ MORE »</p>
            </div>
          </div>

          {/* *******************************   Post Card 3    *************************** */}
          <div className="w-full md:w-[23.333%] bg-white rounded-2xl">
            <Image
              src={"/step2.png"}
              width={600}
              height={200}
              alt="card"
              style={{
                borderRadius: "1rem",
                width: "100%",
                height: "200px",
                objectFit: "cover",
                objectPosition: "top", // You can adjust this value as needed
              }}
            />
            <h1 className="text-[21px] text-[#021133] font-Power font-extrabold ml-4 mt-4">
              ENJOY THE GAME
            </h1>
            <div className="mx-4 mt-1 flex flex-col gap-2 ">
              <p className="text-[14px] font-Roboto text-gray-500">
                The point of $MK is not to just buy and trade, but to stake your
                token in Meme Kombat and bet on battles for the chance to win
                big! Alongside our
              </p>
              <p className="text-[14px] font-Roboto text-black">READ MORE »</p>
            </div>
          </div>
        </div>
        <h2 className="text-[20px] text-slate-700 font-Roboto mt-4">
          With a market worth over $2,531 billion and more than 2.5 billion
          users worldwide, casino games, mobile games, sports betting and
          lottery games offer huge potential for competitive tournaments. We aim
          to energize this ecosystem by launching digital tournaments where
          participants feed a jackpot via their registrations, then compete to
          win it.
        </h2>
      </section>

      <Footer />
    </>
  );
}

export default page;
