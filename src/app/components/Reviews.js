'use client'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { motion } from "framer-motion";
import {reviewListServ} from "../services/review.service"


const Reviews = () => {

    const [reviews, setReviews] = useState([]);
const [mixedReviews, setMixedReviews] = useState([]);

    const getReview = async () => {
      try{
        const res = await  reviewListServ();
         console.log("reviews" , res)

         setReviews(res);

    const textReviews = res.data.filter(r => r.type === "text");
    const videoReviews = res.data.filter(r => r.type === "video");

    // Mix them alternately
    const mixed = [];
    const maxLength = Math.max(textReviews.length, videoReviews.length);
    for (let i = 0; i < maxLength; i++) {
      if (textReviews[i]) mixed.push(textReviews[i]);
      if (videoReviews[i]) mixed.push(videoReviews[i]);
    }

    setMixedReviews(mixed);

      }
      catch(err){
        console.log("getting error" , err)
      }
    }

    useEffect(() => {
        getReview();
    },[])
    
    
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

  return (
    <div>
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

     {mixedReviews.map((review, index) => (
  <div key={review._id}>
    {review.type === "text" ? (
      <motion.div
        className="p-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <div
          className="boxShadow p-4 pb-5"
          style={{ borderRadius: "16px", backgroundColor: "#FF79E7" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <img src="/assets/card_comma.svg" className="cardComa" />
            <div className="d-flex gap-1">
              {[...Array(review.rating)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/white_star.svg"
                  style={{ height: "24px" }}
                />
              ))}
            </div>
          </div>

          <p className="small-bold text-white  my-2 py-4">
            {review?.review}
          </p>

          <div className="d-flex align-items-center gap-3">
          
            <div>
              <p className="para text-white mb-1">
                {review.userId?.name || "Anonymous"}
              </p>
              
            </div>
          </div>
        </div>
      </motion.div>
    ) : (
      <motion.div
        className="p-3 h-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div
          className="boxShadow middleTestimonial position-relative h-100 overflow-hidden"
          style={{ borderRadius: "16px" }}
        >
          <video
            controls
            preload="metadata"
            className="img-fluid w-100"
            // poster="/assets/homepage/testi_card_1.png" // fallback thumbnail
            style={{ maxHeight: "300px", objectFit: "cover" }}
          >
            <source src={review.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <img
            src="/assets/homepage/vedio_play.svg"
            className="position-absolute"
            style={{ bottom: "43%", left: "42%" }}
          />

          <div
            className="d-flex align-items-center gap-3 position-absolute"
            style={{ bottom: "9%", left: "5%" }}
          >
            <div>
              <p className="para text-white mb-1">
                {review.userId?.name || "Anonymous"}
              </p>
             
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </div>
))}

            
              </Slider>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reviews
