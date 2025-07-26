// "use client";
// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import RequestConsultation from "./components/RequestConsultation";
// import Slider from "react-slick";
// import DoctorSlider from "./components/DoctorSlider";
// import { validateHeaderValue } from "http";
// // import CardSlider from "./components/cardSlider"
// import { motion } from "framer-motion";


// const reasons = [
//   {
//     icon: "/assets/homepage/icon_1.svg",
//     text: "Prior Endometriosis Surgery with No Relief",
//   },
//   {
//     icon: "/assets/homepage/icon_2.svg",
//     text: "Lupron is Recommended",
//   },
//   {
//     icon: "/assets/homepage/icon_3.svg",
//     text: "Told “You May Lose Your Ovary”",
//   },
//   {
//     icon: "/assets/homepage/icon_4.svg",
//     text: "Told “Surgery is too Risky to your Fertility”",
//   },
//   {
//     icon: "/assets/homepage/icon_5.svg",
//     text: "Told “It’s All in Your Head”",
//   },
//   {
//     icon: "/assets/homepage/icon_6.svg",
//     text: "Your Doctor is NOT an Excision Specialist!",
//   },
//   {
//     icon: "/assets/homepage/icon_7.svg",
//     text: "Painful Periods",
//   },
//   {
//     icon: "/assets/homepage/icon_8.svg",
//     text: "Pelvic Pain",
//   },
//   {
//     icon: "/assets/homepage/icon_9.svg",
//     text: "Unexplained IVF or FET Failures",
//   },
//   {
//     icon: "/assets/homepage/icon_10.svg",
//     text: "Bladder Pain",
//   },
//   {
//     icon: "/assets/homepage/icon_11.svg",
//     text: "Pain with Intercourse",
//   },
//   {
//     icon: "/assets/homepage/icon_12.svg",
//     text: "Your MRI Report is Negative",
//   },
//   {
//     icon: "/assets/homepage/icon_13.svg",
//     text: "Negative Ultrasound Findings",
//   },
//   {
//     icon: "/assets/homepage/icon_14.svg",
//     text: "Diagnosed with Adenomyosis",
//   },
//    {
//     icon: "/assets/homepage/icon_15.svg",
//     text: "Ovarian Endometrioma",
//   },
//   {
//     icon: "/assets/homepage/icon_16.svg",
//     text: "Your doctor isn’t part of a specialized surgical team.",
//   },
// ];

// const EndometriosSteps = [
//   {
//     img: "/assets/homepage/Endometrios_Mapping.png",
//     title: "Endometrios Mapping",
//     link: "/endometriosis-mapping",
//     subtitle: "Precise Diagnosis for Targeted Care",
//   },
//   {
//     img: "/assets/homepage/Endometriosis_Surgery.png",
//     title: "Endometriosis Surgery",
//     link: "/endometriosis-surgery",
//     subtitle: "Advanced Surgical Intervention & Recovery",
//   },
//   {
//     img: "/assets/homepage/Endometriosis_Infertility.png",
//     title: "Endometriosis and Infertility",
//     link: "/endometriosis-and-fertility",
//     subtitle: "Help with Complex Fertility Challenges",
//   },
//   {
//     img: "/assets/homepage/Endometriosis_Infertility.png",
//     title: "Endometriosis and Infertility",
//     link: "/endometriosis-and-fertility",
//     subtitle: "Help with Complex Fertility Challenges",
//   },
//   {
//     img: "/assets/homepage/Endometriosis_Infertility.png",
//     title: "Endometriosis and Infertility",
//     link: "/endometriosis-and-fertility",
//     subtitle: "Help with Complex Fertility Challenges",
//   },
// ];

// const stories = [
//   {
//     img: "/assets/homepage/story_Image.png",
//     category: "Category Tag or Label",
//     views: "11k",
//     title: "Understanding Endometriosis  Treatment Options Today",
//     subtitle:
//       "Learn about the latest treatment options,  expert tips, and real patient outcomes… ",
//   },
//   {
//     img: "/assets/homepage/story_Image.png",
//     category: "Category Tag or Label",
//     views: "11k",
//     title: "Understanding Endometriosis  Treatment Options Today",
//     subtitle:
//       "Learn about the latest treatment options,  expert tips, and real patient outcomes… ",
//   },
//   {
//     img: "/assets/homepage/story_Image.png",
//     category: "Category Tag or Label",
//     views: "11k",
//     title: "Understanding Endometriosis  Treatment Options Today",
//     subtitle:
//       "Learn about the latest treatment options,  expert tips, and real patient outcomes… ",
//   },
// ];

// const page = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     customPaging: () => <div className="custom-dot" />,
//     appendDots: (dots) => <ul className="custom-dots-container">{dots}</ul>,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const settings1 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     customPaging: () => <div className="custom-dot" />,
//     appendDots: (dots) => <ul className="custom-dots-container">{dots}</ul>,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <Navbar />

//       <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
//         {/* hero section */}

//         <div className="homeHeroSection">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 col-12 pt-sm-5 mt-sm-5 mt-4 ps-3  order-lg-1 order-2">
//                 <div>
//                   <h1 className="mt-2 text-sm-start text-center">
//                     Dr.{" "}
//                     <span className="tilt tilt-primary text-white">Madhu</span>
//                     <span className="tilt tilt-secondary ms-1">Bagaria</span>
//                   </h1>
//                   <h2 className="mb-4 text-sm-start text-center">
//                     Endometriosis Excision Specialist
//                   </h2>

