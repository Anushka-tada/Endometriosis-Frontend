"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import { LoggedDataContext } from "../context/context";
import {userDetailsUpdateServ} from "../services/authentication.service"

const Page = () => {
  const { loggedUserData , updateLoggedUserData  } = useContext(LoggedDataContext);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
     password:loggedUserData?.password,
        confirmPassword: loggedUserData?.password,
        id:loggedUserData?.id,
  });

  useEffect(() => {
    if (loggedUserData) {
      setFormData({
        name: loggedUserData.name || "",
        email: loggedUserData.email || "",
        password:loggedUserData.password,
        confirmPassword: loggedUserData?.password,
        id:loggedUserData?.id,
      });
    }
  }, [loggedUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleEdit = async () => {
    if (isEditing) {
      // 🟡 Submit or update API call here
      console.log("Updated Data:", formData);
       try{
        const res = await userDetailsUpdateServ(formData);
        console.log("updated successfully" , res);
         updateLoggedUserData(res?.data);
       }
       catch(err){
        console.log("error in update" , err)
       }
       
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="profile-page pageOuter">
        <div className="container py-4 ">
          <ProfileSidebar />

          <div
            className="p-4 bg-white"
            style={{ borderRadius: "20px", border: "1px solid #f1f1f1" }}
          >
            <h2 className="small-h2">User Details</h2>

            {/* Name */}
            <div className="row mt-4">
              <div className="col-md-5 col-12 mb-sm-3 mb-2">
                <label className="small-medium mb-2">Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input py-3 px-3 w-100 text-black mb-0"
                  />
                ) : (
                  <p className="form-input py-3 px-3 w-100 text-black mb-0">
                    {formData.name}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="row">
              <div className="col-md-5 col-12 mb-sm-3 mb-2">
                <label className="small-medium mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input py-3 px-3 w-100 text-black mb-0"
                  />
                ) : (
                  <p className="form-input py-3 px-3 w-100 text-black mb-0">
                    {formData.email}
                  </p>
                )}
              </div>
            </div>

            {/* Edit / Update Button */}
            <div
              className="d-flex gap-sm-3 gap-1 align-items-center bookButton p-2 px-4 mb-3"
              style={{ width: "fit-content", cursor: "pointer" }}
              onClick={handleToggleEdit}
            >
              <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                {isEditing ? "Update" : "Edit"}
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/10573/10573605.png"
                className="editIcon"
                style={{ height: "19px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
