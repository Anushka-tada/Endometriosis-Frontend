"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";

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
    point:
      "Travel to the surgical site available that is most convenient to you",
  },
  {
    index: "5",
    point:
      "Outpatient surgery and travel to a nearby hotel / Last Step Variable Based on Location",
  },
];

const locations = [
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/7a880a1f835710f43c9a233a4273cd84-1024x710.jpg",
    text: "New York City",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/6b8d6a91eaa26921556b6fd7c9160365-1024x767.jpg",
    text: "New Jersey",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/d3cc1f7944a545dcf2c5c878689ffe6e-1024x575.jpg",
    text: "California",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/5bd54f2f6ec183e73d95ebf0d93446c1-1024x675.jpg",
    text: "Miami",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/79bf4382f3dd6ff472670a1f1b789f44-1024x768.jpg",
    text: "chicago",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/0c3466762faa7ca03f596cf5f391b889-1024x683.png",
    text: "Brazil",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/ee8455a806aeadf9e0dec3b62f950752.png",
    text: "EUrope",
  },
];

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="pageOuter" >
        {/* herosection */}
        <div className="container py-5 mb-sm-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <h2>Treating Endometriosis</h2>
              <h1 className="mb-4">In the United States</h1>

              <p className="small-medium mb-md-5">
                International patients can choose to seek treatment options in
                any of our current locations and receive best-in-class treatment
                from our world-class medical team
              </p>

               <a href="/appointment-form" style={{textDecoration:"none"}}>
               <div
                className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
                style={{ width: "fit-content" }}
              >
                <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                  Book Appointment
                </p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: "15px" }}
                ></img>
              </div>
             </a>
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
              <img
                src="/assets/E_surgery/herosection.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>

        <div className="location_herosection py-sm-5 py-4">
          <div className="container my-4">
            <h2 className="text-center ">
              Endometriosis Surgical Specialists International Offers
              Specialized Treatment Packages for Patients from the Rest of the
              World!
            </h2>
          </div>
        </div>

        {/* how it works section */}

        <div className="bg-white py-5">
          <div className="container">
            <h2 className="text-center">
              A Solution for Patients in the United States
            </h2>
            <h1 className="text-center mb-5">
              World Class Endometriosis Treatment
            </h1>
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <p className="para mb-4">
                  For individuals suffering from endometriosis, accessing
                  high-quality, specialized care remains a significant challenge
                  in many countries. Despite the prevalence and debilitating
                  nature of this disease, countless patients face barriers to
                  receiving the care they need.
                </p>

                <p className="para mb-4">
                  At our world-class Endometriosis Centers, we offer a solution
                  to these barriers. We provide a comprehensive, patient-focused
                  approach that prioritizes accurate diagnosis, advanced
                  treatment, and personalized care.
                </p>

                <p className="para mb-4">
                  {" "}
                  Patients in the United States can choose to be seen in any of
                  our centers and get access to: expert diagnostics, minimally
                  invasive surgery, a dedicated multidisciplinary team, and
                  immediate accesses so specialized care.
                </p>

                <a href="/appointment-form" style={{textDecoration:"none"}}>
               <div
                className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
                style={{ width: "fit-content" }}
              >
                <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                  Book Appointment
                </p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: "15px" }}
                ></img>
              </div>
             </a>
              </div>

              <div className="col-md-6 col-12">
                {/* <p className="mb-3 large-text text-center">How it Works</p> */}
                <div
                  className=" p-3 py-4 flex-column align-items-start position-relative ms-md-5 ms-0 mb-4 boxShadow locationSteps"
                  style={{ borderRadius: "20px", border: "1px solid #f6deff" }}
                >
                  {stages.map((step, i) => (
                    <div
                      className="d-flex align-items-start gap-sm-4 gap-3 "
                      key={i}
                    >
                      {/* Left: Icon + Number + Line */}
                      <div className="d-flex gap-sm-4 gap-4  me-3 position-relative ">
                        <div className="d-flex flex-column align-items-center">
                          <div className="step-index large-text mb-0 d-flex justify-content-center align-items-center">
                            {step.index}
                          </div>

                          {/* Only show line if not last */}
                          {i !== stages.length - 1 && (
                            <div className="vertical-line-location"></div>
                          )}
                        </div>
                      </div>

                      {/* Right: Description */}
                      <div>
                        <p className="mb-0 medium-text textPrimary">
                          {step.point}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-sm-5 py-4">
          <div className="container my-4 d-flex flex-column align-items-center">
            <h2 className="text-center mb-3">
              Get Access to our Entire Surgical Team
            </h2>
            <a href="/our-team" style={{textDecoration:"none"}}>
                <div className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3 mb-ms-0 mb-3"    style={{ width: "fit-content" }} >
              <p className="mb-0 text-white " style={{ whiteSpace: "nowrap" }}>
                Learn more about our doctors
              </p>
              <img
                src="/assets/white_arrow.svg"
                style={{ width: "15px" }}
              ></img>
            </div>
            </a>
          </div>
        </div>

        {/* locations of treatment */}

        <div className=" py-5" style={{ backgroundColor: "#ECE6F3" }}>
          <div className="container">
            <h1 className="text-center mb-4">Locations for Treatment</h1>
            <div className="row justify-content-center">
              {locations.map((location, index) => (
                <div className="col-lg-3 col-md-6 p-2" key={index}>
                  <div className="locationCard bg-white p-3 boxShadow h-100">
                    <div className="locationImageOuter mb-3">
                      <img
                        src={location.img}
                        className="img-fluid h-100 w-100"
                        style={{ borderRadius: "20px", objectFit: "cover" }}
                      ></img>
                    </div>
                    <p className="small-medium textPrimary">{location.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
