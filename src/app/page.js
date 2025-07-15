import React from 'react'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <div>

      <Navbar/>
      
      {/* hero section */}

      <div className='homeHeroSection'>
        <div className='container'>
          
          <div className='row'>
            <div className='col-lg-6 col-12 pt-5 mt-5 ps-3 '>
               <div>
                <h1 className='mt-2'>Dr. <span>Madhu</span> Bagaria</h1>
                <h2 className='mb-4'>Endometriosis Excision Specialist</h2>

                <p className='paraPrimary me-5 pe-3 mb-5'>Hello, I’m <span className='fw-bold'>Dr. Madhu Bagaria</span>, and I am an expert in the field of minimally invasive gynecological surgery for endometriosis and pelvic pain. I trained at the <span className='fw-bold'>Mayo Clinic Arizona</span> and have years of experience providing specialized care. I understand the challenges of endometriosis and am here to help you navigate your journey, offering the best possible treatment tailored to your unique needs</p>

                <div className='d-flex gap-4 pt-5 mb-4'>
                   <div className='d-flex gap-3 bookButton p-2'>
                     <img src="/assets/button_icon_1.svg"style={{width:"19px"}} ></img>
                     <p className='mb-0 text-white' style={{whiteSpace:"nowrap"}}>Book Appointment</p>
                     <img src='/assets/white_arrow.svg' style={{width:"17px"}}></img>
                   </div>

                    <div className='d-flex gap-3 viewButton p-2'>
                     <img className='' src="/assets/button_icon_2.svg" style={{width:"19px"}} ></img>
                     <p className='mb-0'>View Treatments</p>
                     <img src='/assets/black_arrow.svg' style={{width:"17px"}}></img>
                   </div>
                </div>

                <div className='d-flex gap-5'> 
                  <div className='d-flex gap-1 align-items-center ratings px-2'>
                    <img src='/assets/star.svg' style={{width:"24px"}}></img>
                       <img src='/assets/star.svg' style={{width:"24px"}}></img>
                          <img src='/assets/star.svg' style={{width:"24px"}}></img>
                             <img src='/assets/star.svg' style={{width:"24px"}}></img>
                             <p className='mb-0 fw-bold'>4.9</p>
                  </div>

                  <div>
                    <p className='mb-0 para small' style={{fontWeight:"500"}} >Rated 4.9 out of 5</p>
                    <p className='mb-0 para text-dark small' style={{fontWeight:"500"}}>based on 722 customer reviews</p>
                  </div>

                  <div className='d-flex'>
                    <img src='/assets/homepage/hero-review1.jpg' className=' rounded-circle' style={{width:"34px" , height:"34px"}}></img>
                     <img src='/assets/homepage/hero-review2.jpg' className=' rounded-circle' style={{width:"34px", height:"34px" , marginLeft:"-5px"}}></img>
                      <img src='/assets/homepage/hero-review3.jpg' className=' rounded-circle' style={{width:"34px" , height:"34px" , marginLeft:"-5px"}}></img>
                  </div>
                </div>

               </div>
            </div>
            <div className='col-lg-6 col-12 '>
                <img src='/assets/homepage/dr-madhu.png' alt='Dr Madhu Bagaria' className='img-fluid'></img>
            </div>
          </div>
        </div>

          <img  src='/assets/homepage/backround2.png' className='leftBackground' ></img>
      </div>

      <div className='container py-5 mb-3'>
        <div className='row'>
          <div className='col-md-3 col-6 p-2'>
              <div className='text-center p-md-5 p-2 homeCard' style={{backgroundColor:"#FF79E6"}}>
                <h2>5000+</h2>
                <h5>Women Treated</h5>
              </div>
          </div>

          <div className='col-md-3 col-6 p-2'>
              <div className='text-center  p-md-5 p-2 homeCard' style={{backgroundColor:"#07E994"}}>
                <h2>2300+</h2>
                <h5>Testimonials</h5>
              </div>
          </div>

          <div className='col-md-3 col-6 p-2'>
              <div className='text-center p-md-5 p-2 homeCard' style={{backgroundColor:"#5F2D8B"}}>
                <h2>30+</h2>
                <h5>Countries</h5>
              </div>
          </div>

          <div className='col-md-3 col-6 p-2'>
              <div className='text-center  p-md-5 p-2 homeCard' style={{backgroundColor:"#FFB006"}}>
                <h2>12K+</h2>
                <h5>Subscriber</h5>
              </div>
          </div>
        </div>
      </div>

       <div className='pt-4 pb-5 bg-white'>
      <div className='container '>
     <div className='row align-items-center'>
       <div className='col-lg-6 col-12'>
          <img src="/assets/homepage/about.png" className='img-fluid'></img>
       </div>
       <div className='col-lg-6 col-12'>
           <h1>We Are</h1>
           <h1 className='mb-4'>Endometriosis Surgical Specialists International</h1>

           <p className='para'>Most endometriosis patients spend years enduring pain, infertility, and other debilitating symptoms before receiving a diagnosis. If that describes you, then you have had no choice other than to learn how to cope with and manage your symptoms. But suffering should not be normalized.</p>

           <p className='mb-4 para'>Endometriosis Surgical Specialists International (ESSI), founded by Dr. Andrea Vidali – a leading excision specialist who has been performing endometriosis surgeries for over 25 years – is dedicated to achieving lasting results through complete excision. Recognizing the importance of an experienced team, Dr. Vidali assembled a surgical group at ESSI with the experience and dedication needed to deliver the outcomes you seek.</p>

          <div className='d-flex gap-3 align-items-center'>
             <p className='learnMore mb-0'>Learn More About Our Story</p>
             <img src='/assets/purple_Arrow.svg' style={{width:"22px"}}></img>
          </div>
       </div>
     </div>
      </div>
      </div>

    </div>
  )
}

export default page
