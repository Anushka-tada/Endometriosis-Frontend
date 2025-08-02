
"use client"
import React from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar"
import { LoggedDataContext } from '../context/context'
import { useContext } from 'react'
import { useRouter } from "next/navigation";


const page = () => {

   const router = useRouter();
    const { setLoggedUserData, updateLoggedUserData } = useContext(LoggedDataContext);

const handleLogut = () => {
     console.log("Logging out..."); 
         updateLoggedUserData(null);    
           localStorage.removeItem('user');
  sessionStorage.removeItem('user');
     console.log("Logged out...");    
    router.push("/login");
}

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
            <p className="mb-0 text-white " style={{ whiteSpace: "nowrap" }} onClick={handleLogut}>
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
