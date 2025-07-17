"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import RequestConsultation from "./components/RequestConsultation";
import Slider from "react-slick";

const reasonsColumn1 = [
  "Prior Endometriosis Surgery with No Relief",
  "Lupron is Recommended",
  "Have UnExplained Infertility",
  "Multi-Failed Embryo Transfer with Normal PGS Embryosorgan expertise",
  "Told “You May Lose Your Ovary”",
  "Told “Surgery is too Risky to your Fertility”",
  "Told “It’s All in Your Head”",
  "Your Doctor is NOT an Excision Specialist!",
  "Your Doctor DOES NOT work with a Team of Highly Specialized Surgeons!",
];

const reasonsColumn2 = [
  "Painful Periods",
  "Pelvic Pain",
  "Unexplained IVF or FET Failures",
  "Bladder Pain",
  "Pain with Intercourse",
  "Your MRI Report is Negative",
  "Negative Ultrasound Findings",
  "Diagnosed with Adenomyosis",
  "Ovarian Endometrioma",
];

const EndometriosSteps = [
  {
    img: "/assets/homepage/Endometrios_Mapping.png",
    title: "Endometrios Mapping",
    subtitle: "Precise Diagnosis for Targeted Care",
  },
  {
    img: "/assets/homepage/Endometriosis_Surgery.png",
    title: "Endometriosis Surgery",
    subtitle: "Advanced Surgical Intervention & Recovery",
  },
  {
    img: "/assets/homepage/Endometriosis_Infertility.png",
    title: "Endometriosis and Infertility",
    subtitle: "Help with Complex Fertility Challenges",
  },
  {
    img: "/assets/homepage/Endometriosis_Infertility.png",
    title: "Endometriosis and Infertility",
    subtitle: "Help with Complex Fertility Challenges",
  },
];

const TeamMember = [
  {
    img: "/assets/homepage/Dr_Alessandra.png",
    title: "Dr. Alessandra Di Giovanni",
    subtitle: "Europe | ESSI Mentor",
    para: "Dr. Alessandra Da Giovanni is a consultant at the Center for Advanced Pelvic Surgery, Malzoni Research Hospital in Avellino, Italy, specializing in pelvic ultrasonography for gynecological conditions, with over 10,000 procedures and a diagnostic accuracy of over 95% for endometriosis... ",
  },
  {
    img: "/assets/homepage/Dr_Alessio.png",
    title: "Dr. Alessio Pigazzi",
    subtitle: "California | ESSI Mentor",
    para: "Dr. Alessio Pigazzi, MD, PhD, FACS, is a renowned colorectal surgeon currently serving as Chief of Colorectal Surgery at NewYork-Presbyterian/Weill Cornell Medical Center. He is highly specialized in minimally invasive techniques, including laparoscopic and robotic surgeries, particularly for complex colon...",
  },
  {
    img: "/assets/homepage/Dr_Francesco.png",
    title: "Dr. Francesco Di Chiara",
    subtitle: "Europe | ESSI Mentor",
    para: "Dr. Francesco Di Chiara is a leading thoracic surgeon known for pioneering uniportal VATS (Video-Assisted Thoracoscopic Surgery) at multiple institutions and performing complex procedures with this advanced technique. He serves as a proctor for minimally invasive thoracic surgery...",
  },
  {
    img: "/assets/homepage/Dr_Alessio.png",
    title: "Dr. Francesco Di Chiara",
    subtitle: "Europe | ESSI Mentor",
    para: "Dr. Francesco Di Chiara is a leading thoracic surgeon known for pioneering uniportal VATS (Video-Assisted Thoracoscopic Surgery) at multiple institutions and performing complex procedures with this advanced technique. He serves as a proctor for minimally invasive thoracic surgery...",
  },
];

