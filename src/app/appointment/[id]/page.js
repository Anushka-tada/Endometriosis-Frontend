"use client";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from "react";
import { appointmentDetailsServ } from "../../services/booking.service";
import { useParams } from "next/navigation";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const page = () => {

  const { id } = useParams();
  const [details, setDetails] = useState();
    const [isLoading , setIsLoading] = useState([]);

  const getAppointmentDetails = async () => {
    try {
       setIsLoading(true)
      const res = await appointmentDetailsServ(id);
      console.log("details fetched successfully", res);
      setDetails(res?.data);
       setIsLoading(false)
    } catch (err) {
      console.log("get error while fetching details", err);
       setIsLoading(false)
    }
  };

  useEffect(() => {
    getAppointmentDetails();
  }, []);

  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />
     
      <div className="appointment-details  pageOuter ">
       <div className="container">
        <a href="/bookings">
             <img src="https://cdn-icons-png.flaticon.com/128/7915/7915208.png" style={{height:"35px" , width:"35px"}}></img>
        </a>
       </div>
        <h2 className="text-center mb-3">Appointment Details</h2>
       { isLoading == true ? (
           <div
    className="container bg-white p-sm-5 p-3"
    style={{ borderRadius: "20px", border: "1px solid #faf0ff" }}
  >
    {/* Heading Skeleton */}
    <div className="row mb-5">
      <h3 className="medium-text my-3 textPrimary">
        <Skeleton width={200} />
      </h3>
      <div className="col-12 col-md-8">
        <div className="row gy-3">
          {[...Array(5)].map((_, index) => (
            <div className="col-12 col-sm-6" key={index}>
              <p className="text-muted mb-2 para">
                <Skeleton width={100} />
              </p>
              <p className="text-dark small-bold">
                <Skeleton width={160} height={20} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 3 Info Cards Skeletons */}
    <div className="row">
      {[...Array(3)].map((_, index) => (
        <div className="col-lg-4 col-md-6 col-12 mb-3" key={index}>
          <div
            className="p-sm-4 p-3 boxShadow h-100"
            style={{
              backgroundColor: "#ECE6F3",
              borderRadius: "16px",
            }}
          >
            <div className="d-flex gap-3 mb-3">
              <Skeleton circle width={32} height={32} />
              <Skeleton width={150} height={20} />
            </div>
            <div className="row">
              <div className="col-6">
                {[...Array(4)].map((__, i) => (
                  <p key={i} className="small-bold text-black">
                    <Skeleton width={90} />
                  </p>
                ))}
              </div>
              <div className="col-6">
                {[...Array(4)].map((__, i) => (
                  <p key={i} className="para text-black">
                    <Skeleton width={120} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
        ):(
           <div
          className="container bg-white p-sm-5 p-3"
          style={{ borderRadius: "20px" , border:"1px solid #faf0ff "}}
        >
          <div className="row mb-5">
            <h3 className="medium-text my-3 textPrimary">
              Appointment Summary
            </h3>
           <div className="col-12 col-md-8">
  <div className="row gy-3">
    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 para">Patient Name</p>
      <p className=" text-dark small-bold">
        {details?.firstName} {details?.lastName}
      </p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 para">Treatment</p>
      <p className="small-bold text-dark">{details?.treatmentService}</p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 para">Appointment Status</p>
      <p className="small-bold textPrimary">
        {details?.status || "Pending"}
      </p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 para">Location</p>
      <p className="small-bold text-dark">{details?.location}</p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 para">Date & Time</p>
      <p className="small-bold text-dark">
        {details?.date} | {details?.time}
      </p>
    </div>

 <div className="col-12 col-sm-6">
       {details?.status === "pending" && (
  <div className="mb-2">
    <button
      className="viewButton textPrimary px-4 py-2"
      onClick={() => window.location.href = `/review/${details?._id}`}
    >
      Add Review
    </button>
  </div>
)}
</div>
  </div>
</div>

          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div
                className="p-sm-4 p-3 boxShadow h-100"
                style={{
                  backgroundColor: "#ECE6F3",
                  rounded: "17px",
                  borderRadius: "16px",
                }}
              >
                <div className="d-flex gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4640/4640797.png"
                    style={{ height: "32px", width: "32px" }}
                  ></img>
                  <p
                    className="medium-text pb-2"
                    style={{ borderBottom: "1px solid #d9afe3" }}
                  >
                    Personal Details
                  </p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="small-bold text-black">Full Name</p>
                    <p className="small-bold text-black">Phone</p>
                    <p className="small-bold text-black">Email</p>
                    <p className="small-bold text-black">Dob</p>
                  </div>
                  <div className="col-6">
                    <p className="para text-black">
                      {details?.firstName} {details?.lastName}
                    </p>
                    <p className="para text-black">{details?.phone}</p>
                    <p className="para text-black">
                      {details?.treatmentService}
                    </p>
                    <p className="para text-black">{details?.dob}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div
                className="p-sm-4 p-3 boxShadow h-100"
                style={{
                  backgroundColor: "#ECE6F3",
                  rounded: "17px",
                  borderRadius: "16px",
                }}
              >
                <div className="d-flex gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9077/9077762.png"
                    style={{ height: "32px", width: "32px" }}
                  ></img>
                  <p
                    className="medium-text pb-2"
                    style={{ borderBottom: "1px solid #d9afe3" }}
                  >
                    Address Info
                  </p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="small-bold text-black">Address</p>
                    <p className="small-bold text-black">City</p>
                    <p className="small-bold text-black">State</p>
                    <p className="small-bold text-black">Zip</p>
                    <p className="small-bold text-black">Country</p>
                  </div>
                  <div className="col-6">
                    <p className="para text-black">{details?.address}</p>
                    <p className="para text-black">{details?.city}</p>
                    <p className="para text-black">{details?.state}</p>
                    <p className="para text-black">{details?.zip}</p>
                    <p className="para text-black">{details?.country}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div
                className="p-sm-4 p-3 boxShadow h-100"
                style={{
                  backgroundColor: "#ECE6F3",
                  rounded: "17px",
                  borderRadius: "16px",
                }}
              >
                <div className="d-flex gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/687/687529.png"
                    style={{ height: "32px", width: "32px" }}
                  ></img>
                  <p
                    className="medium-text pb-2"
                    style={{ borderBottom: "1px solid #d9afe3" }}
                  >
                    Medical Info
                  </p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="small-bold text-black">Diagnosed</p>
                    <p className="small-bold text-black">GDPR Consent</p>
                    <p className="small-bold text-black">Brief History</p>
                  </div>
                  <div className="col-6">
                    <p className="para text-black">
                      {details?.diagnosed ? "Yes" : "No"}
                    </p>
                    <p className="para text-black">
                      {details?.gdpr ? "Yes" : "No"}
                    </p>
                    <p className="para text-black">{details?.history}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

       

        </div>
        )
       }
       
       
      </div>

      <Footer />
    </div>
  );
};

export default page;
