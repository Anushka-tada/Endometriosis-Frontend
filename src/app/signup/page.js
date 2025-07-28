"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);


  const handleSignup = () => {
    router.push("/login");
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
                    type="text"
                  ></input>
                  <label className="small-medium mb-2">Email</label>
                  <input
                    className="login-input py-2 px-3 w-100 mb-md-3 mb-2"
                    type="text"
                  ></input>
                  <label className="small-medium mb-2">Password</label>
                  <input
                    className="login-input py-2 px-3 w-100 mb-md-3 mb-2"
                       type="password"
                  ></input>
                  

                  <label className="small-medium mb-2">Confirm Password</label>
                  <input
                    className="login-input py-2 px-3 w-100 mb-md-3 mb-2"
                     type="password"
                  ></input>
                </div>

                <button className="p-2 medium-text text-white w-100 logInBtn" onClick={() => router.push("/profile")}>
                  Sign Up
                </button>
              </div>

              <div className="mt-4">
                <p className="text-center para text-black">
                  Already have an account?{" "}
                  <sapn
                    onClick={handleSignup}
                    className=" text-decoration-underline"
                    style={{ color: "#8E44AD", cursor: "pointer" }}
                  >
                    Login Here{" "}
                  </sapn>
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
