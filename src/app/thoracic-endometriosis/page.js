import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <Navbar />

        {/* herosection */}
        <div className="container py-5 mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <h1 className="mb-4">Thoracic and Diaphragmatic Endometriosis</h1>

              <p className="medium-text mb-5">
                Endometriosis is typically linked to painful periods and other
                gynecological symptoms. Still, for a subset of patients,
                endometriosis lesions grow in or near the lungs – creating a
                confusing set of symptoms such as chest pain and coughing.
                Because thoracic endometriosis is potentially life-threatening,
                patients should seek professional treatment for this disease
              </p>

              <div
                className="d-flex gap-sm-3 gap-1 bookButton p-2"
                style={{ width: "fit-content" }}
              >
                <img
                  src="/assets/button_icon_1.svg"
                  style={{ width: "16px" }}
                ></img>
                <p className="mb-0 text-white" style={{ whiteSpace: "nowrap" }}>
                  Request Surgery
                </p>
                <img
                  src="/assets/white_arrow.svg"
                  style={{ width: "15px" }}
                ></img>
              </div>
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
              <img
                src="/assets/E_surgery/herosection.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
     

      {/* the essi approach */}
      <div className="bg-white py-5 ">
        <div className="container">
          {/* <h2 className="mb-3">The ESSI Approach to</h2> */}
          <h1 className="mb-4">
            What is{" "}
            <span className="text-white tilt tilt-primary">Thoracic</span>{" "}
            Endometriosis?
          </h1>

          <p className="para ">
            Endometriosis is a frequently painful condition where tissue similar
            to the uterine lining (endometrium) grows outside the uterus.
            Although endometriosis typically affects the pelvic area, sometimes
            endometriosis patches grow in extragenital locations. When the
            abnormal tissue grows in the thoracic cavity (the chest, including
            the diaphragm and lungs), it is referred to as thoracic
            endometriosis.
          </p>

          <p className="para  mb-5">
            Because endometrial tissue swells and bleeds during menstrual
            cycles, thoracic endometriosis symptoms typically coincide with a
            patient’s menstrual period. Complications can include bleeding or a
            collapsed lung, and symptomatic thoracic endometriosis should be
            medically addressed.
          </p>

          <div className="d-flex gap-3 align-items-center mb-sm-5 mb-0">
            <a href="/appointment-form" style={{ textDecoration: "none" }}>
              {" "}
              <p className="learnMore mb-0">
                Searching for a qualified Thoracic Endometriosis Surgeon?
              </p>
            </a>
            <img src="/assets/purple_Arrow.svg" style={{ width: "22px" }}></img>
          </div>
        </div>
      </div>

      {/* What is Diaphragmatic Endometriosis? */}

      <div className="container py-5 ">
            <div className="row">
                <div className="col-md-5 col-12">

                </div>
               <div className="col-md-7 col-12">
                  <h1>What is Diaphragmatic Endometriosis?</h1>

            <p className="para">Diaphragmatic endometriosis is a condition characterized by the presence of endometrial-like tissue on the diaphragm, which can lead to cyclical pain, discomfort, and respiratory issues. Surgical interventions for this condition may involve minimally invasive techniques such as thoracoscopic surgery and robotic-assisted surgery. Both methods provide benefits, including shorter recovery times and reduced postoperative pain compared to traditional open surgery. When addressing diaphragmatic fenestrations, it is typically advised not to suture them due to the potential incomplete removal of endometriosis tissue; instead, excision should be preferred. Experienced surgeons utilize a variety of techniques aimed at preserving as much muscle as possible from the diaphragm, thereby minimizing the risk of impaired function.</p>

            <p className="para" >It is important to note that this type of surgery can result in significant postoperative discomfort, which often comprises a substantial portion of the recovery process. Our specialists, drawing from their extensive experience, will be able to guide you in understanding the possible ramifications of the procedure, including outlining effective strategies for managing discomfort. This comprehensive approach ensures that patients are well-informed about what to expect during the recovery period and the potential impact on diaphragm function.</p>
               </div>
            </div>
      </div>

      {/* Symptoms of Thoracic Endometriosis section */}
      <div className="py-sm-5 pb-sm-5 pb-0 pt-1 mt-md-5  ">
        <div className="container">
          <h1 className="text-center mb-5 ">
            Symptoms of Thoracic Endometriosis
          </h1>

          <div className="row  align-items-center">
            <div className="col-lg-7">
              <p className="symptom-line mb-4">
                Thoracic endometriosis is most often diaphragmatic (located on
                the diaphragm), but lesions can grow anywhere inside the
                thoracic cavity. Symptoms are generally due to health conditions
                that are caused by thoracic endometriosis. These are the most
                common conditions and symptoms associated with thoracic
                endometriosis (catamenial means they only occur during a
                person’s menstrual period):
              </p>

              <ul className="my-5 me-lg-5">
                <li className="symptom-line mb-3 d-flex gap-3">
                  <img
                    src="/assets/hand_Icon.svg"
                    alt="hand icon"
                    style={{ width: "32px", height: "32px" }}
                  ></img>
                  <p className="mb-0">
                    <span className="textPrimary">Catamenial pneumothorax</span>{" "}
                    – A collapsed lung when air leaks into the space between the
                    lungs and chest wall. (Symptoms: Chest pain, shoulder pain,
                    cough, and shortness of breath)
                  </p>
                </li>
                <li className="symptom-line mb-3 d-flex gap-3">
                  <img
                    src="/assets/hand_Icon.svg"
                    alt="hand icon"
                    style={{ width: "32px", height: "32px" }}
                  ></img>
                  <p className="mb-0">
                    <span className="textPrimary">Catamenial hemothorax</span> –
                    When blood accumulates within the lung lining or pleural
                    space. (Symptoms: Chest pain, cough, and shortness of
                    breath)
                  </p>
                </li>
                <li className="symptom-line mb-3 d-flex gap-3">
                  <img
                    src="/assets/hand_Icon.svg"
                    alt="hand icon"
                    style={{ width: "32px", height: "32px" }}
                  ></img>
                  <p className="mb-0">
                    <span className="textPrimary">Catamenial hemoptysis</span> –
                    Bleeding in one or both lungs. (Symptoms: Coughing up blood,
                    chest pain, and shortness of breath)
                  </p>
                </li>
                <li className="symptom-line mb-3 d-flex gap-3">
                  <img
                    src="/assets/hand_Icon.svg"
                    alt="hand icon"
                    style={{ width: "32px", height: "32px" }}
                  ></img>
                  <p className="mb-0">
                    <span className="textPrimary">Pulmonary nodules</span> –
                    Atypical lung growths. (Symptoms: Chest pain, cough, and
                    shortness of breath)
                  </p>
                </li>
              </ul>

              <p className="symptom-line mb-4">
                Thoracic endometriosis often coincides with pelvic
                endometriosis, so in addition to knowing the specific symptoms
                of thoracic endometriosis, patients should also be aware of the
                general symptoms of endometriosis.
              </p>
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-md-start align-items-center">
              <div className=" position-relative">
                <img
                  src="/assets/thoracic/youtube_short.jpg"
                  className="img-fluid mb-md-0 mb-4"
                  style={{ filter: "brightness(70%)", borderRadius: "20px" }}
                ></img>

                <div className=" position-absolute p-3 top-0 left-0">
                  <p className="text-white small-bold mb-2">
                    What is Thoracic Endometriosis?
                  </p>

                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src="/assets/thoracic/name.jpg"
                      className=" rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                    <p className="mb-0 text-white fw-bold">
                      Endometriosis Surgical Specialists International
                    </p>
                  </div>
                </div>

                <div
                  className=" position-absolute"
                  style={{ top: "38%", left: "24%" }}
                >
                  <img
                    src="/assets/thoracic/shorts_logo.png"
                    className="img-fluid"
                    style={{ width: "190px", height: "190px" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* two cards sections */}

      <div className="bg-white my-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-3">
              <div className="mappingCard1 p-sm-5 p-3">
                <h2 className="mb-3">Diagnosing Thoracic Endometriosis</h2>
                <p className="para text-black">
                  Magnetic resonance imaging (MRI) is typically used for the
                  identification of thoracic endometriosis. It is essential that
                  the MRI is conducted with a specific endometriosis protocol to
                  enhance the detection of this condition. Furthermore, the
                  radiologist or surgeon interpreting the images should be an
                  expert in endometriosis to ensure accurate diagnosis. It is
                  important to note that MRI negativity only rules out large
                  lesions and significant diaphragmatic fenestrations; however,
                  thoracic endometriosis is often thin and widespread, making it
                  difficult to identify via MRI. Therefore, the gold standard
                  for diagnosis remains surgical inspection via thoracoscopy and
                  laparoscopy.
                </p>
                <p className="para text-black mb-4">
                  A definitive treatment can be done via thoracoscopic and
                  laparoscopic excision surgery, where the excised tissue is
                  sent for biopsy.
                </p>

                <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2" style={{width:"fit-content"}}>
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
            <div className="col-lg-6 p-3">
              <div className="mappingCard2 p-sm-5 p-3">
                <h2 className="mb-3">Treating Thoracic Endometriosis</h2>
                <p className="para text-black">
                 Because thoracic endometriosis is potentially life-threatening, it should be treated by a qualified medical professional. Treatment for thoracic endometriosis typically involves a combination of minimally invasive surgery, hormonal therapy, NSAIDs, GnRH agonists, and/or alternative pain therapies.
                </p>
                <p className="para text-black mb-4" >
                 Thoracic endometriosis frequently coexists with pelvic endometriosis, and the most effective surgical strategy aims to remove all abnormal tissue in a single procedure. ESSI consists of surgeons with multi-organ expertise who, in selected cases, can excise endometriosis lesions in both areas without the need for a second surgeon. However, this may necessitate collaboration between a thoracic surgeon and an endometriosis specialist, depending on the surgeon’s skill level and the complexity of the operation.


                </p>
 
                <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2" style={{width:"fit-content"}}>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
