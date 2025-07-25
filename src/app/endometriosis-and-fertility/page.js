import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      {/* herosection */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 order-lg-1 order-2">
            <h1 className="mb-4">Endometriosis and Infertility</h1>

            <p className="medium-text mb-5">
              Compelling research estimates that up to 50% of women who
              experience infertility, suffer from endometriosis. Multiple
              failures may often be the only symptom as Silent Endometriosis is
              well established. Going untreated, can contribute to continued
              failures and frustration. This is ESSI’s area of expertise. Our
              experienced surgeons at ESSI can diagnose and effectively treat
              this underlying cause of infertility. We are here to help you on
              your journey to successful pregnancy outcomes.
            </p>

            <div
              className="d-flex gap-sm-3 gap-1 bookButton p-2"
              style={{ width: "fit-content" }}
            >
              <img
                src="/assets/button_icon_1.svg"
                style={{ width: "16px" }}
              ></img>
              <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
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
              src="https://internationalendo.com/wp-content/uploads/2025/01/Group-35553.png"
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      {/* infertility cause */}

      <div className="bg-white py-5">
        <div className="container">
          <h1 className="text-center mb-4"> Infertility can be caused by <span className="tilt tilt-primary text-white">Silent </span> <span className="tilt tilt-secondary"> Endometriosis</span> </h1>

          <h2 className="mb-4 small-h2">What is Silent Endometriosis?</h2>
          <p className="para mb-5">Most people associate endometriosis with pain, but a large proportion of people with endometriosis do not experience any obvious symptoms. Silent endometriosis is when someone appears asymptomatic, but their fertility can still be impaired by endometriosis. This type of endometriosis can be difficult to diagnose since many doctors will not suspect endometriosis without symptoms, and the lesions might appear different from standard endometriosis cases.</p>

          <h2 className="mb-4 small-h2">Endometriosis and Infertility Facts</h2>
            
           <div className="mapping-points mb-5 ">
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg" className="handIcon"></img>
                <p className="medium-text mb-0">Approximately 10% of reproductive age women have endometriosis</p>
              </div>
              <div className="d-flex gap-3  mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Up to 50% of infertile women have endometriosis</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Infertility can be the only symptom of endometriosis</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Silent endometriosis may have atypical lesions that require a specialist to diagnose</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Surgery can improve fertility outcomes</p>
              </div>
            </div>

           <h2 className="mb-4 small-h2">How Does Endometriosis Cause Infertility?</h2> 
              
              <p className="para mb-5">There are many theories as to why some people – and not others – develop endometriosis. Likewise, there are multiple ways that endometriosis can impact fertility. Although scientists still have a lot to learn about endometriosis, here are some of the most supported theories why endometriosis causes infertility:</p>
             
             <div className=" surgery-points">
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg" className="handIcon"></img>
                <p className="medium-text mb-0">Mechanical factors (Adhesions and anatomical distortions)</p>
              </div>
              <div className="d-flex gap-3  mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Chronic systemic inflammation</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Diminished ovarian reserve</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Impaired ovulation and reduced oocyte quality</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Endometriosis-associated pain</p>
              </div>
               <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Decreased endometrial receptivity</p>
              </div>
              <div className="d-flex gap-3 mb-sm-3 mb-2">
                <img src="/assets/hand_Icon.svg"  className="handIcon"></img>
                <p className="medium-text mb-0">Association with adenomyosis</p>
              </div>
            </div>
             
        </div>
      </div>

      {/* Treating Infertility with Endometriosis Surgery */}
      <div className="container my-5">
        
        <div className="row align-items-center" >
            <div className="col-lg-6 col-12">
                  <h1 className=" mb-4">Treating <span className="tilt tilt-primary text-white">Infertility</span> with Endometriosis Surgery</h1>
                  
                 <p className="para">A recent Medical Review found that in a pooled group of 635 women diagnosed with endometriosis-related infertility, 337 (53%) achieved pregnancy after endometriosis surgery. A successful excision surgery will remove all of the abnormal tissue, which helps resolve symptoms and inflammation. Since most of the proposed ways that endometriosis causes infertility stem from mechanical and inflammatory pathways, it is logical that surgery can help improve fertility.</p>

                 <p className="para" >If your main goal for getting endometriosis surgery is to have a baby, it is important to work with the right surgeon who shares this goal with you. Endometriosis surgery can be paired with other treatments and assisted reproductive technology to maximize your chances of getting pregnant. Our group includes endometriosis surgeons who are also fertility specialists – so that you can get the help you need from a single source.</p>
            </div>
            <div className="col-lg-6 col-12 p-md-5" >
               <img src="https://internationalendo.com/wp-content/uploads/2025/01/a62419a3eef5ff522f71cf324454a302-1-1024x683.jpg" className="img-fluid" style={{borderRadius:"20px"}}></img>
            </div>
        </div>
      </div>

      <div className="location_herosection py-sm-5 py-4">
        <div className="container my-4">
          <h2 className="text-center mb-4">Why you should choose ESSI?</h2>
          <p className="small-medium text-center">
            A successful surgery can significantly improve a patient’s fertility
            and quality of life. Some of our surgeons specialize in both
            endometriosis and fertility, ensuring that your surgical and
            reproductive treatments are optimally aligned within a single
            medical center. When you choose IESS, you’re choosing your best
            chance at success.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
