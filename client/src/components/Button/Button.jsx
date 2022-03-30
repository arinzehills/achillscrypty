import React from 'react';
import './Button.css';



export const Button=({
    children,
    type,onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
    style,
})=>{
    const STYLES=['btn--primary', 'btn--outline-pink','btn--outline-orange']
const SIZES=['btn--medium', 'btn--medium',
             'btn--large', 'btn--wide',]
const COLOR=['pink', 'orange',];
        const checkButtonStyle=STYLES.includes(buttonStyle)?
                                 buttonStyle:null;
         const checkButtonSize=SIZES.includes(buttonSize)?
                                 buttonSize:SIZES[0];
         const checkButtonColor=COLOR.includes(buttonColor)?
                             buttonColor:buttonColor[0];
         return(
             <button style={style} className={`btn ${checkButtonStyle} 
             ${checkButtonSize} ${checkButtonColor}`}
             onClick={onClick}
             type={type}>{children}</button>
         )
}