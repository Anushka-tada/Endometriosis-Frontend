import React from 'react'

const RequestConsultation = () => {
  return (
    <div>
       <div className="bg-white p-sm-5 p-3">
            <h1 className="mt-3 mb-4 text-md-start text-center">Request Consultation</h1>
            <p className="para text-dark mb-0">
              Fill out this form to request a consultation with a member our
              medical team
            </p>

            <p className='para ' style={{ fontSize: "18px", fontWeight: "400", color: "#F00" }}>
              Health Insurance Information
            </p>

            <h5 className="medium-text mt-4 mb-1">
              Already Been Diagnosed with Endometriosis?
            </h5>
            <p className="para text-black">
              If you've already been diagnosed with Endometriosis and need
              surgery, please click below.
            </p>

            <div className="d-flex gap-3 align-items-center ms-2 mb-4 pb-2 ">
              <input type="checkbox" className="custom-checkbox" />
              <p className="para text-black mb-0">
                <span className="fw-sm-medium fw-normal para text-black" style={{ fontSize: "18px" }}>
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
                <select className="form-select py-3 px-3">
                  <option value="">- select -</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
            </div>

            <div className="row align-items-center mt-4">
              <div className="col-lg-6 col-12">
                <div>
                  <h2 className="mb-4 mt-2 text-md-start text-center">Tell Us About Yourself</h2>
                  <div className="row">
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="text"
                        placeholder="First Name "
                      ></input>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="text"
                        placeholder="Last Name"
                      ></input>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="email"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="number"
                        placeholder="Mobile Number"
                      ></input>
                    </div>
                    <div className="col-12 mb-4">
                      <select className="form-select py-3 px-3">
                        <option value="">Treatment Services</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                      </select>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type=""
                        placeholder="Date"
                      ></input>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="number"
                        placeholder="Time"
                      ></input>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="text"
                        placeholder="Street Address Only"
                      ></input>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="text"
                        placeholder="City"
                      ></input>
                    </div>
                    <div className="col-6 mb-4">
                       <select className="form-select py-3 px-3">
                        <option value="">State / Province</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                      </select>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="text"
                        placeholder="Zip Code"
                      ></input>
                    </div>

                    <div className="col-6 mb-4">
                       <select className="form-select py-3 px-3">
                        <option value="">Select Country</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                      </select>
                    </div>
                    <div className="col-6 mb-4">
                      <input
                        className="form-input py-3 px-3 w-100"
                        type="text"
                        placeholder="Date Of Birth"
                      ></input>
                    </div>
                     <div className="col-12 mb-4">
                      <textarea
                        className="form-input py-3 px-3 w-100"
                        type="text"
                        rows={3}
                        placeholder="Please Provide a Brief HIstory about your Situation..."
                      />
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <img src="/assets/homepage/Request_Consultation.png" className='img-fluid d-lg-block d-none'></img>
              </div>
            </div>


              <div className="d-flex gap-3 align-items-center ms-2 mb-3 ">
              <input type="checkbox" className="custom-checkbox" />
              <p className="small-bolder mb-0">
                GDPR Agreement
                </p>
            </div>
             <p className="para text-dark mb-5"> I consent to ESSI securely storing and processing the information I provide in this form for the purposes related to my patient care.  </p>

              <div className="d-flex gap-3 align-items-center ms-2 mb-3 ">
              <input type="checkbox" className="custom-checkbox" />
              <p className="small-bolder mb-0">
               SMS Communication Consent
                </p>
            </div>
             <p className="para text-dark mb-5"> I consent to receive appointment reminders and communications related to my patient care via SMS. Message frequency may vary. I understand I can reply STOP to unsubscribe at any time. </p>

             <p className="para text-dark mb-4"><span className="important" style={{color:"#F00"}}>IMPORTANT</span> Do not make multiple consultation requests. This will delay our team from reaching out to you.</p>

             <div className="d-flex gap-sm-3 gap-1 bookButton p-2" style={{width:"fit-content"}}>
                      <img
                        src="/assets/button_icon_1.svg"
                        style={{ width: "16px" }}
                      ></img>
                      <p
                        className="mb-0 text-white"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Book Appointment
                      </p>
                      <img
                        src="/assets/white_arrow.svg"
                        style={{ width: "15px" }}
                      ></img>
                    </div>
          </div>
    </div>
  )
}

export default RequestConsultation