//                   <p className="paraPrimary me-sm-5 me-0 pe-sm-3 pe- mb-sm-5 mb-2 justifyText">
//                     Hello, I’m{" "}
//                     <span className="fw-bold">Dr. Madhu Bagaria</span>, and I am
//                     an expert in the field of minimally invasive gynecological
//                     surgery for endometriosis and pelvic pain. I trained at the{" "}
//                     <span className="fw-bold">Mayo Clinic Arizona</span> and
//                     have years of experience providing specialized care. I
//                     understand the challenges of endometriosis and am here to
//                     help you navigate your journey, offering the best possible
//                     treatment tailored to your unique needs
//                   </p>

//                   {/* btns */}

//                   <div className="d-flex flex-wrap justify-content-sm-start  gap-sm-4 gap-3 pt-sm-5 pt-4 mb-sm-5 mb-3">
//                     <a
//                       href="/appointment-form"
//                       style={{ textDecoration: "none" }}
//                       className="bookOuter"
//                     >
//                       <div className="d-flex gap-3  bookButtonHero p-2">
//                         <img
//                           src="/assets/button_icon_1.svg"
//                           style={{ width: "16px" }}
//                         ></img>
//                         <p
//                           className="mb-0 text-white"
//                           style={{ whiteSpace: "nowrap" }}
//                         >
//                           Book Appointment
//                         </p>
//                         <img
//                           src="/assets/white_arrow.svg"
//                           style={{ width: "15px" }}
//                         ></img>
//                       </div>
//                     </a>

//                     <div className="d-flex gap-3  viewButtonHero p-2">
//                       <img
//                         className=""
//                         src="/assets/button_icon_2.svg"
//                         style={{ width: "16px" }}
//                       ></img>
//                       <p className="mb-0">View Treatments</p>
//                       <img
//                         src="/assets/black_arrow.svg"
//                         style={{ width: "15px" }}
//                       ></img>
//                     </div>
//                   </div>

//                   <div className="d-flex flex-sm-nowrap flex-wrap gap-sm-5 gap-3 mb-3">
//                     <div className="d-flex gap-1 align-items-center ratings px-2 py-2">
//                       <img
//                         src="/assets/star.svg"
//                         style={{ width: "24px" }}
//                       ></img>
//                       <img
//                         src="/assets/star.svg"
//                         style={{ width: "24px" }}
//                       ></img>
//                       <img
//                         src="/assets/star.svg"
//                         style={{ width: "24px" }}
//                       ></img>
//                       <img
//                         src="/assets/star.svg"
//                         style={{ width: "24px" }}
//                       ></img>
//                       <p className="mb-0 fw-bold">4.9</p>
//                     </div>

//                     <div className="d-flex gap-sm-5 gap-3">
//                       <div>
//                         <p
//                           className="mb-0 para small"
//                           style={{ fontWeight: "500" }}
//                         >
//                           Rated 4.9 out of 5
//                         </p>
//                         <p
//                           className="mb-0 para text-black small"
//                           style={{ fontWeight: "500" }}
//                         >
//                           based on 722 customer reviews
//                         </p>
//                       </div>

//                       <div className="d-flex">
//                         <img
//                           src="/assets/homepage/hero-review1.jpg"
//                           className=" rounded-circle"
//                           style={{ width: "34px", height: "34px" }}
//                         ></img>
//                         <img
//                           src="/assets/homepage/hero-review2.jpg"
//                           className=" rounded-circle"
//                           style={{
//                             width: "34px",
//                             height: "34px",
//                             marginLeft: "-5px",
//                           }}
//                         ></img>
//                         <img
//                           src="/assets/homepage/hero-review3.jpg"
//                           className=" rounded-circle"
//                           style={{
//                             width: "34px",
//                             height: "34px",
//                             marginLeft: "-5px",
//                           }}
//                         ></img>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-12   order-lg-2 order-1 d-flex justify-content-center imageBgColumn">
//                 <img
//                   src="/assets/homepage/dr-madhu.png "
//                   alt="Dr Madhu Bagaria"
//                   className="img-fluid heroSectionImage"
//                 ></img>
//               </div>
//             </div>
//           </div>

//           <img
//             src="/assets/homepage/backround2.png"
//             className="leftBackground"
//           ></img>
//         </div>

//         {/* section 2 */}

//         <div className="container py-5 mb-3">
//           <div className="row">
//             <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
//               <div
//                 className="text-center p-md-5  py-sm-4 py-5 homeCard boxShadow h-100"
//                 style={{ backgroundColor: "#FF79E6" }}
//               >
//                 <h3 className="cardTitle">5000+</h3>
//                 <h5 className="cardSubtitle">Women Treated</h5>
//               </div>
//             </div>

//             <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
//               <div
//                 className="text-center  py-md-5 py-sm-4 py-5 homeCard boxShadow h-100"
//                 style={{ backgroundColor: "#07E994" }}
//               >
//                 <h3 className="cardTitle">2300+</h3>
//                 <h5 className="cardSubtitle">Testimonials</h5>
//               </div>
//             </div>

