import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const cardsData = [
  {
    index: "1",
    img: "/assets/whyESSI/Points.png",
    title: "Leaders in Endometriosis Research",
    para: "Our team is composed of highly skilled professionals who are recognized leaders in the fields of surgery, gynecology, and endometriosis. Our leadership is distinguished at every academic level, ensuring that our practice remains at the forefront of medical advancements.",
    linear:
      "linear-gradient(156deg, rgba(255, 200, 245, 0.30) 7.3%, #7600FF 93.1%)",
  },
  {
    index: "2",
    img: "/assets/whyESSI/Points.png",
    title: "Our Robust Training program",
    para: "Our doctors are mentored directly by the current leaders in the field, ensuring the highest standards of knowledge transfer. No other organization offers a mentoring program as comprehensive and robust as ours.",
    linear:
      "linear-gradient(156deg, rgba(191, 255, 231, 0.30) 7.3%, #00FEC3 93.1%)",
  },
  {
    index: "3",
    img: "/assets/whyESSI/Points.png",
    title: "Our Top-Notch Quality Control",
    para: "We adhere to a stringent quality control process. At the end of each year, we meticulously review outcomes and implement any necessary interventions to guarantee that every physician consistently meets the high standards we set for treatment and patient care.",
    linear:"linear-gradient(156deg, rgba(255, 237, 200, 0.30) 7.3%, #FFB006 93.1%);",
  },
  {
    index: "4",
    img: "/assets/whyESSI/Points.png",
    title: "Our Representation in Academia",
    para: "Our team of experts has collectively produced more academic papers, conference presentations, and research on endometriosis than most medical schools and university centers, solidifying our position as thought leaders in the field. Our academic credibility is unmatched.",
    linear: "linear-gradient(156deg, rgba(253, 255, 200, 0.30) 7.3%, #F7FF00 93.1%);",
  },
  {
    index: "5",
    img: "/assets/whyESSI/Points.png",
    title: "Our Advocacy",
    para: "We are deeply committed to advancing education on endometriosis, both for the public and for other medical professionals. We actively participate in the Endometriosis Summit and contribute to creating educational courses to help doctors better diagnose and treat the condition.",
    linear:"linear-gradient(156deg, rgba(200, 255, 255, 0.30) 7.3%, #0FF 93.1%)",
  },
  {
    index: "6",
    img: "/assets/whyESSI/Points.png",
    title: "Our Scope",
    para: "Our international presence sets us apart. With locations in both the United States and Europe, patients have access to comprehensive, world-class care, no matter where they are located. With IESS you’re not alone no matter where you go.",
    linear:"linear-gradient(156deg, rgba(255, 200, 200, 0.30) 7.3%, #F00 93.1%)",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>

        {/* herosection */}
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <h1 className="mb-2">
                What Sets{" "}
                <span className="tilt tilt-primary text-white">ESSI</span>{" "}
                Apart?
              </h1>

              <div className="d-flex flex-wrap gap-sm-4 gap-3 pt-sm-5 pt-4 mb-sm-5 mb-3">
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
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
              <img
                src="/assets/whyESSI/herosection.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>

        {/* cards section */}

        <div className="py-5 container">
          <div className="row">
            {cardsData.map((card, index) => (
              <div className="col-lg-4 col-sm-6 col-12 p-3 mb-2">
                <div  className="essiCard boxShadow p-sm-3 p-2 pb-sm-5 pb-4  text-center h-100" key={index} style={{ background: card.linear }}  >

                 <h2 className="text-white bgPrimary rounded-circle p-2 stepIndex d-flex justify-content-center align-items-center">
                      {index + 1}
                    </h2>
                <div className="d-flex flex-column align-items-center">
                      <img src={card.img} style={{ width: "60%" }} />
                      <h5 className="medium-text">{card.title}</h5>
                      <p className="para text-dark">{card.para}</p>
                      
                    </div>
              </div>
                </div>
            ))}
          </div>
        </div>

        {/* why choose us section */}

        <div className="py-sm-5 pb-5 pt-1 mt-md-5  whyChooseContainer">
              <div className="container">
                <p className="whyChoosePara text-center">Why you Should Choose</p>
                <h1 className="text-center mb-5 whyChooseHead">Endometriosis Surgical Specialists International</h1>

                <div className="row ">
                 <div className="col-lg-7">
                    <p className="whyChoose-line mb-4">Endometriosis Surgical Specialists International (ESSI) has collectively helped tens of thousands of endometriosis patients. A successful surgery can help prevent the progression of endometriosis and significantly improve a patient’s quality of life. Our advanced mapping techniques and qualified surgeons ensure that your endometriosis surgery will be thorough and tailored to your specific needs. When you choose ESSI, you’re choosing your best chance at success.</p>

                    <p className="whyChoose-line mb-4">The ESSI surgical group is one of the most innovative and productive teams of clinician-scientists practicing in the field of endometriosis today. Our members are dedicated to advancing both the science and practice of endometriosis care, utilizing the latest in surgical techniques, such as robotic-assisted procedures, and performing cutting-edge research that expands our understanding of the disease. Through a collaborative approach, we not only pioneer advanced surgical interventions but also publish extensively in peer-reviewed journals, contribute to high-impact clinical studies, and present at leading international conferences. The ESSI team stands at the forefront of endometriosis care, continually pushing the boundaries to improve patient outcomes and further the knowledge base in this complex field.</p>

                     <div className="d-lg-flex d-none gap-sm-2 gap-1 bookButton p-2 px-3 mb-2" style={{width:"fit-content"}}>
                        <p
                          className="mb-0 text-white"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Read All Of Our Published Work here
                        </p>
                        <img
                          src="/assets/white_arrow.svg"
                          style={{ width: "15px" }}
                        />
                      </div>
                 </div>
                  <div className="col-lg-5 d-flex flex-column align-items-md-start align-items-center">
                       <img src="/assets/whyESSI/whyChooseUs.png" className="img-fluid mb-md-0 mb-4"></img>

                          <div className="d-flex d-lg-none gap-sm-2 gap-1 bookButton p-2 px-3 mb-2" style={{width:"fit-content"}}>
                        <p
                          className="mb-0 text-white"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Read All Of Our Published Work here
                        </p>
                        <img
                          src="/assets/white_arrow.svg" 
                          style={{ width: "15px" }}
                        />
                      </div>
                 </div>
                </div>
              </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default page;
