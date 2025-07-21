import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
     <div>
         
         {/* herosection */}
         <div className="pt-4 pb-5 bg-white">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6 col-12">
              
                 <h1 className="text-lg-start text-center tilt tilt-primary text-white">
                  We Are
                </h1>
                <h1 className="mb-4 text-sm-start text-center">
                  Endometriosis Surgical Specialists International
                </h1>

              
                <p className="para d-sm-block d-none">
                  Most endometriosis patients spend years enduring pain,
                  infertility, and other debilitating symptoms before receiving
                  a diagnosis. If that describes you, then you have had no
                  choice other than to learn how to cope with and manage your
                  symptoms. But suffering should not be normalized.
                </p>

                <p className="mb-4 para d-sm-block d-none">
                  Endometriosis Surgical Specialists International (ESSI),
                  founded by Dr. Andrea Vidali – a leading excision specialist
                  who has been performing endometriosis surgeries for over 25
                  years – is dedicated to achieving lasting results through
                  complete excision. Recognizing the importance of an
                  experienced team, Dr. Vidali assembled a surgical group at
                  ESSI with the experience and dedication needed to deliver the
                  outcomes you seek.
                </p>

               
              </div>
              <div className="col-lg-6 col-12">
                <img
                  src="/assets/homepage/about.png"
                  className="img-fluid mb-sm-0 mb-3"
                ></img>
              </div>
            </div>
          </div>
        </div>

    </div> 
    <Footer/>
    </>
  )
}

export default page
