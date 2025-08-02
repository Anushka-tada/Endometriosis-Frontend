"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { LoggedDataContext } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

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

   const { loggedUserData} = useContext(LoggedDataContext);
  
    const router = useRouter();

     const  handleBtnClick = () => {
    if(loggedUserData){ 
      router.push("/appointment-form")
    }else{
      router.push("/login?redirect=/appointment-form");
    }
  }

  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="pageOuter">
        {/* herosection */}
        <div className="container py-sm-5 py-0 mb-sm-5">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6 col-12 order-lg-1 order-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4">
                The Adenomyosis <br /> Center at ESSI
              </h1>
              <p className="small-medium ">
                The Adenomyosis Center at ESSI is the world’s first
                international hub fully dedicated to the diagnosis and treatment
                of adenomyosis, offering advanced, uterus-preserving solutions
                tailored to each individual.
              </p>

              <p className="small-medium mb-md-5">
                With flagship centers in New York and Europe, and California
                opening soon, we are proud to deliver truly global care grounded
                in surgical precision, fertility expertise, and compassionate
                support...
              </p>
            </motion.div>
            <motion.div
              className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://internationalendo.com/wp-content/uploads/2025/04/adeno-2048x1536.png"
                className="img-fluid"
              />
            </motion.div>
          </div>
        </div>

        {/* what is adenomyosis */}
        <div className="bg-white py-5">
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              What is{" "}
              <span className="tilt tilt-primary text-white mb-4">
                Adenomyosis?
              </span>
            </motion.h1>

            <motion.p
              className="small-bold text-black mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Adenomyosis is a chronic, benign uterine condition defined by the
              presence of glandular and stromal tissue within the myometrium
              (the muscular wall of the uterus). These glands are similar to—but
              biologically distinct from—endometrial tissue, and their presence
              leads to:
            </motion.p>

            <div className="mapping-points mb-5">
              {[
                "Chronic inflammation",
                "Myometrial thickening and fibrosis",
                "Increased uterine vascularity and nerve growth",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="d-flex gap-3 mb-sm-3 mb-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  <img src="/assets/hand_Icon.svg" className="handIcon" />
                  <p className="medium-text mb-0">{text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="medium-text mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              These changes cause hallmark symptoms, including:
            </motion.p>

            <div className="surgery-points mb-5">
              {[
                "Heavy or prolonged menstrual bleeding",
                "Severe cramps",
                "Pelvic pain and pressure",
                "Pain with intercourse",
                "Infertility or recurrent implantation failure",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="d-flex gap-3 mb-sm-3 mb-2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                >
                  <img src="/assets/hand_Icon.svg" className="handIcon" />
                  <p className="medium-text mb-0">{text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="medium-text textPrimary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              Adenomyosis has historically been misunderstood and underdiagnosed
              — but at ESSI, we’re changing that.
            </motion.p>
          </motion.div>
        </div>

        {/* Experts in Fertility. Leaders in Diagnosis. */}
        <div className="container py-5">
  <motion.h2
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Experts in Fertility.
  </motion.h2>

  <motion.h1
    className="text-center mb-5"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Leaders in Diagnosis.
  </motion.h1>

  <div className="row">
    <motion.div
      className="col-md-6 col-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.p
        className="para"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        ESSI isn’t just a surgical center — it’s also a global leader in
        fertility care, and that makes us uniquely skilled at identifying and
        treating adenomyosis, even in subtle or early forms.
      </motion.p>

      <motion.p
        className="para mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        We use the MUSA (Morphological Uterus Sonographic Assessment) criteria
        for expert diagnosis via high-resolution transvaginal ultrasound. This
        international standard allows us to detect signs like:
      </motion.p>

      <div>
        {[
          "Myometrial cysts",
          "Asymmetrical thickening",
          "Hyperechoic islands",
          "Interrupted junctional zone",
          "Fan-shaped shadowing",
          "Globular uterine shape",
        ].map((item, index) => (
          <motion.div
            key={index}
            className="d-flex gap-3 mb-sm-3 mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
          >
            <img src="/assets/hand_Icon.svg" className="handIcon" />
            <p className="medium-text textPrimary mb-0">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <img src="/assets/option.png" className="img-fluid" />
    </motion.div>
  </div>

  <motion.p
    className="small-bold"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 1.5 }}
  >
    Our fertility and imaging expertise ensures that nothing gets missed,
    especially in cases where adenomyosis coexists with endometriosis or
    fibroids
  </motion.p>
</div>


        {/* Uterus-Preserving Treatment Options */}

        <div className="bg-white py-5">
  <motion.div
    className="container"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <motion.h1
      className="mb-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Uterus-Preserving Treatment Options
    </motion.h1>

    <div className="row justify-content-center">
      {options.map((option, index) => (
        <motion.div
          className="col-lg-4 col-sm-6 col-12 p-3"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
           whileHover={{ y: -8, scale: 1.03 }}
          viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="option-card p-sm-4 p-3 boxShadow h-100">
            <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
              {index + 1}
            </h2>
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={option.img}
                className="img-fluid"
                style={{ width: "60%" }}
              />
              <h3 className="medium-text">{option.title}</h3>
              <p className="para">{option.para}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
        </div>


        {/* why ESSI */}

        <div className="container d-flex flex-column align-items-center my-5 pb-sm-5">
  <motion.h1
    className="mb-4 pb-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Why Choose <span className="tilt tilt-secondary">ESSI</span>
  </motion.h1>

  <div className="d-flex gap-3 flex-wrap justify-content-center">
    {ESSIPoints.map((point, index) => (
      <motion.div
        key={index}
        className="whyESSIPoint boxShadow p-sm-4 p-3 text-center py-md-5 py-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <p className="small-bold text-white">{point}</p>
      </motion.div>
    ))}
  </div>
</div>


        {/* ready for relief */}

        <div className="bg-white py-5">
  <div className="container">
    <div className="row mb-sm-5 align-items-center">
      <motion.div
        className="col-md-6 col-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready for Relief?
        </motion.h1>

        <motion.p
          className="small-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          You deserve more than symptom management — you deserve an expert
          diagnosis and real treatment options that preserve your body and your
          future.
        </motion.p>

        <motion.p
          className="small-bold mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Let us help you take the first step toward clarity, comfort, and
          uterine preservation.
        </motion.p>

       
          <motion.div
          onClick={handleBtnClick}
            className="d-flex gap-3 bookButton p-2 px-3 mb-3 mb-md-0"
            style={{ width: "fit-content" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <p className="mb-0 text-white">Register for a Consultation</p>
            <img
              src="/assets/white_arrow.svg"
              style={{ width: "15px" }}
            />
          </motion.div>
       
      </motion.div>

      <motion.div
        className="col-md-6 col-12 p-md-5"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/assets/relief.jpg"
          className="img-fluid"
          style={{ borderRadius: "20px" }}
        />
      </motion.div>
    </div>
  </div>
       </div>


      </div>

      <Footer />
    </div>
  );
};

export default page;
