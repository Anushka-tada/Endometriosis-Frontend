"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LoggedDataContext } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const stages = [
  {
    index: "1",
    point: "Request an Appointment Through Our Website",
  },
  {
    index: "2",
    point: "Imaging Exam and Virtual Consultation",
  },
  {
    index: "3",
    point:
      "Travel & Arrival – Fly to São Paulo, where you’re welcomed and escorted to a renowned hotel.",
  },
  {
    index: "4",
    point:
      "Pre-Op & Surgery – Visit the clinic for pre-op evaluation and undergo surgery the next day.",
  },
  {
    index: "5",
    point:
      "Recovery – Early discharge with post-op care at the hotel, and final visit at the clinic.",
  },
];

const doctors = [
  {
    img: "/assets/location/Dr_Mauricio.png",
    name: "Dr. Mauricio Abrão",
  },
  {
    img: "/assets/location/Dr_Henrique.png",
    name: "Dr. Henrique Abrão",
  },
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
      <h1 className="mb-4">In Brazil</h1>

      <p className="small-medium mb-md-5">
        International patients can choose to seek treatment options in any of
        our current locations and receive best-in-class treatment from our
        world-class medical team
      </p>

    
        <motion.div onClick={handleBtnClick}
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

           <div className="location_herosection py-sm-5 py-4">
        <div className="container my-4">
            <h2 className="text-center ">Endometriosis Surgical Specialists International Offers Specialized Treatment Packages for Patients in Brazil</h2>
            <p className="small-medium text-center">Includes: Transportation to and from airport, lodging and meals, and surgery and associated medical fees</p>
        </div>
      </div>

        {/* how it works section */}

        <div className="bg-white py-5">
  <div className="container">
    <h2 className="text-center">A Solution for Patients in Brazil</h2>
    <h1 className="text-center mb-5">World Class Endometriosis Treatment</h1>
    <div className="row align-items-center">
      {/* Left Column */}
      <motion.div
        className="col-md-6 col-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="para mb-4">
          For individuals in Brazil suffering from endometriosis, accessing
          specialized, high-quality care remains a significant challenge.
          Despite the prevalence and debilitating nature of this condition, many
          patients face barriers to receiving the necessary care.
        </p>

        <p className="para mb-4">
          Our world-class Endometriosis Centers provide a comprehensive solution
          to these barriers with a patient-centered approach focused on accurate
          diagnosis, advanced treatment, and personalized care.
        </p>

        <p className="para mb-4">
          Brazilian patients can access expert diagnostics, minimally invasive
          surgery, a dedicated multidisciplinary team, and timely, compassionate
          support throughout their journey to recovery.
        </p>

      
          <motion.div onClick={handleBtnClick}
            className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
            style={{ width: "fit-content" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
              Book Appointment
            </p>
            <img src="/assets/white_arrow.svg" style={{ width: "15px" }} />
          </motion.div>
       
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="col-md-6 col-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="p-3 py-4 flex-column align-items-start position-relative ms-md-5 ms-0 mb-4 boxShadow locationSteps"
          style={{ borderRadius: "20px", border: "1px solid #f6deff" }}
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
              <div>
                <p className="mb-0 medium-text textPrimary">{step.point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
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


       <div className="bg-white py-5">
  <div className="container">
    <div className="row align-items-center">
      <motion.div
        className="col-md-6 col-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src="https://internationalendo.com/wp-content/uploads/2025/01/OBJECTS.png"
          className="img-fluid"
          alt="Neuropelveology Illustration"
        />
      </motion.div>

      <motion.div
        className="col-md-6 col-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          World-Class{" "}
          <span className="tilt tilt-primary text-white">Neuropelveology</span>{" "}
          Treatment
        </motion.h1>

        <motion.p
          className="para"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Our world-class Neuropelveology treatment provides a transformative
          solution to these challenges through a patient-centered approach
          focused on precise diagnosis, advanced treatment, and multidisciplinary
          care.
        </motion.p>

        <motion.p
          className="para"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Patients benefit from expert clinical evaluations, minimally invasive
          procedures, and a dedicated team of specialists experienced in
          managing complex nerve-related pelvic conditions. From conditions like
          endometriosis and deep pelvic tumors to post-surgical nerve injuries
          and birth-related trauma, our team is committed to offering timely,
          compassionate support at every stage of the recovery journey.
        </motion.p>

        <motion.p
          className="para"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          With innovative techniques, such as the LION Procedure for spinal
          injuries, we empower patients with cutting-edge solutions that improve
          mobility, reduce pain, and enhance their quality of life.
        </motion.p>
      </motion.div>
    </div>
  </div>
       </div>

        {/* doctors section */}

       <div className="container my-5 pb-sm-5">
  <motion.h1
    className="text-center mb-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    Meet Our Doctors
  </motion.h1>

  <div className="row justify-content-center">
    {doctors.map((member, index) => (
      <motion.div
        key={index}
        className="p-3 col-lg-4 col-md-6 col-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-white boxShadow p-2 px-4"
          style={{ borderRadius: "20px" }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={member.img}
            className="img-fluid mb-2"
            style={{ borderRadius: "20px" }}
            alt={member.name}
          />
          <h5 className="medium-text mb-2">{member.name}</h5>

          <div className="d-flex flex-lg-nowrap flex-wrap gap-sm-4 gap-2 mb-3 mt-3">
            <a href="/our-team" style={{ textDecoration: "none" }}>
              <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3">
                <p
                  className="mb-0 text-white"
                  style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                >
                  Read More
                </p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: "15px" }}
                  alt="arrow"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>


        {/* About the Facility */}

       <div className="py-5" style={{ backgroundColor: "#ECE6F3" }}>
  <div className="container d-flex flex-column align-items-center gx-0">
    <motion.h1
      className="text-center mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      About the Facility
    </motion.h1>

    <motion.div
      className="facility-img d-flex flex-column align-items-center p-4 bg-white"
      style={{ borderRadius: "20px", width: "fit-content" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
    >
      <img
        src="/assets/location/brazil_facility.png"
        className="img-fluid mb-3"
        style={{ borderRadius: "20px" }}
        alt="Brazil Facility"
      />

      <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center w-100">
        <div>
          <p className="medium-text textPrimary mb-1">
            Clínica Medicina da Mulher
          </p>
          <p className="medium-text textPrimary">
            Rua Colômbia, 332 – Jardim Paulista, São Paulo, 01438-000
          </p>
        </div>

        <div
          className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
          style={{ width: "fit-content", height: "40px" }}
        >
          <p
            className="mb-0 text-white"
            style={{ whiteSpace: "nowrap" }}
          >
            Learn More
          </p>
          <img
            src="/assets/white_arrow.svg"
            style={{ width: "15px" }}
            alt="Arrow"
          />
        </div>
      </div>
    </motion.div>
  </div>
</div>


      </div>

      <Footer />
    </div>
  );
};

export default page;
