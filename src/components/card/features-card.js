import Image from "next/image";
import Link from "next/link";
import React from "react";

const card = ({ src, title, detail, link }) => {
  return (
    <>
      {/* *************************    Card 1    ************************* */}
      <div className="md:w-1/4 bg-gray-5 bg-[#8C33FF] rounded-3xl">
        <div className="relative h-[350px] md:h-[250px] xl:h-[350px] w-full rounded-3xl">
          <Image
            src={src}
            width={"300"}
            height={"400"}
            alt="card-img"
            className="z-0 h-full w-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl"></div>
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <h1 className="text-[33px] md:text-[28px] xl:text-[33px] font-Power font-semibold text-white">
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-300 font-Roboto text-[14px]">
              {detail}
            </p>
          </div>
        </div>
        <div className="px-4 py-4 text-right">
          {link && (
            <Link
              href={link}
              className="text-right font-Roboto text-[17px] font-bold"
            >
              Read More ➜
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default card;
