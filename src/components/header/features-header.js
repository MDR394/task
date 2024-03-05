import React from "react";
import Image from "next/image";
import Link from "next/link";

function featuresHeader() {
  return (
    <>
      <div className="bg-[#021133]">
        <header className="bg-black/75">
          <div className="w-full flex justify-center -mt-2 pb-2">
            <Image
              src={"/lotto-stock-header.jpg"}
              id="sportBetting-header-img"
              className="absolute bg-cover -z-10 h-[50vh] md:h-[50vh] xl:h-[100vh] w-auto"
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
      </div>
    </>
  );
}

export default featuresHeader;
