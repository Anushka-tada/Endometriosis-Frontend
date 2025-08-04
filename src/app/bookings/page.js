"use client";
import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import { bookingListServ } from "../services/booking.service";
import { LoggedDataContext } from "../context/context";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {
  const router = useRouter();

  const { loggedUserData } = useContext(LoggedDataContext);

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const getBookings = async () => {
    try {
      setIsLoading(true);
      const res = await bookingListServ(loggedUserData?._id);
      console.log("Bookings fetched:", res);
      setBookings(res?.data || []);
      setIsLoading(false);
    } catch (err) {
      console.log("Error fetching bookings:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (loggedUserData?._id) {
      console.log("logged data in booking", loggedUserData);
      getBookings();
    }
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
              className="row mb-3 d-md-flex d-none"
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

            {/* {bookings.length === 0 ? (
              <p className="para text-center mt-3">No bookings found.</p>
            ) : (
              bookings.map((booking, index) => (
                <div
                  className="row d-flex booking py-3 align-items-center mb-3"
                  key={index}
                  style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
                >
                  
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
            )} */}

            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="row  booking py-3 align-items-center mb-3 d-md-flex d-none"
                  key={index}
                  style={{ backgroundColor: "#fff", borderRadius: "10px" }}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={100} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={80} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={80} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={80} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={30} width={90} />
                  </div>
                </div>
              ))
            ) : bookings.length === 0 ? (
              <div className="text-center py-5  d-md-block d-none ">
                <p className="text-muted ">No booking of this user </p>
              </div>
            ) : (
              bookings.map((booking, index) => (
                <div
                  className="row booking py-3 align-items-center mb-3 d-md-flex d-none"
                  key={index}
                  style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
                >
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
                      style={{ height: "fit-content", cursor: "pointer" }}
                    >
                      View Details
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* mobile view */}

            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div className="row d-flex booking py-3 align-items-center mb-3 d-md-none d-block"
                  key={index}
                  style={{ backgroundColor: "#fff", borderRadius: "10px" }}
                >
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={100} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={80} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={80} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={20} width={80} />
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <Skeleton height={30} width={90} />
                  </div>
                </div>
              ))
            ) : bookings.length === 0 ? (
              <div className="text-center py-5   d-md-none d-block ">
                <p className="text-muted ">No booking of this user </p>
              </div>
            ) : (
             bookings.map((booking, index) => (
  <div
    className="d-md-none d-block bg-white shadow-sm p-3 mb-3"
    key={index}
    style={{ borderRadius: "12px" }}
  >
    <p className="para text-black mb-2 fw-bold text-center">
      {booking?.treatmentService || "N/A"}
    </p>

    <div className="d-flex justify-content-between align-items-center mb-2">
      <p className="para text-muted mb-0">Date & Time:</p>
      <p className="para text-black mb-0 text-end">
        {booking?.date} | {booking?.time}
      </p>
    </div>

    <div className="d-flex justify-content-between align-items-center mb-2">
      <p className="para text-muted mb-0">Location:</p>
      <p className="para text-black mb-0">{booking?.location || "N/A"}</p>
    </div>

    <div className="d-flex justify-content-between align-items-center mb-2">
      <p className="para text-muted mb-0">Status:</p>
      <p className="para textPrimary fw-semibold mb-0">
        {booking?.status || "Pending"}
      </p>
    </div>

    <div className="text-center mt-2">
      <p
                      onClick={() =>
                        router.push("/appointment/" + booking?._id)
                      }
                      className="para px-3 py-2 mb-0 textPrimary viewDetails"
                      style={{ height: "fit-content", cursor: "pointer" }}
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
