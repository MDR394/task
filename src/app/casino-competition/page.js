import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/footer/footer";
function casinoCompetition() {
  return (
    <>
      <header className="bg-black/75">
        <div className="w-full flex justify-center -mt-2 pb-2">
          <Image
            src={"/card-2.png"}
            id="sportBetting-header-img"
            className="absolute bg-cover -z-10 h-[100vh] md:h-[80vh] xl:h-[100vh] w-auto"
            width="1550"
            height={"1000"}
            alt="logo"
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="absolute -z-10 inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="bg-auto bg-no-repeat bg-center w-11/12 md:w-full xl:w-10/12 mx-auto flex justify-between pt-5">
            <div className="logo">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  id="logo"
                  width="200"
                  height="200"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="menu md:flex gap-8 my-auto hidden">
              <Link
                href={"/"}
                className="font-bold md:text-[10px] lg:text-[15px] xl:text-[15px]"
              >
                Home
              </Link>
              <Link
                href={"/lotto-stock"}
                className="font-bold md:text-[10px] lg:text-[15px]"
              >
                Lotto Stock
              </Link>
              <Link
                href={"/casino-competition"}
                className="font-bold md:text-[10px] lg:text-[15px]"
              >
                Casino Competition​
              </Link>
              <Link
                href={"/race-for-thrillx"}
                className="font-bold md:text-[10px] lg:text-[15px]"
              >
                Race for Thrillx
              </Link>
              <Link
                href={"/sport-betting"}
                className="font-bold md:text-[10px] lg:text-[15px]"
              >
                Sport Betting Competition
              </Link>
            </div>
            <div className="empty">
              <p></p>
            </div>
          </div>
        </div>
      </header>

      <section className="w-11/12 mx-auto mt-[230px] md:mt-[500px] bg-[#D2E2F1] p-6 rounded-2xl mb-12">
        <div className="flex md:flex-row md:flex-wrap xl:flex-nowrap flex-col  gap-6">
          {/* ***********************     How to play Card      ************************* */}

          <div className="bg-white w-full md:w-[48%] xl:w-[35%] rounded-2xl pb-3">
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
            <div className="mx-4 mt-1 flex flex-col gap-1">
              <p className="text-[14px] font-Roboto text-gray-500">
                The point of $MK is not to just buy and trade, but to stake your
                token in Meme Kombat and bet on battles for the chance to win
                big! The point of $MK is not to just buy and trade, but to stake
                your token in Meme Kombat and bet on battles.
              </p>
              <p className="text-[14px] font-Roboto text-black">READ MORE »</p>
            </div>
          </div>
          {/* *******************************   Post Card 1    *************************** */}
          <div className="w-full md:w-[48%] xl:w-[23.333%]  bg-white rounded-2xl">
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
          <div className="w-full md:w-[48%] xl:w-[23.333%] bg-white rounded-2xl">
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
          <div className="w-full md:w-[48%] xl:w-[23.333%] bg-white rounded-2xl">
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

export default casinoCompetition;
