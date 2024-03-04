import React from "react";
import Image from "next/image";
import Link from "next/link";

function featuresHeader() {
  return (
    <>
      <div className="bg-[#021133]">
        <header>
          <div className="w-full flex justify-center -mt-1">
            <Image
              src={"/lotto-stock-header.jpg"}
              id="lotto-stock-header"
              className="absolute bg-cover -z-10 mt-7"
              width="1350"
              height={"1000"}
              alt="logo"
            ></Image>

            <div className="bg-auto bg-no-repeat bg-center  w-10/12 mx-auto flex justify-between pt-5">
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
                <Link href={"/"} className="font-bold text-[15px]">
                  Home
                </Link>
                <Link href={"/lotto-stock"} className="font-bold text-[15px]">
                  Lotto Stock
                </Link>
                <Link
                  href={"/casino-competition"}
                  className="font-bold text-[15px]"
                >
                  Casino Competition​
                </Link>
                <Link
                  href={"/race-for-thrillx"}
                  className="font-bold text-[15px]"
                >
                  Race for Thrillx
                </Link>
                <Link href={"/sport-betting"} className="font-bold text-[15px]">
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
