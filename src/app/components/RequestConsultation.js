"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import countryData from "country-telephone-data";
import PhoneInput from "react-phone-input-2";
import CountryPhoneInput from "./CountryPhoneInput";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

const RequestConsultation = () => {

  countries.registerLocale(enLocale);

  const countryOptions = Object.entries(countries.getNames("en", { select: "official" }));

  const [formData, setFormData] = useState({
    location: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatmentService: "",
    date: "",
    time: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    dob: "",
    history: "",
    diagnosed: false,
    gdpr: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="bg-white p-sm-5 p-3">
        <h1 className="mt-3 mb-4 text-md-start text-center">
          Request Consultation
        </h1>
        <p className="para text-dark mb-0">
          Fill out this form to request a consultation with a member our medical
          team
        </p>

        <p
          className="para "
          style={{ fontSize: "18px", fontWeight: "400", color: "#F00" }}
        >
          Health Insurance Information
        </p>

        <h5 className="medium-text mt-4 mb-1">
          Already Been Diagnosed with Endometriosis?
        </h5>
        <p className="para text-black">
          If you've already been diagnosed with Endometriosis and need surgery,
          please click below.
        </p>

        <div className="d-flex gap-3 align-items-center ms-2 mb-4 pb-2 ">
          <input
            type="checkbox"
            name="diagnosed"
            className="custom-checkbox"
            checked={formData.diagnosed}
            onChange={handleCheckboxChange}
          />
          <p className="para text-black mb-0">
            <span
              className="fw-sm-medium fw-normal para text-black"
              style={{ fontSize: "18px" }}
            >
              Fast Track Me -
            </span>{" "}
            I've been diagnosed with Endometriosis and need surgery.
          </p>
        </div>

        <h5 className="medium-text mb-0">Select Desired Location</h5>
        <p className="para text-dark">
          This would be the location you'd most prefer to have surgery, if
          deemed necessary by our Medical Team.
        </p>

        <div className="row">
          <div className="col-md-6 col-12">
            <select className="form-select py-3 px-3"
            name="location"
            value={formData?.location}
            onChange={handleChange}>
              <option value="">- select -</option>
              <option value="New York">New York</option>
              <option value="Miami">Miami</option>
              <option value="California">California</option>
              <option value="Italy">Italy</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
        </div>

        <div className="row align-items-center mt-4">
          <div className="col-lg-6 col-12">
            <div>
              <h2 className="mb-4 mt-2 text-md-start text-center">
                Tell Us About Yourself
              </h2>
              <div className="row">
                <div className="col-6 mb-4">
                  <input
                    className="form-input py-3 px-3 w-100"
                  type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                  ></input>
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
                </div>

                <div className="col-6 mb-4">
                 <CountryPhoneInput
                value={formData.phone}
                onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
              />
                </div>

                <div className="col-12 mb-4">
                   <select
                className="form-select py-3 px-3"
                name="treatmentService"
                value={formData.treatmentService}
                onChange={handleChange}
              >
                    <option value="">Treatment Services</option>
                    <option value="endometriosis mapping">Endometriosis Mapping</option>
                    <option value="endometriosis surgery">Endometriosis Surgery</option>
                    <option value="endometriosis and infertility">
                      Endometriosis and Infertility
                    </option>
                    <option value="thoracic and diaphragamatic endometriosis">
                      Thoracic and Diaphragmatic Endometriosis
                    </option>
                    <option value="adolescent endometriosis">Adolescent Endometriosis</option>
                    <option value="adenomyosis">Adenomyosis</option>
                  </select>
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
              />
                </div>
                <div className="col-6 mb-4">
                 <input
                className="form-input py-3 px-3 w-100"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Time"
              />
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address Only"
              />
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State / Province"
              />
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip Code"
              />
                </div>

                <div className="col-6 mb-4">
                   <select
                className="form-select py-3 px-3"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                 <option value="">Select Country</option>
                   {countryOptions.map(([code, name]) => (
    <option key={code} value={name}>
      {name}
    </option>
  ))}
                  </select>
                </div>
                <div className="col-6 mb-4">
                  <input
                className="form-input py-3 px-3 w-100"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date Of Birth"
              />
                </div>
                <div className="col-12 mb-4">
                  <textarea
                className="form-input py-3 px-3 w-100"
                name="history"
                value={formData.history}
                onChange={handleChange}
                rows={3}
                placeholder="Please Provide a Brief History about your Situation..."
              />
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="col-lg-6 col-12 "
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/homepage/Request_Consultation.png"
                alt="Request Consultation"
              className="img-fluid d-lg-block d-none"
            ></img>
          </motion.div>
        </div>

        <div className="d-flex gap-3 align-items-center ms-2 mb-3 ">
          <input
          type="checkbox"
          name="gdpr"
          className="custom-checkbox"
          checked={formData.gdpr}
          onChange={handleCheckboxChange}
        />
          <p className="small-bolder mb-0">GDPR Agreement</p>
        </div>
        <p className="para text-dark mb-5">
          {" "}
          I consent to ESSI securely storing and processing the information I
          provide in this form for the purposes related to my patient care.{" "}
        </p>

        {/* <div className="d-flex gap-3 align-items-center ms-2 mb-3 ">
              <input type="checkbox" className="custom-checkbox" />
              <p className="small-bolder mb-0">
               SMS Communication Consent
                </p>
            </div>
             <p className="para text-dark mb-5"> I consent to receive appointment reminders and communications related to my patient care via SMS. Message frequency may vary. I understand I can reply STOP to unsubscribe at any time. </p> */}

        <p className="para text-dark mb-4">
          <span className="important" style={{ color: "#F00" }}>
            IMPORTANT
          </span>{" "}
          Do not make multiple consultation requests. This will delay our team
          from reaching out to you.
        </p>

        <div
          className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
          style={{ width: "fit-content" }}
          onClick={handleSubmit}
        >
          <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
            Submit
          </p>
          <img src="/assets/white_arrow.svg" style={{ width: "15px" }}></img>
        </div>
      </div>
    </div>
  );
};

export default RequestConsultation;
