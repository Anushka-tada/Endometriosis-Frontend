// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const TeamMember = [
//   {
//     img: "/assets/homepage/Dr_Alessandra.png",
//     title: "Dr. Alessandra Di Giovanni",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Dr. Alessandra Da Giovanni is a consultant at the Center for Advanced Pelvic Surgery, Malzoni Research Hospital in Avellino, Italy, specializing in pelvic ultrasonography for gynecological conditions, with over 10,000 procedures and a diagnostic accuracy of over 95% for endometriosis... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Alessio.png",
//     title: "Dr. Alessio Pigazzi",
//     subtitle: "California | ESSI Mentor",
//     para: "Dr. Alessio Pigazzi, MD, PhD, FACS, is a renowned colorectal surgeon currently serving as Chief of Colorectal Surgery at NewYork-Presbyterian/Weill Cornell Medical Center. He is highly specialized in minimally invasive techniques, including laparoscopic and robotic surgeries, particularly for complex colon...",
//   },
//   {
//     img: "/assets/homepage/Dr_Francesco.png",
//     title: "Dr. Francesco Di Chiara",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Dr. Francesco Di Chiara is a leading thoracic surgeon known for pioneering uniportal VATS (Video-Assisted Thoracoscopic Surgery) at multiple institutions and performing complex procedures with this advanced technique. He serves as a proctor for minimally invasive thoracic surgery...",
//   },
//   {
//     img: "/assets/homepage/Dr_Andrea.png",
//     title: "Dr. Andrea Vidali",
//     subtitle:
//       "New York, New Jersey, Florida, Illinois, and Europe | ESSI Mentor  ",
//     para: "Dr. Andrea Vidali, MD, is a world-renowned miscarriage specialist, reproductive immunologist, and endometriosis surgeon. He has extensive experience in minimally invasive and robotic surgery as well as multi-organ endometriosis surgery. As a founder of the...",
//   },
//   {
//     img: "/assets/homepage/Dr_Henrique.png",
//     title: "Dr. Henrique Abrão",
//     subtitle: "Brazil/Latin America ",
//     para: "Dr. Henrique Abrão is a gynecologist, gynecological surgeon, and a leading reference in neuropelveology in Brazil. Trained in São Paulo and certified as a Master in Neuropelveology in Switzerland under Dr. Marc Possover, he specializes in treating chronic pelvic pain linked to nerve conditions...",
//   },
//   {
//     img: "/assets/homepage/Dr_Joseph.png",
//     title: "Dr. Joseph Raccuia",
//     subtitle: "New York and New Jersey | ESSI Mentor",
//     para: "Dr. Joseph S. Raccuia, while primarily recognized for his expertise in general surgery and surgical oncology, also treats endometriosis, particularly its more complex forms, such as extrapelvic endometriosis. He has contributed to understanding and raising awareness around the disease...",
//   },
//   {
//     img: "/assets/homepage/Dr_Madhu.png",
//     title: "Dr. Madhu Bagaria",
//     subtitle: "New York and New Jersey",
//     para: "Dr. Bagaria, MD, is a highly skilled gynecological surgeon specializing in endometriosis and pelvic pain. Trained at the prestigious Mayo Clinic Arizona, she brings expertise in minimally invasive gynecological surgery and a patient-centered approach to care. With over six years of experience at Mayo...",
//   },
//   {
//     img: "/assets/homepage/Dr_Mallory.png",
//     title: "Dr. Mallory Stuparich",
//     subtitle: "California",
//     para: "Dr. Mallory Stuparich, MD, specializes in the surgical management of endometriosis and complex benign gynecologic conditions. She believes patients deserve expert, high-quality surgical care, employing a multidisciplinary team when necessary. Dr. Stuparich views the physician-patient... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Mamta.png",
//     title: "Dr. Mamta Mamik",
//     subtitle: "New York and New Jersey",
//     para: "Dr. Mamta Mamik is a dedicated endometriosis specialist based in New York City, known for her expertise in excision surgery and comprehensive patient care. Dr. Mamta Mamik approaches endometriosis treatment with a deep understanding of the embryonic rest theory, coelomic metaplasia, and stem... ",
//   },

