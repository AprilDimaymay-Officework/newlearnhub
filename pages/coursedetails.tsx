import type { NextPage } from 'next'
import React,{ useState } from 'react'
import Link from  'next/link'


const CourseDetails : NextPage = () => {
  const [showModal,setShowModal] = useState(false);
   return (
   <>
    <div className='font-bold text-center text-4xl m-8'>TRAINING COURSES</div>
    <div className='md:flex items-center pt-10 pb-32'>
      <div>
        <img src = "/image/webdev.jpg" className='w-full h-auto px-20'></img>
      </div>
      <div className='pb-10 '>
       <h3 className='text-2xl font-semibold pb-4'>WEB DEVELOPMENT ESSENTIALS</h3>
       <p>This training course consists of programming languages </p>
       <p className='pb-4'>including HTML,CSS,BootStrap, & Jquery . </p>
       <p className='pb-4'>COURSE SPAN : 2 MONTHS</p>
       <p className='pb-4 text-2xl text-yellow-500 font-semibold'>COURSE FEE : 4,500.00 </p>
       <p className='pb-4'>TRAINING SCHEDULE : September 24, 2022 - November 24, 2022 </p>
       <p className='pb-4'>SEATS AVAILABLE : 48</p>
       <Link href='/new'>
       <a className='p-5 bg-blue-500 border-2 border-white font-bold font-2xl rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500'> ENROLL NOW </a>
       </Link> 
      </div>

      {showModal ? (
        <div className='fixed bg-black inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white p-10 border-2 rounded-xl'>
            <img src="/image/LearnHubLogo.png" className='ml-36 pb-2 w-12 h-auto justify-center'/>
            <p className='font-semibold text-gray-500 text-xl text-center pb-5'>ENROLLMENT FORM</p>
            <p className='text-sm text-gray-500 pb-3 text-center'>Please complete the details needed below</p>
            <div className='flex items-center pb-2'>
            <p className='text-sm text-gray-500' >SURNAME : </p> 
            <input className='ml-10 pr-2 border border-gray-300 text-xl text-black '></input>
            </div>
            <div className='flex items-center pb-2'>
            <p className='text-sm text-gray-500' >MIDDLE NAME : </p> 
            <input className='ml-3 pr-2 border border-gray-300 text-xl text-black'></input>
            </div> 
            <div className='flex items-center pb-2'>
            <p className='text-sm text-gray-500' >FIRST NAME : </p> 
            <input className='ml-7 pr-2 border border-gray-300 text-xl text-black'></input>
            </div> 
            <div className='flex items-center pb-5'>
            <p className='text-sm text-gray-500' >SCHEDULE : </p> 
            <input className='ml-10 pr-2 border border-gray-300 text-xl text-black'></input>
          </div>   
          <button className='ml-48 text-sm text-white p-2 bg-red-600 rounded-md border-2 hover:bg-white hover:border-red-600 hover:text-red-600 active:bg-red-400 active:text-white' onClick={()=>setShowModal(false)}> SUBMIT APPLICATION </button> 
          </div>
        </div>
      ):null}
    </div>
   
    </>
    )
}
export default CourseDetails
