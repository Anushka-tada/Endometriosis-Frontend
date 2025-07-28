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
    point: "Travel to the surgical site",
  },
  {
    index: "4",
    point:
      "Travel to the surgical site available that is most convenient to you",
  },
  {
    index: "5",
    point: "Outpatient surgery and travel to a nearby hotel",
  },
];

const doctors = [
  {
    img: "/assets/location/Dr_Mario.png",
    name: "Dr. Mario Malzoni",
  },
  {
    img: "/assets/location/Dr_Marcello.png",
    name: "Dr. Marcello Ceccaroni",
  },
  {
    img: "/assets/location/Dr_Alessandra.png",
    name: "Dr. Alessandra Di Giovanni",
  },
  {
    img: "/assets/location/Dr_Andrea.png",
    name: "Dr. Andrea Vidali",
  },
  {
    img: "/assets/location/Dr_Francesco.png",
    name: "Dr. Francesco Di Chiara",
  },
];

const locations = [
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/7a880a1f835710f43c9a233a4273cd84-1024x710.jpg",
    text: "New York",
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
    img: "https://internationalendo.com/wp-content/uploads/2024/12/79bf4382f3dd6ff472670a1f1b789f44-1024x768.jpg",
    text: "Illinois",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/5bd54f2f6ec183e73d95ebf0d93446c1-1024x675.jpg",
    text: "Florida",
  },
];

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: () => <div className="custom-dot" />,
    appendDots: (dots) => <ul className="custom-dots-container">{dots}</ul>,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="pageOuter" >
        {/* herosection */}
        <div className="container py-5 mb-sm-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <h2>Treating Endometriosis</h2>
              <h1 className="mb-4">For Patients in Europe</h1>

              <p className="small-medium mb-md-5">
                We provide specialized treatment packages for patients in Europe
                at an Endometriosis center in Salerno, Italy
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
            <h2 className="text-center ">Endometriosis Surgical Specialists International Offers Specialized Treatment Packages for Patients in Europe</h2>
            <p className="small-medium text-center">Includes: Transportation to and from airport, lodging and meals, and surgery and associated medical fees</p>
        </div>
      </div>

        {/* how it works section */}

        <div className="bg-white py-5">
          <div className="container">
            <h2 className="text-center">A Solution for Europe</h2>
            <h1 className="text-center mb-5">
              Breaking Barriers for Endometriosis Care
            </h1>
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <p className="para mb-4">
                  For individuals suffering from endometriosis, accessing
                  high-quality, specialized care remains a significant challenge
                  in many European countries. Despite the prevalence and
                  debilitating nature of this disease, countless patients face
                  barriers to receiving the care they need.
                </p>

                <p className="para mb-4">
                  At our world-class Endometriosis Center, we offer a solution
                  to these barriers. We provide a comprehensive, patient-focused
                  approach that prioritizes accurate diagnosis, advanced
                  treatment, and personalized care.
                </p>

                <p className="para mb-4">
                  Located just one hour from most European destinations, our
                  center eliminates the delays and compromises many face in
                  their home countries. Our services include: expert
                  diagnostics, minimally invasive excision surgery, a dedicated
                  multidisciplinary team, and immediate access to specialized
                  care.
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

        {/* doctors section */}

        <div className="container my-5 pb-sm-5">
          <h1 className="text-center mb-4">Meet Our Doctors</h1>
          <Slider {...settings} className="d-flex align-items-center">
            {doctors.map((member, index) => (
              <div key={index} className="p-3">
                <div
                  className="bg-white boxShadow p-2 px-4"
                  style={{ borderRadius: "20px" }}
                >
                  <img
                    src={member.img}
                    className="img-fluid mb-2"
                    style={{ borderRadius: "20px" }}
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
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* About the Facility */}

        <div className="py-5" style={{ backgroundColor: "#ECE6F3" }}>
          <div className="container d-flex flex-column align-items-center gx-0">
            <h1 className="text-center mb-4">About the Facility</h1>
            <div
              className="facility-img d-flex  flex-column align-items-center  p-4 bg-white"
              style={{ borderRadius: "20px", width: "fit-content" }}
            >
              <img
                src="/assets/location/facility.jpg"
                className="img-fluid mb-3"
                style={{ borderRadius: "20px" }}
              ></img>

              <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                <div>
                  <p className="medium-text textPrimary mb-1">
                    Villa del Sole | State of the Art Operating Room
                  </p>
                  <p className="medium-text textPrimary">
                    Via dei Greci, 1 (Località Fratte) – 84135 Salerno
                  </p>
                </div>

                <div
                  className="d-flex  gap-sm-3 gap-1 bookButton p-2 px-3"
                  style={{ width: "fit-content" , height:"40px" }}
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
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
