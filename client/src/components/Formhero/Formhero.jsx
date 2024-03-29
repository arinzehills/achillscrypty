import React, { useContext } from "react";
import { Button } from "../Button/Button";
import InputField from "../Inputfield/InputField";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import "./Formhero.css";
import { Link, useNavigate } from "react-router-dom";
import { TradeContext } from "../../context/TradeContext";

function Formhero({
  headline,
  showButton,
  onClick,
  message,
  responseError,
  imageRight,
  imageleft,
  formType,
  buttonLabel,
  inputLabels,
  inputValues,
  inputNames,
  handleChange,
  onSubmit,
  formErrors,
  alt1,
  alt2,
}) {
  const history = useNavigate();
  // console.log(inputLabels.map((label)=>label.id))
  // const handleChange1=(e)=>{
  //     // const {name,value}=e.target;
  //     // setFormValues({...formValues,[name]:value})
  //     console.log(e.target)
  // };
  // console.log(inputNames[0]);
  const { connectWallet, currentAccount, loading } = useContext(TradeContext);

  return (
    <>
      <div className="form-hero-section">
        <div className="form-hero-container">
          <div
            className="row form-hero-row"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="right__hero-img-wrapper">
              <img src={imageleft} alt={alt2} className="right__hero-img" />
              {currentAccount === "" && (
                <Button
                  buttonColor="pink"
                  buttonSize="btn--mobile"
                  style={{ width: "100%" }}
                  onClick={connectWallet}
                >
                  Connect Wallet
                </Button>
              )}
            </div>
            <div className="form__hero-text-wrapper">
              {/* <pre>{JSON.stringify(inputValues,undefined,2)}</pre> */}
              <form>
                <div className="form-col">
                  {/* {message===null ? null : <div className='success-message'>{message}</div>} */}
                  <div className="form-col">
                    <div className="left__hero-img-wrapper">
                      <img
                        src={imageRight}
                        alt={alt1}
                        className="left__hero-img"
                      />
                    </div>

                    <h1 className="headline">{headline}</h1>
                    {currentAccount && (
                      <div style={{ marginTop: "1rem", color: "white" }}>
                        <h3 style={{ color: "rgb(0, 255, 238)" }}>
                          Your Crypto Address:
                        </h3>
                        <p>{currentAccount}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-col btn-wrapper">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                      }}
                    >
                      {/* {inputLabels.slice(0,2).map((label)=>//pick the first 3elements */}

                      <InputField
                        label={inputLabels[0]}
                        value={inputValues[0]}
                        name={inputNames[0]}
                        inputStyle="input--shadow-purple"
                        inputColor="purple-input"
                        onHandleChange={handleChange}
                      />
                      <p className="errors">{formErrors[0]}</p>
                      <InputField
                        label={inputLabels[1]}
                        value={inputValues[1]}
                        name={inputNames[1]}
                        inputStyle="input--shadow-purple"
                        inputColor="purple-input"
                        onHandleChange={handleChange}
                      />
                      <p className="errors">{formErrors[1]}</p>

                      {/* )} */}
                      {(formType == "contact" || formType == "register") && (
                        <div style={{ marginTop: "10px" }}>
                          <InputField
                            label={inputLabels[2]}
                            inputStyle="input--shadow-purple"
                            inputColor="purple-input"
                            name={inputNames[2]}
                            value={inputValues[2]}
                            onHandleChange={handleChange}
                          />
                          <p className="errors">{formErrors[3]}</p>
                          <InputField
                            label={inputLabels[3]}
                            inputStyle="input--shadow-purple"
                            inputColor="purple-input"
                            name={inputNames[3]}
                            value={inputValues[3]}
                            onHandleChange={handleChange}
                          />
                          <p className="errors">{formErrors[3]}</p>
                        </div>
                      )}
                    </div>
                    {/* {buttonLabel.map((label,color)=>
                                <div style={{marginTop:'30px'}}>
                                <Button  buttonColor='purple' 
                                        buttonSize='btn--mobile'
                                        style={{width:'100%'}}>
                                    {label}
                                </Button >
                                <div className="hr-wrapper">
                                        <hr className='hr'></hr>
                                        <p className='hr-p '>OR</p>
                                        <hr className='hr'></hr>
                                </div>
                                </div>)} */}
                    {/* this is for contact */}
                    <p className="errors">{responseError ?? ""}</p>
                    {formType == "contact" ? (
                      <div style={{ marginTop: "10px" }}>
                        <Button
                          buttonColor="orange"
                          buttonSize="btn--mobile"
                          style={{
                            width: "100%",
                            opacity: false ? "0.5" : "1",
                          }}
                          onClick={onSubmit}
                        >
                          {loading ? "Sending..." : "Send now"}
                        </Button>
                        <div className="hr-wrapper">
                          <hr className="hr"></hr>
                          <p className="hr-p ">OR</p>
                          <hr className="hr"></hr>
                        </div>
                        <div className="hr-icons">
                          <FaFacebook className="icons" />
                          <FaWhatsapp className="icons" />
                          <FaTwitter className="icons" />
                        </div>
                      </div> //for register and sign up
                    ) : (
                      <div style={{ marginTop: "10px" }}>
                        {/* <Link to={'/'+ buttonLabel[0]} > */}
                        <Button
                          buttonColor="orange"
                          buttonSize="btn--mobile"
                          style={{ width: "100%" }}
                        >
                          {buttonLabel[0]}
                        </Button>
                        {/* </Link> */}
                        <div className="hr-wrapper">
                          <hr className="hr"></hr>
                          <p className="hr-p ">OR</p>
                          <hr className="hr"></hr>
                        </div>
                        <Link to={"/" + buttonLabel[1]}>
                          <Button
                            buttonColor="purple"
                            buttonSize="btn--mobile"
                            style={{ width: "100%" }}
                          >
                            {buttonLabel[1]}
                          </Button>
                        </Link>
                        <div className="forgot-password-link">
                          <Link
                            to="/forgotPassword"
                            className="forgot-password-link"
                          >
                            Forgot Your Password
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formhero;