const stories = [
  {
    img: "/assets/homepage/story_Image.png",
    category: "Category Tag or Label",
    views: "11k",
    title: "Understanding Endometriosis  Treatment Options Today",
    subtitle:
      "Learn about the latest treatment options,  expert tips, and real patient outcomes… ",
  },
  {
    img: "/assets/homepage/story_Image.png",
    category: "Category Tag or Label",
    views: "11k",
    title: "Understanding Endometriosis  Treatment Options Today",
    subtitle:
      "Learn about the latest treatment options,  expert tips, and real patient outcomes… ",
  },
  {
    img: "/assets/homepage/story_Image.png",
    category: "Category Tag or Label",
    views: "11k",
    title: "Understanding Endometriosis  Treatment Options Today",
    subtitle:
      "Learn about the latest treatment options,  expert tips, and real patient outcomes… ",
  },
];

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: () => <div className="custom-dot" />,
    appendDots: (dots) => <ul className="custom-dots-container">{dots}</ul>,
    arrows: false,
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

   const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: () => <div className="custom-dot" />,
    appendDots: (dots) => <ul className="custom-dots-container">{dots}</ul>,
    arrows: false,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
        {/* hero section */}

        <div className="homeHeroSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 pt-sm-5 mt-sm-5 mt-4 ps-3  order-lg-1 order-2">
                <div>
                  <h1 className="mt-2 text-sm-start text-center">
                    Dr.{" "}
                    <span className="tilt tilt-primary text-white">Madhu</span>
                    <span className="tilt tilt-secondary ms-1">Bagaria</span>
                  </h1>
                  <h2 className="mb-4 text-sm-start text-center">
                    Endometriosis Excision Specialist
                  </h2>

                  <p className="paraPrimary me-sm-5 me-0 pe-sm-3 pe- mb-sm-5 mb-2 justifyText">
                    Hello, I’m{" "}
                    <span className="fw-bold">Dr. Madhu Bagaria</span>, and I am
                    an expert in the field of minimally invasive gynecological
                    surgery for endometriosis and pelvic pain. I trained at the{" "}
                    <span className="fw-bold">Mayo Clinic Arizona</span> and
                    have years of experience providing specialized care. I
                    understand the challenges of endometriosis and am here to
                    help you navigate your journey, offering the best possible
                    treatment tailored to your unique needs
                  </p>

                  <div className="d-flex gap-sm-4 gap-3 pt-sm-5 pt-4 mb-sm-5 mb-3">
                    <div className="d-flex gap-sm-3 gap-1 bookButton p-2">
                      <img
                        src="/assets/button_icon_1.svg"
                        style={{ width: "16px" }}
                      ></img>
                      <p
                        className="mb-0 text-white"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Book Appointment
                      </p>
                      <img
                        src="/assets/white_arrow.svg"
                        style={{ width: "15px" }}
                      ></img>
                    </div>

                    <div className="d-flex gap-sm-3 gap-1 viewButton p-2">
                      <img
                        className=""
                        src="/assets/button_icon_2.svg"
                        style={{ width: "16px" }}
                      ></img>
                      <p className="mb-0">View Treatments</p>
                      <img
                        src="/assets/black_arrow.svg"
                        style={{ width: "15px" }}
                      ></img>
                    </div>
                  </div>

                  <div className="d-flex flex-sm-nowrap flex-wrap gap-sm-5 gap-3 mb-3">
                    <div className="d-flex gap-1 align-items-center ratings px-2 py-2">
                      <img
                        src="/assets/star.svg"
                        style={{ width: "24px" }}
                      ></img>
                      <img
                        src="/assets/star.svg"
                        style={{ width: "24px" }}
                      ></img>
                      <img
                        src="/assets/star.svg"
                        style={{ width: "24px" }}
                      ></img>
                      <img
                        src="/assets/star.svg"
                        style={{ width: "24px" }}
                      ></img>
                      <p className="mb-0 fw-bold">4.9</p>
                    </div>

                    <div className="d-flex gap-sm-5 gap-3">
                      <div>
                        <p
                          className="mb-0 para small"
                          style={{ fontWeight: "500" }}
                        >
                          Rated 4.9 out of 5
                        </p>
                        <p
                          className="mb-0 para text-black small"
                          style={{ fontWeight: "500" }}
                        >
                          based on 722 customer reviews
                        </p>
                      </div>

                      <div className="d-flex">
                        <img
                          src="/assets/homepage/hero-review1.jpg"
                          className=" rounded-circle"
                          style={{ width: "34px", height: "34px" }}
                        ></img>
                        <img
                          src="/assets/homepage/hero-review2.jpg"
                          className=" rounded-circle"
                          style={{
                            width: "34px",
                            height: "34px",
                            marginLeft: "-5px",
                          }}
                        ></img>
                        <img
                          src="/assets/homepage/hero-review3.jpg"
                          className=" rounded-circle"
                          style={{
                            width: "34px",
                            height: "34px",
                            marginLeft: "-5px",
                          }}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12   order-lg-2 order-1 d-flex justify-content-center imageBgColumn">
                <img
                  src="/assets/homepage/dr-madhu.png "
                  alt="Dr Madhu Bagaria"
                  className="img-fluid heroSectionImage"
                ></img>
              </div>
            </div>
          </div>

          <img
            src="/assets/homepage/backround2.png"
            className="leftBackground"
          ></img>
        </div>

        {/* section 2 */}

        <div className="container py-5 mb-3">
          <div className="row">
            <div className="col-md-3 col-6 p-2">
              <div
                className="text-center p-md-5 p-4 homeCard boxShadow h-100"
                style={{ backgroundColor: "#FF79E6" }}
              >
                <h2>5000+</h2>
                <h5 className="medium-text">Women Treated</h5>
              </div>
            </div>

            <div className="col-md-3 col-6 p-2">
              <div
                className="text-center  p-md-5 p-4 homeCard boxShadow h-100"
                style={{ backgroundColor: "#07E994" }}
              >
                <h2>2300+</h2>
                <h5 className="medium-text">Testimonials</h5>
              </div>
            </div>

            <div className="col-md-3 col-6 p-2">
              <div
                className="text-center p-md-5 p-4 homeCard boxShadow h-100"
                style={{ backgroundColor: "#5F2D8B" }}
              >
                <h2>30+</h2>
                <h5 className="medium-text">Countries</h5>
              </div>
            </div>

            <div className="col-md-3 col-6 p-2">
              <div
                className="text-center  p-md-5 p-4 homeCard boxShadow h-100"
                style={{ backgroundColor: "#FFB006" }}
              >
                <h2>12K+</h2>
                <h5 className="medium-text">Subscriber</h5>
              </div>
            </div>
          </div>
        </div>

        {/* we are section */}

        <div className="pt-4 pb-5 bg-white">
          <div className="container">
            <div className="row align-items-center">

               <div className="d-block d-lg-none col-12 d-flex flex-column align-items-center">
                 <h1 className="text-sm-start text-center  tilt tilt-primary text-white">
                  We Are
                </h1>
                <h1 className="mb-4 text-sm-start text-center">
                  Endometriosis Surgical Specialists International
                </h1>

               </div>

              <div className="col-lg-6 col-12">
                <img
                  src="/assets/homepage/about.png"
                  className="img-fluid"
                ></img>
              </div>
              <div className="col-lg-6 col-12">
               <div className="d-none d-lg-block">
                 <h1 className="text-sm-start text-center tilt tilt-primary text-white">
                  We Are
                </h1>
                <h1 className="mb-4 text-sm-start text-center">
                  Endometriosis Surgical Specialists International
                </h1>

               </div>
                <p className="para">
                  Most endometriosis patients spend years enduring pain,
                  infertility, and other debilitating symptoms before receiving
                  a diagnosis. If that describes you, then you have had no
                  choice other than to learn how to cope with and manage your
                  symptoms. But suffering should not be normalized.
                </p>

                <p className="mb-4 para">
                  Endometriosis Surgical Specialists International (ESSI),
                  founded by Dr. Andrea Vidali – a leading excision specialist
                  who has been performing endometriosis surgeries for over 25
                  years – is dedicated to achieving lasting results through
                  complete excision. Recognizing the importance of an
                  experienced team, Dr. Vidali assembled a surgical group at
                  ESSI with the experience and dedication needed to deliver the
                  outcomes you seek.
                </p>

                <div className="d-flex gap-3 align-items-center">
                  <p className="learnMore mb-0">Learn More About Our Story</p>
                  <img
                    src="/assets/purple_Arrow.svg"
                    style={{ width: "22px" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* reasons why you should section */}

        <div className="container py-5">
          <h1 className="text-center">
            Reasons Why You Should see Dr. Bagaria
          </h1>
          <p className="para text-center text-black">
            If you’ve experienced or been told any of what’s written
            below, please contact me today.
          </p>
          <div className="row pt-4">
            <div className="col-md-6 col-12 p-sm-2 p-0 px-3">
              <div
                className="bg-white  p-md-4 p-4 pb-1 h-100  reasonCard"
              >
                {reasonsColumn1.map((reason, index) => (
                  <div
                    key={index}
                    className="d-flex gap-2 align-items-center mb-3"
                  >
                    <img
                      src="/assets/hand_Icon.svg" //
                      alt="hand icon"
                      style={{ width: "32px", height: "32px" }}
                    />
                    <p className="mb-0 medium-text textPrimary">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-12 p-sm-2 p-0 px-3">
              <div
                className="bg-white p-md-4 p-4 pt-1 h-100 reasonCard"
               
              >
                {reasonsColumn2.map((reason, index) => (
                  <div
                    key={index}
                    className="d-flex gap-2 align-items-center mb-3"
                  >
                    <img
                      src="/assets/hand_Icon.svg" //
                      alt="hand icon"
                      style={{ width: "32px", height: "32px" }}
                    />
                    <p className="mb-0 medium-text textPrimary">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* reasons Endometriosis ... are related section */}

        <div className="container mt-sm-3 mt-0">
          <h1 className="text-center mb-3">
            Reasons Endometriosis, Infertility, and <br /> Miscarriage are Often
            Related
          </h1>
          <p className="medium-text text-center mx-5 pb-sm-5 pb-0 mb-3">
            We are the premier Endometriosis Surgical Specialists providing the
            highest standard of care for effective treatment of pain as well as
            ensuring lasting results.
          </p>

          <RequestConsultation />
        </div>

        {/* explore section */}

        <div className="container py-5 ">
          <h1 className="text-center">
            Explore Our Specialized{" "}
            <span className="tilt tilt-secondary">Endometrios</span> Treatments
          </h1>
          <p className="large-text text-center">
            From mapping to surgery - compassionate care at every step
          </p>

          <div className="row pb-5">
            <Slider {...settings1}>
              {EndometriosSteps.map((step, index) => (
                <div key={index} className="p-sm-3 p-2">
                  <div className="stepCard boxShadow p-sm-4 p-2 pb-sm-5  text-center h-100">
                    <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
                      {index + 1}
                    </h2>
                    <div className="d-flex flex-column align-items-center">
                      <img src={step.img} style={{ width: "60%" }} />
                      <h5 className="medium-text">{step.title}</h5>
                      <p className="para">{step.subtitle}</p>
                      <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2">
                        <p
                          className="mb-0 text-white"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Learn More
                        </p>
                        <img
                          src="/assets/white_arrow.svg"
                          style={{ width: "15px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* meet our team */}
        <div className="py-5 bg-white">
          <div className="container ">
            <div className="d-flex justify-content-center mb-4">
              <h1 className="tilt tilt-primary text-white text-center">
                Meet Our Team
              </h1>
            </div>
            <p className="para text-center">
              Endometriosis Surgical Specialists International was founded by
              Dr. Andrea Vidali, a leading excision specialist who has been
              performing endometriosis surgeries for over 25 years. We united
              because we are endometriosis experts who share a dedication to
              providing premium care for a disease that is often misunderstood
              and underserved by the medical community. Together, our collective
              skills ensure that you will receive the most comprehensive and
              professional endometriosis surgery available.
            </p>

            <div className="row pb-5">
              <Slider {...settings}>
                {TeamMember.map((member, index) => (
                  <div key={index} className="p-3">
                    <div
                      className="bg-white boxShadow p-2 px-4"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="d-flex flex-column ">
                        <img
                          src={member.img}
                          className="img-fluid mb-2"
                          style={{ borderRadius: "20px" }}
                        ></img>
                        <h5 className="medium-text mb-0">{member.title}</h5>
                        <p className="medium-bold">{member.subtitle}</p>
                        <p className="para text-black">{member.para}</p>

                        <div className="d-flex gap-sm-4 gap-2 mb-3 mt-3">
                          <div className="d-flex gap-sm-3 gap-1 bookButton p-2">
                            <img
                              src="/assets/button_icon_1.svg"
                              style={{ width: "16px" }}
                            ></img>
                            <p
                              className="mb-0 text-white"
                              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                            >
                              Book Appointment
                            </p>
                            <img
                              src="/assets/white_arrow.svg"
                              style={{ width: "15px" }}
                            ></img>
                          </div>

                          <div className="d-flex gap-sm-3 gap-1 viewButton p-2">
                            <p
                              className="mb-0"
                              style={{
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                                color: "#4E2675",
                              }}
                            >
                              Read More
                            </p>
                            <img
                              src="/assets/black_arrow.svg"
                              style={{ width: "15px" }}
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* voice of trust */}
        <div className="pt-5 pb-2">
          <div className="container ">
            <div className="d-flex justify-content-center mb-3">
              <h1 className="text-center mb-0">
                Voices of{" "}
                <span className="tilt tilt-primary text-white"> Trust</span> &{" "}
                <span className="tilt tilt-secondary"> Transformation</span>
              </h1>
            </div>
            <p className="large-text text-center mb-4 pb-2">
              Real stories from patients who've healed and doctors who've made a
              difference. Discover how care, compassion, and expertise come
              together to change lives.
            </p>

            <div className="row pb-5">
              <Slider {...settings}>
                <div className="p-3">
                  <div
                    className=" boxShadow p-4 pb-5"
                    style={{ borderRadius: "16px", backgroundColor: "#FF79E7" }}
                  >
                    <div className="d-flex justify-content-between align-items-center ">
                      <img
                        src="/assets/card_comma.svg"
                        className="cardComa"
                      ></img>
                      <div className="d-flex gap-1">
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                      </div>
                    </div>
                    <h5 className="medium-bolder text-white mb-4 mt-5 pt-3">
                      Life-Changing Care !
                    </h5>
                    <p className="small-bold text-white mb-5 pb-5">
                      After years of pain and failed diagnoses, ESSI finally
                      gave me answers. The team listened, cared deeply, and
                      changed my life completely.
                    </p>

                    <div className="d-flex align-items-center gap-3 ">
                      <img
                        src="/assets/homepage/Testi_review_1.png"
                        className="reviewImg"
                      ></img>
                      <div>
                        <p className="para text-white mb-1">Anjali Mehta</p>
                        <p
                          className="text-white mb-0"
                          style={{ fontSize: "14px", fontWeight: "400" }}
                        >
                          Delhi, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 h-100">
                  {/* <div
                      className=" boxShadow p-4 pb-5 middleTestimonial h-100"
                      style={{ borderRadius: "16px" }}
                    >
                       
                       <div className="d-flex align-items-center gap-3 "> 
                        <img src="/assets/homepage/Testi_review_1.png" className="reviewImg"></img>
                         <div>
                          <p className="para text-white mb-1">lisa </p>
                          <p className="text-white mb-0" style={{fontSize:"14px" , fontWeight:"400"}}>New York, USA </p>
                         </div>
                       </div>
                     
                    </div> */}
                  <img src="/assets/homepage/testimonial_card.png" className="img-fluid"></img>
                </div>

                <div className="p-3">
                  <div
                    className=" boxShadow p-4 pb-5"
                    style={{ borderRadius: "16px", backgroundColor: "#07E994" }}
                  >
                    <div className="d-flex justify-content-between align-items-center ">
                      <img
                        src="/assets/card_comma.svg"
                        className="cardComa"
                      ></img>
                      <div className="d-flex gap-1">
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                        <img
                          className=""
                          src="/assets/white_star.svg"
                          style={{ height: "24px" }}
                        ></img>
                      </div>
                    </div>
                    <h5 className="medium-bolder text-white mb-4 mt-5 pt-3 ">
                      Finally Understood !
                    </h5>
                    <p className="small-bold text-white mb-5 pb-5">
                      Every doctor dismissed my symptoms. ESSI took me
                      seriously, explained everything clearly, and treated me
                      like a person—not just a patient.
                    </p>

                    <div className="d-flex align-items-center gap-3 ">
                      <img
                        src="/assets/homepage/Testi_review_3.png"
                        className="reviewImg"
                      ></img>
                      <div>
                        <p className="para text-white mb-1">Gurleen Kaur</p>
                        <p
                          className="text-white mb-0"
                          style={{ fontSize: "14px", fontWeight: "400" }}
                        >
                          Punjab, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/*ESSI Insights & Stories*/}

        <div className="py-4">
          <div className="container">
           
         <h1 className="text-center mb-4">ESSI Insights & Stories </h1>
            <p className="large-text text-center">
              Explore expert articles, patient journeys, and the latest insights
              on endometriosis care. Stay informed, empowered, and connected
              with valuable tips and success stories.
            </p>

            <div className="row pb-5">
              <Slider {...settings}>
                {stories.map((story, index) => (
                  <div key={index} className="p-3">
                    <div
                      className="bg-white boxShadow p-3 py-4"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="d-flex flex-column ">
                        <img
                          src={story.img}
                          className="img-fluid mb-3"
                          style={{ borderRadius: "20px" }}
                        ></img>

                        <div className="d-flex justify-content-between align-items-center mb-3" style={{fontSize:"14px" , fontWeight:"500"}}>
                          <p className="mb-0">{story.category}</p>
                           <div className="d-flex gap-2 align-items-center">
                            <img src="/assets/eye_icon.svg" style={{height:"16px"}} ></img>
                          <p className="mb-0">{story.views}</p>
                          </div>
                        </div>

                        <h5 className="medium-text ">{story.title}</h5>
                        <p className="para ">{story.subtitle}</p>
                        <div className="d-flex gap-3 align-items-center mb-3">
                          <p className="learnMore mb-0">Read More</p>
                          <img
                            src="/assets/purple_Arrow.svg"
                            style={{ width: "22px" }}
                          ></img>
                        </div>

                         <div className="d-flex align-items-center gap-3 ">
                      <img
                        src="/assets/homepage/Testi_review_1.png"
                        className="reviewImg"
                      ></img>
                      <div>
                        <p className="para  text-black mb-1">Anjali Mehta</p>
                        <p
                          className=" mb-0"
                          style={{ fontSize: "14px", fontWeight: "400" }}
                        >
                          Delhi, India
                        </p>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

     <Footer/>
    </>
  );
};

export default page;
