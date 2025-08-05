"use client"
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { useParams , useRouter } from "next/navigation";
import { resetPasswordServ } from '../../services/authentication.service';
import { FaExclamationCircle } from "react-icons/fa";


const page = () => {

   const { token } = useParams();
   const router =  useRouter();

   const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
  const [isResetting, setIsResetting] = useState(false);


const handleReset = async () => {
   
     if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // Clear error if valid
    setIsResetting(true);

    const formData = new FormData();
    formData.append("token", token);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

     try {
          const res = await resetPasswordServ({ token, password, confirmPassword }) ;
          toast.success(res?.message || "password reset successfully", {
            className: "custom-success-toast",
            icon: <FaCheckCircle color="#5F2D8B" />,
          });
          router.push("/login");
           setIsResetting(false);
        } catch (error) {
          toast.error(error?.response?.data?.message || "password rest failed", {
            className: "custom-error-toast",
            icon: <FaExclamationCircle color="#5F2D8B" />,
          });
           setIsResetting(false);
        }

                setIsResetting(false);
  };

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control py-2 px-3 mb-3 login-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <p className="text-danger mb-3">{error}</p>}

            <button
              onClick={handleReset}
              disabled={isResetting}
              className="bookButton border-0 outline-0 bgPrimary px-4 py-2 text-white w-100"
              style={{ borderRadius: "10px" }}
            >
               
              {isResetting ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </div>
      </div>

       <Footer/>
    </>
  )
}

export default page
