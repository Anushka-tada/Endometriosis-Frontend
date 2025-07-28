"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div className="pageOuter">
        {/* herosection */}
        <div className="container py-5">
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
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Endometriosis and Infertility
              </motion.h1>

              <motion.p
                className="medium-text mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Compelling research estimates that up to 50% of women who
                experience infertility, suffer from endometriosis. Multiple
                failures may often be the only symptom as Silent Endometriosis
                is well established. Going untreated, can contribute to
                continued failures and frustration. This is ESSI’s area of
                expertise. Our experienced surgeons at ESSI can diagnose and
                effectively treat this underlying cause of infertility. We are
                here to help you on your journey to successful pregnancy
                outcomes.
              </motion.p>

              <a href="/appointment-form" style={{ textDecoration: "none" }}>
                <motion.div
                  className="d-flex gap-sm-3 gap-1 bookButton p-2"
                  style={{ width: "fit-content" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/assets/button_icon_1.svg"
                    style={{ width: "16px" }}
                    alt=""
                  />
                  <p
                    className="mb-0 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Request Surgery
                  </p>
                  <img
                    src="/assets/white_arrow.svg"
                    style={{ width: "15px" }}
                    alt=""
                  />
                </motion.div>
              </a>
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
                src="https://internationalendo.com/wp-content/uploads/2025/01/Group-35553.png"
                className="img-fluid"
                alt="Endometriosis and Infertility"
              />
            </motion.div>
          </div>
        </div>

        {/* infertility cause */}

        <div className="bg-white py-5">
          <div className="container">
            <motion.h1
              className="text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Infertility can be caused by{" "}
              <span className="tilt tilt-primary text-white">Silent </span>{" "}
              <span className="tilt tilt-secondary"> Endometriosis</span>
            </motion.h1>

            <motion.h2
              className="mb-4 small-h2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              What is Silent Endometriosis?
            </motion.h2>

            <motion.p
              className="para mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Most people associate endometriosis with pain, but a large
              proportion of people with endometriosis do not experience any
              obvious symptoms. Silent endometriosis is when someone appears
              asymptomatic, but their fertility can still be impaired by
              endometriosis. This type of endometriosis can be difficult to
              diagnose since many doctors will not suspect endometriosis without
              symptoms, and the lesions might appear different from standard
              endometriosis cases.
            </motion.p>

            <motion.h2
              className="mb-4 small-h2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Endometriosis and Infertility Facts
            </motion.h2>

            <motion.div
              className="mapping-points mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                "Approximately 10% of reproductive age women have endometriosis",
                "Up to 50% of infertile women have endometriosis",
                "Infertility can be the only symptom of endometriosis",
                "Silent endometriosis may have atypical lesions that require a specialist to diagnose",
                "Surgery can improve fertility outcomes",
              ].map((point, i) => (
                <div className="d-flex gap-3 mb-sm-3 mb-2" key={i}>
                  <img src="/assets/hand_Icon.svg" className="handIcon" />
                  <p className="medium-text mb-0">{point}</p>
                </div>
              ))}
            </motion.div>

            <motion.h2
              className="mb-4 small-h2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              How Does Endometriosis Cause Infertility?
            </motion.h2>

            <motion.p
              className="para mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              There are many theories as to why some people – and not others –
              develop endometriosis. Likewise, there are multiple ways that
              endometriosis can impact fertility. Although scientists still have
              a lot to learn about endometriosis, here are some of the most
              supported theories why endometriosis causes infertility:
            </motion.p>

            <motion.div
              className="surgery-points"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                "Mechanical factors (Adhesions and anatomical distortions)",
                "Chronic systemic inflammation",
                "Diminished ovarian reserve",
                "Impaired ovulation and reduced oocyte quality",
                "Endometriosis-associated pain",
                "Decreased endometrial receptivity",
                "Association with adenomyosis",
              ].map((point, i) => (
                <div className="d-flex gap-3 mb-sm-3 mb-2" key={i}>
                  <img src="/assets/hand_Icon.svg" className="handIcon" />
                  <p className="medium-text mb-0">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Treating Infertility with Endometriosis Surgery */}
     <div className="container my-5">
     <div className="row align-items-center">
      <motion.div
      className="col-lg-6 col-12"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      >
      <motion.h1
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Treating{" "}
        <span className="tilt tilt-primary text-white">Infertility</span>{" "}
        with Endometriosis Surgery
      </motion.h1>

      <motion.p
        className="para"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        A recent Medical Review found that in a pooled group of 635 women diagnosed with endometriosis-related infertility, 337 (53%) achieved pregnancy after endometriosis surgery. A successful excision surgery will remove all of the abnormal tissue, which helps resolve symptoms and inflammation. Since most of the proposed ways that endometriosis causes infertility stem from mechanical and inflammatory pathways, it is logical that surgery can help improve fertility.
      </motion.p>

      <motion.p
        className="para"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        If your main goal for getting endometriosis surgery is to have a baby, it is important to work with the right surgeon who shares this goal with you. Endometriosis surgery can be paired with other treatments and assisted reproductive technology to maximize your chances of getting pregnant. Our group includes endometriosis surgeons who are also fertility specialists – so that you can get the help you need from a single source.
      </motion.p>
    </motion.div>

    <motion.div
      className="col-lg-6 col-12 p-md-5"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src="https://internationalendo.com/wp-content/uploads/2025/01/a62419a3eef5ff522f71cf324454a302-1-1024x683.jpg"
        className="img-fluid"
        style={{ borderRadius: "0" }} // removed as per your note
        alt="Endometriosis Surgery"
      />
    </motion.div>
  </div>
</div>


        <div className="location_herosection py-sm-5 py-4">
          <div className="container my-4">
            <h2 className="text-center mb-4">Why you should choose ESSI?</h2>
            <p className="small-medium text-center">
              A successful surgery can significantly improve a patient’s
              fertility and quality of life. Some of our surgeons specialize in
              both endometriosis and fertility, ensuring that your surgical and
              reproductive treatments are optimally aligned within a single
              medical center. When you choose IESS, you’re choosing your best
              chance at success.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
