"use client";
import { useState } from "react";
import { forgotPasswordServ } from "../services/authentication.service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";


const page = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();


  const handleSubmit = async () => {
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    setError("");
    console.log(email);
    try {
      const res = await forgotPasswordServ({ email });
      toast.success(res?.message || "Reset link sent on your email", {
        className: "custom-success-toast",
        icon: <FaCheckCircle color="#5F2D8B" />,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "link sent failed", {
        className: "custom-error-toast",
        icon: <FaExclamationCircle color="#5F2D8B" />,
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="pageOuter">
        <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
         

          <div className="bg-white emailCard boxShadow d-flex flex-column align-items-center mb-5">
            <h3>Forgot Password</h3>
            <input
              className="form-control my-4"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-danger">{error}</p>}
            <button
              onClick={handleSubmit}
              className="bookButton border-0 outline-0 bgPrimary px-4 py-2 text-white w-100"
            >
              Send Reset Link
            </button>
             <p 
             style={{cursor:"pointer"}}
  onClick={() => router.push("/login")}
  className="mb-0 mt-3 text-start textPrimary"
>
  ← Back to Login
</p>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
