"use client"
import React, { useState , useContext } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'
import { loginServ } from "../services/authentication.service";
import { toast } from 'react-toastify';
import { LoggedDataContext } from '../context/context';
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';

const page = () => {

    const router = useRouter();

     const { updateLoggedUserData } = useContext(LoggedDataContext);

    const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

    const [formErrors, setFormErrors] = useState({});

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

      const handleSignup = async () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
       console.log("Login Form Data:", formData);
     try{
        const res = await loginServ(formData);
        console.log("login success full" , res)
        toast.success(res?.message || "Login successful", {
  className: "custom-success-toast",
  icon: <FaCheckCircle color="#5F2D8B" />
});
          updateLoggedUserData(res?.data);
        router.push("/");
     }
     catch(error){
        console.log("error login" , error)
        toast.error(error?.response?.data?.message || "Login failed", {
  className: "custom-error-toast",
  icon: <FaExclamationCircle color="#5F2D8B" />
});
     }
      
    }
  };


  return (
    <>
    <Navbar/> 

    <div className='login-page pageOuter'>
        <div className='container py-5'>
         <div className='row justify-content-center'>
            <div className='col-lg-5 col-md-7 col-sm-10 col-12'>
               <h3 className='login-head text-center'>WELCOME BACK !</h3>
               <p className='medium-text text-center'>Please login or sign up to continue our app</p>

               <div className='bg-white p-sm-5 p-3 boxShadow' style={{borderRadius:"20px"}}>
                <div>
                <label className='small-medium mb-2'>Email</label>
                  <input
                        className="login-input py-2 px-3 w-100 mb-md-4 mb-2"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} ></input>

                        {formErrors.email && (
                    <p className="text-danger mb-2">{formErrors.email}</p>
                  )}
                       <label className='small-medium mb-2' >Password</label>
                  <input
                        className="login-input py-2 px-3 w-100 mb-md-4 mb-2"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      ></input>
                        {formErrors.password && (
                    <p className="text-danger mb-2">{formErrors.password}</p>
                  )}
               </div>

               <div className='d-flex justify-content-between align-items-center mb-3'>
                   <div className='d-flex align-items-center gap-2 '>
                        <input type="checkbox" />
                        <p className='mb-0'>Remember  me</p>
                   </div>

                   <p className=" text-decoration-underline mb-0" style={{color:"rgba(142, 68, 173, 1)"}}>Forgot Password ?</p>
               </div>

               <button
  className='p-2 medium-text text-white w-100 logInBtn'
  onClick={handleSignup}
>
  Login
</button>

               </div>

               <div className='mt-4' >
                <p className='text-center para text-black' >Don’t have an account ? <span  onClick={() => router.push("/signup")} className=" text-decoration-underline " style={{color:"#8E44AD" , cursor:"pointer"}}
             >Sign up</span></p>
               </div>
            </div>

            {/* <div className='col-6'>
              <img src="doctors/public/assets/login.png"></img>
            </div> */}
         </div>
        </div> 
    </div>

    <Footer/>
      
    </>
  )
}

export default page