//             <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
//               <div
//                 className="text-center py-md-5  py-sm-4 py-5 homeCard boxShadow h-100"
//                 style={{ backgroundColor: "#5F2D8B" }}
//               >
//                 <h3 className="cardTitle">30+</h3>
//                 <h5 className="cardSubtitle">Countries</h5>
//               </div>
//             </div>

//             <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
//               <div
//                 className="text-center  py-md-5 py-sm-4 py-5 homeCard boxShadow h-100"
//                 style={{ backgroundColor: "#FFB006" }}
//               >
//                 <h3 className="cardTitle">12K+</h3>
//                 <h5 className="cardSubtitle">Subscriber</h5>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* we are section */}

//         <div className="pt-4 pb-5 bg-white">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="d-block d-lg-none col-12 d-flex flex-column align-items-center">
//                 <h1 className="text-lg-start text-center  tilt tilt-primary text-white">
//                   We Are
//                 </h1>
//                 <h1 className="mb-4 text-lg-start text-center">
//                   Endometriosis Surgical Specialists International
//                 </h1>
//               </div>

//               <div className="col-lg-6 col-12">
//                 <img
//                   src="/assets/homepage/about.png"
//                   className="img-fluid mb-sm-0 mb-3"
//                 ></img>
//               </div>
//               <div className="col-lg-6 col-12">
//                 <div className="d-none d-lg-block">
//                   <h1 className="text-lg-start text-center tilt tilt-primary text-white">
//                     We Are
//                   </h1>
//                   <h1 className="mb-4 text-sm-start text-center">
//                     Endometriosis Surgical Specialists International
//                   </h1>
//                 </div>
//                 <p className="para d-sm-block d-none">
//                   Most endometriosis patients spend years enduring pain,
//                   infertility, and other debilitating symptoms before receiving
//                   a diagnosis. If that describes you, then you have had no
//                   choice other than to learn how to cope with and manage your
//                   symptoms. But suffering should not be normalized.
//                 </p>

//                 <p className="mb-4 para d-sm-block d-none">
//                   Endometriosis Surgical Specialists International (ESSI),
//                   founded by Dr. Andrea Vidali – a leading excision specialist
//                   who has been performing endometriosis surgeries for over 25
//                   years – is dedicated to achieving lasting results through
//                   complete excision. Recognizing the importance of an
//                   experienced team, Dr. Vidali assembled a surgical group at
//                   ESSI with the experience and dedication needed to deliver the
//                   outcomes you seek.
//                 </p>

//                 <div className="d-flex gap-3 align-items-center">
//                   <a href="/we-are-ESSI" style={{ textDecoration: "none" }}>
//                     {" "}
//                     <p className="learnMore mb-0">Learn More About Our Story</p>
//                   </a>
//                   <img
//                     src="/assets/purple_Arrow.svg"
//                     style={{ width: "22px" }}
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* reasons why you should section */}

//         <div className="py-5" style={{ backgroundColor: "#E9C4E2" }}>
//           <div className="container my-sm-5 ">
//             <div className="row  justify-content-md-between justify-content-center align-items-center">
//               <div className="col-md-8 col-12">
//                 <h1 className="text-center">
//                   Reasons Why You Should see{" "}
//                   <span className="tilt tilt-third">Dr. Bagaria</span>
//                 </h1>
//                 <p className="para text-center text-black">
//                   If you’ve experienced or been told any of what’s written
//                   below, please contact me today.
//                 </p>
//               </div>
//               <div className="col-lg-3 col-md-4  col-12 d-flex justify-content-center">
//                 <img
//                   src="/assets/homepage/whyChoose.png"
//                   className="img-fluid"
//                 ></img>
//               </div>
//             </div>
//             <div className="row pt-4 gx-0">
//                {
//                 reasons.map((reason , index) => (
//                   <div className="col-lg-3 col-md-4 col-6 p-sm-3 p-1 mb-sm-0 mb-2">
//                        <div className="reasonCard p-sm-3 p-2 px-sm-4  h-100 text-center d-flex flex-column align-items-center">
//                           <img src={reason.icon} className="img-fluid mb-2" style={{width:"48px" , height:"48px"}}></img>
//                           <p className="medium-text textPrimary"> {reason.text} </p>
//                         </div>
//                     </div>
//                 ))
//                }
//             </div>
//           </div>
//         </div>

//         {/* reasons Endometriosis ... are related section */}

//         <div className="container mt-sm-5 mt-0 d-flex flex-column align-items-center">
//           <h1 className="text-center mb-3">
//             Reasons Endometriosis, Infertility, and <br /> Miscarriage are Often
//             Related
//           </h1>
//           <p className="medium-text text-center mx-5 pb-sm-4 pb-0 mb-3">
//             We are the premier Endometriosis Surgical Specialists providing the
//             highest standard of care for effective treatment of pain as well as
//             ensuring lasting results.
//           </p>

//           <a href="/appointment-form" style={{ textDecoration: "none" }}>
//             <div
//               className="d-flex gap-sm-3 gap-1 bookButton p-2 px-sm-3 mb-5"
//               style={{ width: "fit-content" }}
//             >
//               <img
//                 src="/assets/button_icon_1.svg"
//                 style={{ width: "17px" }}
//                 alt="icon"
//               />
//               <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
//                 Book Appointment
//               </p>
//               <img
//                 src="/assets/white_arrow.svg"
//                 style={{ width: "16px" }}
//                 alt="arrow"
//               />
//             </div>
//           </a>
//         </div>

//         {/* explore section */}