//   {
//     img: "/assets/homepage/Dr_Marcello.png",
//     title: "Dr. Marcello Ceccaroni",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Prof. Marcello Ceccaroni is an internationally renowned expert in deep endometriosis management, gynecological oncology, and minimally invasive pelvic surgery, currently heading the Department of Obstetrics and Gynecology, Gynecological Oncology, and Minimally Invasive Pelvic Surgery at IRCCS... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Marco.png",
//     title: "Dr. Marco Zoccali",
//     subtitle: "New York | ESSI Mentor",
//     para: "Dr. Zoccali is a leading colorectal surgeon specializing in minimally invasive and robotic-assisted surgery for colorectal cancer, inflammatory bowel diseases (IBD), and benign colorectal conditions. As faculty at Columbia University, he is dedicated to advancing surgical innovation... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Mario.png",
//     title: "Dr. Mario Malzoni",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Scientific Director and Chief of Advanced Gynecological Endoscopy, National Center for Endometriosis, and MACC (Malzoni Cancer Center) at Malzoni Research Hospital in Avellino, Italy, Dr. Mario Malzoni is recognized worldwide as a leading expert in minimally invasive surgery for severe... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Mauricio.png",
//     title: "Dr. Mauricio Abrão",
//     subtitle: "Brazil/Latin America | ESSI Mentor",
//     para: "Dr. Abrão is a global leader in both surgery and research & development within the field of minimally invasive surgical techniques for endometriosis excision. He is also an established medical leader serving as the head of Gynecology at Hospital Beneficência Portuguesa de São Paulo and formerly acted... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Osbert.png",
//     title: "Dr. Osbert Fernandez",
//     subtitle: "Florida",
//     para: "Dr. Osbert Fernandez, a native Floridian and proud second-generation Cuban-American doctor, is an expert in robotic-assisted surgery for complex endometriosis cases, including bowel invasion, rectal involvement, and frozen pelvis. Known for his compassionate, patient-centered approach... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Sallie.png",
//     title: "Dr. Sallie Sarrel",
//     subtitle: "Florida",
//     para: "Dr. Sallie Sarrel, is a dedicated advocate for individuals with endometriosis, having lived with the condition herself for nearly two decades. She co-founded The Endometriosis Summit, the largest endometriosis-focused conference, which trains patients, practitioners, and surgeons  while fostering global...",
//   },
// ];

// const NextArrow = ({ onClick }) => (
//   <div className="custom-arrow next-arrow" onClick={onClick}>
//     <img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" alt="Next" />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div className="custom-arrow prev-arrow" onClick={onClick}>
//     <img src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png" alt="Prev" />
//   </div>
// );

// // Helper: map current slide to 5-dot index
// const mapToFiveDots = (index, totalSlides, slidesToShow) => {
//   const lastIndex = totalSlides - slidesToShow;

//   if (totalSlides <= slidesToShow) return 0;
//   if (index === 0) return 0;
//   if (index === 1) return 1;
//   if (index >= lastIndex) return 4;
//   if (index === lastIndex - 1) return 3;
//   return 2;
// };

