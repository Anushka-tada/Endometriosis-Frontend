"use client";
import { useState } from "react";
// import { sendResetEmail } from "../services/authentication.service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {

     const [email, setEmail] = useState("");
  const [error, setError] = useState("");

    const handleSubmit = async () => {
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    setError("");
    console.log(email);
    // try {
    //   const res = await sendResetEmail({ email });
    //   toast.success(res?.message || "Reset link sent!", {
    //     icon: <FaCheckCircle color="#5F2D8B" />,
    //   });
    // } catch (err) {
    //   toast.error(err?.response?.data?.message || "Something went wrong");
    // }
  };

  return (
    <>
      <Navbar />

      <div className="pageOuter">
          <div className="container mt-5 d-flex justify-content-center">
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
      <button onClick={handleSubmit} className="bookButton border-0 outline-0 bgPrimary px-4 py-2 text-white w-100">Send Reset Link</button>
         </div>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