//         <div className="container py-5 ">
//           <h1 className="text-center">
//             Explore Our Specialized{" "}
//             <span className="tilt tilt-secondary">Endometrios</span> Treatments
//           </h1>
//           <p className="large-text text-center">
//             From mapping to surgery - compassionate care at every step
//           </p>

//           <div className="row pb-5">
//             <Slider {...settings1}>
//               {EndometriosSteps.map((step, index) => (
//                 <div key={index} className="p-sm-3 p-2">
//                   <div className="stepCard boxShadow p-sm-4 p-2 pb-sm-5  text-center h-100">
//                     <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
//                       {index + 1}
//                     </h2>
//                     <div className="d-flex flex-column align-items-center">
//                       <img src={step.img} style={{ width: "60%" }} />
//                       <h5 className="medium-text">{step.title}</h5>
//                       <p className="para">{step.subtitle}</p>
//                       <a href={step.link} style={{ textDecoration: "none" }}>
//                         <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2">
//                           <p
//                             className="mb-0 text-white"
//                             style={{ whiteSpace: "nowrap" }}
//                           >
//                             Learn More
//                           </p>
//                           <img
//                             src="/assets/white_arrow.svg"
//                             style={{ width: "15px" }}
//                           />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>

//             {/* <CardSlider data={EndometriosSteps}/> */}
//           </div>
//         </div>

//         {/* meet our team */}
//         <div className="py-5 bg-white">
//           <div className="container ">
//             <div className="d-flex justify-content-center mb-4">
//               <h1 className="tilt tilt-primary text-white text-center">
//                 Meet Our Team
//               </h1>
//             </div>
//             <p className="para text-center">
//               Endometriosis Surgical Specialists International was founded by
//               Dr. Andrea Vidali, a leading excision specialist who has been
//               performing endometriosis surgeries for over 25 years. We united
//               because we are endometriosis experts who share a dedication to
//               providing premium care for a disease that is often misunderstood
//               and underserved by the medical community. Together, our collective
//               skills ensure that you will receive the most comprehensive and
//               professional endometriosis surgery available.
//             </p>

//             <div className="row pb-5">
//               <DoctorSlider />
//             </div>
//           </div>
//         </div>

//         {/* voice of trust */}
//         <div className="pt-5 pb-2">
//           <div className="container ">
//             <div className="d-flex justify-content-center mb-3">
//               <h1 className="text-center mb-0">
//                 Voices of{" "}
//                 <span className="tilt tilt-primary text-white"> Trust</span> &{" "}
//                 <span className="tilt tilt-secondary"> Transformation</span>
//               </h1>
//             </div>
//             <p className="large-text text-center mb-4 pb-2">
//               Real stories from patients who've healed and doctors who've made a
//               difference. Discover how care, compassion, and expertise come
//               together to change lives.
//             </p>

//             <div className="row pb-5">
//               <Slider {...settings}>
//                 <div className="p-3">
//                   <div
//                     className=" boxShadow p-4 pb-5"
//                     style={{ borderRadius: "16px", backgroundColor: "#FF79E7" }}
//                   >
//                     <div className="d-flex justify-content-between align-items-center ">
//                       <img
//                         src="/assets/card_comma.svg"
//                         className="cardComa"
//                       ></img>
//                       <div className="d-flex gap-1">
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                       </div>
//                     </div>
//                     <h5 className="medium-bolder text-white mb-sm-4 mb-2 mt-sm-5 mt-2 pt-3">
//                       Life-Changing Care !
//                     </h5>
//                     <p className="small-bold text-white mb-sm-5 mb-2 pb-5">
//                       After years of pain and failed diagnoses, ESSI finally
//                       gave me answers. The team listened, cared deeply, and
//                       changed my life completely.
//                     </p>

//                     <div className="d-flex align-items-center gap-3 ">
//                       <img
//                         src="/assets/homepage/Testi_review_1.png"
//                         className="reviewImg"
//                       ></img>
//                       <div>
//                         <p className="para text-white mb-1">Anjali Mehta</p>
//                         <p
//                           className="text-white mb-0"
//                           style={{ fontSize: "14px", fontWeight: "400" }}
//                         >
//                           Delhi, India
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-3 h-100">
//                   <div
//                     className=" boxShadow  middleTestimonial position-relative h-100 overflow-hidden"
//                     style={{ borderRadius: "16px" }}
//                   >
//                     <img
//                       src="/assets/homepage/testi_card_1.png"
//                       className=" img-fluid"
//                     ></img>
//                     <img
//                       src="/assets/homepage/vedio_play.svg"
//                       className="position-absolute"
//                       style={{ bottom: "43%", left: "42%" }}
//                     ></img>
//                     <div
//                       className="d-flex align-items-center gap-3  position-absolute"
//                       style={{ bottom: "9%", left: "5%" }}
//                     >
//                       <img
//                         src="/assets/homepage/Testi_review_1.png"
//                         className="reviewImg"
//                       ></img>
//                       <div>
//                         <p className="para text-white mb-1">lisa </p>
//                         <p
//                           className="text-white mb-0"
//                           style={{ fontSize: "14px", fontWeight: "400" }}
//                         >
//                           New York, USA{" "}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* <img src="/assets/homepage/testimonial_card.png" className="img-fluid"></img> */}
//                 </div>

