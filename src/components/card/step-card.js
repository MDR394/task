import Image from 'next/image'
import React from 'react'

const stepCard = ({btnRotateDeg, cardRotateDeg, src, title, step}) => {
  return (
    <>
    

        <div className={`md:w-1/5 bg-gray-5 rounded border-[7px] border-[#8C33FF] ${cardRotateDeg}`}>
            <p className={`absolute z-10 -mt-6 py-1 px-4 -ml-5 text-sm font-semibold bg-[#8A0F62] ${btnRotateDeg}`}>STEP {step}</p>
          <div className="relative h-[260px] w-full">
          <Image src={src} width={"270"} height={"350"} alt='Steps-img' className="z-0 h-full w-full rounded object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded"></div>
        <div className="absolute bottom-4 left-4 right-4 text-left">
          <h1 className="text-[28px] font-Bakbak font-bold text-white">{title}</h1>
        </div>
      </div>
          </div>
    
    </>
  )
}

export default stepCard
