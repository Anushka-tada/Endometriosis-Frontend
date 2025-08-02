"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LoggedDataContext } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const stages = [
  {
    index: "1",
    point: "Request an appointment through our website",
  },
  {
    index: "2",
    point: "ESSI in-take call and review the records",
  },
  {
    index: "3",
    point: "Surgeon approval and scheduling",
  },
  {
    index: "4",
    point:
      "Travel to the surgical site available that is most convenient to you",
  },
];

const reasonsColumn1 = [
  "Painful periods",
  "Pelvic periods",
  "Bladder pain",
  "Pain with intercourse",
  "Your MRI is negative",
  "Nothing found on ultrasound",
  "You have adenomyosis",
  "You have an ovarian endometrioma",
  "Pain despite endometriosis surgery",
  "Told you need to go on Lupron",
];

const reasonsColumn2 = [
  "You have been told you have to take Orilissa",
  "You have failed IVF",
  "You are infertile and they told you it’s unexplained",
  "You want to freeze your eggs but you have endometriosis",
  "You want to reduce your chance of having a second surgery",
  "They told you IVF will bypass endometriosis (it may not)",
  "You have failed embryo transfers with PGS normal embryos",
];

const reasonsColumn3 = [
  "You have experienced miscarriages",
  "You have experienced biochemical pregnancies",
  "They told you “you may lose your ovary”",
  "They told you surgery is too risky",
  "You are not sure your doctor is an excision specialist",
  "You have been told “it is all in your head”",
  "That endometriosis surgery will damage your fertility",
  "You had a surgery and are still in pain",
];

const doctors = [
  {
    img: "/assets/location/Dr_Alessio.png",
    name: "Dr. Alessio Pigazzi",
  },
  {
    img: "/assets/location/Dr_Andrea.png",
    name: "Dr. Andrea Vidali",
  },
  {
    img: "/assets/location/Dr_Joseph.png",
    name: "Dr. Joseph Raccuia",
  },
  {
    img: "/assets/location/Dr_Madhu.png",
    name: "Dr. Madhu Bagaria",
  },
  {
    img: "/assets/location/Dr_Mallory.png",
    name: "Dr. Mallory Stuparich",
  },
  {
    img: "/assets/location/Dr_Mamta.png",
    name: "Dr. Mamta Mamik",
  },
  {
    img: "/assets/location/Dr_Marco.png",
    name: "Dr. Marco Zoccali",
  },
  {
    img: "/assets/location/Dr_Sallie.png",
    name: "Dr. Sallie Sarrel",
  },
  {
    img: "/assets/location/Dr_Osbert.png",
    name: "Dr. Osbert Fernandez",
  },
];

const locations = [
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/7a880a1f835710f43c9a233a4273cd84-1024x710.jpg",
    text: "New York",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/6b8d6a91eaa26921556b6fd7c9160365-1024x767.jpg",
    text: "New Jersey",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/d3cc1f7944a545dcf2c5c878689ffe6e-1024x575.jpg",
    text: "California",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/79bf4382f3dd6ff472670a1f1b789f44-1024x768.jpg",
    text: "Illinois",
  },
  {
    img: "https://internationalendo.com/wp-content/uploads/2024/12/5bd54f2f6ec183e73d95ebf0d93446c1-1024x675.jpg",
    text: "Florida",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <img
      src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png"
      alt="Next"
    />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <img
      src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png"
      alt="Prev"
    />
  </div>
);

// Get responsive slide count
const getSlidesToShow = (width) => {
  if (width < 768) return 1;
  if (width < 992) return 2;
  return 3;
};

// Dot mapping logic (dynamic based on slidesToShow)
const mapToFiveDots = (index, total, slidesToShow) => {
  const lastIndex = total - slidesToShow;

  if (total <= slidesToShow) return 0;
  if (index === 0) return 0;
  if (index === 1) return 1;
  if (index >= lastIndex) return 4;
  if (index === lastIndex - 1) return 3;
  return 2;
};

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
    

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // default fallback