// const DoctorSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slidesToShow = 3;
//   const totalSlides = TeamMember.length;

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_, next) => setCurrentSlide(next),
//     customPaging: (i) => {
//       const activeDot = mapToFiveDots(currentSlide, totalSlides, slidesToShow);
//       return (
//         <div
//           style={{
//             width: "8px",
//             height: "8px",
//             borderRadius: "50%",
//             background: i === activeDot ? "black" : "#ccc",
//             margin: "0 4px",
//           }}
//         />
//       );
//     },
//     appendDots: (dots) => (
//       <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
//         {dots.slice(0, 5)}
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container">
//       <Slider {...settings}>
//         {TeamMember.map((member, index) => (
//           <div key={index} className="p-3">
//             <div className="bg-white boxShadow p-2 px-4" style={{ borderRadius: "20px" }}>
//               <img
//                 src={member.img}
//                 className="img-fluid mb-2"
//                 style={{ borderRadius: "20px" }}
//               />
//               <h5 className="medium-text mb-2">{member.title}</h5>
//               <p className="teamSubtitle">{member.subtitle}</p>
//               <p className="para text-black">{member.para}</p>
//               <div className="d-flex flex-lg-nowrap flex-wrap gap-sm-4 gap-2 mb-3 mt-3">
//                 <a href="/appointment-form" style={{ textDecoration: "none" }}>
//                   <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3">
//                     <img src="/assets/button_icon_1.svg" style={{ width: "16px" }} />
//                     <p className="mb-0 text-white" style={{ whiteSpace: "nowrap", fontSize: "12px" }}>
//                       Book Appointment
//                     </p>
//                     <img src="/assets/white_arrow.svg" style={{ width: "15px" }} />
//                   </div>
//                 </a>
//                 <a href="/our-team" style={{ textDecoration: "none" }}>
//                   <div className="d-flex gap-sm-2 gap-1 viewButton p-2 px-3">
//                     <p className="mb-0 textPrimary" style={{ whiteSpace: "nowrap", fontSize: "12px" }}>
//                       Read More
//                     </p>
//                     <img src="/assets/primary_arrow.svg" style={{ width: "15px" }} />
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default DoctorSlider;

"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { LoggedDataContext } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";


// const TeamMember = [
//   {
//     img: "/assets/homepage/Dr_Alessandra.png",
//     title: "Dr. Alessandra Di Giovanni",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Dr. Alessandra Da Giovanni is a consultant at the Center for Advanced Pelvic Surgery, Malzoni Research Hospital in Avellino, Italy, specializing in pelvic ultrasonography for gynecological conditions, with over 10,000 procedures and a diagnostic accuracy of over 95% for endometriosis... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Alessio.png",
//     title: "Dr. Alessio Pigazzi",
//     subtitle: "California | ESSI Mentor",
//     para: "Dr. Alessio Pigazzi, MD, PhD, FACS, is a renowned colorectal surgeon currently serving as Chief of Colorectal Surgery at NewYork-Presbyterian/Weill Cornell Medical Center. He is highly specialized in minimally invasive techniques, including laparoscopic and robotic surgeries, particularly for complex colon...",
//   },
//   {
//     img: "/assets/homepage/Dr_Francesco.png",
//     title: "Dr. Francesco Di Chiara",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Dr. Francesco Di Chiara is a leading thoracic surgeon known for pioneering uniportal VATS (Video-Assisted Thoracoscopic Surgery) at multiple institutions and performing complex procedures with this advanced technique. He serves as a proctor for minimally invasive thoracic surgery...",
//   },
//   {
//     img: "/assets/homepage/Dr_Andrea.png",
//     title: "Dr. Andrea Vidali",
//     subtitle:
//       "New York, New Jersey, Florida, Illinois, and Europe | ESSI Mentor  ",
//     para: "Dr. Andrea Vidali, MD, is a world-renowned miscarriage specialist, reproductive immunologist, and endometriosis surgeon. He has extensive experience in minimally invasive and robotic surgery as well as multi-organ endometriosis surgery. As a founder of the...",
//   },
//   {
//     img: "/assets/homepage/Dr_Henrique.png",
//     title: "Dr. Henrique Abrão",
//     subtitle: "Brazil/Latin America ",
//     para: "Dr. Henrique Abrão is a gynecologist, gynecological surgeon, and a leading reference in neuropelveology in Brazil. Trained in São Paulo and certified as a Master in Neuropelveology in Switzerland under Dr. Marc Possover, he specializes in treating chronic pelvic pain linked to nerve conditions...",
//   },
//   {
//     img: "/assets/homepage/Dr_Joseph.png",
//     title: "Dr. Joseph Raccuia",
//     subtitle: "New York and New Jersey | ESSI Mentor",
//     para: "Dr. Joseph S. Raccuia, while primarily recognized for his expertise in general surgery and surgical oncology, also treats endometriosis, particularly its more complex forms, such as extrapelvic endometriosis. He has contributed to understanding and raising awareness around the disease...",
//   },
//   {
//     img: "/assets/homepage/Dr_Madhu.png",
//     title: "Dr. Madhu Bagaria",
//     subtitle: "New York and New Jersey",
//     para: "Dr. Bagaria, MD, is a highly skilled gynecological surgeon specializing in endometriosis and pelvic pain. Trained at the prestigious Mayo Clinic Arizona, she brings expertise in minimally invasive gynecological surgery and a patient-centered approach to care. With over six years of experience at Mayo...",
//   },
//   {
//     img: "/assets/homepage/Dr_Mallory.png",
//     title: "Dr. Mallory Stuparich",
//     subtitle: "California",
//     para: "Dr. Mallory Stuparich, MD, specializes in the surgical management of endometriosis and complex benign gynecologic conditions. She believes patients deserve expert, high-quality surgical care, employing a multidisciplinary team when necessary. Dr. Stuparich views the physician-patient... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Mamta.png",
//     title: "Dr. Mamta Mamik",
//     subtitle: "New York and New Jersey",
//     para: "Dr. Mamta Mamik is a dedicated endometriosis specialist based in New York City, known for her expertise in excision surgery and comprehensive patient care. Dr. Mamta Mamik approaches endometriosis treatment with a deep understanding of the embryonic rest theory, coelomic metaplasia, and stem... ",
//   },

