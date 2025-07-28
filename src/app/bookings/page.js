import React from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar"

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="profile-page pageOuter">
        <div className="container py-4 ">
          <ProfileSidebar/>

          <div className="p-4 bg-white" style={{borderRadius:"20px" , border:"1px solid #f1f1f1"}}>

            <h2 className="small-h2 mb-3">Bookings</h2>
                  <div className="row mb-3" style={{borderBottom:"1px solid #e2dede"}}>
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="small-medium">Doctor name</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="small-medium">Treatment service</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="small-medium">Date & Time</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="small-medium">Booking Status</p>
                       </div>
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="small-medium">Actions</p>
                       </div>
                  </div>

                  <div className="row" >
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black">Dr. Madhu Bagaria</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black" >Endometriosis surgery</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black">3 August | 10:30 AM</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center ">
                            <p className="para textPrimary " style={{fontWeight:"500"}}>Pending</p>
                       </div>
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center ">
                            <p className="para px-3 py-2 textPrimary  viewDetails   ">View Details</p>
                       </div>
                  </div>

                  <div className="row" >
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black">Dr. Madhu Bagaria</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black" >Endometriosis Mapping</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black">1 August | 10:00 AM</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center ">
                            <p className="para textPrimary " style={{fontWeight:"500"}}>Done</p>
                       </div>
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center ">
                            <p className="para px-3 py-2 textPrimary  viewDetails   ">View Details</p>
                       </div>
                  </div>

                   <div className="row" >
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black">Dr. Alessio Pigazzi</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black" >colorectal surgery</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="para text-black">18 May | 03:30 PM</p>
                       </div>
                        <div className="col-2 d-flex justify-content-center d-flex justify-content-center ">
                            <p className="para textPrimary " style={{fontWeight:"500"}}>Done</p>
                       </div>
                       <div className="col-2 d-flex justify-content-center d-flex justify-content-center ">
                            <p className="para px-3 py-2 textPrimary  viewDetails   ">View Details</p>
                       </div>
                  </div>
                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
