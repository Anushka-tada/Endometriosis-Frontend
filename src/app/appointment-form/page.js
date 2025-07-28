"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RequestConsultation from '../components/RequestConsultation'
import { motion } from "framer-motion";

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
    <Navbar/> 

    <div  className="pageOuter">


      {/* herosection */}

      <div className="container pb-sm-5 pb-0">
  <div className="row pb-5 align-items-center">

    {/* Left Column */}
    <motion.div
      className="col-lg-6 col-12 pt-lg-5 pt-0 mt-3 pe-lg-5 order-lg-1 order-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Book Your Appointment for Expert Care
      </motion.h1>

      <motion.p
        className="medium-text mb-4 pb-2 me-lg-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get personalized guidance and fast-track medical consultation with our specialists.
      </motion.p>
    </motion.div>

    {/* Right Column - Image */}
    <motion.div
      className="col-lg-6 col-12 mb-sm-3 d-flex justify-content-center order-lg-2 order-1"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/assets/appointement.png"
        className="img-fluid mb-3 mb-md-0"
        alt="Appointment Illustration"
      />
    </motion.div>
  </div>
</div>


      <div className='container'>
        <h1 className='text-center mb-4'>Book {" "}<span className='tilt tilt-secondary'>Appointment</span> Seamlessly</h1>
        <h2 className='small-h2 text-center mb-3'>We are the premier Endometriosis Surgical Specialists providing the highest standard of care for effective treatment of pain as well as ensuring lasting results.</h2>

        <RequestConsultation/>
      </div>

      </div>

    <Footer/>
      
    </div>
  )
}

export default page
