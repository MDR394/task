'use client'
import Calculator from "@/components/calculator";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <div className="w-full flex justify-center">
          <Image src={'/header-bg.png'} className="absolute -z-10" width="1250" height={"1000"}></Image>
          <header className="bg-auto bg-no-repeat bg-center  w-10/12 mx-auto flex justify-between pt-5">
            <div className="logo">
              <Image src={'/logo.png'} width="200" height="200" />
            </div>
            <div className="menu md:flex gap-8 my-auto hidden">
              <Link href={"#"} className="font-bold text-[20px]">Utility</Link>
              <Link href={"#"} className="font-bold text-[20px]">How It Works</Link>
              <Link href={"#"} className="font-bold text-[20px]">Tokenomics</Link>
              <Link href={"#"} className="font-bold text-[20px]">Roadmap</Link>
            </div>
            <div className="empty">
              <p></p>
            </div>
          </header>
        </div>

        <div className="w-10/12 mx-auto flex">
          <div className="left w-2/4">
            <Image src="/thrill.png" width={"520"} height={"200"} />
            <div className="w-10/12 flex justify-center gap-5">
            <button className="py-3 px-4 bg-white text-black font-[600] rounded-md">Buy on Jupiter <span className="text-lg ml-2">&#11106;</span></button>
            <button className="py-3 px-4 border-2 text-white font-[600] rounded-md">White Paper <span className="text-lg ml-2">&#11106;</span></button>
        </div>
          </div>
          <div className="right"></div>
        </div>
    </>
  );
}