//   {
//     img: "/assets/homepage/Dr_Marcello.png",
//     title: "Dr. Marcello Ceccaroni",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Prof. Marcello Ceccaroni is an internationally renowned expert in deep endometriosis management, gynecological oncology, and minimally invasive pelvic surgery, currently heading the Department of Obstetrics and Gynecology, Gynecological Oncology, and Minimally Invasive Pelvic Surgery at IRCCS... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Marco.png",
//     title: "Dr. Marco Zoccali",
//     subtitle: "New York | ESSI Mentor",
//     para: "Dr. Zoccali is a leading colorectal surgeon specializing in minimally invasive and robotic-assisted surgery for colorectal cancer, inflammatory bowel diseases (IBD), and benign colorectal conditions. As faculty at Columbia University, he is dedicated to advancing surgical innovation... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Mario.png",
//     title: "Dr. Mario Malzoni",
//     subtitle: "Europe | ESSI Mentor",
//     para: "Scientific Director and Chief of Advanced Gynecological Endoscopy, National Center for Endometriosis, and MACC (Malzoni Cancer Center) at Malzoni Research Hospital in Avellino, Italy, Dr. Mario Malzoni is recognized worldwide as a leading expert in minimally invasive surgery for severe... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Mauricio.png",
//     title: "Dr. Mauricio Abrão",
//     subtitle: "Brazil/Latin America | ESSI Mentor",
//     para: "Dr. Abrão is a global leader in both surgery and research & development within the field of minimally invasive surgical techniques for endometriosis excision. He is also an established medical leader serving as the head of Gynecology at Hospital Beneficência Portuguesa de São Paulo and formerly acted... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Osbert.png",
//     title: "Dr. Osbert Fernandez",
//     subtitle: "Florida",
//     para: "Dr. Osbert Fernandez, a native Floridian and proud second-generation Cuban-American doctor, is an expert in robotic-assisted surgery for complex endometriosis cases, including bowel invasion, rectal involvement, and frozen pelvis. Known for his compassionate, patient-centered approach... ",
//   },
//   {
//     img: "/assets/homepage/Dr_Sallie.png",
//     title: "Dr. Sallie Sarrel",
//     subtitle: "Florida",
//     para: "Dr. Sallie Sarrel, is a dedicated advocate for individuals with endometriosis, having lived with the condition herself for nearly two decades. She co-founded The Endometriosis Summit, the largest endometriosis-focused conference, which trains patients, practitioners, and surgeons  while fostering global...",
//   },
// ];


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
    para: "Dr. Alessio Pigazzi, MD, PhD, FACS, is a renowned colorectal surgeon currently serving as Chief of Colorectal Surgery at NewYork-Presbyterian/Weill Cornell Medical Center. He is highly specialized in minimally invasive techniques, including laparoscopic and robotic surgeries...",
  },
  {
    img: "/assets/homepage/Dr_Francesco.png",
    title: "Dr. Francesco Di Chiara",
    subtitle: "Europe | ESSI Mentor",
    para: "Dr. Francesco Di Chiara is a leading thoracic surgeon known for pioneering uniportal VATS (Video-Assisted Thoracoscopic Surgery) at multiple institutions and performing complex procedures with this advanced technique. He serves as a proctor for...",
  },
  {
    img: "/assets/homepage/Dr_Andrea.png",
    title: "Dr. Andrea Vidali",
    subtitle:
      "New York, New Jersey, Florida, Illinois, and Europe | ESSI Mentor  ",
    para: "Dr. Andrea Vidali, MD, is a world-renowned miscarriage specialist, reproductive immunologist, and endometriosis surgeon. He has extensive experience in minimally invasive and robotic surgery as well as multi-organ endometriosis surgery. As a founder of the...",
  },
  {
    img: "/assets/homepage/Dr_Henrique.png",
    title: "Dr. Henrique Abrão",
    subtitle: "Brazil/Latin America ",
    para: "Dr. Henrique Abrão is a gynecologist, gynecological surgeon, and a leading reference in neuropelveology in Brazil. Trained in São Paulo and certified as a Master in Neuropelveology in Switzerland under Dr. Marc Possover, he specializes in treating chronic pelvic pain...",
  },
  {
    img: "/assets/homepage/Dr_Joseph.png",
    title: "Dr. Joseph Raccuia",
    subtitle: "New York and New Jersey | ESSI Mentor",
    para: "Dr. Joseph S. Raccuia, while primarily recognized for his expertise in general surgery and surgical oncology, also treats endometriosis, particularly its more complex forms, such as extrapelvic endometriosis. He has contributed to understanding and raising...",
  },
  {
    img: "/assets/homepage/Dr_Madhu.png",
    title: "Dr. Madhu Bagaria",
    subtitle: "New York and New Jersey",
    para: "Dr. Bagaria, MD, is a highly skilled gynecological surgeon specializing in endometriosis and pelvic pain. Trained at the prestigious Mayo Clinic Arizona, she brings expertise in minimally invasive gynecological surgery and a patient-centered approach to care...",
  },
  {
    img: "/assets/homepage/Dr_Mallory.png",
    title: "Dr. Mallory Stuparich",
    subtitle: "California",
    para: "Dr. Mallory Stuparich, MD, specializes in the surgical management of endometriosis and complex benign gynecologic conditions. She believes patients deserve expert, high-quality surgical care, employing a multidisciplinary team when necessary. Dr. Stuparich views the... ",
  },
  {
    img: "/assets/homepage/Dr_Mamta.png",
    title: "Dr. Mamta Mamik",
    subtitle: "New York and New Jersey",
    para: "Dr. Mamta Mamik is a dedicated endometriosis specialist based in New York City, known for her expertise in excision surgery and comprehensive patient care. Dr. Mamta Mamik approaches endometriosis treatment with a deep understanding of the embryonic... ",
  },

  {
    img: "/assets/homepage/Dr_Marcello.png",
    title: "Dr. Marcello Ceccaroni",
    subtitle: "Europe | ESSI Mentor",
    para: "Prof. Marcello Ceccaroni is an internationally renowned expert in deep endometriosis management, gynecological oncology, and minimally invasive pelvic surgery, currently heading the Department of Obstetrics and Gynecology, Gynecological Oncology, and... ",
  },
  {
    img: "/assets/homepage/Dr_Marco.png",
    title: "Dr. Marco Zoccali",
    subtitle: "New York | ESSI Mentor",
    para: "Dr. Zoccali is a leading colorectal surgeon specializing in minimally invasive and robotic-assisted surgery for colorectal cancer, inflammatory bowel diseases (IBD), and benign colorectal conditions. As faculty at Columbia University, he is dedicated to advancing surgical innovation... ",
  },
  {
    img: "/assets/homepage/Dr_Mario.png",
    title: "Dr. Mario Malzoni",
    subtitle: "Europe | ESSI Mentor",
    para: "Scientific Director and Chief of Advanced Gynecological Endoscopy, National Center for Endometriosis, and MACC (Malzoni Cancer Center) at Malzoni Research Hospital in Avellino, Italy, Dr. Mario Malzoni is recognized worldwide as a leading expert in minimally invasive... ",
  },
  {
    img: "/assets/homepage/Dr_Mauricio.png",
    title: "Dr. Mauricio Abrão",
    subtitle: "Brazil/Latin America | ESSI Mentor",
    para: "Dr. Abrão is a global leader in both surgery and research & development within the field of minimally invasive surgical techniques for endometriosis excision. He is also an established medical leader serving as the head of Gynecology at Hospital Beneficência Portuguesa de... ",
  },
  {
    img: "/assets/homepage/Dr_Osbert.png",
    title: "Dr. Osbert Fernandez",
    subtitle: "Florida",
    para: "Dr. Osbert Fernandez, a native Floridian and proud second-generation Cuban-American doctor, is an expert in robotic-assisted surgery for complex endometriosis cases, including bowel invasion, rectal involvement, and frozen pelvis. Known for his compassionate... ",
  },
  {
    img: "/assets/homepage/Dr_Sallie.png",
    title: "Dr. Sallie Sarrel",
    subtitle: "Florida",
    para: "Dr. Sallie Sarrel, is a dedicated advocate for individuals with endometriosis, having lived with the condition herself for nearly two decades. She co-founded The Endometriosis Summit, the largest endometriosis-focused conference, which trains patients...",
  },
];
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" alt="Next"  />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <img src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png" alt="Prev"  />
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

