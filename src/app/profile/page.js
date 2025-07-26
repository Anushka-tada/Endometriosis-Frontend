import React from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar"

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="profile-page">
        <div className="container py-4 ">
          <ProfileSidebar />

            <div className="p-4 bg-white" style={{borderRadius:"20px" , border:"1px solid #f1f1f1"}}>
       
            <h2 className="small-h2">User Details</h2>
            <div className="row mt-4">
            <div className="col-md-5 col-12 mb-sm-3 mb-2">
              <label className="small-medium mb-2">Name</label>
              <p className="form-input py-3 px-3 w-100 text-black mb-0">Anushka Tada</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-12 mb-sm-3 mb-2">
              <label className="small-medium mb-2">Email</label>
              <p className="form-input py-3 px-3 w-100 text-black mb-0">
                anushkatada@gmail.com
              </p>
            </div>
          </div>

          <div
            className="d-flex gap-sm-3 gap-1 align-items-center bookButton p-2 px-4 mb-3"
            style={{ width: "fit-content" }}
          >
            <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
              Edit
            </p>
            <img src="https://cdn-icons-png.flaticon.com/128/10573/10573605.png" className="editIcon" style={{height:"19px"}}></img>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
