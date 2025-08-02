"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
 import { LoggedDataContext } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const cardsData = [
  {
    index: "1",
    img: "/assets/whyESSI/Points.png",
    title: "Leaders in Endometriosis Research",
    para: "Our team is composed of highly skilled professionals who are recognized leaders in the fields of surgery, gynecology, and endometriosis. Our leadership is distinguished at every academic level, ensuring that our practice remains at the forefront of medical advancements.",
    linear:
      "linear-gradient(156deg, rgba(255, 200, 245, 0.30) 7.3%, #7600FF 93.1%)",
  },
  {
    index: "2",
    img: "/assets/whyESSI/Points.png",
    title: "Our Robust Training program",
    para: "Our doctors are mentored directly by the current leaders in the field, ensuring the highest standards of knowledge transfer. No other organization offers a mentoring program as comprehensive and robust as ours.",
    linear:
      "linear-gradient(156deg, rgba(191, 255, 231, 0.30) 7.3%, #00FEC3 93.1%)",
  },
  {
    index: "3",
    img: "/assets/whyESSI/Points.png",
    title: "Our Top-Notch Quality Control",
    para: "We adhere to a stringent quality control process. At the end of each year, we meticulously review outcomes and implement any necessary interventions to guarantee that every physician consistently meets the high standards we set for treatment and patient care.",
    linear:
      "linear-gradient(156deg, rgba(255, 237, 200, 0.30) 7.3%, #FFB006 93.1%);",
  },
  {
    index: "4",
    img: "/assets/whyESSI/Points.png",
    title: "Our Representation in Academia",
    para: "Our team of experts has collectively produced more academic papers, conference presentations, and research on endometriosis than most medical schools and university centers, solidifying our position as thought leaders in the field. Our academic credibility is unmatched.",
    linear:
      "linear-gradient(156deg, rgba(253, 255, 200, 0.30) 7.3%, #F7FF00 93.1%);",
  },
  {
    index: "5",
    img: "/assets/whyESSI/Points.png",
    title: "Our Advocacy",
    para: "We are deeply committed to advancing education on endometriosis, both for the public and for other medical professionals. We actively participate in the Endometriosis Summit and contribute to creating educational courses to help doctors better diagnose and treat the condition.",
    linear:
      "linear-gradient(156deg, rgba(200, 255, 255, 0.30) 7.3%, #0FF 93.1%)",
  },
  {
    index: "6",
    img: "/assets/whyESSI/Points.png",
    title: "Our Scope",
    para: "Our international presence sets us apart. With locations in both the United States and Europe, patients have access to comprehensive, world-class care, no matter where they are located. With IESS you’re not alone no matter where you go.",
    linear:
      "linear-gradient(156deg, rgba(255, 200, 200, 0.30) 7.3%, #F00 93.1%)",
  },
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
        <div className="container py-4">
          <div className="row align-items-center">
            {/* Left Content */}
            <motion.div
              className="col-lg-6 col-12 order-lg-1 order-2"
              initial={{ opacity: 0, x: -60 }}
              animate ={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="mb-2"
                initial={{ opacity: 0, y: 30 }}
                animate ={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                What Sets{" "}
                <span className="tilt tilt-primary text-white">ESSI</span>{" "}
                Apart?
              </motion.h1>

              <motion.div
                className="d-flex flex-wrap gap-sm-4 gap-3 pt-sm-5 pt-4 mb-sm-5 mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate ={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                
              >
              
                  <div className="d-flex gap-sm-3 gap-1 bookButton p-2" onClick={handleBtnClick} >
                    <img
                      src="/assets/button_icon_1.svg"
                      style={{ width: "16px" }}
                      alt="icon"
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
                      alt="arrow"
                    />
                  </div>
                

                {/* <div className="d-flex gap-sm-3 gap-1 viewButton p-2">
                  <img
                    src="/assets/button_icon_2.svg"
                    style={{ width: "16px" }}
                    alt="icon"
                  />
                  <p className="mb-0">View Treatments</p>
                  <img
                    src="/assets/black_arrow.svg"
                    style={{ width: "15px" }}
                    alt="arrow"
                  />
                </div> */}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              
            >
              <img
                src="/assets/whyESSI/herosection.png"
                className="img-fluid"
                alt="Why ESSI"
              />
            </motion.div>
          </div>
        </div>

        {/* cards section */}
        <div className="py-5 container">
          <div className="row">
            {cardsData.map((card, index) => (
              <motion.div
                className="col-lg-4 col-sm-6 col-12 p-3 mb-2"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 4,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="essiCard boxShadow p-sm-3 p-2 pb-sm-5 pb-4 text-center h-100"
                  style={{
                    background: card.linear,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
                    {index + 1}
                  </h2>
                  <div className="d-flex flex-column align-items-center">
                    <img src={card.img} style={{ width: "60%" }} />
                    <h5 className="medium-text">{card.title}</h5>
                    <p className="para text-dark">{card.para}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* why choose us section */}

<div className="py-sm-5 pb-5 pt-1 mt-md-5 whyChooseContainer">
  <div className="container">
    {/* Heading Section */}
    <motion.p
      className="whyChoosePara text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Why you Should Choose
    </motion.p>

    <motion.h1
      className="text-center mb-5 whyChooseHead"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Endometriosis Surgical Specialists International
    </motion.h1>

    <div className="row">
      {/* Text Column */}
      <motion.div
        className="col-lg-7"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="whyChoose-line mb-4">
          Endometriosis Surgical Specialists International (ESSI) has collectively helped tens of thousands of endometriosis patients. A successful surgery can help prevent the progression of endometriosis and significantly improve a patient’s quality of life. Our advanced mapping techniques and qualified surgeons ensure that your endometriosis surgery will be thorough and tailored to your specific needs. When you choose ESSI, you’re choosing your best chance at success.
        </p>

        <p className="whyChoose-line mb-4">
          The ESSI surgical group is one of the most innovative and productive teams of clinician-scientists practicing in the field of endometriosis today. Our members are dedicated to advancing both the science and practice of endometriosis care, utilizing the latest in surgical techniques, such as robotic-assisted procedures, and performing cutting-edge research that expands our understanding of the disease. Through a collaborative approach, we not only pioneer advanced surgical interventions but also publish extensively in peer-reviewed journals, contribute to high-impact clinical studies, and present at leading international conferences. The ESSI team stands at the forefront of endometriosis care, continually pushing the boundaries to improve patient outcomes and further the knowledge base in this complex field.
        </p>

        {/* Button (Desktop) */}
        <motion.div
          className="d-lg-flex d-none gap-sm-2 gap-1 bookButton p-2 px-3 mb-2"
          style={{ width: "fit-content" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Andrea+Vidali+OR+Mauricio+Abr%C3%A3o+OR+Alessandra+Da+Giovanni+OR+Madhu+Bagaria+OR+Mallory+Stuparich+OR+Marcello+Ceccaroni+OR+Mario+Malzoni+OR+Alessio+Pigazzi+OR+Joseph+Raccuia+OR+Francesco+Di+Chiara+OR+Marco+Zoccali+OR+Henrique+Abr%C3%A3o" style={{textDecoration:"none"}} target="_blank">
          <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
            Read All Of Our Published Work here
          </p>
          </a>
          <img src="/assets/white_arrow.svg" style={{ width: "15px" }} />
        </motion.div>
      </motion.div>

      {/* Image Column */}
      <motion.div
        className="col-lg-5 d-flex flex-column align-items-md-start align-items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/assets/whyESSI/whyChooseUs.png"
          className="img-fluid mb-md-0 mb-4"
          alt="Why Choose Us"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        {/* Button (Mobile) */}
        <div
          className="d-flex d-lg-none gap-sm-2 gap-1 bookButton p-2 px-3 mb-2"
          style={{ width: "fit-content" }}
        >
          <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
            Read All Of Our Published Work here
          </p>
          <img src="/assets/white_arrow.svg" style={{ width: "15px" }} />
        </div>
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
