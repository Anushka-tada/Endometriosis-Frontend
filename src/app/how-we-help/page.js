"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import { motion } from "framer-motion";

const symptoms = [
  {
    img: "/assets/howWeHelp/symptoms.png",
    name: "Dysmenorrhea (painful periods)",
  },
  {
    img: "/assets/howWeHelp/symptoms.png",
    name: "Infertility",
  },
  {
    img: "/assets/howWeHelp/symptoms.png",
    name: "Chronic pelvic pain",
  },
  {
    img: "/assets/howWeHelp/symptoms.png",
    name: "Bladder pain",
  },
  {
    img: "/assets/howWeHelp/symptoms.png",
    name: "Abdominal pain",
  },
];

const stages = [
  {
    icon: "/assets/Track_1.svg",
    index: "1",
    point: "Request an appointment through the website",
  },
  {
    icon: "/assets/Track_2.svg",
    index: "2",
    point: "ESSI in-take call and review the records",
  },
  {
    icon: "/assets/Track_3.svg",
    index: "3",
    point: "ESSI in-take call and review the records",
  },
  {
    icon: "/assets/Track_4.svg",
    index: "4",
    point: "Evaluation and MRI/ultrasound-based mapping",
  },
  {
    icon: "/assets/Track_5.svg",
    index: "5",
    point: "Outpatient surgery",
  },
];

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    customPaging: () => <div className="custom-dot" />,
    appendDots: (dots) => <ul className="custom-dots-container">{dots}</ul>,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="pageOuter">
        {/* hero section */}
        <div className="howWeHelp pb-sm-5 pb-4">
          <div className="row pb-5">
            {/* Left Column */}
            <motion.div
              className="col-lg-6 col-12 pt-lg-5 pt-0 mt-3 pe-lg-5 order-lg-1 order-2"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="d-flex justify-content-lg-start justify-content-center">
                <motion.h1
                  className="tilt tilt-primary text-white text-lg-start text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  How We Help
                </motion.h1>
              </div>

              <motion.h1
                className="mb-4 text-lg-start text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Diagnose & Treat Endometriosis
              </motion.h1>

              <motion.p
                className="para mb-4 pb-2 me-lg-5 text-lg-start text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Endometriosis Surgical Specialists International (ESSI) is a
                group of experienced surgeons devoted to medical best practices
                in endometriosis detection and surgery. Our unique capabilities
                allow us to:
              </motion.p>

              {/* Each List Item with simple motion */}
              {[
                "Detect endometriosis when other doctors have found negative or inconclusive results",
                "Create precise maps of endometriosis lesions before initiating laparoscopic surgery",
                "Perform excision surgery on complex cases of endometriosis",
                "Preserve or enhance fertility through endometriosis surgery",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="d-flex gap-2 align-items-center mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/assets/hand_Icon.svg"
                    alt="hand icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <p className="mb-0 para text-black">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column Image */}
            <motion.div
              className="col-lg-6 col-12 mb-sm-3 position-relative d-flex justify-content-center order-lg-2 order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/howWeHelp/herosection_backround.png"
                className="position-absolute img-fluid heroSection_backround_img"
                alt="Background"
              />
              <img
                src="/assets/howWeHelp/heroSection.png"
                className="img-fluid position-relative"
                style={{ zIndex: 1 }}
                alt="Foreground"
              />
            </motion.div>
          </div>
        </div>

        <div className="bg-white py-sm-5 py-4">
          <div className="container">
            <motion.div
              className="d-flex justify-content-md-start justify-content-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="tilt tilt-primary text-white mb-3">Do You Have</h1>
            </motion.div>

            <motion.h1
              className="mb-4 text-md-start text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Endometriosis ?
            </motion.h1>

            <motion.p
              className="medium-text d-md-none d-block"
              style={{ color: "#555" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Symptoms can include:
            </motion.p>

            <motion.p
              className="para"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              It is estimated that 1 in 10 women worldwide are affected by
              endometriosis, a chronic, often painful condition where tissue
              similar to the endometrium – which normally lines the uterus –
              grows outside of the uterus...
            </motion.p>

            <motion.p
              className="para mb-4 pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              There is no medical consensus as to how or why endometriosis
              occurs...
            </motion.p>

            <motion.p
              className="medium-text d-md-block d-none"
              style={{ color: "#555" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Symptoms can include:
            </motion.p>

            <motion.div
              className="row mb-5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Slider {...settings}>
                {symptoms.map((symptom, index) => (
                  <div key={index} className="p-3 ps-0 text-center">
                    <div
                      className="symptomsCard p-3 px-4 d-flex flex-column align-items-center"
                      style={{ borderRadius: "20px" }}
                    >
                      <img
                        src={symptom.img}
                        className="mt-2 mb-2"
                        style={{ width: "100px", height: "100px" }}
                        alt={symptom.name}
                      />
                      <p
                        className="mb-2 text-white"
                        style={{ fontSize: "16px", fontWeight: 600 }}
                      >
                        {symptom.name}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="container my-5 pb-sm-4 pb-0 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="pb-4 mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How Endometriosis Surgical Specialists International Diagnose
            Endometriosis
          </motion.h1>

          <motion.p
            className="para"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The doctors at ESSI are at the forefront of using Magnetic Resonance
            Imaging (MRIs) and Ultrasound to create precise maps of
            endometriosis tissue throughout the body...
          </motion.p>

          <motion.img
            src="/assets/howWeHelp/AboutSection.png"
            className="img-fluid mt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            alt="ESSI Diagnosis"
          />
        </motion.div>

        <div className="container py-sm-5 py-3 bg-white">
          <div className="row py-3">
            {/* Left Image + Buttons */}
            <motion.div
              className="col-lg-6 col-12 p-2 px-4 mt-sm-4 mb-sm-0 mb-4 pt-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="position-relative">
                <motion.img
                  src="/assets/howWeHelp/Vedio_Image.jpg"
                  className="img-fluid"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <img src="/assets/Vedio_fill.svg" className="vedio_img" />
              </div>

              <div className="d-lg-flex d-none gap-sm-4 gap-3 pt-sm-4 pt-4">
                <div className="d-flex gap-sm-3 gap-1 bookButton p-2">
                  <img
                    src="/assets/button_icon_1.svg"
                    style={{ width: "16px" }}
                  />
                  <p
                    className="mb-0 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Book Appointment
                  </p>
                  <img
                    src="/assets/white_arrow.svg"
                    style={{ width: "15px" }}
                  />
                </div>

                <div className="d-flex gap-sm-3 gap-1 viewButton p-2">
                  <img
                    src="/assets/button_icon_2.svg"
                    style={{ width: "16px" }}
                  />
                  <p className="mb-0">Go to surgery</p>
                  <img
                    src="/assets/black_arrow.svg"
                    style={{ width: "15px" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              className="col-lg-6 col-12 p-2 px-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3">
                How Endometriosis Surgical Specialists International Treat
                Endometriosis
              </h2>
              <p className="mb-3 para">
                Pharmaceutical and lifestyle approaches to treating
                endometriosis focus on managing the disease’s symptoms and
                keeping it from progressing...
              </p>
              <p className="para">
                ESSI uses and continues to explore the newest laparoscopic
                technologies available to maximize results while minimizing scar
                tissue and surgical risks...
              </p>

              <div className="d-flex d-lg-none gap-sm-4 gap-3 pt-sm-4 pt-4">
                <div className="d-flex gap-sm-3 gap-1 bookButton p-2">
                  <img
                    src="/assets/button_icon_1.svg"
                    style={{ width: "16px" }}
                  />
                  <p
                    className="mb-0 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Book Appointment
                  </p>
                  <img
                    src="/assets/white_arrow.svg"
                    style={{ width: "15px" }}
                  />
                </div>

                <div className="d-flex gap-sm-3 gap-1 viewButton p-2">
                  <img
                    src="/assets/button_icon_2.svg"
                    style={{ width: "16px" }}
                  />
                  <p className="mb-0">Go to surgery</p>
                  <img
                    src="/assets/black_arrow.svg"
                    style={{ width: "15px" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container my-5 pb-4">
  <motion.h1
    className="text-center pb-4 mb-1"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Fast Track Your Surgery
  </motion.h1>

  <motion.p
    className="para text-center mb-5"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true }}
  >
    It takes most patients an average of 5 to 6 years to receive an
    endometriosis diagnosis. We think you have waited long enough...
  </motion.p>

  <div className="row flex-column align-items-start position-relative ms-md-5 ms-0 mb-4">
    {stages.map((step, i) => (
      <motion.div
        key={i}
        className="d-flex align-items-start gap-sm-5 gap-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        {/* Left: Icon + Number + Line */}
        <div className="d-flex gap-sm-5 gap-4 me-3 position-relative">
          <img
            src={step.icon}
            width={40}
            height={40}
            alt={`Step ${step.index}`}
          />
          <div className="d-flex flex-column align-items-center">
            <div className="step-index small-h2 mb-0 d-flex justify-content-center align-items-center">
              {step.index}
            </div>

            {i !== stages.length - 1 && (
              <div className="vertical-line"></div>
            )}
          </div>
        </div>

        {/* Right: Description */}
        <div>
          <p className="mb-0 small-h2">{step.point}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      </div>
      <Footer />
    </div>
  );
};

export default page;
