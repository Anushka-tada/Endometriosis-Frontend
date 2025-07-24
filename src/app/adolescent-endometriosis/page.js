import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
     <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
        <Navbar/>

             {/* herosection */}
        <div className="container py-5 mb-sm-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <h1 className="mb-4">Adolescent Endometriosis</h1>

              <p className="medium-text mb-sm-5">
               Although endometriosis is commonly associated with adults, it can also affect girls and teenagers, sometimes starting as early as their first menstrual period. Diagnosis of adolescent endometriosis is often delayed since they might not have a benchmark for “normal” period pain. However, early diagnosis and treatment can improve life quality and safeguard the future fertility of teens with endometriosis.
              </p>

            
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center justify-content-lg-end">
              <img
                src="/assets/E_surgery/herosection.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>


         {/* What is Adolescent Endometriosis? */}

          <div className="bg-white py-5 ">
        <div className="container">
          {/* <h2 className="mb-3">The ESSI Approach to</h2> */}
         <div className='row'>
           
           <div className='col-12'>
         <h1 className="mb-4"> What is {" "}<span className="text-white tilt tilt-primary">Adolescent </span>{" "} Endometriosis? </h1>

          <p className="para mb-5">
          Endometriosis is a frequently painful condition in which tissue similar to the uterine lining (endometrium) grows outside the uterus. When this condition affects children and teenagers, it is referred to as adolescent or pediatric endometriosis. Adolescent endometriosis typically affects menstruating individuals, although there have been cases of it occurring even before menarche
          </p>

          <div className="d-flex gap-sm-3 gap-2 align-items-center mb-sm-5 mb-0">
            <a href="/appointment-form" style={{ textDecoration: "none" }}>
              {" "}
              <p className="learnMore mb-0">
                Searching for a qualified Endometriosis Specialist?
              </p>
            </a>
            <img src="/assets/purple_Arrow.svg" style={{ width: "22px" }}></img>
          </div>
           </div>
         </div>
        </div>
         </div>
         
         {/* doctors section */}

         <div className='container py-5'>
           <div className='row justify-content-center align-items-center mb-5'>
             <div className='col-lg-6 col-12 d-flex flex-column align-items-center'>
                <img src="/assets/whyESSI/Dr_Mallory.png" className='img-fluid dr_image' ></img>
                <p className='medium-text text-center'>Dr. Mallory Stuparich, MD | ESSI California</p>

                    <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2" style={{width:"fit-content"}}>
                  <p
                    className="mb-0 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                  Request a Consultation with Dr. Stuparich
                  </p>
                  <img
                    src="/assets/white_arrow.svg"
                    style={{ width: "15px" }}
                  />
                </div>
             </div>

             <div className='col-lg-6 col-12'>
                 <p className='small-h2 textPrimary mb-3'>Symptoms of Adolescent Endometriosis</p>
                 <p className='para text-black mb-4 '>The main symptom of endometriosis in adolescents is dysmenorrhea (painful periods). This pain often does not respond to treatment with nonsteroidal anti-inflammatory drugs (NSAIDs) or hormonal suppression. Other warning signs could include:</p>

                  <div className="symptoms1 mb-5 w-100">
              <div className="d-flex gap-3 mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg" className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Dysmenorrhea (painful periods)</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center ">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0"> Chronic pelvic pain </p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Bladder pain</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Abdominal pain</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Dyspareunia (if sexually active) </p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Digestive problems</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Frequent or urgent urination</p>
              </div>
              <div className="d-flex gap-3 mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Heavy menstrual bleeding</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Irregular bleeding</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Lack of response to NSAIDs</p>
              </div>
            </div>
             </div>
           </div>

           <div className='row justify-content-center align-items-center'>
             <div className='col-lg-6 col-12  order-lg-1 order-2'>
                 <p className='small-h2 textPrimary mb-3'>Risk Factors of Adolescent Endometriosis</p>
                 <p className='para text-black mb-4 '>While the exact cause of endometriosis is still debated, and there are no definitive predictors of who will develop the condition, certain risk factors have been associated with adolescent endometriosis.</p>

                  <div className="symptoms1 mb-5 w-100">
              <div className="d-flex gap-3 mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg" className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Menstruation at a young age</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center ">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0"> Low body weight</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Long or heavy menstrual cycles</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Migraines</p>
              </div>
              <div className="d-flex gap-3  mb-2 align-items-center">
                <img src="/assets/hand_Icon.svg"  className="handIcon" style={{width:"20px" , height:"20px"}}></img>
                <p className="small-medium mb-0">Family history of endometriosis</p>
              </div>
            </div>
             </div>
             <div className='col-lg-6 col-12 d-flex flex-column align-items-center order-lg-2 order-1'>
                <img src="/assets/whyESSI/Dr_Madhu.png" className='img-fluid dr_image'></img>
                <p className='medium-text text-center'>Dr. Madhu Bagaria, MD | ESSI New York <br/> and New Jersey</p>

                    <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2" style={{width:"fit-content"}}>
                  <p
                    className="mb-0 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                  Request a Consultation with Dr. Bagaria
                  </p>
                  <img
                    src="/assets/white_arrow.svg"
                    style={{ width: "15px" }}
                  />
                </div>
             </div>
           </div>
         </div>

         {/* Diagnosing Adolescent Endometriosis */}

          <div className="bg-white py-5 ">
            <div className='container'>
             
                 <h2>Diagnosing Adolescent Endometriosis</h2>
                 <p className='para'>An examination is usually suggested when patients have painful periods that don’t respond to treatment or have other reasons to suspect secondary dysmenorrhea (period pain due to another condition). Blood tests and physical examinations may be done to rule out other health issues. A probable diagnosis of pediatric endometriosis will be made based on a combination of symptoms and imaging findings. Laparoscopy can be used to confirm the diagnosis through a biopsy</p>

                 <h2>Treating Adolescent Endometriosis</h2>
                 <p className='para'>Endometriosis is a major contributor to infertility, which makes early diagnosis and treatment crucial for preserving your child’s future ability to conceive. Treatment for pediatric endometriosis typically involves a combination of surgery, hormonal therapy, NSAIDs, GnRH agonists, and/or alternative pain therapies.</p>
                 <p className='para mb-5'>When choosing a surgeon for your child’s endometriosis, they must have experience with the full spectrum of endometrial morphologies. Adolescent lesions can appear differently from those typically found in adults, and more advanced imaging techniques may help distinguish adolescent lesions. One of the keys to lasting results is complete excision during surgery.</p>

                  <div className="d-flex gap-sm-2 gap-1 bookButton p-2 px-3 mb-2 px-3" style={{width:"fit-content"}}>
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

          {/* last section */}

          <div className='container py-5'>
             <div className='row mb-sm-5'>
                 <div className='col-md-6 col-12'>
              
              </div>
              <div className='col-md-6 col-12'>
                   <h2 className='mb-3'>Why you should choose </h2>
                   <h1 className='mb-4'>Endometriosis Surgical Specialists International</h1>

                   <p className='para textPrimary'>Endometriosis Surgical Specialists International specializes in performing surgery for adolescent cases of endometriosis. A successful early intervention can help prevent the progression of endometriosis and significantly improve a patient’s quality of life. When choosing an endometriosis surgeon, you are also choosing your child’s future.</p>


                   <p className='small-bold'>Ready to talk about your options?</p>
                    
                     <div className="d-flex gap-3  viewButton p-2 px-3" style={{width:"fit-content"}}>
                      <p className="mb-0  textPrimary">Request a Consultation Today</p>
                      <img
                        src="/assets/primary_arrow.svg"
                        style={{ width: "15px" }}
                      ></img>
                    </div>
              </div>
              
             </div>
          </div>
       
        <Footer/>
    </div>
  )
}

export default page
