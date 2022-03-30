import React from 'react'
import './Uniqueness.css'
export const UniqueCard = ({circleColor,heading,img}) => {
  return (
    <>
     
        <div className="unique-card-container">
        
            <div className="unique-card">
           
                <img src={img} alt="unique-image" />
                <h3>
                    {heading}
                </h3>
            </div>
        </div>
        <div className="unique-circle"></div>
    </>
  )
}
