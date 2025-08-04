"use client"
import React from 'react'
import { useState , useEffect } from 'react';
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { getBlogListServ } from "../services/blog.service";

const BlogSection = () => {

    const router = useRouter();

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


    const [stories , setStories] = useState([]);
    
      const getBlogList = async () => {
         try{
          const res = await getBlogListServ();
         console.log("res" ,res)
           setStories(res.data.data);
         }
         catch(err){
          console.log("getting err in blog list", err)
         }
      }
    
      useEffect(() => {
             getBlogList();
      },[])


  return (
    <div>
       <Slider {...settings}>
                {/* {stories.map((story, index) => (
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
                ))} */}
                {Array.isArray(stories) && stories.map((story, index) => (
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
          src={story.image}
          className="img-fluid mb-3"
          style={{ borderRadius: "20px" }}
          alt="blog"
        />

        {/* Optional: Show first tag as category */}
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{ fontSize: "14px", fontWeight: "500" }}
        >
          <p className="mb-0">
            {story.tags?.split(",")[0] || "Blog"}
          </p>
        </div>

        <h5 className="medium-text">{story.title}</h5>

        <div
          className="para"
          dangerouslySetInnerHTML={{ __html: story.shortDescription }}
        />

        <div className="d-flex gap-3 align-items-center mb-3" 
        style={{cursor:"pointer"}}
         onClick={() => router.push(`/blog/${story._id}`)}>
          <p className="learnMore mb-0" >Read More</p>
          <img
            src="/assets/purple_Arrow.svg"
            style={{ width: "22px" }}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  </motion.div>
))}

              </Slider>
    </div>
  )
}

export default BlogSection
