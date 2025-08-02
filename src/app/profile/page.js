"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import { LoggedDataContext } from "../context/context";
import {userDetailsUpdateServ} from "../services/authentication.service"

const Page = () => {
  const { loggedUserData , updateLoggedUserData  } = useContext(LoggedDataContext);

  useEffect(() => {
  console.log("loggedUserData profile", loggedUserData);
}, [loggedUserData]);


  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
     password:loggedUserData?.password,
        confirmPassword: loggedUserData?.password,
        _id:loggedUserData?._id,
        // token:loggedUserData?.token
  });

  useEffect(() => {
    if (loggedUserData) {
      setFormData({
        name: loggedUserData.name || "",
        email: loggedUserData.email || "",
        password:loggedUserData.password,
        _id:loggedUserData?._id,
        confirmPassword: loggedUserData?.password,
        //  token:loggedUserData?.token
        
      });
    }
  }, [loggedUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("profile form data" , formData)
  };

  const handleToggleEdit = async () => {
    if (isEditing) {
      // 🟡 Submit or update API call here
      console.log("Updated Data:", formData);
       try{
        const res = await userDetailsUpdateServ(formData , loggedUserData?.token);
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


// after adding password change option

// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import ProfileSidebar from "../components/ProfileSidebar";
// import { LoggedDataContext } from "../context/context";
// import {userDetailsUpdateServ} from "../services/authentication.service"

// const Page = () => {
//   const { loggedUserData , updateLoggedUserData  } = useContext(LoggedDataContext);

//   useEffect(() => {
//   console.log("loggedUserData profile", loggedUserData);
// }, [loggedUserData]);


//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//      password:loggedUserData?.password,
//         confirmPassword: loggedUserData?.password,
//         _id:loggedUserData?._id,
//         // token:loggedUserData?.token
//   });

//   useEffect(() => {
//     if (loggedUserData) {
//       setFormData({
//         name: loggedUserData.name || "",
//         email: loggedUserData.email || "",
//         password:loggedUserData.password,
//         _id:loggedUserData?._id,
//         confirmPassword: loggedUserData?.password,
//         //  token:loggedUserData?.token
        
//       });
//     }
//   }, [loggedUserData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     console.log("profile form data" , formData)
//   };

//   const handleToggleEdit = async () => {
//     if (isEditing) {
//       // 🟡 Submit or update API call here
//       console.log("Updated Data:", formData);
//        try{
//         const res = await userDetailsUpdateServ(formData , loggedUserData?.token);
//         console.log("updated successfully" , res);
//          updateLoggedUserData(res?.data);
//        }
//        catch(err){
//         console.log("error in update" , err)
//        }
       
//     }
//     setIsEditing(!isEditing);
//   };

//   const [showPasswordFields, setShowPasswordFields] = useState(false);
// const [passwordStep, setPasswordStep] = useState("current"); // "current" or "new"
// const [passwordForm, setPasswordForm] = useState({
//   currentPassword: "",
//   newPassword: "",
//   confirmPassword: "",
// });

// const handlePasswordChange = (e) => {
//   const { name, value } = e.target;
//   setPasswordForm((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };


// const handleChangePasswordSubmit = async () => {
//   if (passwordStep === "current") {
//     // 🔒 Validate current password
//     if (passwordForm.currentPassword !== loggedUserData.password) {
//       alert("Current password is incorrect.");
//       return;
//     }
//     setPasswordStep("new"); // go to next step
//     return;
//   }

//   if (passwordStep === "new") {
//     if (passwordForm.newPassword !== passwordForm.confirmPassword) {
//       alert("New and confirm password do not match.");
//       return;
//     }

//     // 🔁 Update API
//     const updatedData = {
//       ...formData,
//       password: passwordForm.newPassword,
//       confirmPassword: passwordForm.confirmPassword,
//     };

//     try {
//       const res = await userDetailsUpdateServ(updatedData, loggedUserData?.token);
//       updateLoggedUserData(res?.data);
//       alert("Password updated successfully!");
//       setShowPasswordFields(false);
//       setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
//       setPasswordStep("current");
//     } catch (err) {
//       console.log("Error updating password", err);
//       alert("Something went wrong.");
//     }
//   }
// };


//   return (
//     <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
//       <Navbar />

//       <div className="profile-page pageOuter">
//         <div className="container py-4 ">
//           <ProfileSidebar />

//           <div
//             className="p-4 bg-white"
//             style={{ borderRadius: "20px", border: "1px solid #f1f1f1" }}
//           >
//             <h2 className="small-h2">User Details</h2>

//             {/* Name */}
//             <div className="row mt-4">
//               <div className="col-md-5 col-12 mb-sm-3 mb-2">
//                 <label className="small-medium mb-2">Name</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="form-input py-3 px-3 w-100 text-black mb-0"
//                   />
//                 ) : (
//                   <p className="form-input py-3 px-3 w-100 text-black mb-0">
//                     {formData.name}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Email */}
//             <div className="row">
//               <div className="col-md-5 col-12 mb-sm-3 mb-2">
//                 <label className="small-medium mb-2">Email</label>
//                 {isEditing ? (
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="form-input py-3 px-3 w-100 text-black mb-0"
//                   />
//                 ) : (
//                   <p className="form-input py-3 px-3 w-100 text-black mb-0">
//                     {formData.email}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Edit / Update Button */}
//             <div
//               className="d-flex gap-sm-3 gap-1 align-items-center bookButton p-2 px-4 mb-3"
//               style={{ width: "fit-content", cursor: "pointer" }}
//               onClick={handleToggleEdit}
//             >
//               <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
//                 {isEditing ? "Update" : "Edit"}
//               </p>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/10573/10573605.png"
//                 className="editIcon"
//                 style={{ height: "19px" }}
//               />
//             </div>

//             {/* change password */}

//          {/* 🔘 Change Password Button */}
// <div
//   className="d-flex gap-2 align-items-center mt-4"
//   style={{ cursor: "pointer", color: "#8E44AD" }}
//   onClick={() => setShowPasswordFields(!showPasswordFields)}
// >
//   <img src="https://cdn-icons-png.flaticon.com/128/2913/2913139.png" style={{ height: "18px" }} />
//   <p className="mb-0">Change Password</p>
// </div>

// {/* 🔐 Password Fields */}
// {showPasswordFields && (
//   <div className="mt-3">
//     {passwordStep === "current" && (
//       <div className="mb-3">
//         <label className="small-medium mb-2">Current Password</label>
//         <input
//           type="password"
//           name="currentPassword"
//           value={passwordForm.currentPassword}
//           onChange={handlePasswordChange}
//           className="form-input py-3 px-3 w-100 text-black mb-0"
//         />
//       </div>
//     )}

//     {passwordStep === "new" && (
//       <>
//         <div className="mb-3">
//           <label className="small-medium mb-2">New Password</label>
//           <input
//             type="password"
//             name="newPassword"
//             value={passwordForm.newPassword}
//             onChange={handlePasswordChange}
//             className="form-input py-3 px-3 w-100 text-black mb-0"
//           />
//         </div>
//         <div className="mb-3">
//           <label className="small-medium mb-2">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={passwordForm.confirmPassword}
//             onChange={handlePasswordChange}
//             className="form-input py-3 px-3 w-100 text-black mb-0"
//           />
//         </div>
//       </>
//     )}

//     <button
//       className="p-2 px-4 mt-2 logInBtn text-white"
//       onClick={handleChangePasswordSubmit}
//     >
//       {passwordStep === "current" ? "Verify Current Password" : "Update Password"}
//     </button>
//   </div>
// )}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

