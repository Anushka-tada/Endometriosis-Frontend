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
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// after adding password change option

"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import { LoggedDataContext } from "../context/context";
import {
  changePasswordServ,
  resetPasswordServ,
  userDetailsUpdateServ,
} from "../services/authentication.service";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

const Page = () => {
  const { loggedUserData, updateLoggedUserData } =
    useContext(LoggedDataContext);

  useEffect(() => {
    console.log("loggedUserData profile", loggedUserData);
  }, [loggedUserData]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: loggedUserData?.password,
    confirmPassword: loggedUserData?.password,
    _id: loggedUserData?._id,
    // token:loggedUserData?.token
  });

  useEffect(() => {
    if (loggedUserData) {
      setFormData({
        name: loggedUserData.name || "",
        email: loggedUserData.email || "",
        password: loggedUserData.password,
        _id: loggedUserData?._id,
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
    console.log("profile form data", formData);
  };

  const handleToggleEdit = async () => {
    if (isEditing) {
      // 🟡 Submit or update API call here
      console.log("Updated Data:", formData);
      try {
        const res = await userDetailsUpdateServ(
          formData,
          loggedUserData?.token
        );
        console.log("updated successfully", res);
        updateLoggedUserData(res?.data);
      } catch (err) {
        console.log("error in update", err);
      }
    }
    setIsEditing(!isEditing);
  };

  // password change code

  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isResetting, setIsResetting] = useState(false);

  const handleChangePasswordSubmit = async () => {
    if (!newPassword || !confirmPassword || !currentPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(""); // Clear error if valid
    setIsResetting(true);

    try {
      const res = await changePasswordServ(
        { currentPassword, newPassword, confirmPassword },
        loggedUserData?.token
      );
      toast.success(res?.message || "password updated successfully", {
        className: "custom-success-toast",
        icon: <FaCheckCircle color="#5F2D8B" />,
      });

      setShowPasswordFields(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setIsResetting(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "password updated failed", {
        className: "custom-error-toast",
        icon: <FaExclamationCircle color="#5F2D8B" />,
      });
      setIsResetting(false);
    }
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

            {/* change password */}

            {/* 🔘 Change Password Button */}
            <div
              className="d-flex gap-2 align-items-center mt-4"
              style={{ cursor: "pointer", color: "#8E44AD" }}
              onClick={() => setShowPasswordFields(!showPasswordFields)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/6357/6357059.png"
                style={{ height: "18px" }}
              />
              <p className="mb-0">Change Password</p>
            </div>

            {/* 🔐 Password Fields */}
            {showPasswordFields && (
              <div className="mt-3">
                <div className="row ">
                  <div className="mb-3 col-md-5 col-12 mb-sm-3">
                    <label className="small-medium mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="form-input py-3 px-3 w-100 text-black mb-0"
                    />
                  </div>

                  <div className="mb-3 col-md-5 col-12 mb-sm-3">
                    <label className="small-medium mb-2">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-input py-3 px-3 w-100 text-black mb-0"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-5 col-12 mb-sm-3">
                    <label className="small-medium mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-input py-3 px-3 w-100 text-black mb-0"
                    />
                  </div>
                </div>

                {message && <p className="text-danger mb-3">{message}</p>}

                <button
                  className="p-2 px-4 mt-2 logInBtn text-white"
                  onClick={handleChangePasswordSubmit}
                >
                  {isResetting ? "updating..." : "Update Password"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