//                 <div className="p-3">
//                   <div
//                     className=" boxShadow p-4 pb-5"
//                     style={{ borderRadius: "16px", backgroundColor: "#07E994" }}
//                   >
//                     <div className="d-flex justify-content-between align-items-center ">
//                       <img
//                         src="/assets/card_comma.svg"
//                         className="cardComa"
//                       ></img>
//                       <div className="d-flex gap-1">
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                         <img
//                           className=""
//                           src="/assets/white_star.svg"
//                           style={{ height: "24px" }}
//                         ></img>
//                       </div>
//                     </div>
//                     <h5 className="medium-bolder text-white mb-sm-4 mb-2 mt-sm-5 mt-2 pt-3">
//                       Finally Understood !
//                     </h5>
//                     <p className="small-bold text-white mb-sm-5 mb-2 pb-5">
//                       Every doctor dismissed my symptoms. ESSI took me
//                       seriously, explained everything clearly, and treated me
//                       like a person—not just a patient.
//                     </p>

//                     <div className="d-flex align-items-center gap-3 ">
//                       <img
//                         src="/assets/homepage/Testi_review_3.png"
//                         className="reviewImg"
//                       ></img>
//                       <div>
//                         <p className="para text-white mb-1">Gurleen Kaur</p>
//                         <p
//                           className="text-white mb-0"
//                           style={{ fontSize: "14px", fontWeight: "400" }}
//                         >
//                           Punjab, India
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Slider>
//             </div>
//           </div>
//         </div>

//         {/*ESSI Insights & Stories*/}

//         <div className="py-4">
//           <div className="container">
//             <h1 className="text-center mb-4">ESSI Insights & Stories </h1>
//             <p className="large-text text-center">
//               Explore expert articles, patient journeys, and the latest insights
//               on endometriosis care. Stay informed, empowered, and connected
//               with valuable tips and success stories.
//             </p>

//             <div className="row pb-5">
//               <Slider {...settings}>
//                 {stories.map((story, index) => (
//                   <div key={index} className="p-3">
//                     <div
//                       className="bg-white boxShadow p-3 py-4"
//                       style={{ borderRadius: "20px" }}
//                     >
//                       <div className="d-flex flex-column ">
//                         <img
//                           src={story.img}
//                           className="img-fluid mb-3"
//                           style={{ borderRadius: "20px" }}
//                         ></img>

//                         <div
//                           className="d-flex justify-content-between align-items-center mb-3"
//                           style={{ fontSize: "14px", fontWeight: "500" }}
//                         >
//                           <p className="mb-0">{story.category}</p>
//                           <div className="d-flex gap-2 align-items-center">
//                             <img
//                               src="/assets/eye_icon.svg"
//                               style={{ height: "16px" }}
//                             ></img>
//                             <p className="mb-0">{story.views}</p>
//                           </div>
//                         </div>

//                         <h5 className="medium-text ">{story.title}</h5>
//                         <p className="para ">{story.subtitle}</p>
//                         <div className="d-flex gap-3 align-items-center mb-3">
//                           <p className="learnMore mb-0">Read More</p>
//                           <img
//                             src="/assets/purple_Arrow.svg"
//                             style={{ width: "22px" }}
//                           ></img>
//                         </div>

//                         <div className="d-flex align-items-center gap-3 ">
//                           <img
//                             src="/assets/homepage/Testi_review_1.png"
//                             className="reviewImg"
//                           ></img>
//                           <div>
//                             <p className="para  text-black mb-1">
//                               Anjali Mehta
//                             </p>
//                             <p
//                               className=" mb-0"
//                               style={{ fontSize: "14px", fontWeight: "400" }}
//                             >
//                               Delhi, India
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default page;


// after animation added

"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RequestConsultation from "./components/RequestConsultation";
import Slider from "react-slick";
import DoctorSlider from "./components/DoctorSlider";
// import CardSlider from "./components/cardSlider"
import { motion } from "framer-motion";


const reasons = [
  {
    icon: "/assets/homepage/icon_1.svg",
    text: "Prior Endometriosis Surgery with No Relief",
  },
  {
    icon: "/assets/homepage/icon_2.svg",
    text: "Lupron is Recommended",
  },
  {
    icon: "/assets/homepage/icon_3.svg",
    text: "Told “You May Lose Your Ovary”",
  },
  {
    icon: "/assets/homepage/icon_4.svg",
    text: "Told “Surgery is too Risky to your Fertility”",
  },
  {
    icon: "/assets/homepage/icon_5.svg",
    text: "Told “It’s All in Your Head”",
  },
  {
    icon: "/assets/homepage/icon_6.svg",
    text: "Your Doctor is NOT an Excision Specialist!",
  },
  {
    icon: "/assets/homepage/icon_7.svg",
    text: "Painful Periods",
  },
  {
    icon: "/assets/homepage/icon_8.svg",
    text: "Pelvic Pain",
  },
  {
    icon: "/assets/homepage/icon_9.svg",
    text: "Unexplained IVF or FET Failures",
  },
  {
    icon: "/assets/homepage/icon_10.svg",
    text: "Bladder Pain",
  },
  {
    icon: "/assets/homepage/icon_11.svg",
    text: "Pain with Intercourse",
  },
  {
    icon: "/assets/homepage/icon_12.svg",
    text: "Your MRI Report is Negative",
  },
  {
    icon: "/assets/homepage/icon_13.svg",
    text: "Negative Ultrasound Findings",
  },
  {
    icon: "/assets/homepage/icon_14.svg",
    text: "Diagnosed with Adenomyosis",
  },
   {
    icon: "/assets/homepage/icon_15.svg",
    text: "Ovarian Endometrioma",
  },
  {
    icon: "/assets/homepage/icon_16.svg",
    text: "Your doctor isn’t part of a specialized surgical team.",
  },
];

