import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/footer/footer";
const sportBetting = () => {
  return (
    <>
      <header className="bg-black/75">
        <div className="w-full flex justify-center -mt-2 pb-2">
          <Image
            src={"/card-4.png"}
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

      <section className="w-11/12 mx-auto mt-[230px] md:mt-[500px] bg-[#D2E2F1] p-6 rounded-3xl mb-12">
        <div className="flex md:flex-row md:flex-wrap xl:flex-nowrap flex-col  gap-4">
          {/* ***********************     How to play Card      ************************* */}

          <div className="bg-white w-full md:w-[48%] xl:w-[25%] rounded-3xl pb-3">
            <div className="relative h-[200px] w-full rounded-3xl">
              <Image
                src={"/lotto.png"}
                width={"300"}
                height={"400"}
                alt="card-img"
                className="z-0 h-full w-full rounded-3xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h1 className="text-[33px] md:text-[28px] xl:text-[33px] font-Power font-semibold text-white">
                  Football
                </h1>
              </div>
            </div>

            <div className="flex flex-col mx-3 mt-4 gap-5">
              {/* *******************  1st Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
              {/* *******************  2nd Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
              {/* *******************  3rd Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* *******************************   Post Card 1    *************************** */}
          <div className="w-full md:w-[48%] xl:w-[25%]  bg-white rounded-3xl">
            <div className="relative h-[200px] w-full rounded-3xl">
              <Image
                src={"/step3.png"}
                width={"300"}
                height={"400"}
                alt="card-img"
                className="z-0 h-full w-full rounded-3xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h1 className="text-[33px] md:text-[28px] xl:text-[33px] font-Power font-semibold text-white">
                  Basketball
                </h1>
              </div>
            </div>
            <div className="flex flex-col mx-3 mt-4 gap-5">
              {/* *******************  1st Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
              {/* *******************  2nd Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
              {/* *******************  3rd Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* *******************************   Post Card 2    *************************** */}
          <div className="w-full md:w-[48%] xl:w-[25%] bg-white rounded-3xl">
            <div className="relative h-[200px] w-full rounded-3xl">
              <Image
                src={"/step1.png"}
                width={"300"}
                height={"400"}
                alt="card-img"
                className="z-0 h-full w-full rounded-3xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h1 className="text-[33px] md:text-[28px] xl:text-[33px] font-Power font-semibold text-white">
                  Handball
                </h1>
              </div>
            </div>
            <div className="flex flex-col mx-3 mt-4 gap-5">
              {/* *******************  1st Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
              {/* *******************  2nd Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
              {/* *******************  3rd Row  ***************** */}
              <div className="flex flex-row justify-between">
                <div className="w-[48%] my-auto">
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                  <p className="text-[11px] text-bold font-Roboto text-black">
                    👕 Manchester United
                  </p>
                </div>
                <div className="w-[48%] flex justify-end gap-1">
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                  <p className="p-2 border-gray-400 bg-slate-300 border-[1px] text-[10px] text-black font-Bakbak my-auto rounded">
                    1,75
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* *******************************   Post Card 3    *************************** */}
          <div className="w-full md:w-[48%] xl:w-[25%] bg-white rounded-3xl">
            <div className="relative h-[200px] w-full rounded-3xl">
              <Image
                src={"/step2.png"}
                width={"300"}
                height={"400"}
                alt="card-img"
                className="z-0 h-full w-full rounded-3xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h1 className="text-[33px] md:text-[28px] xl:text-[33px] font-Power font-semibold text-white">
                  Tennis
                </h1>
              </div>
            </div>
            {/* *******************    Player  Heading       ************ */}
            <div className="flex flex-col mx-3 mt-4 gap-1">
              <div className=" flex gap-1">
                <div className="w-[35%]">
                  <p className="text-[11px] text-black font-bold">Player 1</p>
                </div>
                <div className="w-[35%]">
                  <p className="text-[11px] text-black font-bold">Player 2</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black"></p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black"></p>
                </div>
              </div>
              {/* *******************    Player  1       ************ */}
              <div className=" flex gap-1">
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">Dimer Dzumhar</p>
                </div>
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">- Andria</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">0.30</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">1.60</p>
                </div>
              </div>
              {/* *******************    Player  2       ************ */}
              <div className=" flex gap-1">
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">Dimer Dzumhar</p>
                </div>
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">- Andria</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">0.30</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">1.60</p>
                </div>
              </div>
              {/* *******************    Player  3       ************ */}
              <div className=" flex gap-1">
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">Dimer Dzumhar</p>
                </div>
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">- Andria</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">0.30</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">1.60</p>
                </div>
              </div>
              {/* *******************    Player  4       ************ */}
              <div className=" flex gap-1">
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">Dimer Dzumhar</p>
                </div>
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">- Andria</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">0.30</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">1.60</p>
                </div>
              </div>
              {/* *******************    Player  5       ************ */}
              <div className=" flex gap-1">
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">Dimer Dzumhar</p>
                </div>
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">- Andria</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">0.30</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">1.60</p>
                </div>
              </div>
              {/* *******************    Player  6       ************ */}
              <div className=" flex gap-1">
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">Dimer Dzumhar</p>
                </div>
                <div className="w-[35%]">
                  <p className="text-[10px] text-black">- Andria</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">0.30</p>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="text-[11px] text-black">1.60</p>
                </div>
              </div>
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
};

export default sportBetting;
