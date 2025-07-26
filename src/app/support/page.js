"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const questions = [
  {
    que: "Why Join ESSI Peer Support?",
    ans: [
      {
        type: "p",
        content:
          "ESSI Peer Support is a dedicated space for connection, understanding, and community for people living with endometriosis. Here, your experience matters, your voice is valued, and you’re surrounded by people who truly understand what you’re facing because no one should have to go through endometriosis alone.",
      },
    ],
  },
  {
    que: "What You’ll Find Here",
    ans: [
      {
        type: "p",
        content:
          "This community isn’t about surface-level support. It’s about connections, honest conversations, and strength through shared experiences.",
      },
      {
        type: "p",
        content: "Inside, you’ll find:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Authentic connection",
            text: "with people who understand what you’re going through",
          },
          {
            label: "Stories that validate",
            text: "support, and remind you that you’re not alone",
          },
          {
            label: "A space to speak up",
            text: "be heard, and be part of something bigger",
          },
        ],
      },
    ],
  },
  {
    que: "What You Get When You Join",
    ans: [
      {
        type: "ul",
        items: [
          {
            label: "Peer Support Circles",
            text: "Weekly virtual gatherings where members talk, share advice, and hold space for one another. Come as you are. Leave feeling lighter.",
          },
          {
            label: "Ongoing Conversations and Shared Resources",
            text: "From everyday questions to personal reflections, the conversation remains open. You’ll also find trusted articles, wellness tips, and insights—all shared with care.",
          },
          {
            label: "Live Storytelling Events:",
            text: "Monthly sessions where members can share their personal journeys. It’s honest, powerful, and deeply moving.",
          },
          {
            label: "And more!",
          },
        ],
      },
    ],
  },
  {
    que: "Before You Join",
    ans: [
      {
        type: "p",
        content:
          "To keep ESSI Peer Support safe, respectful, and helpful for everyone, please keep the following in mind:",
      },
      {
        type: "ul",
        items: [
          {
            label: "This is not medical advice:",
            text: "it is a peer support space, not a substitute for professional medical care. Always consult with a licensed provider.",
          },
          {
            label: "Not HIPAA-compliant:",
            text: "Please don’t share medical records or personally identifiable health information. Your privacy matters, but please note that this platform is not HIPAA-regulated.",
          },
          {
            label: "No doctor referrals.",
          },
          {
            label: "No sales or promotions:",
            text: "Marketing, fundraising, or promoting services is not allowed and may result in removal.",
          },
          {
            label: "Respect is required: ",
            text: "We’re an inclusive space. Discrimination, bullying, or hate speech will not be tolerated.",
          },
        ],
      },
      {
        type: "p",
        content: "Join us and be part of a community that truly gets it.",
      },
    ],
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

      <div>
        {/* Hero Section */}
        <div className="container pb-5 pt-4 my-md-5">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 col-12 d-flex flex-column align-items-md-start align-items-center">
              <img
                src="https://media1-production-mightynetworks.imgix.net/asset/ededa788-10ee-49c3-b205-fc3d56ad5347/Logo_Full-03.jpg?ixlib=rails-4.2.0&fm=jpg&q=100&auto=format&w=256&h=256&fit=crop&crop=faces&impolicy=Avatar"
                className="img-fluid"
                style={{ width: "40%" }}
                alt="ESSI Logo"
              />
              <h1 className="text-md-start text-center">Welcome to ESSI Peer Support</h1>
              <p  className="text-md-start text-center">You don’t have to go through endometriosis alone.</p>

              <div
                className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3 mb-3"
                style={{ width: "fit-content" }}
              >
                <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                  Join Now
                </p>
              </div>
            </div>

            <div className="col-md-6 col-12   pt-sm-5 pt-3">
              {questions.map((question, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid #d6d4d6",
                  }}
                >
                  <div
                    className="d-flex justify-content-between align-items-center py-4"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => toggleAnswer(index)}
                  >
                    <p className="medium-text mb-0">{question.que}</p>
                    <img
                      className={`toggle-icon ${
                        activeIndex === index ? "open" : ""
                      }`}
                      src={
                        activeIndex === index
                          ? "https://cdn-icons-png.flaticon.com/128/649/649686.png"
                          : "https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
                      }
                      alt="Toggle"
                      style={{
                        width: "23px",
                        height: "23px",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>

                  {/* {activeIndex === index && ( */}
                  <div
                    className={`answer-wrapper ${
                      activeIndex == index ? "open" : ""
                    }`}
                  >
                    <div className="py-3 answer-inner">
                      {(question.ans || []).map((block, i) => {
                        if (block.type === "p") {
                          return (
                            <p key={i} className="para">
                              {block.content}
                            </p>
                          );
                        }
                        if (block.type === "ul") {
                          return (
                            <ul key={i}>
                              {block.items.map((item, j) => (
                                <li key={j} className="para mb-3">
                                  <span
                                    className=" text-black"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {item.label}
                                  </span>{" "}
                                  {item.text}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  {/* )} */}
                </div>
              ))}
            </div>
          </div>
        </div>


         {/* conact us */}
       <div className="bg-white pb-5 pt-4">
           <div className="container  my-md-5">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 col-12 d-flex flex-column align-items-md-start align-items-center">
              <img
                src="https://blastup.com/img/icons/paper-plane.svg"
                className="img-fluid"
                style={{ width: "40%" }}
                alt="ESSI Logo"
              />
              <h1 className="text-md-start text-center">Don't hesitate to contact us</h1>
              <p  className="text-md-start text-center">Shoot us a message with whatever concerns you might have and we'll get back to you as quickly as possible.</p>

              <div
                className="d-flex gap-sm-3 gap-1 p-2 px-3 mb-3 border"
                style={{ width: "fit-content" , borderRadius:"10px"}}
              >
                <img src="https://blastup.com/img/icons/clock.svg" style={{height:"48px" }}></img>
                <div>
                  <p className="mb-0 small-medium" style={{ whiteSpace: "nowrap" }}>Current response time </p>
                  <p className="para mb-0">Within 20 minutes</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12  pt-sm-5 pt-3">
              <div className="div">
                     <label className="para mb-md-3 mb-2">Full name</label>
                      <input
                        className="form-input py-3 px-3 w-100 mb-md-4 mb-2"
                        type="text"
                        placeholder="Enter your name "
                      ></input>

                       <label className="para mb-md-3 mb-2">Email address</label>
                      <input
                        className="form-input py-3 px-3 w-100 mb-md-4 mb-2"
                        type="text"
                        placeholder="Enter your email address "
                      ></input>

                       <label className="para mb-md-3 mb-2">Message</label>
                       <textarea
                        className="form-input py-3 px-3 w-100 mb-md-4 mb-2"
                        type="text"
                        rows={3}
                        placeholder="Enter Your message"
                      />
              </div>

                <div
                className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3 mb-3"
                style={{ width: "fit-content" }}
              >
                <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                  Send Message
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
        

        {/* other ways */}

        {/* <div className="container pb-5 pt-4 my-md-5">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 col-12 d-flex flex-column align-items-md-start align-items-center">
              <img
                src="https://blastup.com/img/icons/address.svg"
                className="img-fluid"
                style={{ width: "40%" }}
                alt="ESSI Logo"
              />
              <h1 className="text-md-start text-center">Other ways to reach us</h1>
              <p  className="text-md-start text-center">Alternative ways to contact us, for your convenience.</p>

              
            </div>

            <div className="col-md-6 col-12  pt-sm-5 pt-3">
              <div className="div">
                    <h2 className="mb-4" >Support & Contact</h2>
                      <div className="d-flex gap-3" style={{borderBottom:"1px solid #d9d9d9"}}>
                         <div>
                        <p className="small-medium">Contact</p>
                        <p className="para text-black">+1 516-584-8710</p>
                      </div>
                        <div>
                        <p className="small-medium">Email</p>
                        <p className="para text-black">frontdesk@reproductiveimmunology.com</p>
                      </div>
                     
                      </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
