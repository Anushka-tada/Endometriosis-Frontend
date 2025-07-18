import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  {
    name: "Accurate Diagnosis",
    img: "/assets/E_mapping/stethoscope.svg",
    desc: "Precise identification of endometriotic lesions",
    color: "rgba(255, 121, 230, 0.20)",
  },
  {
    name: "Optimized Surgical Plan",
    img: "/assets/E_mapping/plan.svg",
    desc: "Plan the most appropriate surgical approach, reducing complications",
    color: "rgba(64, 233, 172, 0.20)",
  },
  {
    name: "Precision Excision",
    img: "/assets/E_mapping/precision.svg",
    desc: "Complete removal of lesions, including deep infiltrating endometriosis",
    color: "rgba(95, 45, 139, 0.20)",
  },
  {
    name: "Personalized Care",
    img: "/assets/E_mapping/nurse.svg",
    desc: "Tailored treatment strategies based on patient needs and lesion characteristics",
    color: "rgba(255, 176, 6, 0.20)",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
        {/* hero section */}
        <div className="container py-sm-5 pb-0 pt-0">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2"> 
                <h1 className=" mb-4 text-start">
                  Endometriosis Mapping
                </h1>

              <p className="medium-text mb-4 text-start">
                ESSI combines advanced imaging techniques with a pioneering
                mapping process to create precise endometriosis maps. This way,
                both the patient and surgeon know what to expect.
              </p>
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
              <img
                src="/assets/E_mapping/herosection.png"
                className="img-fluid mb-lg-0 mb-4"
              ></img>
            </div>
          </div>
        </div>

        {/* Treatment Guide */}
        <div className="bg-white py-sm-5 pt-5 pb-4">
          <div className="container ">
            <h2 className="mb-2">Endometriosis Mapping Creates a</h2>
            <h1>
              <span className="tilt tilt-primary text-white mb-5">
                Treatment
              </span>{" "}
              Guide
            </h1>

            <p className="para text-black mb-4 pb-2">
              Endometriosis is a chronic disease where tissue that resembles the
              uterine lining grows in other bodily locations, causing pain,
              infertility, and other symptoms. Similar to cancer surgery, the
              goal of endometriosis surgery is to remove all of the abnormal
              tissue in the hopes that it will not regrow and cause a relapse of
              symptoms.
            </p>

            <p className="para text-black mb-5">
              Endometriosis mapping uses imaging techniques to chart the
              location(s), size, and depth of endometrial lesions in the
              patient’s body. This helps the surgeon properly diagnose the
              severity and forms of endometriosis they are treating. Mapping is
              particularly useful for excision of deep infiltrating
              endometriosis (DIE) and lesions that are present in multiple
              locations.
            </p>

            <p className="medium-text">Plan Ahead with Knowledge:</p>

            <div className="mapping-points mb-5">
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg" className="handIcon"></img>
                <p className="medium-text mb-0">Size and depth of lesions</p>
              </div>
              <div className="d-flex gap-3  mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">
                  Specific location(s) of lesions
                </p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Endometriosis severity</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">
                  Identify deep infiltrating endometriosis
                </p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">
                  Identify other affected organs and structures
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-sm-5 pt-4 pb-5">
          <h2 className="text-sm-center text-start" >Mapping is Guided by</h2>
          <h1 className="text-sm-center text-start mb-3">Your Endometriosis Symptoms</h1>
          <p className="para text-dark mx-md-5 px-md-5 text-sm-center text-start">
            Your ESSI doctor will take into account your symptoms and any
            previous testing you may have completed to choose the appropriate
            method for endometriosis mapping.
          </p>

          <div className="row">
            <div className="col-md-6 col-12 p-3">
              <div className="mappingCard1 p-sm-5 p-3 d-flex flex-column align-items-center text-center h-100">
                <img
                  src="/assets/E_mapping/magnetic.png"
                  className="img-fluid mb-4"
                ></img>
                <h2 className="mb-3">Magnetic Resonance Imaging</h2>
                <p className="para text-dark mb-0">
                  Magnetic Resonance Imaging (MRI) is a non-invasive technique
                  that creates detailed images of the internal landscape of the
                  body through magnetic fields and radio waves. Endometriosis
                  Surgical Specialists International may use MRI scans to help
                  build your endometriosis map.Magnetic Resonance Imaging (MRI)
                  is a non-invasive technique that creates detailed images of
                  the internal landscape of the body through magnetic fields and
                  radio waves. Endometriosis Surgical Specialists International
                  may use MRI scans to help build your endometriosis map.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 p-3">
              <div className="mappingCard2 p-sm-5 p-3 d-flex flex-column align-items-center text-center h-100">
                <img
                  src="/assets/E_mapping/sonography.png"
                  className="img-fluid mb-4"
                ></img>
                <h2 className="mb-3">Ultrasonography Mapping</h2>
                <p className="para text-dark mb-0">
                  Ultrasound is another imaging technique that uses
                  high-frequency sound waves to generate internal images of the
                  body. Ultrasound devices can be used externally, or for the
                  highest quality pelvic images, might be inserted into the
                  vagina for transvaginal ultrasonography. This non-invasive and
                  safe procedure is commonly used in obstetrics, gynecology, and
                  other medical fields to assess organs, tissues, and fetal
                  development in real time. It also helps detect abnormalities,
                  guide biopsies, and monitor ongoing medical conditions with
                  minimal discomfort to the patient.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-sm-5 pt-4 pb-5">
          <div className="container">
            <h1 className="text-center mb-4">Benefits of Surgical Mapping</h1>

            <div className="row">
              {benefits.map((card, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 mb-2">
                  <div
                    className="boxShadow p-sm-3 px-4 p-2  text-center h-100"
                    key={index}
                    style={{ background: card.color, borderRadius: "20px" }}
                  >
                    <div className="d-flex flex-column align-items-center">
                        <h5 className="medium-text mb-3 mt-1">{card.name}</h5>
                      <img src={card.img} className="img-fluid mb-3" style={{ width: "50%" }} />
                      
                      <p className="para text-dark mb-3">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-5">
            <h2 className="text-center">Why you Should Choose</h2>
           <h1 className="text-center mb-md-5 mb-4">Endometriosis Surgical Specialists International</h1>
           <div className="row gx-0 justify-content-center">
             <div className="col-lg-6 col-12 d-flex justify-content-center pe-2">
                  <img src="/assets/E_mapping/why-choose.png" className="img-fluid mb-3"></img>
             </div>
             <div className="col-lg-6 col-12 ps-2"  >
               <div className="h-100 p-md-5 p-3" style={{backgroundColor: "rgba(78, 38, 117, 0.06)", borderRadius:"20px"}}>
                <p className="medium-text text-sm-start text-center">Endometriosis Surgical Specialists International (ESSI) has collectively helped tens of thousands of endometriosis patients. A successful surgery can help prevent the progression of endometriosis and significantly improve a patient’s quality of life. Our advanced mapping techniques and qualified surgeons ensure that your endometriosis surgery will be thorough and tailored to your specific needs. When you choose ESSI, you’re choosing your best chance at success.</p>
               </div>
             </div>
           </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
