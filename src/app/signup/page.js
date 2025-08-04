"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { useState , useContext } from "react";
import { signUp } from "../services/authentication.service";
import { toast } from 'react-toastify';
import { LoggedDataContext } from '../context/context';
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';
import { FaSpinner } from "react-icons/fa";

const page = () => {
  const router = useRouter();

   const { updateLoggedUserData } = useContext(LoggedDataContext);

//   const [showPassword, setShowPassword] = useState(false);

const [formErrors, setFormErrors] = useState({});
  const [isSignupIn, setIsSignupIn] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const handleSignup =  async () => {
  const { name, email, password, confirmPassword } = formData;
  const errors = {};

  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) errors.email = "Email is required.";
  if (!password.trim()) errors.password = "Password is required.";
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  setFormErrors(errors);

  if (Object.keys(errors).length === 0) {
    console.log("Form Data:", formData);
    setIsSignupIn(true)
    try{
      const res = await signUp(formData);
      console.log("signup succesfull" , res);
         toast.success(res?.message || "Signup successful", {
         className: "custom-success-toast",
         icon: <FaCheckCircle color="#5F2D8B" />
       });
        updateLoggedUserData(res?.data, true);
       router.push("/");
    }
    catch(error){
      console.log("signup failed" , error);
        toast.error(error?.response?.data?.message || "Signup failed", {
         className: "custom-error-toast",
         icon: <FaExclamationCircle color="#5F2D8B" />
       });
    }finally{
      setIsSignupIn(false)
    }
    // router.push("/profile");
  }
};


  return (
    <>
      <Navbar />

      <div className="login-page pageOuter">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7 col-sm-10 col-12">
              <h3 className="login-head text-center">Create Your Account</h3>
              <p className="medium-text text-center">
                Join us and unlock the full experience!
              </p>

              <div
                className="bg-white p-sm-5 p-3 boxShadow"
                style={{ borderRadius: "20px" }}
              >
                <div>
                  <label className="small-medium mb-2">Name</label>
                  <input
                    className="login-input py-2 px-3 w-100 mb-md-3 mb-2"
                    name="name"
                    type="text"
                    value={formData?.name}
                      onChange={handleChange}
                  ></input>
                  {formErrors.name && (
  <p className="text-danger mb-2">{formErrors.name}</p>
)}

                  <label className="small-medium mb-2">Email</label>
                  <input
                    className="login-input py-2 px-3 w-100 mb-md-3 mb-2"
                      type="email"
                    name="email"
                    value={formData.email}
                      onChange={handleChange}
                  ></input>

                  {formErrors.email && (
  <p className="text-danger mb-2">{formErrors.email}</p>
)}

                  <label className="small-medium mb-2">Password</label>
                  <input
                    className="login-input py-2 px-3 w-100 mb-md-3 mb-2"
                       type="password"
                         name="password"
                    value={formData.password}
                    onChange={handleChange}
                  ></input>
                  {formErrors.password && (
  <p className="text-danger mb-2">{formErrors.password}</p>
)}


                  <label className="small-medium mb-2">Confirm Password</label>
                  <input
                    className="login-input py-2 px-3 w-100 mb-md-3 mb-2"
                     type="password"
                      name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  ></input>
                  {formErrors.confirmPassword && (
  <p className="text-danger mb-2">{formErrors.confirmPassword}</p>
)}

                </div>

                <button className="p-2 medium-text text-white w-100 logInBtn" onClick={handleSignup}>
                  {isSignupIn ? (
    <>
      <FaSpinner className="spin" /></>
  ) : (
    "Sign Up"
  )}
                </button>
              </div>

              <div className="mt-4">
                <p className="text-center para text-black">
                  Already have an account?{" "}
                  <span
                    onClick={() => router.push("/login")}
                    className=" text-decoration-underline"
                    style={{ color: "#8E44AD", cursor: "pointer" }}
                  >
                    Login Here{" "}
                  </span>
                </p>
              </div>
            </div>

            {/* <div className='col-6'>
              <img src="doctors/public/assets/login.png"></img>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
