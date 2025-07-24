import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const options = [
  {
    title: "Microwave Ablation Therapy",
    img: "/assets/option.png",
    para: "A minimally invasive technique using ultrasound-guided microwave energy to ablate adenomyotic tissue. This outpatient procedure offers rapid relief and has shown excellent outcomes for bleeding and pain — all while preserving reproductive potential.",
  },
  {
    title: "High-Intensity Focused Ultrasound (HIFU)",
    img: "/assets/option.png",
    para: "A non-invasive technique that uses focused ultrasound waves to thermally destroy adenomyotic tissue. No incisions, no downtime.",
  },
  {
    title: "Radio- frequency Ablation (RFA)",
    img: "/assets/option.png",
    para: "Precise heat-based destruction of adenomyosis nodules, with minimal impact on surrounding tissue.",
  },
  {
    title: "Adenomyo-mectomy",
    img: "/assets/option.png",
    para: "In select cases, surgical excision of focal adenomyosis while maintaining the uterine structure.",
  },
  {
    title: "Hormonal Modulation",
    img: "/assets/option.png",
    para: "Customized use of IUDs, GnRH antagonists, or SPRMs to control symptoms while preserving fertility and cycle function.",
  },
];

const ESSIPoints = [
  "Founders of the world’s first international adenomyosis center",
  "Global leaders in fertility, endometriosis, and uterine preservation",
  "Advanced imaging with MUSA criteria",
  "Microwave ablation experts",
  "Comprehensive, compassionate, and personalized care",
];

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      {/* herosection */}
      <div className="container py-5 mb-sm-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 order-lg-1 order-2">
            <h1 className="mb-4">
              The Adenomyosis <br /> Center at ESSI
            </h1>

            <p className="small-medium ">
              The Adenomyosis Center at ESSI is the world’s first international
              hub fully dedicated to the diagnosis and treatment of adenomyosis,
              offering advanced, uterus-preserving solutions tailored to each
              individual.
            </p>

            <p className="small-medium mb-md-5">
              With flagship centers in New York and Europe, and California
              opening soon, we are proud to deliver truly global care grounded
              in surgical precision, fertility expertise, and compassionate
              support. Whether you’re struggling with heavy periods, severe
              pelvic pain, or challenges with fertility — you do not have to
              choose between relief and your uterus.
            </p>
          </div>

          <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
            <img
              src="/assets/E_surgery/herosection.png"
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      {/* what is adenomyosis */}

      <div className="bg-white py-5">
        <div className="container">
          <h1>
            {" "}
            What is{" "}
            <span className="tilt tilt-primary text-white mb-4">
              Adenomyosis?
            </span>
          </h1>

          <p className="small-bold text-black mb-5">
            Adenomyosis is a chronic, benign uterine condition defined by the
            presence of glandular and stromal tissue within the myometrium (the
            muscular wall of the uterus). These glands are similar to—but
            biologically distinct from—endometrial tissue, and their presence
            leads to:
          </p>

          <div className="mapping-points mb-5">
            <div className="d-flex gap-3 mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">Chronic inflammation</p>
            </div>
            <div className="d-flex gap-3  mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">
                Myometrial thickening and fibrosis
              </p>
            </div>
            <div className="d-flex gap-3 mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">
                Increased uterine vascularity and nerve growth
              </p>
            </div>
          </div>

          <p className="medium-text mb-4 ">
            These changes cause hallmark symptoms, including:
          </p>

          <div className="surgery-points mb-5">
            <div className="d-flex gap-3 mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">
                Heavy or prolonged menstrual bleeding
              </p>
            </div>
            <div className="d-flex gap-3  mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">Severe cramps</p>
            </div>
            <div className="d-flex gap-3 mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">Pelvic pain and pressure</p>
            </div>
            <div className="d-flex gap-3 mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">Pain with intercourse</p>
            </div>
            <div className="d-flex gap-3 mb-sm-3 mb-2">
              <img src="/assets/hand_Icon.svg" className="handIcon"></img>
              <p className="medium-text mb-0">
                Infertility or recurrent implantation failure
              </p>
            </div>
          </div>

          <p className="medium-text textPrimary">
            Adenomyosis has historically been misunderstood and underdiagnosed —
            but at ESSI, we’re changing that.
          </p>
        </div>
      </div>

      {/* Experts in Fertility. Leaders in Diagnosis. */}
      <div className="container py-5">
        <h2 className="text-center">Experts in Fertility.</h2>
        <h1 className="text-center mb-5">Leaders in Diagnosis.</h1>

       <div className="row">
         <div className="col-md-6 col-12">
              <p className="para">
          ESSI isn’t just a surgical center — it’s also a global leader in
          fertility care, and that makes us uniquely skilled at identifying and
          treating adenomyosis, even in subtle or early forms.
        </p>

        <p className="para mb-4">
          We use the MUSA (Morphological Uterus Sonographic Assessment) criteria
          for expert diagnosis via high-resolution transvaginal ultrasound. This
          international standard allows us to detect signs like:
        </p>

        <div>
          <div className="d-flex gap-3 mb-sm-3 mb-2">
            <img src="/assets/hand_Icon.svg" className="handIcon"></img>
            <p className="medium-text textPrimary mb-0">Myometrial cysts</p>
          </div>
          <div className="d-flex gap-3  mb-sm-3 mb-2">
            <img src="/assets/hand_Icon.svg" className="handIcon"></img>
            <p className="medium-text textPrimary mb-0">Asymmetrical thickening</p>
          </div>
          <div className="d-flex gap-3 mb-sm-3 mb-2">
            <img src="/assets/hand_Icon.svg" className="handIcon"></img>
            <p className="medium-text textPrimary mb-0">Hyperechoic islands</p>
          </div>
           <div className="d-flex gap-3 mb-sm-3 mb-2">
            <img src="/assets/hand_Icon.svg" className="handIcon"></img>
            <p className="medium-text textPrimary mb-0">Interrupted junctional zone</p>
          </div>
          <div className="d-flex gap-3  mb-sm-3 mb-2">
            <img src="/assets/hand_Icon.svg" className="handIcon"></img>
            <p className="medium-text textPrimary mb-0">Fan-shaped shadowing</p>
          </div>
          <div className="d-flex gap-3 mb-sm-4 mb-2">
            <img src="/assets/hand_Icon.svg" className="handIcon"></img>
            <p className="medium-text textPrimary mb-0">Globular uterine shape</p>
          </div>
        </div>
         </div>

          <div className="col-md-6 col-12 d-flex justify-content-md-end  justify-content-center">
            <img src="/assets/option.png" className="img-fluid"></img>
          </div>
       </div>

        <p className="small-bold">Our fertility and imaging expertise ensures that nothing gets missed, especially in cases where adenomyosis coexists with endometriosis or fibroids</p>
      </div>

      {/* Uterus-Preserving Treatment Options */}

      <div className="bg-white py-5 ">
       <div className="container ">
           <h1 className="mb-4 text-center">Uterus-Preserving Treatment Options</h1>
          <div className="row justify-content-center">
          { options.map((option , index) => (
             <div className="col-lg-4 col-sm-6 col-12 p-3" key={index}>
              <div className="option-card p-sm-4 p-3 boxShadow h-100"> 
                 <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
                      {index + 1}
                    </h2>
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src={option.img} className="img-fluid" style={{width:"60%"}}></img>
                   <h3 className="medium-text">{option.title}</h3>
                   <p className="para">{option.para}</p>
                      </div>
              </div>
           </div>
          ))
          }
       </div>
       </div>
      </div>

      {/* why ESSI */}

      <div className="container d-flex flex-column align-items-center my-5 pb-sm-5">
        <h1 className="mb-4 pb-2">
          Why Choose <span className="tilt tilt-secondary">ESSI</span>
        </h1>

        <div className=" d-flex gap-3 flex-wrap justify-content-center">
          {ESSIPoints.map((point, index) => (
            <div
              className="whyESSIPoint boxShadow p-sm-4 p-3 text-center py-md-5 py-4 "
              key={index}
            >
              <p className="small-bold text-white">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ready for relief */}

      <div className="bg-white py-5">
        <div className="container">
          <div className="row mb-sm-5 align-items-center">
            <div className="col-md-6 col-12">
              <h1 className="mb-4">Ready for Relief? </h1>

              <p className="small-bold ">
                You deserve more than symptom management — you deserve an expert
                diagnosis and real treatment options that preserve your body and
                your future.
              </p>

              <p className="small-bold  mb-5">
                Let us help you take the first step toward clarity, comfort, and
                uterine preservation.
              </p>

              <div
                className="d-flex gap-3  bookButton p-2 px-3 mb-3 mb-md-0"
                style={{ width: "fit-content" }}
              >
                <p className="mb-0  text-white">Register for a Consultation</p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: "15px" }}
                ></img>
              </div>
            </div>

            <div className="col-md-6 col-12 p-md-5">
              <img
                src="/assets/relief.jpg"
                className="img-fluid"
                style={{ borderRadius: "20px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
