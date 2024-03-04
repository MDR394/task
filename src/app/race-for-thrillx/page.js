import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/footer/footer";

function page() {
  return (
    <>
      <header className="bg-black/75">
        <div className="w-full flex justify-center -mt-2 pb-2">
          <Image
            src={"/card-3.jpeg"}
            id="sportBetting-header-img"
            className="absolute bg-cover -z-10 h-[100vh] md:h-[80vh] xl:h-[100vh] w-auto"
            width="1550"
            height={"1000"}
            alt="logo"
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
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
        <h1 className="font-Power text-[34px] md:text-[44px] text-slate-700 text-center">
          Title WIll Be Here
        </h1>
        <h2 className="text-[20px] text-slate-700 font-Roboto mt-4 text-center">
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
