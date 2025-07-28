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

            <h2 className="small-h2 mb-4">Confirm Logout</h2>

            <p className="para text-black mb-4">You’ll be signed out of your account and will need to log in again.</p>

                <div
            className="d-flex gap-sm-3 gap-1 align-items-center bookButton p-2 px-4 my-3"
            style={{ width: "fit-content" }}
          >
            <p className="mb-0 text-white " style={{ whiteSpace: "nowrap" }}>
              Log out
            </p>
            <img src="https://cdn-icons-png.flaticon.com/128/10609/10609328.png" className="editIcon" style={{height:"19px"}}></img>
          </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