const DoctorSlider = () => {
   
  
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
    const handleResize = () => setSlidesToShow(getSlidesToShow(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = TeamMember.length;

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
        breakpoint: 1025,
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
   <div className="container">
  <Slider {...settings} className="d-flex align-items-center">
    {TeamMember.map((member, index) => (
      <motion.div
        key={index}
        className="p-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <div
          className="bg-white boxShadow p-2 px-4"
          style={{ borderRadius: "20px" }}
        >
          <img
            src={member.img}
            className="img-fluid mb-2"
            style={{ borderRadius: "20px" }}
          />
          <h5 className="medium-text mb-2">{member.title}</h5>
          <p className="teamSubtitle">{member.subtitle}</p>
          <p className="para text-black">{member.para}</p>
          <div className="d-flex sliderBtndoctor gap-sm-4 gap-2 mb-3 mt-3">
           
              <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3" onClick={handleBtnClick}>
                <img
                  src="/assets/button_icon_1.svg"
                  style={{ width: "16px" }}
                />
                <p
                  className="mb-0 text-white"
                  style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                >
                  Book Appointment
                </p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: "15px" }}
                />
              </div>
          
            <a href="/our-team" style={{ textDecoration: "none" }}>
              <div className="d-flex gap-sm-2 gap-1 viewButton p-2 px-3">
                <p
                  className="mb-0 textPrimary"
                  style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                >
                  Read More
                </p>
                <img
                  src="/assets/primary_arrow.svg"
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

  );
};

export default DoctorSlider;