const EndometriosSteps = [
  {
    img: "/assets/homepage/Endometrios_Mapping.png",
    title: "Endometrios Mapping",
    link: "/endometriosis-mapping",
    subtitle: "Precise Diagnosis for Targeted Care",
  },
  {
    img: "/assets/homepage/Endometriosis_Surgery.png",
    title: "Endometriosis Surgery",
    link: "/endometriosis-surgery",
    subtitle: "Advanced Surgical Intervention & Recovery",
  },
  {
    img: "/assets/homepage/Endometriosis_Infertility.png",
    title: "Endometriosis and Infertility",
    link: "/endometriosis-and-fertility",
    subtitle: "Help with Complex Fertility Challenges",
  },
  {
    img: "/assets/homepage/Endometriosis_Infertility.png",
    title: "Endometriosis and Infertility",
    link: "/endometriosis-and-fertility",
    subtitle: "Help with Complex Fertility Challenges",
  },
  {
    img: "/assets/homepage/Endometriosis_Infertility.png",
    title: "Endometriosis and Infertility",
    link: "/endometriosis-and-fertility",
    subtitle: "Help with Complex Fertility Challenges",
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

       {/* hero section */}
<div className="homeHeroSection">
  <div className="container">
    <div className="row">
      {/* Left Content with animation */}
      <motion.div
        className="col-lg-6 col-12 pt-sm-5 mt-sm-5 mt-4 ps-3  order-lg-1 order-2"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <motion.h1
            className="mt-2 text-sm-start text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Dr.{" "}
            <span className="tilt tilt-primary text-white">Madhu</span>
            <span className="tilt tilt-secondary ms-1">Bagaria</span>
          </motion.h1>

          <motion.h2
            className="mb-4 text-sm-start text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            Endometriosis Excision Specialist
          </motion.h2>

          <motion.p
            className="paraPrimary me-sm-5 me-0 pe-sm-3 mb-sm-5 mb-2 justifyText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Hello, I’m <span className="fw-bold">Dr. Madhu Bagaria</span>, and I am
            an expert in the field of minimally invasive gynecological surgery
            for endometriosis and pelvic pain. I trained at the{" "}
            <span className="fw-bold">Mayo Clinic Arizona</span> and have years of
            experience providing specialized care. I understand the challenges of
            endometriosis and am here to help you navigate your journey, offering
            the best possible treatment tailored to your unique needs
          </motion.p>

          {/* btns */}
          <motion.div
            className="d-flex flex-wrap justify-content-sm-start  gap-sm-4 gap-3 pt-sm-5 pt-4 mb-sm-5 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/appointment-form"
              style={{ textDecoration: "none" }}
              className="bookOuter"
            >
              <div className="d-flex gap-3  bookButtonHero p-2">
                <img src="/assets/button_icon_1.svg" style={{ width: "16px" }} />
                <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                  Book Appointment
                </p>
                <img src="/assets/white_arrow.svg" style={{ width: "15px" }} />
              </div>
            </a>

            <div className="d-flex gap-3  viewButtonHero p-2">
              <img src="/assets/button_icon_2.svg" style={{ width: "16px" }} />
              <p className="mb-0">View Treatments</p>
              <img src="/assets/black_arrow.svg" style={{ width: "15px" }} />
            </div>
          </motion.div>

          <motion.div
            className="d-flex flex-sm-nowrap flex-wrap gap-sm-5 gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="d-flex gap-1 align-items-center ratings px-2 py-2">
              {[1, 2, 3, 4].map((_, i) => (
                <img key={i} src="/assets/star.svg" style={{ width: "24px" }} />
              ))}
              <p className="mb-0 fw-bold">4.9</p>
            </div>

            <div className="d-flex gap-sm-5 gap-3">
              <div>
                <p className="mb-0 para small" style={{ fontWeight: "500" }}>
                  Rated 4.9 out of 5
                </p>
                <p className="mb-0 para text-black small" style={{ fontWeight: "500" }}>
                  based on 722 customer reviews
                </p>
              </div>

              <div className="d-flex">
                <img
                  src="/assets/homepage/hero-review1.jpg"
                  className="rounded-circle"
                  style={{ width: "34px", height: "34px" }}
                />
                <img
                  src="/assets/homepage/hero-review2.jpg"
                  className="rounded-circle"
                  style={{ width: "34px", height: "34px", marginLeft: "-5px" }}
                />
                <img
                  src="/assets/homepage/hero-review3.jpg"
                  className="rounded-circle"
                  style={{ width: "34px", height: "34px", marginLeft: "-5px" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image column with fade-in animation */}
      <motion.div
        className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center imageBgColumn"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <img
          src="/assets/homepage/dr-madhu.png"
          alt="Dr Madhu Bagaria"
          className="img-fluid heroSectionImage"
        />
      </motion.div>
    </div>
  </div>

  <motion.img
    src="/assets/homepage/backround2.png"
    className="leftBackground"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.3 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeInOut" }}
  />
</div>


       

        {/* section 2 */}
<div className="container py-5 mb-3">
  <div className="row">
    <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        viewport={{ once: true }}
        className="text-center p-md-5  py-sm-4 py-5 homeCard boxShadow h-100"
        style={{ backgroundColor: "#FF79E6" }}
      >
        <h3 className="cardTitle">5000+</h3>
        <h5 className="cardSubtitle">Women Treated</h5>
      </motion.div>
    </div>

    <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center  py-md-5 py-sm-4 py-5 homeCard boxShadow h-100"
        style={{ backgroundColor: "#07E994" }}
      >
        <h3 className="cardTitle">2300+</h3>
        <h5 className="cardSubtitle">Testimonials</h5>
      </motion.div>
    </div>

    <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center py-md-5  py-sm-4 py-5 homeCard boxShadow h-100"
        style={{ backgroundColor: "#5F2D8B" }}
      >
        <h3 className="cardTitle">30+</h3>
        <h5 className="cardSubtitle">Countries</h5>
      </motion.div>
    </div>

    <div className="col-md-3 col-sm-6 col-12 p-sm-2 p-3">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center  py-md-5 py-sm-4 py-5 homeCard boxShadow h-100"
        style={{ backgroundColor: "#FFB006" }}
      >
        <h3 className="cardTitle">12K+</h3>
        <h5 className="cardSubtitle">Subscriber</h5>
      </motion.div>
    </div>
  </div>
</div>


        {/* we are section */}

       <div className="pt-4 pb-5 bg-white">
  <div className="container">
    <div className="row align-items-center">
      <motion.div
        className="d-block d-lg-none col-12 d-flex flex-column align-items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-lg-start text-center  tilt tilt-primary text-white">
          We Are
        </h1>
        <h1 className="mb-4 text-lg-start text-center">
          Endometriosis Surgical Specialists International
        </h1>
      </motion.div>

      <div className="col-lg-6 col-12">
        <motion.img
          src="/assets/homepage/about.png"
          className="img-fluid mb-sm-0 mb-3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        />
      </div>

      <motion.div
        className="col-lg-6 col-12"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="d-none d-lg-block">
          <h1 className="text-lg-start text-center tilt tilt-primary text-white">
            We Are
          </h1>
          <h1 className="mb-4 text-sm-start text-center">
            Endometriosis Surgical Specialists International
          </h1>
        </div>
        <p className="para d-sm-block d-none">
          Most endometriosis patients spend years enduring pain, infertility,
          and other debilitating symptoms before receiving a diagnosis...
        </p>

        <p className="mb-4 para d-sm-block d-none">
          Endometriosis Surgical Specialists International (ESSI), founded by
          Dr. Andrea Vidali...
        </p>

        <motion.div
          className="d-flex gap-3 align-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="/we-are-ESSI" style={{ textDecoration: "none" }}>
            <p className="learnMore mb-0">Learn More About Our Story</p>
          </a>
          <img
            src="/assets/purple_Arrow.svg"
            style={{ width: "22px" }}
            alt="arrow"
          />
        </motion.div>
      </motion.div>
    </div>
  </div>
</div>


        {/* reasons why you should section */}

       <div className="py-5" style={{ backgroundColor: "#E9C4E2" }}>
  <div className="container my-sm-5">
    <div className="row justify-content-md-between justify-content-center align-items-center">
      <motion.div
        className="col-md-8 col-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center">
          Reasons Why You Should see{" "}
          <span className="tilt tilt-third">Dr. Bagaria</span>
        </h1>
        <p className="para text-center text-black">
          If you’ve experienced or been told any of what’s written below, please contact me today.
        </p>
      </motion.div>

      <motion.div
        className="col-lg-3 col-md-4 col-12 d-flex justify-content-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/homepage/whyChoose.png"
          className="img-fluid"
          alt="Why choose"
        />
      </motion.div>
    </div>

    <div className="row pt-4 gx-0">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          className="col-lg-3 col-md-4 col-6 p-sm-3 p-1 mb-sm-0 mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1 * index,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <div className="reasonCard p-sm-3 p-2 px-sm-4 h-100 text-center d-flex flex-column align-items-center">
            <img
              src={reason.icon}
              className="img-fluid mb-2"
              style={{ width: "48px", height: "48px" }}
              alt="Reason icon"
            />
            <p className="medium-text textPrimary">{reason.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


        {/* reasons Endometriosis ... are related section */}

        <div className="container mt-sm-5 mt-0 d-flex flex-column align-items-center">
          <h1 className="text-center mb-3">
            Reasons Endometriosis, Infertility, and <br /> Miscarriage are Often
            Related
          </h1>
          <p className="medium-text text-center mx-5 pb-sm-4 pb-0 mb-3">
            We are the premier Endometriosis Surgical Specialists providing the
            highest standard of care for effective treatment of pain as well as
            ensuring lasting results.
          </p>

          <a href="/appointment-form" style={{ textDecoration: "none" }}>
            <div
              className="d-flex gap-sm-3 gap-1 bookButton p-2 px-sm-3 mb-5"
              style={{ width: "fit-content" }}
            >
              <img
                src="/assets/button_icon_1.svg"
                style={{ width: "17px" }}
                alt="icon"
              />
              <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                Book Appointment
              </p>
              <img
                src="/assets/white_arrow.svg"
                style={{ width: "16px" }}
                alt="arrow"
              />
            </div>
          </a>
        </div>

        {/* explore section */}

       <div className="container py-5">
  <motion.h1
    className="text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Explore Our Specialized{" "}
    <span className="tilt tilt-secondary">Endometrios</span> Treatments
  </motion.h1>

  <motion.p
    className="large-text text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    From mapping to surgery - compassionate care at every step
  </motion.p>

  <div className="row pb-5">
    <Slider {...settings1}>
      {EndometriosSteps.map((step, index) => (
        <motion.div
          key={index}
          className="p-sm-3 p-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="stepCard boxShadow p-sm-4 p-2 pb-sm-5 text-center h-100">
            <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
              {index + 1}
            </h2>
            <div className="d-flex flex-column align-items-center">
              <img src={step.img} style={{ width: "60%" }} />
              <h5 className="medium-text">{step.title}</h5>
              <p className="para">{step.subtitle}</p>
              <a href={step.link} style={{ textDecoration: "none" }}>
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
              </a>
            </div>
          </div>
        </motion.div>
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
              <DoctorSlider />
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
        {/* First Text Testimonial */}
        <motion.div
          className="p-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <div
            className=" boxShadow p-4 pb-5"
            style={{ borderRadius: "16px", backgroundColor: "#FF79E7" }}
          >
            <div className="d-flex justify-content-between align-items-center ">
              <img
                src="/assets/card_comma.svg"
                className="cardComa"
              />
              <div className="d-flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/assets/white_star.svg"
                    style={{ height: "24px" }}
                  />
                ))}
              </div>
            </div>
            <h5 className="medium-bolder text-white mb-sm-4 mb-2 mt-sm-5 mt-2 pt-3">
              Life-Changing Care !
            </h5>
            <p className="small-bold text-white mb-sm-5 mb-2 pb-5">
              After years of pain and failed diagnoses, ESSI finally
              gave me answers. The team listened, cared deeply, and
              changed my life completely.
            </p>

            <div className="d-flex align-items-center gap-3 ">
              <img
                src="/assets/homepage/Testi_review_1.png"
                className="reviewImg"
              />
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
        </motion.div>

        {/* Middle Video Testimonial */}
        <motion.div
          className="p-3 h-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className=" boxShadow  middleTestimonial position-relative h-100 overflow-hidden"
            style={{ borderRadius: "16px" }}
          >
            <img
              src="/assets/homepage/testi_card_1.png"
              className=" img-fluid"
            />
            <img
              src="/assets/homepage/vedio_play.svg"
              className="position-absolute"
              style={{ bottom: "43%", left: "42%" }}
            />
            <div
              className="d-flex align-items-center gap-3  position-absolute"
              style={{ bottom: "9%", left: "5%" }}
            >
              <img
                src="/assets/homepage/Testi_review_1.png"
                className="reviewImg"
              />
              <div>
                <p className="para text-white mb-1">lisa</p>
                <p
                  className="text-white mb-0"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  New York, USA
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third Text Testimonial */}
        <motion.div
          className="p-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <div
            className=" boxShadow p-4 pb-5"
            style={{ borderRadius: "16px", backgroundColor: "#07E994" }}
          >
            <div className="d-flex justify-content-between align-items-center ">
              <img
                src="/assets/card_comma.svg"
                className="cardComa"
              />
              <div className="d-flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/assets/white_star.svg"
                    style={{ height: "24px" }}
                  />
                ))}
              </div>
            </div>
            <h5 className="medium-bolder text-white mb-sm-4 mb-2 mt-sm-5 mt-2 pt-3">
              Finally Understood !
            </h5>
            <p className="small-bold text-white mb-sm-5 mb-2 pb-5">
              Every doctor dismissed my symptoms. ESSI took me
              seriously, explained everything clearly, and treated me
              like a person—not just a patient.
            </p>

            <div className="d-flex align-items-center gap-3 ">
              <img
                src="/assets/homepage/Testi_review_3.png"
                className="reviewImg"
              />
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
        </motion.div>
      </Slider>
    </div>
  </div>
</div>



        {/*ESSI Insights & Stories*/}

        <div className="py-4">
  <div className="container">
    <motion.h1
      className="text-center mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      ESSI Insights & Stories
    </motion.h1>

    <motion.p
      className="large-text text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Explore expert articles, patient journeys, and the latest insights on endometriosis care.
      Stay informed, empowered, and connected with valuable tips and success stories.
    </motion.p>

    <div className="row pb-5">
      <Slider {...settings}>
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="p-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="bg-white boxShadow p-3 py-4"
              style={{ borderRadius: "20px" }}
            >
              <div className="d-flex flex-column">
                <img
                  src={story.img}
                  className="img-fluid mb-3"
                  style={{ borderRadius: "20px" }}
                />

                <div
                  className="d-flex justify-content-between align-items-center mb-3"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  <p className="mb-0">{story.category}</p>
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src="/assets/eye_icon.svg"
                      style={{ height: "16px" }}
                    />
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
                  />
                </div>

                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/assets/homepage/Testi_review_1.png"
                    className="reviewImg"
                  />
                  <div>
                    <p className="para text-black mb-1">Anjali Mehta</p>
                    <p
                      className="mb-0"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  </div>
</div>


      </div>

      <Footer />
    </>
  );
};

export default page;
