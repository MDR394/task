import React from "react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <>
      <header>
        <div className="w-full flex justify-center">
          {/* <Image src={'/header-bg.png'} className="absolute -z-10" width="1250" height={"1000"} alt='logo'></Image> */}
          <Image
            src={"/solana-ring.png"}
            id="solana"
            className="absolute -z-10"
            width="1250"
            height={"1000"}
            alt="logo"
          ></Image>
          <Image
            src={"/header.png"}
            id="header_img"
            className="absolute -z-8 top-[80px]"
            width="1000"
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
              <Link href={"#utility"} className="font-bold text-[20px]">
                Utility
              </Link>
              <Link href={"#steps"} className="font-bold text-[20px]">
                How It Works
              </Link>
              <Link href={"#tokens"} className="font-bold text-[20px]">
                Tokenomics
              </Link>
              <Link href={"#roadmap"} className="font-bold text-[20px]">
                Roadmap
              </Link>
            </div>
            <div className="empty">
              <p></p>
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto flex">
          <div className="left w-2/4">
            <Image
              src="/thrill.png"
              className="ml-4"
              width={"520"}
              height={"200"}
              alt="thrillx"
            />
            {/* <div className="w-10/12 flex justify-center gap-5">
            <button className="py-3 px-4 bg-white text-black font-[600] rounded-md">Buy on Jupiter <span className="text-lg ml-2">&#11106;</span></button>
            <button className="py-3 px-4 border-2 text-white font-[600] rounded-md">White Paper <span className="text-lg ml-2">&#11106;</span></button>
        </div> */}
          </div>
          <div className="right"></div>
        </div>
      </header>
    </>
  );
};

export default header;
