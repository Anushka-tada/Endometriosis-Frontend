import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {


  return (
    <>
       <Navbar/>
           
           <div className="pageOuter py-5">
        <div className="container d-flex justify-content-center align-items-center mt-5">
          <div
            className="bg-white emailCard boxShadow p-sm-5 p-4 w-100 mb-5"
            style={{
              maxWidth: "500px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3 className="mb-2" style={{ color: "#5F2D8B" }}>
              Reset Password
            </h3>
            <p className="text-muted mb-4">
              Enter a new password for your account.
            </p>

            <input
              type="password"
              placeholder="New Password"
              className="form-control py-2 px-3 mb-3 login-input"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control py-2 px-3 mb-3 login-input"
            //   value={confirmPassword}
            //   onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* {error && <p className="text-danger mb-3">{error}</p>} */}

            <button
            //   onClick={handleReset}
            //   disabled={isResetting}
              className="bookButton border-0 outline-0 bgPrimary px-4 py-2 text-white w-100"
              style={{ borderRadius: "10px" }}
            >
                Reset Password
              {/* {isResetting ? "Resetting..." : "Reset Password"} */}
            </button>
          </div>
        </div>
      </div>

       <Footer/>
    </>
  )
}

export default page
