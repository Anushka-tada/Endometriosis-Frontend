
"use-client"
import React from 'react'
import Slider from "react-slick";

const cardSlider = ({data}) => {

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
    <div>
       <Slider {...settings1}>
              {data.map((step, index) => (
                <div key={index} className="p-sm-3 p-2">
                  <div className="stepCard boxShadow p-sm-4 p-2 pb-sm-5  text-center ">
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
  )
}

export default cardSlider