
// "use-client"
// import React from 'react'
// import Slider from "react-slick";

// const CardSlider = ({data}) => {

//      const settings1 = {
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
//     <div>
//        <Slider {...settings1}>
//               {data.map((step, index) => (
//                 <div key={index} className="p-sm-3 p-2">
//                   <div className="stepCard boxShadow p-sm-4 p-2 pb-sm-5  text-center ">
//                     <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
//                       {index + 1}
//                     </h2>
//                     <div className="d-flex flex-column align-items-center">
//                       <img src={step.img} style={{ width: "60%" }} />
//                       <h5 className="medium-text">{step.title}</h5>
//                       <p className="para">{step.subtitle}</p>
//                       <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2">
//                         <p
//                           className="mb-0 text-white"
//                           style={{ whiteSpace: "nowrap" }}
//                         >
//                           Learn More
//                         </p>
//                         <img
//                           src="/assets/white_arrow.svg"
//                           style={{ width: "15px" }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//     </div>
//   )
// }

// export default CardSlider

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CardSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      // spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 2 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {data.map((step, index) => (
        <SwiperSlide key={index} className="h-100">
          <div className="p-sm-3 p-2 h-100">
            <div
              className="stepCard boxShadow p-sm-4 p-3 pb-sm-4 text-center h-100 d-flex flex-column"
              style={{
                justifyContent: 'space-between',
              }}
            >
              {/* Step Circle */}
              <div className="mb-sm-3 mb-1">
                <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center ">
                  {index + 1}
                </h2>
              </div>

              {/* Image + Text */}
              <div className="flex-grow-1 d-flex flex-column align-items-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="mb-2"
                  style={{ width: '60%' }}
                />
                <h5 className="medium-text">{step.title}</h5>
                <p className="para">{step.subtitle}</p>
              </div>

              {/* CTA Button */}
              <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3  justify-content-center align-items-center mx-auto" style={{width:'fit-content'}}>
                <p className="mb-0 text-white" style={{ whiteSpace: 'nowrap'}}>
                  Learn More
                </p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: '15px' }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
