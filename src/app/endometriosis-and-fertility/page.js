import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      {/* herosection */}
      <div >
        {/* herosection */}
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <h1 className="mb-4">Treating Endometriosis</h1>

              <p className="medium-text mb-5">
                An endometriosis treatment plan typically consists of a
                combination of surgical, pharmaceutical and/or lifestyle
                approaches. While medications and lifestyle changes can help
                manage endometriosis symptoms, a patient’s best chance at
                achieving lasting relief is through complete excision of
                endometriosis lesions.
              </p>
 
                <div className="d-flex gap-sm-3 gap-1 bookButton p-2" style={{width:"fit-content"}}>
                  <img
                    src="/assets/button_icon_1.svg"
                    style={{ width: "16px" }}
                  ></img>
                  <p
                    className="mb-0 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                   Request Surgery
                  </p>
                  <img
                    src="/assets/white_arrow.svg"
                    style={{ width: "15px" }}
                  ></img>
                </div>
             
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
              <img
                src="/assets/E_surgery/herosection.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* the essi approach */}
      <div className="bg-white py-5">
        <div className="container">
        <h2 className="mb-3">The ESSI Approach to</h2>
        <h1><span className="tilt tilt-primary text-white mb-4">Treating</span>  Endometriosis</h1>

       <p className="para text-black">When it comes to endometriosis surgery, we believe that your first surgery is the most important – and hopefully last – endometriosis surgery you will need. Our goal is full excision of your endometriosis lesions, which maximizes the chance that abnormal tissue will not grow back. On the other hand, when ablation (heat destruction) is used or an excision is incomplete, any remaining cells can multiply and lead to a rapid return of endometriosis symptoms.</p>

       <p className="para text-black" >Endometriosis Surgical Specialists International (ESSI) employs sophisticated mapping techniques to create a surgical plan that includes the location(s) or your endometriosis as well as the size and depth of the lesions. Knowing the depth of lesions is especially important when a patient has deep infiltrating endometriosis, which often leaves roots when removed by inexperienced surgeons.</p>

       <p className="para text-black mb-5" >Your IESS surgeon will use advanced laparoscopic methods to remove your endometriosis, utilizing Da Vinci robots and nerve-sparing technique when appropriate. Some ESSI surgeons also have multi-organ expertise, which means that even if you have endometriosis in multiple locations such as thoracic endometriosis, the surgery can be completed in one day by a single physician.</p>

       <p className="medium-text mb-4">The ESSI Surgical Advantage</p>

            <div className="mapping-points mb-5">
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg" className="handIcon"></img>
                <p className="medium-text mb-0">Mapping-based surgical plan</p>
              </div>
              <div className="d-flex gap-3  mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0"> Complete excision, not ablation  </p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Highly experienced team</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Multi-organ expertise</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Da Vinci robots </p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Nerve-sparing excision</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Minimally invasive procedure </p>
              </div>
            </div>

         <p className="medium-text mb-4 ">What to Expect during Surgery</p>

            <div className="surgery-points mb-5">
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg" className="handIcon"></img>
                <p className="medium-text mb-0">The patient will go under general anesthesia for laparoscopy.</p>
              </div>
              <div className="d-flex gap-3  mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">A few tiny incisions will be made on the abdomen and other locations depending on where the endometriosis is located.</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">A tiny camera (laparoscope) and surgical instruments will be inserted through the incisions.</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">The surgeon will use small surgical scissors to remove endometriosis lesions.</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Once excision is complete, the instruments are removed and incisions are closed with dissolvable stitches.</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Patient is monitored for a few hours after surgery and typically discharged the same day.</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">The laparoscopic surgery may last 1 to 6 hours depending on the scope of the patient’s endometriosis.</p>
              </div>
            </div>    


      </div>
      </div>

      {/* what to see this process vedio */}

      <div className="container pt-5 d-flex flex-column align-items-center">
       <h1 className="mb-5 text-center mt-3">Want to See This Process With Your Own Eyes?</h1>
       <img src="/assets/E_surgery/thumbnail_2.png" className="img-fluid"></img>
      </div>
      <Footer />
    </div>
  );
};

export default page;
