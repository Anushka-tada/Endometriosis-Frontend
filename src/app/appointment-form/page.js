import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RequestConsultation from '../components/RequestConsultation'

const page = () => {
  return (
    <>
    <Navbar/> 

    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>

      {/* hero section */}
      <div className="container pb-sm-5  pb-0" >
        <div className="row pb-5 align-items-center">
          <div className="col-lg-6 col-12 pt-lg-5 pt-0 mt-3 pe-lg-5 order-lg-1 order-2">
           
            <h1 className="mb-4 ">Book Your Appointment for Expert Care</h1>

            <p className="medium-text mb-4 pb-2 me-lg-5 ">
            Get personalized guidance and fast-track medical consultation with our specialists.
            </p>

        
          </div>
          <div className="col-lg-6 col-12 mb-sm-3 d-flex justify-content-center order-lg-2 order-1">
            <img
              src="/assets/appointement.png"
              className="img-fluid mb-3 mb-md-0"
              alt="Foreground"

            />
          </div>
        </div>
      </div>

      <div className='container'>
        <h1 className='text-center mb-4'>Book<span className='tilt tilt-secondary'>Appointment</span> Seamlessly</h1>
        <h2 className='small-h2 text-center mb-3'>We are the premier Endometriosis Surgical Specialists providing the highest standard of care for effective treatment of pain as well as ensuring lasting results.</h2>

        <RequestConsultation/>
      </div>

      </div>

    <Footer/>
      
    </>
  )
}

export default page
