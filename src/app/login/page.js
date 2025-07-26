"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter();

    const handleSignup = () => {
        router.push("/signup")
    }
  return (
    <>
    <Navbar/> 

    <div className='login-page'>
        <div className='container py-5'>
         <div className='row justify-content-center'>
            <div className='col-lg-5 col-md-7 col-sm-10 col-12'>
               <h3 className='login-head text-center'>WELCOME BACK !</h3>
               <p className='medium-text text-center'>Please login or sign up to continue our app</p>

               <div className='bg-white p-sm-5 p-3 boxShadow' style={{borderRadius:"20px"}}>
                <div>
                <label className='small-medium mb-2'>Email</label>
                  <input
                        className="login-input py-2 px-3 w-100 mb-md-4 mb-2"
                        type="text"
                       
                      ></input>
                       <label className='small-medium mb-2' >Password</label>
                  <input
                        className="login-input py-2 px-3 w-100 mb-md-4 mb-2"
                        type="password"
                       
                      ></input>
               </div>

               <div className='d-flex justify-content-between align-items-center mb-3'>
                   <div className='d-flex align-items-center gap-2 '>
                        <input type="checkbox" />
                        <p className='mb-0'>Remember  me</p>
                   </div>

                   <p className=" text-decoration-underline mb-0" style={{color:"rgba(142, 68, 173, 1)"}}>Forgot Password ?</p>
               </div>

               <button
  className='p-2 medium-text text-white w-100 logInBtn'
  onClick={() => router.push("/profile")}
>
  Login
</button>

               </div>

               <div className='mt-4' >
                <p className='text-center para text-black' >Don’t have an account ? <span onClick={handleSignup} className=" text-decoration-underline " style={{color:"#8E44AD" , cursor:"pointer"}}
             >Sign up</span></p>
               </div>
            </div>

            {/* <div className='col-6'>
              <img src="doctors/public/assets/login.png"></img>
            </div> */}
         </div>
        </div> 
    </div>

    <Footer/>
      
    </>
  )
}

export default page
