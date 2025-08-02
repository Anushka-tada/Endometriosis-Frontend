"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { LoggedDataContext } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";


const stages = [
  {
    index: "1",
    point: "Request an appointment through our website",
  },
  {
    index: "2",
    point: "ESSI in-take call and review the records",
  },
  {
    index: "3",
    point: "Surgeon approval and scheduling",
  },
  {
    index: "4",
    point: "Travel to the surgical site available that is most convenient to you",
  }
];

const reasonsColumn1 = [
  "Painful periods",
  "Pelvic periods",
  "Bladder pain",
  "Pain with intercourse",
  "Your MRI is negative",
  "Nothing found on ultrasound",
  "You have adenomyosis",
  "You have an ovarian endometrioma",
  "Pain despite endometriosis surgery",
  "Told you need to go on Lupron",
];

const reasonsColumn2 = [
  "You have been told you have to take Orilissa",
  "You have failed IVF",
  "You are infertile and they told you it’s unexplained",
  "You want to freeze your eggs but you have endometriosis",
  "You want to reduce your chance of having a second surgery",
  "They told you IVF will bypass endometriosis (it may not)",
  "You have failed embryo transfers with PGS normal embryos",
];

const reasonsColumn3 = [
  "You have experienced miscarriages",
  "You have experienced biochemical pregnancies",
  "They told you “you may lose your ovary”",
  "They told you surgery is too risky",
  "You are not sure your doctor is an excision specialist",
  "You have been told “it is all in your head”",
  "That endometriosis surgery will damage your fertility",
  "You had a surgery and are still in pain",
];

const page = () => {

   const { loggedUserData} = useContext(LoggedDataContext);
               
                 const router = useRouter();
             
                  const  handleBtnClick = () => {
                 if(loggedUserData){ 
                   router.push("/appointment-form")
                 }else{
                   router.push("/login?redirect=/appointment-form");
                 }
               }
    
               
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="pageOuter" >
        
        {/* herosection */}
      <div className="container py-5 mb-sm-5">
  <div className="row align-items-center">
    <motion.div
      className="col-lg-6 col-12 order-lg-1 order-2"
     initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Treating Endometriosis</h2>
      <h1 className="mb-4">For Canadian Patients</h1>

      <p className="small-medium mb-md-5">
        We provide specialized treatment packages for Canadian patients to fly to the United States and receive personalized endometriosis care
      </p>

     
        <motion.div
         onClick={handleBtnClick}
          className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
          style={{ width: "fit-content" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
            Book Appointment
          </p>
          <img
            src="/assets/white_arrow.svg"
            style={{ width: "15px" }}
          />
        </motion.div>
     
    </motion.div>

    <motion.div
      className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
     
    >
      <img
        src="/assets/E_surgery/herosection.png"
        className="img-fluid"
      />
    </motion.div>
  </div>
</div>


      {/* how it works section */}
<div className="bg-white py-5">
  <div className="container">
    <h2 className="text-center">A Solution for Canada</h2>
    <h1 className="text-center mb-5">
      Breaking Barriers for Endometriosis Care
    </h1>
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <motion.p
          className="para"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          For individuals in Canada suffering from endometriosis, accessing
          high-quality, specialized care remains a significant challenge.
          Despite the widespread prevalence and life-altering impact of this
          disease, many patients encounter considerable barriers to receiving
          the diagnosis and treatment they deserve.
        </motion.p>

        <motion.p
          className="para"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          These challenges often result in delayed care, misdiagnosis, or sub
          optimal treatment options. At our state-of-the-art Endometriosis
          Centers, we offer a solution to these obstacles. We offer a rate for
          treatment that is competitive with other European and American
          Centers.
        </motion.p>

        <motion.p
          className="para"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Our centers provide immediate access to world-class expertise,
          including: expert diagnostics, minimally invasive excision surgery, a
          dedicated multidisciplinary team, and advanced treatment options
          designed to improve outcomes and quality of life.
        </motion.p>
      </div>

      <div className="col-md-6 col-12">
        <motion.div
          className="p-3 py-4 flex-column align-items-start position-relative ms-md-5 ms-0 mb-4 boxShadow locationSteps"
          style={{ borderRadius: "20px", border: "1px solid #f6deff" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {stages.map((step, i) => (
            <motion.div
              className="d-flex align-items-start gap-sm-4 gap-3"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Left: Icon + Number + Line */}
              <div className="d-flex gap-sm-4 gap-4 me-3 position-relative">
                <div className="d-flex flex-column align-items-center">
                  <div className="step-index large-text mb-0 d-flex justify-content-center align-items-center">
                    {step.index}
                  </div>

                  {i !== stages.length - 1 && (
                    <div className="vertical-line-location"></div>
                  )}
                </div>
              </div>

              {/* Right: Description */}
              <div>
                <p className="mb-0 medium-text textPrimary">{step.point}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
</div>


      {/* reasons section */}
      <div className="container py-5">
         <h1 className="text-center">
           Reasons to See{" "}
           <span className="tilt tilt-primary text-white"> ESSI</span>
         </h1>
       
         <div className="row pt-4 justify-content-center mb-sm-5">
           {[reasonsColumn1, reasonsColumn2, reasonsColumn3].map((column, i) => (
             <div
               className="col-lg-4 col-md-6 col-12 p-sm-2 p-0 px-3"
               key={i}
             >
               <motion.div
                 className="bg-white p-md-4 p-4 pt-1 h-100 reasonCard"
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: i * 0.2 }}
                 viewport={{ once: true, amount: 0.2 }}
                 whileHover={{
                   scale: 1.03,
                   boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
                 }}
               >
                 {column.map((reason, index) => (
                   <div
                     key={index}
                     className="d-flex gap-2 align-items-center mb-3"
                   >
                     <img
                       src="/assets/hand_Icon.svg"
                       alt="hand icon"
                       style={{ width: "28px", height: "28px" }}
                     />
                     <p className="mb-0 small-medium textPrimary">{reason}</p>
                   </div>
                 ))}
               </motion.div>
             </div>
           ))}
         </div>
      </div>
       

      </div>


      <Footer />
    </div>
  );
};

export default page;
