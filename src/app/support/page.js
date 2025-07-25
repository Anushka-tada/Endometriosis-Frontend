import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const questions = [
    {
        que:"Why Join ESSI Peer Support?",
        ans:"ESSI Peer Support is a dedicated space for connection, understanding, and community for people living with endometriosis. Here, your experience matters, your voice is valued, and you’re surrounded by people who truly understand what you’re facing because no one should have to go through endometriosis alone."
    },
    {
        que:"What You’ll Find Here"
    },
    {
        que:"What You Get When You Join"
    },
    {
        que:"Before You Join"
    },
  
]

const page = () => {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
          <Navbar/>

          <div>
            {/* herosection */}
            <div className='container pb-5 pt-4 my-5'>
                <div className='row justify-content-between align-items-end'>
               <div className='col-4'>
                  <img src="https://media1-production-mightynetworks.imgix.net/asset/ededa788-10ee-49c3-b205-fc3d56ad5347/Logo_Full-03.jpg?ixlib=rails-4.2.0&fm=jpg&q=100&auto=format&w=256&h=256&fit=crop&crop=faces&impolicy=Avatar" className='img-fluid' style={{width:"40%"}}></img>
                  <h1>Welcome to ESSI Peer Support</h1>

                  <p>You don’t have to go through endometriosis alone.</p>

                   <div className="d-flex gap-sm-3 gap-1 bookButton p-2 px-3 mb-3" style={{width:"fit-content"}}>
                  <p
                    className="mb-0 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                   Join Now
                  </p>
                </div>
               </div>

               <div className='col-6'>
                   {
                    questions.map((question , index) => (
                        <div key={index} className='d-flex justify-content-between align-items-center py-3' 
                        style={{borderBottom:"1px solid #d6d4d6"}}>
                            <p className='medium-text'>{question.que}</p>
                            <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" style={{width:"23px" , height:"23px"}}></img>
                     </div>
                    ))
                   }
               </div>
               </div>
            </div>
          </div>

          <Footer/>
    </div>
  )
}

export default page
