import React from 'react'
import './accordions.css'
function accordions() {
  return (
    <div>
      <section className="accordion">
  <div className="tab">
    <input type="checkbox" name="accordion-1" id="cb1"/>
    <label htmlFor="cb1" className="tab__label">What is THRILLX's NFT Collection?</label>
    <div className="tab__content">
      <p>Unlock exclusive opportunities with THRILLX NFT Collection! These unique tokens are your key to VIP Trading and top-tier Events, showcasing your ownership and granting access to premium experiences. Elevate your status and dive into a world of elite privileges! 🔑✨ #THLX #VIPAccess #ExclusiveTrading.</p>
    </div>
  </div>
  <div className="tab">
    <input type="checkbox" name="accordion-2" id="cb2"/>
    <label htmlFor="cb2" className="tab__label">How we can buy and invest in THLX?</label>
    <div className="tab__content">
      <p>Connect to DEX: Visit the XRPL DEX website and connect your wallet by clicking on the “Connect” button in the upper-right corner. Choose the wallet you set up in the previous step and authorize the connection.
<br />
For THLX go to Neptun or other SOL DEXs</p>
    </div>
  </div>

  <div className="tab">
    <input type="checkbox" name="accordion-2" id="cb3"/>
    <label htmlFor="cb3" className="tab__label">Why we should choose THLX Tokens?</label>
    <div className="tab__content">
      <p>Choose THRILLX NFTs and tokens for unrivaled advantages! Our NFTs offer proof of ownership, granting VIP access to exclusive trading and elite events. Our tokens promise innovation, security, and community-driven opportunities. .</p>
    </div>
  </div>

  <div className="tab">
    <input type="checkbox" name="accordion-2" id="cb4"/>
    <label htmlFor="cb4" className="tab__label">Where we can buy and sell NFTs? </label>
    <div className="tab__content">
      <p>You can buy NFTs on OpenSea or other published NFT tradings sites mentioned by THLX Team.</p>
    </div>
  </div>

  <div className="tab">
    <input type="checkbox" name="accordion-2" id="cb5"/>
    <label htmlFor="cb5" className="tab__label">How secure is this token? </label>
    <div className="tab__content">
      <p>The security of THRILLX is paramount. We employ cutting-edge blockchain technology and robust encryption methods to ensure top-tier security. </p>
    </div>
  </div>

  <div className="tab">
    <input type="checkbox" name="accordion-2" id="cb6"/>
    <label htmlFor="cb6" className="tab__label">What is your contract address?</label>
    <div className="tab__content">
      <p>Solana: <br />Trustline for SOL:</p>
    </div>
  </div>

  <div className="tab">
    <input type="checkbox" name="accordion-2" id="cb7"/>
    <label htmlFor="cb7" className="tab__label">Whitepaper</label>
    <div className="tab__content">
      <p>WHITEPAPER:</p>
    </div>
  </div>

</section>




    </div>
  )
}

export default accordions
