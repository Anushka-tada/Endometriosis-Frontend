"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";

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
    <>
      <Navbar />

      <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
        {/* hero section */}
        <div className="howWeHelp pb-sm-5 pb-4">
          <div className="row pb-5">
            <div className="col-lg-6 col-12 pt-lg-5 pt-0 mt-3 pe-lg-5 order-lg-1 order-2">
              <div className="d-flex justify-content-lg-start justify-content-center">
                <h1 className="tilt tilt-primary text-white text-lg-start text-center">
                  How We Help
                </h1>
              </div>
              <h1 className="mb-4 text-lg-start text-center">
                Diagnose & Treat Endometriosis
              </h1>

              <p className="para mb-4 pb-2 me-lg-5 text-lg-start text-center">
                Endometriosis Surgical Specialists International (ESSI) is a
                group of experienced surgeons devoted to medical best practices
                in endometriosis detection and surgery. Our unique capabilities
                allow us to:
              </p>

              <div className="d-flex gap-2 align-items-center mb-2">
                <img
                  src="/assets/hand_Icon.svg"
                  alt="hand icon"
                  style={{ width: "32px", height: "32px" }}
                />
                <p className="mb-0 para text-black">
                  Detect endometriosis when other doctors have found negative or
                  inconclusive results
                </p>
              </div>

              <div className="d-flex gap-2 align-items-center mb-2">
                <img
                  src="/assets/hand_Icon.svg"
                  alt="hand icon"
                  style={{ width: "32px", height: "32px" }}
                />
                <p className="mb-0 para text-black">
                  Create precise maps of endometriosis lesions before initiating
                  laparoscopic surgery
                </p>
              </div>

              <div className="d-flex gap-2 align-items-center mb-2">
                <img
                  src="/assets/hand_Icon.svg"
                  alt="hand icon"
                  style={{ width: "32px", height: "32px" }}
                />
                <p className="mb-0 para text-black">
                  Perform excision surgery on complex cases of endometriosis
                </p>
              </div>

              <div className="d-flex gap-2 align-items-center mb-2">
                <img
                  src="/assets/hand_Icon.svg"
                  alt="hand icon"
                  style={{ width: "32px", height: "32px" }}
                />
                <p className="mb-0 para text-black">
                  Preserve or enhance fertility through endometriosis surgery
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-sm-3  position-relative d-flex justify-content-center order-lg-2 order-1">
              <img
                src="/assets/howWeHelp/herosection_backround.png"
                className="position-absolute  img-fluid heroSection_backround_img"
                alt="Background"
              />

              <img
                src="/assets/howWeHelp/heroSection.png"
                className="img-fluid position-relative"
                style={{ zIndex: 1 }}
                alt="Foreground"
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-sm-5 py-4">
          <div className="container ">
            <div className="d-flex justify-content-md-start justify-content-center">
              <h1 className="tilt tilt-primary text-white mb-3">Do You Have</h1>
            </div>
            <h1 className="mb-4 text-md-start text-center">Endometriosis ?</h1>

             <p className="medium-text d-md-none d-block" style={{ color: "#555" }}>
              Symptoms can include:
            </p>

            <p className="para ">
              It is estimated that 1 in 10 women worldwide are affected by
              endometriosis, a chronic, often painful condition where tissue
              similar to the endometrium – which normally lines the uterus –
              grows outside of the uterus. Endometriosis lesions can develop on
              reproductive organs like the ovaries and fallopian tubes, other
              abdominal locations like the bladder or bowels, and even on or
              around the lungs. 
            </p>

            <p className="para mb-4 pb-2">
              There is no medical consensus as to how or why endometriosis
              occurs, and the diverse forms and locations that lesions grow in
              means that endometriosis symptoms vary widely from person to
              person.
            </p>

            <p className="medium-text d-md-block d-none" style={{ color: "#555" }}>
              Symptoms can include:
            </p>

            <div className="row mb-5">
              <Slider {...settings}>
                {symptoms.map((symptom, index) => (
                  <div key={index} className="p-3 ps-0 text-center">
                    <div
                      className=" symptomsCard p-3 px-4  d-flex flex-column align-items-center"
                      style={{ borderRadius: "20px" }}
                    >
                      <img
                        src={symptom.img}
                        className="mt-2 mb-2"
                        style={{ width: "100px", height: "100px" }}
                      ></img>
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
            </div>
          </div>
        </div>

        <div className="container my-5 pb-sm-4 pb-0 text-center">
          <h1 className="pb-4 mb-1">
            How Endometriosis Surgical Specialists International Diagnose
            Endometriosis
          </h1>
          <p className="para">
            The doctors at ESSI are at the forefront of using Magnetic Resonance
            Imaging (MRIs) and Ultrasound to create precise maps of
            endometriosis tissue throughout the body. Our experience working
            with diverse endometriosis cases that occur both within and outside
            of the reproductive tract guides our mapping process – helping us
            detect endometriosis when other doctors have found negative or
            inconclusive results.
          </p>

          <img
            src="/assets/howWeHelp/AboutSection.png"
            className="img-fluid mt-4"
          ></img>
        </div>

        <div className="container py-sm-5 py-3 bg-white">
          <div className="row py-3">
            <div className="col-lg-6 col-12 p-2 px-4 mt-sm-4 mb-sm-0 mb-4 pt-3 ">
              <div className=" position-relative">
                <img
                  src="/assets/howWeHelp/Vedio_Image.jpg"
                  className="img-fluid"
                ></img>
                <img src="/assets/Vedio_fill.svg" className="vedio_img"></img>
              </div>

              <div className="d-lg-flex d-none gap-sm-4 gap-3 pt-sm-4 pt-4 ">
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
                  <p className="mb-0">Go to surgery</p>
                  <img
                    src="/assets/black_arrow.svg"
                    style={{ width: "15px" }}
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2 px-4 ">
              <h2 className="mb-3">
                How Endometriosis Surgical Specialists International Treat
                Endometriosis
              </h2>
              <p className="mb-3 para">
                Pharmaceutical and lifestyle approaches to treating
                endometriosis focus on managing the disease’s symptoms and
                keeping it from progressing. However, the best way to diminish
                and even eliminate endometriosis is through complete surgical
                excision. The surgeons at ESSI have the experience and cutting
                edge tools needed to achieve the best surgical outcome.
              </p>
              <p className="para">
                ESSI uses and continues to explore the newest laparoscopic
                technologies available to maximize results while minimizing scar
                tissue and surgical risks. Complete excision by our team in
                combination with a comprehensive preventative treatment plan by
                your physician should provide you with the lasting results you
                are looking for.
              </p>

              <div className="d-flex d-lg-none gap-sm-4 gap-3 pt-sm-4 pt-4 ">
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
                  <p className="mb-0">Go to surgery</p>
                  <img
                    src="/assets/black_arrow.svg"
                    style={{ width: "15px" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 pb-4">
          <h1 className="text-center pb-4 mb-1">Fast Track Your Surgery</h1>
          <p className="para text-center mb-5">
            It takes most patients an average of 5 to 6 years to receive an
            endometriosis diagnosis. We think you have waited long enough. If
            you have already received an endometriosis diagnosis, ESSI offers a
            Fast Track program that allows you to progress quickly through our
            surgical process. Patients in the Fast Track program typically
            complete surgery within 3-6 weeks.
          </p>

          <div className="row flex-column align-items-start position-relative ms-md-5 ms-0 mb-4">
            {stages.map((step, i) => (
              <div className="d-flex align-items-start gap-sm-5 gap-3" key={i}>
                {/* Left: Icon + Number + Line */}
                <div className="d-flex gap-sm-5 gap-4  me-3 position-relative ">
                  <img
                    src={step.icon}
                    width={40}
                    height={40}
                    alt={`Step ${step.index}`}
                    className=""
                  />
                  <div className="d-flex flex-column align-items-center">
                    <div className="step-index small-h2 mb-0 d-flex justify-content-center align-items-center">
                      {step.index}
                    </div>

                    {/* Only show line if not last */}
                    {i !== stages.length - 1 && (
                      <div className="vertical-line"></div>
                    )}
                  </div>
                </div>

                {/* Right: Description */}
                <div>
                  <p className="mb-0 small-h2">{step.point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
