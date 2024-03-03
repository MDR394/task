import Image from "next/image";
import React, { useState } from "react";

function Calculator() {
  const [amount, setAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("ETM");
  const [selectedButton, setSelectedButton] = useState("ETM");

  const conversionRates = {
    ETM: 9328, // Replace with your actual conversion rates
    USDT: 3,
    BDC: 1152,
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setSelectedButton(currency);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const convertToMK = () => {
    const convertedAmount =
      parseFloat(amount) * conversionRates[selectedCurrency];
    return convertedAmount.toFixed(0);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-between gap-3  w-11/12 md:w-1/2">
          <button
            className={`p-2 ${
              selectedButton === "ETM" ? "bg-[#8A0F62]" : "bg-slate-600"
            } flex gap-2 justify-center items-center px-4 rounded-lg w-full`}
            onClick={() => handleCurrencyChange("ETM")}
          >
            <Image
              src={"/icon-eth.svg"}
              width={"25"}
              height={"25"}
              alt="icon-bsc"
            />{" "}
            ETM
          </button>
          <button
            className={`p-2 ${
              selectedButton === "USDT" ? "bg-[#8A0F62]" : "bg-slate-600"
            } flex gap-2 justify-center items-center px-4 rounded-lg w-full`}
            onClick={() => handleCurrencyChange("USDT")}
          >
            <Image
              src={"/icon-usdt.svg"}
              width={"25"}
              height={"25"}
              alt="icon-bsc"
            />{" "}
            USDT
          </button>
          <button
            className={`p-2 ${
              selectedButton === "BDC" ? "bg-[#8A0F62]" : "bg-slate-600"
            } flex gap-2 justify-center items-center px-4 rounded w-full`}
            onClick={() => handleCurrencyChange("BDC")}
          >
            <Image
              src={"/icon-bsc.svg"}
              width={"25"}
              height={"25"}
              alt="icon-bsc"
            />{" "}
            BDC
          </button>
        </div>
        <div className="flex flex-col items-center gap-5 mt-5">
          <h2 className="text-center text-xl font-Bakbak -mt-4">
            1 $MK = $0.279
          </h2>
          <hr className="w-[180px] border-slate-400 -mt-3" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-11/12 md:w-1/2 justify-between">
          <div className="flex flex-col gap-2 w-full md:w-6/12">
            <label>
              <b>{selectedCurrency}</b> you pay
            </label>
            <input
              className=" bg-gray-600 p-2 text-left rounded"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-6/12">
            <label>
              <b>$MK</b> you receive
            </label>
            <input
              placeholder="0"
              className=" bg-gray-600 p-2 text-left w-full rounded"
              type="text"
              disabled
              value={convertToMK()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
