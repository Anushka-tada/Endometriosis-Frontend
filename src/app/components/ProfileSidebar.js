// import React from 'react'

// const ProfileSidebar = () => {
//   return (
//     <div>
//       <h1 className="text-center mb-3">Profile</h1>

//           <div  className="border d-flex gap-3 p-1 mb-4 bg-white "
//             style={{ borderRadius: "20px" }}
//           >
//             <div
//               className="bgPrimary px-5 py-3 text-white"
//               style={{ borderRadius: "18px" }}
//             >
//               <p className="mb-0 small-medium">Account Details</p>
//             </div>
//             <div className="px-5 py-3" style={{ borderRadius: "18px" }}>
//               <p className="mb-0 small-medium">Booking</p>
//             </div>
//             <div className="px-5 py-3" style={{ borderRadius: "18px" }}>
//               <p className="mb-0 small-medium">Reviews</p>
//             </div>
//             <div className="px-5 py-3" style={{ borderRadius: "18px" }}>
//               <p className="mb-0 small-medium">Log out</p>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default ProfileSidebar


"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const ProfileSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { name: "Account Details", path: "/profile" },
    { name: "Bookings", path: "/bookings" },
    { name: "Reviews", path: "/reviews" },
    { name: "Log out", path: "/logout" }, // you can change this later
  ];

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <div>
      <h1 className="text-center mb-3">Profile</h1>

      <div
        className=" d-flex gap-3 p-1 mb-4 bg-white profile-options" 
        style={{ borderRadius: "20px", border:"1px solid #ebebeb"}}
      >
        {menu.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <div
              key={index}
              className={`px-lg-5 px-md-4 px-3 py-md-3 py-2 `}
              style={{
                borderRadius: "18px",
                cursor: "pointer",
                backgroundColor: isActive ? "#5F2D8B" : "transparent",
                color: isActive ? "white" : "black",
              }}
              onClick={() => handleClick(item.path)}
            >
              <p className="mb-0 small-medium profile-option">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSidebar;
