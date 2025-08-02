"use client"
import React from "react";
import { LoggedDataContext } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  
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
    <div className="footer bg-white mb-5">
      <div
        className="footer-top d-flex  flex-wrap justify-content-center align-items-center "
        style={{ backgroundColor: "#4E2675" }}
      >
        <div className=" d-flex flex-md-row flex-column gap-md-5 gap-3 justify-content-center align-items-center ">
          <h2 className="text-white text-md-start text-center">
            Interested in learning more about our offerings?
          </h2>
         
            <div onClick={handleBtnClick}
              className="d-flex gap-sm-2 gap-1 viewButton bg-white p-3   align-items-center"
              style={{ height: "43px", width: "fit-content" }}
            >
              <img
                className=""
                src="/assets/button_icon_primary.svg"
                style={{ width: "16px" }}
              ></img>
              <p className="mb-0 textPrimary" style={{ whiteSpace: "nowrap" }}>
                Book Appointment
              </p>
              <img
                src="/assets/primary_arrow.svg"
                style={{ width: "15px" }}
              ></img>
            </div>
        
        </div>
      </div>
      <div className="footer main pt-5 mt-4 pb-3">
        <div className="container">
          <div className=" d-flex justify-content-between flex-wrap mb-3 px-md-0 px-3">
            <div className="mb-4">
              <img src="/assets/logo.png" className="footer-logo"></img>

              <div className="footer-link mt-3">
                <p className="mb-1 fw-normal">Providing world-class,</p>
                <p className="mb-1 fw-normal">multidisciplinary, and</p>
                <p className="mb-1 fw-normal">patient-centric care to</p>
                <p className="mb-3 fw-normal">endometriosis patients</p>
              </div>
              <div className="d-flex gap-2">
                <img
                  src="/assets/email.svg"
                  style={{ height: "24px", width: "24px" }}
                ></img>
                <p className="footer-link">
                  frontdesk@reproductiveimmunology.com
                </p>
              </div>

              <div className="d-flex gap-2">
                <img
                  src="/assets/call.svg"
                  style={{ height: "24px", width: "24px" }}
                ></img>
                <p className="footer-link">+1 386-688-3295</p>
              </div>
            </div>

            <div className="mb-4 me-sm-0 me-4">
              <p className="textPrimary footer-head mb-4">Service</p>
              <div className="footer-link">
                <a
                  href="endometriosis-mapping"
                  style={{ textDecoration: "none", color: "#77808B" }}
                >
                  <p>Endometriosis-mapping</p>
                </a>
                <a
                  href="endometriosis-surgery"
                  style={{ textDecoration: "none", color: "#77808B" }}
                >
                  {" "}
                  <p>Endometriosis-surgery</p>
                </a>
                <a
                  href="endometriosis-and-fertility"
                  style={{ textDecoration: "none", color: "#77808B" }}
                >
                  <p>Endometriosis-and-infertility</p>
                </a>
                <a href="" style={{ textDecoration: "none", color: "#77808B" }}>
                  <p>Thoracic-endometriosis</p>
                </a>
                <a href="" style={{ textDecoration: "none", color: "#77808B" }}>
                  <p>Adenomyosis</p>
                </a>
                <a href="" style={{ textDecoration: "none", color: "#77808B" }}>
                  <p>Adolescent-endometriosis</p>
                </a>
              </div>
            </div>

            <div className="mb-4 me-sm-0 me-4">
              <p className="textPrimary footer-head mb-4">Company</p>
              <div className="footer-link">
                <a
                  href="how-we-help"
                  style={{ textDecoration: "none", color: "#77808B" }}
                >
                  {" "}
                  <p>How we help</p>
                </a>
                <a
                  href="our-team"
                  style={{ textDecoration: "none", color: "#77808B" }}
                >
                  {" "}
                  <p>Meet Our Team</p>
                </a>
                <a
                  href="why-essi"
                  style={{ textDecoration: "none", color: "#77808B" }}
                >
                  <p>Why Us</p>
                </a>
                <a href="" style={{ textDecoration: "none", color: "#77808B" }}>
                  {" "}
                  <p>Blog</p>
                </a>
                <a href="" style={{ textDecoration: "none", color: "#77808B" }}>
                  {" "}
                  <p>Support</p>
                </a>
                <a href="" style={{ textDecoration: "none", color: "#77808B" }}>
                  {" "}
                  <p>Contact Us</p>
                </a>
              </div>
            </div>

            <div className="d-flex flex-column mb-4">
              <p className="textPrimary footer-head mb-4">Join a Newsletter</p>
              <p className="footer-link">Your Email</p>
              <textarea
                rows={3}
                placeholder="Enter Your Email"
                className="footer-link p-4"
                style={{ width: "296px", border: "1px solid #76AEFF" }}
              ></textarea>
              <button
                className="py-3 px-5 bgPrimary text-white border-0 mt-3"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "8px",
                  width: "150px",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          <hr
            className="text-primary thick-hr"
            style={{ height: "", border: "1px solid #076fff" }}
          ></hr>

          <div className="d-flex flex-md-row flex-column justify-content-between mt-5">
            <p className="copyright">
              Copyright{" "}
              <span className="footer-copyright">
                Endometriosis Surgical Specialists International
              </span>
            </p>
            <div className="d-flex gap-3">
              <img src="/assets/facebook.svg" style={{ height: "32px" }}></img>
              <img src="/assets/instagram.svg" style={{ height: "32px" }}></img>
              <img src="/assets/youtube.svg" style={{ height: "32px" }}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
