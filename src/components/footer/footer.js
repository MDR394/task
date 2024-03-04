import Image from "next/image";
import React from "react";

function footer() {
  return (
    <>
      {/* ************************      Footer Logo Area   **************************/}
      <section>
        <div className={`w-full`}>
          <div className="w-full">
            <div className="pb-[100px]">
              <div className="mt-[20px] w-11/12 mx-auto flex justify-center">
                {/* *********************       Left Column   ********************** */}
                <div className="w-[30%] flex flex-col justify-between items-center">
                  <Image
                    src={"/ethereum1.png"}
                    width={30}
                    height={30}
                    alt="ethereum1"
                  />
                  <div className="flex justify-end w-full">
                    <Image
                      src={"/circle3.png"}
                      width={20}
                      height={30}
                      alt="circle3"
                      className="float-end"
                    />
                  </div>
                </div>
                {/* *********************       Center Column   ********************** */}
                <div className="w-[40%] flex flex-col items-center">
                  <Image src={"/logo.png"} width={200} height={30} alt="logo" />
                  <h2 className="font-Power text-center text-[23px] mt-8">
                    Get your spot WIN your <br /> prizes!
                  </h2>
                </div>
                {/* *********************       Right Column   ********************** */}
                <div className="w-[30%] flex flex-col justify-between items-center">
                  <Image src={"/x.png"} width={60} height={30} alt="x" />
                  <div className="flex justify-start w-full">
                    <Image
                      src={"/circle1.png"}
                      width={30}
                      height={30}
                      alt="circle1"
                      className="float-end"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***********************         Footer Section    ************************** */}
      <section className="w-11/12 mx-auto">
        <hr className="border-[#A8A8A8]" />
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-4 mb-7">
          <p className="text-center md:text-left">
            © 2023 THRILLX. All rights reserved. | EE -DIGITAL AGENCY
          </p>
          <p className="mt-4 md:mt-0">Privacy policy | Terms of use</p>
        </div>
      </section>
    </>
  );
}

export default footer;
