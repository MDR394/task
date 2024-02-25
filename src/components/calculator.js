import React, { useState } from 'react'

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
        <div className="flex flex-col items-center gap-5 mt-12">
          <div className="flex gap-3">
            <button
              className={`p-2 ${
                selectedButton === "ETM" ? "bg-[#8A0F62]" : "bg-slate-600"
              }`}
              onClick={() => handleCurrencyChange("ETM")}
            >
              ETM
            </button>
            <button
              className={`p-2 ${
                selectedButton === "USDT" ? "bg-[#8A0F62]" : "bg-slate-600"
              }`}
              onClick={() => handleCurrencyChange("USDT")}
            >
              USDT
            </button>
            <button
              className={`p-2 ${
                selectedButton === "BDC" ? "bg-[#8A0F62]" : "bg-slate-600"
              }`}
              onClick={() => handleCurrencyChange("BDC")}
            >
              BDC
            </button>
          </div>
          <div className='flex gap-6 w-9/12 justify-between'>
          <div className='flex flex-col gap-2 w-6/12'>
            <label>{selectedCurrency} Sie zahlen</label>
            <input
              className=" bg-gray-600 p-2 text-left"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder='0'
            />
            
          </div>
          <div className='flex flex-col gap-2 w-6/12'>
            <label>$MK Sie erhalten</label>
            <input placeholder='0' className=" bg-gray-600 p-2 text-left w-full" type="text" disabled value={convertToMK()} />
          </div>
          </div>
          
        </div>
      </>
    );
}

export default Calculator
