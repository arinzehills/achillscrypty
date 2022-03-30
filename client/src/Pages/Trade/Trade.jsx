import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Formhero from '../../components/Formhero/Formhero';
import { homeData } from './Data';

function Trade() {
  const initialValues={address:"", amount:"", keyword:"", message:""}
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const [loading,setLoading]=useState(false);
  const history=useNavigate()

  const inputValues=[
    formValues.address,
    formValues.amount,
    formValues.keyword,
    formValues.message,
]

const inputNames=[
'addressaddress',
'amount',
'keyword',
'message'
]  
const inputErrors=[
  formErrors.address,
  formErrors.amount,
  formErrors.keyword,
  formErrors.message
]
  
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormValues({...formValues,[name]:value})
      console.log(formValues)
      // console.log(e.target)
  };
  // console.log(inputValues)
  const onSubmit=(e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues))
      setIsSubmit(true)
      console.log(formValues)
  };
  useEffect(()=>{
      // setLoading(true)
      console.log(formErrors)
      if(Object.keys(formErrors).length===0 && isSubmit){
          console.log(formValues)
          
          // register()
      }
  },[formErrors])

 
  const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.address){
      errors.address="Wallet address is required"
  }
    if(!values.amount){
        errors.amount="amount is required"
    }
    // else if(!regex.test(values.email)){
    //     errors.email="Please enter a valid email address"
    // }
    if(!values.keyword){
        errors.message="a keyword is required"
    }
    if(!values.message){
        errors.message="Message is required"
    }

    return errors
    
}
  

  return <>

            <Formhero 
               handleChange={handleChange}
               onSubmit={onSubmit}
               formErrors={inputErrors}
              inputValues={inputValues}
              inputNames={inputNames}
            {...homeData} />
        </>;
}

export default Trade;
