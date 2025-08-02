"use client";
import React, { useEffect, useState , useContext} from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import { bookingListServ } from "../services/booking.service";
import { LoggedDataContext } from "../context/context";
import { useRouter } from "next/navigation";

const page = () => {

     const router = useRouter();

  const { loggedUserData } = useContext(LoggedDataContext);

  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    try {
      const res = await bookingListServ(loggedUserData?._id);
      console.log("Bookings fetched:", res);
      setBookings(res?.data || []);
    } catch (err) {
      console.log("Error fetching bookings:", err);
    }
  };

  useEffect(() => {
    getBookings();
  }, [loggedUserData]);

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
            <h2 className="small-h2 mb-3">Bookings</h2>
            <div
              className="row mb-3"
              style={{ borderBottom: "1px solid #e2dede" }}
            >
              {/* <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                            <p className="small-medium">Patient name</p>
                       </div> */}
              <div className="col-3 d-flex justify-content-center d-flex justify-content-center">
                <p className="small-medium">Treatment service</p>
              </div>
              <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                <p className="small-medium">Date & Time</p>
              </div>
              <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                <p className="small-medium">Location</p>
              </div>
              <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                <p className="small-medium">Booking Status</p>
              </div>
              <div className="col-2 d-flex justify-content-center d-flex justify-content-center">
                <p className="small-medium">Actions</p>
              </div>
            </div>

            {bookings.length === 0 ? (
              <p className="para text-center mt-3">No bookings found.</p>
            ) : (
              bookings.map((booking, index) => (
                <div
                  className="row d-flex booking py-3 align-items-center mb-3"
                  key={index}
                  style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
                >
                  {/* <div className="col-2 d-flex justify-content-center">
                    <p className="para text-black">{booking?.firstName || "N/A"}</p>
                  </div> */}
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <p className="para text-black text-center mb-0">
                      {booking?.treatmentService || "N/A"}
                    </p>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <p className="para text-black mb-0">
                      {booking?.date} | {booking?.time}
                    </p>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <p
                      className="para text-black mb-0"
                      style={{ fontWeight: "500" }}
                    >
                      {booking?.location || "N/A"}
                    </p>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <p
                      className="para textPrimary mb-0"
                      style={{ fontWeight: "500" }}
                    >
                      {booking?.status || "Pending"}
                    </p>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <p
                    onClick={() =>
                                router.push("/appointment/" + booking?._id)
                              }
                      className="para px-3 py-2 mb-0 textPrimary viewDetails"
                      style={{ height: "fit-content", cursor:"pointer"}}
                    >
                      View Details
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
