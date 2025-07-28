"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

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
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />
      <div className="pageOuter">
        {/* hero section */}

        <div className="container py-sm-5 pb-0 pt-0">
          <div className="row align-items-center">
            {/* Left Content */}
            <motion.div
              className="col-lg-6 col-12 order-lg-1 order-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="mb-4 text-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Endometriosis Mapping
              </motion.h1>

              <motion.p
                className="medium-text mb-4 text-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                ESSI combines advanced imaging techniques with a pioneering
                mapping process to create precise endometriosis maps. This way,
                both the patient and surgeon know what to expect.
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/E_mapping/herosection.png"
                className="img-fluid mb-lg-0 mb-4"
                alt="Endometriosis Mapping"
              />
            </motion.div>
          </div>
        </div>

        {/* Treatment Guide */}

        <motion.div
          className="bg-white py-sm-5 pt-5 pb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.h2
              className="mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Endometriosis Mapping Creates a
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="tilt tilt-primary text-white mb-5">
                Treatment
              </span>{" "}
              Guide
            </motion.h1>

            <motion.p
              className="para text-black mb-4 pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Endometriosis is a chronic disease where tissue that resembles the
              uterine lining grows in other bodily locations, causing pain,
              infertility, and other symptoms. Similar to cancer surgery, the
              goal of endometriosis surgery is to remove all of the abnormal
              tissue in the hopes that it will not regrow and cause a relapse of
              symptoms.
            </motion.p>

            <motion.p
              className="para text-black mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Endometriosis mapping uses imaging techniques to chart the
              location(s), size, and depth of endometrial lesions in the
              patient’s body. This helps the surgeon properly diagnose the
              severity and forms of endometriosis they are treating. Mapping is
              particularly useful for excision of deep infiltrating
              endometriosis (DIE) and lesions that are present in multiple
              locations.
            </motion.p>

            <motion.p
              className="medium-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Plan Ahead with Knowledge:
            </motion.p>

            <div className="mapping-points mb-5">
              {[
                "Size and depth of lesions",
                "Specific location(s) of lesions",
                "Endometriosis severity",
                "Identify deep infiltrating endometriosis",
                "Identify other affected organs and structures",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="d-flex gap-3 mb-sm-3 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/assets/hand_Icon.svg"
                    className="handIcon"
                    alt="check icon"
                  />
                  <p className="medium-text mb-0">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* mapping guide */}
        <motion.div
          className="container py-sm-5 pt-4 pb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-sm-center text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mapping is Guided by
          </motion.h2>

          <motion.h1
            className="text-sm-center text-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your Endometriosis Symptoms
          </motion.h1>

          <motion.p
            className="para text-dark mx-md-5 px-md-5 text-sm-center text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your ESSI doctor will take into account your symptoms and any
            previous testing you may have completed to choose the appropriate
            method for endometriosis mapping.
          </motion.p>

          <div className="row">
            <motion.div
              className="col-md-6 col-12 p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mappingCard1 p-sm-5 p-3 d-flex flex-column align-items-center text-center h-100">
                <img
                  src="/assets/E_mapping/magnetic.png"
                  className="img-fluid mb-4"
                  alt="Magnetic Resonance Imaging"
                />
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
            </motion.div>

            <motion.div
              className="col-md-6 col-12 p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mappingCard2 p-sm-5 p-3 d-flex flex-column align-items-center text-center h-100">
                <img
                  src="/assets/E_mapping/sonography.png"
                  className="img-fluid mb-4"
                  alt="Ultrasonography Mapping"
                />
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
            </motion.div>
          </div>
        </motion.div>

        {/* benefits */}

        <div className="bg-white py-sm-5 pt-4 pb-5">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Benefits of Surgical Mapping
            </motion.h1>

            <div className="row">
              {benefits.map((card, index) => (
                <motion.div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 mb-2"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="boxShadow p-sm-3 px-4 p-2 text-center h-100"
                    style={{ background: card.color, borderRadius: "20px" }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="d-flex flex-column align-items-center">
                      <h5 className="medium-text mb-3 mt-1">{card.name}</h5>
                      <img
                        src={card.img}
                        className="img-fluid mb-3"
                        style={{ width: "50%" }}
                        alt={card.name}
                      />
                      <p className="para text-dark mb-3">{card.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why you Should Choose */}

        <div className="container py-5">
          <motion.h2
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why you Should Choose
          </motion.h2>

          <motion.h1
            className="text-center mb-md-5 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Endometriosis Surgical Specialists International
          </motion.h1>

          <div className="row gx-0 justify-content-center">
            <motion.div
              className="col-lg-6 col-12 d-flex justify-content-center pe-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/E_mapping/why-choose.png"
                className="img-fluid mb-3"
                alt="Why Choose ESSI"
              />
            </motion.div>

            <motion.div
              className="col-lg-6 col-12 ps-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="h-100 p-md-5 p-3"
                style={{
                  backgroundColor: "rgba(78, 38, 117, 0.06)",
                  borderRadius: "20px",
                }}
              >
                <p className="medium-text text-sm-start text-center">
                  Endometriosis Surgical Specialists International (ESSI) has
                  collectively helped tens of thousands of endometriosis
                  patients. A successful surgery can help prevent the
                  progression of endometriosis and significantly improve a
                  patient’s quality of life. Our advanced mapping techniques and
                  qualified surgeons ensure that your endometriosis surgery will
                  be thorough and tailored to your specific needs. When you
                  choose ESSI, you’re choosing your best chance at success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
