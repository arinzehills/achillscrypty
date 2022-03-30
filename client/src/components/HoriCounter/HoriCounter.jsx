import React from 'react'
import './HoriCounter.css'

 const HoriCounter = () => {
  return (
    <>
    <div className="hori-counter-container">
      <div className="counter-circle-div">        
        <div className="counter-circle"></div>
        <div className="counter-circle"></div>
        <div className="counter-circle"></div>
      </div>      
      <div className="hori-counter">        
            <div className="counter-row">
              <h2>204343</h2>
              <p>Total users</p>
            </div>
            <div className="counter-row">
              <h2>34232</h2>
              <p>Total Trades</p>
            </div>
            <div className="counter-row">
              <h2>$532,627</h2>
              <p>Total spent</p>
            </div>
      </div>
    </div>
    </>
  )
}
export default HoriCounter;
