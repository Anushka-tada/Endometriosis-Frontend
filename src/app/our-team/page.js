import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  {
    img: "/assets/whyESSI/Dr_Alessandra.png",
    name: "Dr. Alessandra Di Giovanni",
    about: "Europe | ESSI Mentor",
    description:
      "Dr. Alessandra Da Giovanni is a consultant at the Center for Advanced Pelvic Surgery, Malzoni Research Hospital in Avellino, Italy, specializing in pelvic ultrasonography for gynecological conditions, with over 10,000 procedures and a diagnostic accuracy of over 95% for endometriosis. She is a published author and frequent speaker at international congresses and has led over 200 educational events since 2011 in collaboration with top scientific societies. Dr. Di Giovanni is also a key organizer and instructor at major conferences like GYNITALY.",
  },

  {
    img: "/assets/whyESSI/Dr_Alessio.png",
    name: "Dr. Alessio Pigazzi",
    about: "California | ESSI Mentor",
    description:
      "Dr. Alessio Pigazzi, MD, PhD, FACS, is a renowned colorectal surgeon currently serving as Chief of Colorectal Surgery at NewYork-Presbyterian/Weill Cornell Medical Center. He is highly specialized in minimally invasive techniques, including laparoscopic and robotic surgeries, particularly for complex colon, rectal, and anal cancers. Dr. Pigazzi made history by performing the world’s first robot-assisted tumor removal for rectal cancer in 2004, revolutionizing colorectal cancer treatment. His research focuses on improving recovery after cancer surgeries, combining surgery with chemotherapy, and studying the relationship between diet and cancer development.",
  },
  {
    img: "/assets/whyESSI/Dr_Andrea.png",
    name: "Dr. Andrea Vidali",
    about: "New York, New Jersey, Florida, Illinois, and Europe | ESSI Mentor ",
    description:
      "Dr. Andrea Vidali, MD, is a world-renowned miscarriage specialist, reproductive immunologist, and endometriosis surgeon. He has extensive experience in minimally invasive and robotic surgery as well as multi-organ endometriosis surgery. As a founder of the Endometriosis Summit and a top healthcare influencer, Dr. Vidali is widely recognized as an outspoken proponent of compassionate endometriosis care. He specializes in the surgical treatment of endometriosis as it relates to infertility, implantation failure and pregnancy loss.",
  },
  {
    img: "/assets/whyESSI/Dr_Francesco.png",
    name: "Dr. Francesco Di Chiara",
    about: "Europe | ESSI Mentor",
    description:
      "Dr. Francesco Di Chiara is a leading thoracic surgeon known for pioneering uniportal VATS (Video-Assisted Thoracoscopic Surgery) at multiple institutions and performing complex procedures with this advanced technique. He serves as a proctor for minimally invasive thoracic surgery and holds senior roles in organizations such as the European Board of Cardiothoracic Surgery (EBCTS). Trained in Italy and the UK, with fellowships at the Royal Brompton Hospital and Shanghai Pulmonary Hospital, Dr. Di Chiara’s expertise spans cardio-thoracic transplantation, chest wall surgery, and rib fracture management. He has developed innovative techniques and devices for rib fracture repair and performed the first allograft sternal and clavicular replacement. His minimally invasive approach to thoracic outlet syndrome, eliminating the need for a postoperative chest drain, highlights his commitment to advancing thoracic surgery.",
  },
  {
    img: "/assets/whyESSI/Dr_Henrique.png",
    name: "Dr. Henrique Abrão",
    about: "Brazil/Latin America",
    description:
      "Dr. Henrique Abrão is a gynecologist, gynecological surgeon, and a leading reference in neuropelveology in Brazil. Trained in São Paulo and certified as a Master in Neuropelveology in Switzerland under Dr. Marc Possover, he specializes in treating chronic pelvic pain linked to nerve conditions, pelvic floor dysfunctions, and performing neuromodulation procedures. Dr. Abrão is an active member of AAGL, ISON, SOGESP, and FESBRAGO, participates in philanthropic surgical missions, and has published research on endometriosis, neuropelveology, and surgical innovation in top journals.",
  },

  {
    img: "/assets/whyESSI/Dr_Joseph.png",
    name: "Dr. Joseph Raccuia",
    about: "New York and New Jersey | ESSI Mentor",
    description:
      "Dr. Joseph S. Raccuia, while primarily recognized for his expertise in general surgery and surgical oncology, also treats endometriosis, particularly its more complex forms, such as extrapelvic endometriosis. He has contributed to understanding and raising awareness around the disease through his work with organizations like Extrapelvic Not Rare, which focuses on advancing research and improving patient care for those with endometriosis outside the pelvic region. His involvement in this field, combined with his extensive surgical background, provides a comprehensive approach to managing and surgically treating endometriosis.",
  },
  {
    img: "/assets/whyESSI/Dr_Madhu.png",
    name: "Dr. Madhu Bagaria",
    about: "New York and New Jersey",
    description:
      "Dr. Bagaria, MD, is a highly skilled gynecological surgeon specializing in endometriosis and pelvic pain. Trained at the prestigious Mayo Clinic Arizona, she brings expertise in minimally invasive gynecological surgery and a patient-centered approach to care. With over six years of experience at Mayo Clinic Health System, Dr. Bagaria offers comprehensive treatment tailored to each patient’s unique needs. Passionate about empowering women in their healthcare decisions, she combines clinical excellence with holistic well-being to improve her patients’ quality of life.",
  },
   {
    img: "/assets/whyESSI/Dr_Mallory.png",
    name: "Dr. Mallory Stuparich",
    about: "California",
    description:
      "Dr. Mallory Stuparich, MD, specializes in the surgical management of endometriosis and complex benign gynecologic conditions. She believes patients deserve expert, high-quality surgical care, employing a multidisciplinary team when necessary. Dr. Stuparich views the physician-patient relationship as a team: she offers her medical and surgical expertise, and she recognizes that patients are the experts in their own values, goals, and lived experiences. This team-based approach is crucial to optimizing a patient’s clinical outcome. She prioritizes patient education, advocacy, and shared decision-making to ensure individualized care. Dr. Stuparich has also received numerous awards for teaching and surgical innovation, and she has co-authored more than 75 peer-reviewed publications and scientific abstracts. After completing her residency in obstetrics and gynecology at the renowned University of Texas Southwestern Medical Center, she pursued fellowship training in minimally invasive gynecologic surgery at the prestigious Magee-Womens Hospital of the University of Pittsburgh Medical Center. Dr. Stuparich is board-certified by the American Board of Obstetrics and Gynecology, and she is a Fellow of the American College of Obstetrics and Gynecology and the American College of Surgeons. ",
  },
   {
    img: "/assets/whyESSI/Dr_Mamta.png",
    name: "Dr. Mamta Mamik",
    about: "New York and New Jersey",
    description:
      "Dr. Mamta Mamik is a dedicated endometriosis specialist based in New York City, known for her expertise in excision surgery and comprehensive patient care. Dr. Mamta Mamik approaches endometriosis treatment with a deep understanding of the embryonic rest theory, coelomic metaplasia, and stem cell theory, providing personalized care tailored to each patient’s needs. She typically recommends oral contraceptives and the Mirena IUD after excision surgery to help prevent recurrence, avoiding GnRH agonists unless specifically requested by the patient. Dr. Mamta Mamik believes in a multi-modality approach to managing persistent pain after surgery, working closely with physical therapists, offering nerve blocks, and considering neuromodulator implants when necessary. Her patient-centered care focuses on improving quality of life through effective pain management and ongoing support. This warm and thorough approach makes Dr. Mamta Mamik a trusted expert for those seeking relief from the symptoms of endometriosis.",
  },
   {
    img: "/assets/whyESSI/Dr_Marcello.png",
    name: "Dr. Marcello Ceccaroni",
    about: "Europe | ESSI Mentor",
    description:
      "Prof. Marcello Ceccaroni is an internationally renowned expert in deep endometriosis management, gynecological oncology, and minimally invasive pelvic surgery, currently heading the Department of Obstetrics and Gynecology, Gynecological Oncology, and Minimally Invasive Pelvic Surgery at IRCCS Sacro Cuore – Don Calabria Hospital in Verona, Italy. Known for creating the groundbreaking “Negrar Method”—a nerve-sparing laparoscopic technique for deep endometriosis involving rectal and parametrial resection—he has set new standards in surgical care. As founder and chairman of the International School of Surgical Anatomy (ISSA), Prof. Ceccaroni has trained surgeons from around the world, and he continues to share his expertise as an Adjunct Professor at University Milano-Bicocca, Italy, and as a Recurring Professor at UC San Diego. His extensive research, publications, and international lectures have solidified his reputation as a leader in his field.",
  },
   {
    img: "/assets/whyESSI/Dr_Marco.png",
    name: "Dr. Marco Zoccali",
    about: "New York | ESSI Mentor",
    description:
      "Dr. Zoccali is a leading colorectal surgeon specializing in minimally invasive and robotic-assisted surgery for colorectal cancer, inflammatory bowel diseases (IBD), and benign colorectal conditions. As faculty at Columbia University, he is dedicated to advancing surgical innovation and has authored over 50 publications in renowned journals, including The Journal of the American College of Surgeons and The British Journal of Surgery. Dr. Zoccali’s expertise and patient-centered approach ensure exceptional care and improved outcomes for complex colorectal cases.",
  },
   {
    img: "/assets/whyESSI/Dr_Mario.png",
    name: "Dr. Mario Malzoni",
    about: "Europe | ESSI Mentor",
    description:
      "Scientific Director and Chief of Advanced Gynecological Endoscopy, National Center for Endometriosis, and MACC (Malzoni Cancer Center) at Malzoni Research Hospital in Avellino, Italy, Dr. Mario Malzoni is recognized worldwide as a leading expert in minimally invasive surgery for severe endometriosis, gynecologic oncology, and advanced pelvic surgery. He is a past-president of SEGi (Italian Society of Gynecological Endoscopy), former member of the AAGL Board of Directors, and serves as the Scientific Advisory Board Member of the Endometriosis Foundation of America. As an Honorary Professor at Moscow’s University Research Center and President of the Endometriosi Osservatory in the Campania Region, he leads the Campania Endometriosis Network and organizes GynItaly’s annual meeting, monthly workshops, and international courses. His pioneering work in surgical techniques for multiorgan endometriosis and oncology is widely published in high-impact journals.",
  },
   {
    img: "/assets/whyESSI/Dr_Mauricio.png",
    name: "Dr. Mauricio Abrão",
    about: "Brazil/Latin America | ESSI Mentor",
    description:
      "Dr. Abrão is a global leader in both surgery and research & development within the field of minimally invasive surgical techniques for endometriosis excision. He is also an established medical leader serving as the head of Gynecology at Hospital Beneficência Portuguesa de São Paulo and formerly acted as president of the AAGL (American Association of Gynecologic Laparoscopists). Dr. Abrão’s expertise also extends beyond clinical experience where he has produced well over 100 papers in the field of Endometriosis, and is involved as an editor in several journals.",
  },
     {
    img: "/assets/whyESSI/Dr_Osbert.png",
    name: "Dr. Osbert Fernandez",
    about: "Florida",
    description:
      "Dr. Osbert Fernandez, a native Floridian and proud second-generation Cuban-American doctor, is an expert in robotic-assisted surgery for complex endometriosis cases, including bowel invasion, rectal involvement, and frozen pelvis. Known for his compassionate, patient-centered approach, Dr. Fernandez combines cutting-edge techniques with a deep commitment to empowering patients and advancing endometriosis awareness. Dr. Fernandez also specializes in family practice and has been training residents for over a decade on identifying and diagnosing endometriosis in a general practice setting. Dr. Fernandez is also fluent in Spanish.",
  },
   {
    img: "/assets/whyESSI/Dr_Sallie.png",
    name: "Dr. Sallie Sarrel",
    about: "Florida",
    description:
      "Dr. Sallie Sarrel, is a dedicated advocate for individuals with endometriosis, having lived with the condition herself for nearly two decades. She co-founded The Endometriosis Summit, the largest endometriosis-focused conference, which trains patients, practitioners, and surgeons while fostering global education and advocacy. A recognized leader in pelvic pain treatment, Sallie has lectured worldwide and published extensively on the role of the pelvic floor, bladder, and hernias in endometriosis-related pain. Certified as an athletic trainer and licensed as a physical therapist in multiple states, she continues to champion advancements in endometriosis care.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />

      <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
        {/* hero section */}
        <div className="container py-sm-5 pb-0 pt-0">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <div className="d-flex  justify-content-md-start justify-content-center ">
                <h1 className="tilt tilt-primary text-white mb-sm-5 mb-4 text-md-start text-center">
                Meet Our Team
              </h1>
              </div>

              <p className="para mb-4 text-md-start text-center ">
                Endometriosis Surgical Specialists International was founded by
                Dr. Andrea Vidali, a leading excision specialist who has been
                performing endometriosis surgeries for over 25 years. We united
                because we are endometriosis experts who share a dedication to
                providing premium care for a disease that is often misunderstood
                and underserved by the medical community. Together, our
                collective skills ensure that you will receive the most
                comprehensive and professional endometriosis surgery available.
              </p>

              <div className="row">
                <div className=" col-6 p-2">
                  <div
                    className="text-center  py-4 homeCard boxShadow h-100"
                    style={{ backgroundColor: "#FF79E6" }}
                  >
                    <h2 className="mb-0">5000+</h2>
                    <h5 className="medium-text">Women Treated</h5>
                  </div>
                </div>

                <div className=" col-6 p-2 ">
                  <div
                    className="text-center   py-4 homeCard boxShadow h-100"
                    style={{ backgroundColor: "#07E994" }}
                  >
                    <h2 className="mb-0">2300+</h2>
                    <h5 className="medium-text">Testimonials</h5>
                  </div>
                </div>

                <div className=" col-6 p-2">
                  <div
                    className="text-center  py-4 homeCard boxShadow h-100"
                    style={{ backgroundColor: "#5F2D8B" }}
                  >
                    <h2 className="mb-0">30+</h2>
                    <h5 className="medium-text">Countries</h5>
                  </div>
                </div>

                <div className=" col-6 p-2">
                  <div
                    className="text-center  py-4 homeCard boxShadow h-100"
                    style={{ backgroundColor: "#FFB006" }}
                  >
                    <h2 className="mb-0">12K+</h2>
                    <h5 className="medium-text">Subscriber</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
              <img
                src="/assets/ourTeam/herosection.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>

        {/* doctors section */}
        <div className="py-5 bg-white">
        <div className="container ">
          {doctors.map((doc, index) => (
            <div className="" key={index}>
              {index % 2 === 0 ?
               <>
                  <div className="row align-items-center mb-5 mt-2 mt-sm-">
                    <div className="col-md-6 col-12 mb-md-3">
                        <img src={doc.img} alt={doc.name} className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 col-12 mb-md-3">
                       <p className="doctorName mb-lg-4 mb-1 pb-sm-2">{doc.name}</p>
                       <p className="medium-bold mb-lg-4 mb-1 pb-sm-2">{doc.about}</p>
                       <p className="whyChoose-line mb-lg-4 mb-1 pb-sm-2">{doc.description}</p>
                        
                        <div className="d-flex gap-sm-3 gap-1 bookButton p-2" style={{width:"fit-content"}}>
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

                    </div>
                  </div>
              </>
               :
               <>
                  <div className="row align-items-center mb-5 mt-2 mt-sm-5">
                    <div className="col-md-6 col-12 order-md-1 order-2 mb-md-3">
                         <p className="doctorName mb-lg-4 mb-1 pb-sm-2">{doc.name}</p>
                       <p className="medium-bold mb-lg-4 mb-1 pb-sm-2">{doc.about}</p>
                       <p className="whyChoose-line mb-lg-4 mb-1 pb-sm-2">{doc.description}</p>

                        <div className="d-flex gap-sm-3 gap-1 bookButton p-2" style={{width:"fit-content"}}>
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

                    </div>
                    <div className="col-md-6 col-12 order-md-2 order-1 mb-md-3">
                        <img src={doc.img} alt={doc.name} className="img-fluid"></img>
                    </div>
                  </div>
               </>}
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