useEffect(() => {
  const updateSlidesToShow = () => setSlidesToShow(getSlidesToShow(window.innerWidth));
  updateSlidesToShow(); // Call once on mount
  window.addEventListener("resize", updateSlidesToShow);
  return () => window.removeEventListener("resize", updateSlidesToShow);
}, []);


  // Update slidesToShow on resize
  useEffect(() => {
    const handleResize = () =>
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = doctors.length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
    customPaging: (i) => {
      const activeDot = mapToFiveDots(currentSlide, totalSlides, slidesToShow);
      return (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: i === activeDot ? "#5F2D8B" : "#ECE6F3",
            margin: "0 4px",
          }}
        />
      );
    },
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        {dots.slice(0, 5)}
      </div>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
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
        {/* herosection */}
        <div className="container py-5 mb-sm-5">
  <div className="row align-items-center">
    <motion.div
      className="col-lg-6 col-12 order-lg-1 order-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Treating Endometriosis</h2>
      <h1 className="mb-4">In the United States</h1>

      <p className="small-medium mb-md-5">
        International patients can choose to seek treatment options in any of
        our current locations and receive best-in-class treatment from our
        world-class medical team
      </p>

    
        <motion.div onClick={handleBtnClick}
          className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
          style={{ width: "fit-content" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
            Book Appointment
          </p>
          <img src="/assets/white_arrow.svg" style={{ width: "15px" }} />
        </motion.div>
      
    </motion.div>

    <motion.div
      className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <img
        src="/assets/E_surgery/herosection.png"
        className="img-fluid"
      />
    </motion.div>
  </div>
        </div>

        <div className="location_herosection py-sm-5 py-4">
          <div className="container my-4">
            <h2 className="text-center ">
              Providing World-Level, Multidisciplinary, and <br />
              Patient-Centric Care to Endometriosis Patients
            </h2>
          </div>
        </div>

       {/* how it works section */}
      <div className="bg-white py-5">
  <div className="container">
    <h2 className="text-center">
      A Solution for Patients in the United States
    </h2>
    <h1 className="text-center mb-5">
      World Class Endometriosis Treatment
    </h1>
    <div className="row align-items-center">
      <motion.div
        className="col-md-6 col-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="para mb-4">
          For individuals suffering from endometriosis, accessing
          high-quality, specialized care remains a significant challenge
          in many countries. Despite the prevalence and debilitating
          nature of this disease, countless patients face barriers to
          receiving the care they need.
        </p>

        <p className="para mb-4">
          At our world-class Endometriosis Centers, we offer a solution
          to these barriers. We provide a comprehensive, patient-focused
          approach that prioritizes accurate diagnosis, advanced
          treatment, and personalized care.
        </p>

        <p className="para mb-4">
          Patients in the United States can choose to be seen in any of
          our centers and get access to: expert diagnostics, minimally
          invasive surgery, a dedicated multidisciplinary team, and
          immediate accesses so specialized care.
        </p>

      
          <motion.div onClick={handleBtnClick}
            className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3"
            style={{ width: "fit-content" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
              Book Appointment
            </p>
            <img
              src="/assets/white_arrow.svg"
              style={{ width: "15px" }}
            />
          </motion.div>
       
      </motion.div>

      <motion.div
        className="col-md-6 col-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className=" p-3 py-4 flex-column align-items-start position-relative ms-md-5 ms-0 mb-4 boxShadow locationSteps"
          style={{ borderRadius: "20px", border: "1px solid #f6deff" }}
        >
         {stages.map((step, i) => (
  <motion.div
    className="d-flex align-items-start gap-sm-4 gap-3"
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: i * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="d-flex gap-sm-4 gap-4 me-3 position-relative">
      <div className="d-flex flex-column align-items-center">
        <div className="step-index large-text mb-0 d-flex justify-content-center align-items-center">
          {step.index}
        </div>
        {i !== stages.length - 1 && (
          <div className="vertical-line-location"></div>
        )}
      </div>
    </div>
    <div>
      <p className="mb-0 medium-text textPrimary">{step.point}</p>
    </div>
  </motion.div>
))}

        </div>
      </motion.div>
    </div>
  </div>
      </div>


        {/* doctors section */}
     <div className="container my-5">
  <h1 className="text-center mb-4">Meet Our Doctors</h1>
  <Slider {...settings} className="d-flex align-items-center">
    {doctors.map((member, index) => (
      <motion.div
        key={index}
        className="p-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white boxShadow p-2 px-4"
          style={{ borderRadius: "20px" }}
        >
          <img
            src={member.img}
            className="img-fluid mb-2"
            style={{ borderRadius: "20px" }}
          />
          <h5 className="medium-text mb-2">{member.name}</h5>
          <div className="d-flex flex-lg-nowrap flex-wrap gap-sm-4 gap-2 mb-3 mt-3">
            <a href="/our-team" style={{ textDecoration: "none" }}>
              <motion.div
                className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3"
              >
                <p
                  className="mb-0 text-white"
                  style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                >
                  Read More
                </p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: "15px" }}
                />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </Slider>
    </div>


        {/* reasons section */}

   <div className="container py-5">
  <h1 className="text-center">
    Reasons to See{" "}
    <span className="tilt tilt-primary text-white"> ESSI</span>
  </h1>

  <div className="row pt-4 justify-content-center mb-sm-5">
    {[reasonsColumn1, reasonsColumn2, reasonsColumn3].map((column, i) => (
      <div
        className="col-lg-4 col-md-6 col-12 p-sm-2 p-0 px-3"
        key={i}
      >
        <motion.div
          className="bg-white p-md-4 p-4 pt-1 h-100 reasonCard"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
          }}
        >
          {column.map((reason, index) => (
            <div
              key={index}
              className="d-flex gap-2 align-items-center mb-3"
            >
              <img
                src="/assets/hand_Icon.svg"
                alt="hand icon"
                style={{ width: "28px", height: "28px" }}
              />
              <p className="mb-0 small-medium textPrimary">{reason}</p>
            </div>
          ))}
        </motion.div>
      </div>
    ))}
  </div>
</div>


        {/* locations of treatment */}

     <div className="py-5" style={{ backgroundColor: "#ECE6F3" }}>
  <div className="container">
    <h1 className="text-center mb-4">Locations for Treatment</h1>
    <div className="row justify-content-center">
      {locations.map((location, index) => (
        <div className="col-lg-4 col-md-6 p-3" key={index}>
          <motion.div
            className="locationCard bg-white p-3 boxShadow h-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 12px 25px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="locationImageOuter mb-3">
              <img
                src={location.img}
                className="img-fluid h-100 w-100"
                style={{ borderRadius: "20px", objectFit: "cover" }}
              />
            </div>
            <p className="small-medium textPrimary">{location.text}</p>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>

      <Footer />
    </div>
  );
};

export default page;
