import React from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar"

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="profile-page">
        <div className="container py-4 ">
          <ProfileSidebar/>

          <div className="p-4 bg-white" style={{borderRadius:"20px" , border:"1px solid #f1f1f1"}}>

            <h2 className="small-h2">Reviews</h2>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
