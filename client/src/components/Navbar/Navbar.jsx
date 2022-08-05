import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { TradeContext } from "../../context/TradeContext";
// import {useNavigate} from 'react-router-dom';
import { Button } from "../Button/Button";
// import {logo} from '../../../assets/logo_transparent.png
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(!click);

  const { connectWallet, currentAccount, transactions } =
    useContext(TradeContext);
  // const [onHover, setOnHover] = useState(false);
  // const hoverEvent= () =>{
  //     onmouseenter{()=>setOnHover(!onHover)};
  // }
  // const router=useNavigate()
  //     router.
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return {
      // window.removeEventListener('resize', showButton)
    };
  }, []);

  const pagesToHide = [
    "dashboard/buyairtime",
    "dashboard",
    "dashboard/buyenergy",
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <img
                      src='images/logo_transparent.png'
                      style={{height:60}}
                      alt="" /> */}
            <p>
              Achills<span>Crypt</span>{" "}
            </p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <HiMenuAlt4 fontSize={48} />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/trade" className="nav-links" onClick={closeMobileMenu}>
                Trade
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/trade#transactions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Transactions
              </Link>
            </li>
            <li className="nav-items">
              <Link to="#about" className="nav-links" onClick={closeMobileMenu}>
                More
              </Link>
            </li>
          </ul>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-btn" onClick={closeMobileMenu}>
            {button ? (
              // <Link to="/login">
              currentAccount && (
                <Button buttonColor="pink" onClick={connectWallet}>
                  Login{" "}
                </Button>
              )
            ) : (
              <Link to="/login">
                <Button buttonColor="pink" buttonSize="btn--wide">
                  Sign In
                </Button>
              </Link>
            )}
          </li>
          {/* <li className="nav-btn">
                      {button ? (    
                          <Link className="btn-link">
                              <Button>Sign up</Button>
                          </Link>
                      ): (
                          <Link className="btn-link">
                             <Button className="btn-outline" buttonSize='btn-mobile'
                             >
                                 s=Sign in
                             </Button >
                         </Link>
                     )}
                 </li> */}
        </ul>
      </div>
    </>
  );
};

{
  /* <div className='navbar'>
<div className='navbar-container container'>
  <Link to='/' className='navbar-logo'>
  <img style={{ width: "175px" }} src={"/images/logo_transparent.png"} alt='dsa' />
  <h1>dsahfiso</h1>
  </Link>
  <div className="menu-img">

  </div>
</div>
</div> */
}
export default Navbar;
