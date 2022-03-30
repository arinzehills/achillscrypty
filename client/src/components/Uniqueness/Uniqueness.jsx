import React from 'react'
import { UniqueCard } from './UniqueCard';
import './Uniqueness.css';
 const Uniqueness = () => {
  return (
    <>
      <div className="uniqueness-container">
        <div className="uniqueness-header">
          <h2>Take full control of your crypto</h2>
        </div>
        <div className="uniqueness-subheader">
          <p>
            Built on Ethereum, our non-custodial perpetuals exchange focuses on one thing
            <br></br> being the
            best execution environment for trades.</p>
        </div>
        <div className="uniqueness-row">
          <UniqueCard heading='Buy and sell crypto' 
            img='../../images/Graphic-Leverage.png'
          /> 
          <UniqueCard heading='Buy and sell crypto' 
            img='../../images/Graphic-Leverage.png'
          />
          <UniqueCard heading='Buy and sell crypto' 
            img='../../images/Graphic-Leverage.png'
          />
          <UniqueCard heading='Buy and sell crypto' 
            img='../../images/Graphic-Leverage.png'
          /><UniqueCard heading='Buy and sell crypto' 
          img='../../images/Graphic-Leverage.png'
        /><UniqueCard heading='Buy and sell crypto' 
        img='../../images/Graphic-Leverage.png'
      />       
        </div>
      </div>
    </>
  )
}
export default Uniqueness;
