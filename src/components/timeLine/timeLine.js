import React from 'react'
import "./timeLine.css"
const timeLine = () => {
  return (
    <>
        <div class="timeline">


  <div class="container left">
    <div class="content">
      <h2 className='font-Power text-[32px]'>The beggining</h2>
      <p className='text-[20px] text-[#6F6F6F] mt-4'>-Launch and deploy the token smart contract on the Solana blockchain, ensuring robust security and efficiency.
       <br /> Secure listings on major decentralized exchanges (DEXs) to enhance liquidity and accessibility for users and traders.</p>
        <hr className='border-[#6F6F6F] mt-4' />
        <ul className='list-disc text-[18px] text-[#6F6F6F] mt-4 ml-4'>
            <li>Smart Contract Deployment</li>
            <li>DEX Listing</li>
            <li>Community Building</li>
        </ul>
    </div>
  </div>


  <div class="container right">
    <div class="content">
      <h2 className='font-Power text-[32px]'>Development</h2>
      <p className='text-[20px] text-[#6F6F6F] mt-4'>-Explore and implement cross-chain compatibility, allowing users to interact with the token seamlessly across different blockchain networks.</p>
        <hr className='border-[#6F6F6F] mt-4' />
        <ul className='list-disc text-[18px] text-[#6F6F6F] mt-4 ml-4'>
            <li>Cross-Chain Integration</li>
            <li>NFT Integration</li>
            <li>Governance Mechanism</li>
        </ul>
    </div>
  </div>

  <div class="container left">
    <div class="content">
      <h2 className='font-Power text-[32px]'>Planning</h2>
      <p className='text-[20px] text-[#6F6F6F] mt-4'>-Expand the projects ecosystem by integrating with additional DeFi protocols, dApps, or services within the Solana network.</p>
        <hr className='border-[#6F6F6F] mt-4' />
        <ul className='list-disc text-[18px] text-[#6F6F6F] mt-4 ml-4'>
            <li>Ecosystem Expansion</li>
            <li>Token Utility Enhancement</li>
            <li>Global Marketing Campaign</li>
        </ul>
    </div>
  </div>


</div>
    </>
  )
}

export default timeLine
