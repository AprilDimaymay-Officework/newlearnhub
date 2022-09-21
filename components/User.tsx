import React,{ useState } from 'react'

const User = () => {
    const [showModal,setShowModal] = useState(false);
    return(
        <>
      <div className='col-span-1 mt-3 lg:text-end pr-4 sm:text-center'>
          <button  className=' md:border-2 md:border-slate-900 p-2 text-white rounded-full hover:bg-slate-900'  onClick={()=>setShowModal(true)}> LOG IN</button>
          <button className='ml-7 md:border-2 md:border-slate-900 p-2 text-white rounded-full hover:bg-slate-900'>SIGN UP</button>
     </div>

     
     {showModal ? (
        <div className='fixed bg-black inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white p-10 border-2 rounded-xl'>
            <img src="/image/LearnHubLogo.png" className='ml-36 pb-2 w-12 h-auto justify-center'/>
            <p className='font-semibold text-gray-500 text-xl text-center pb-5'>LOG IN</p>
            <div className='flex items-center pb-2'>
            <p className='text-sm text-gray-500' >USERNAME : </p> 
            <input className='ml-3 pr-2 border border-gray-300 text-xl text-black '></input>
            </div>
            <div className='flex items-center pb-2'>
            <p className='text-sm text-gray-500' >PASSWORD : </p> 
            <input className='ml-3 pr-2 border border-gray-300 text-xl text-black'></input>
            </div> 
            <div>
            <p className='text-sm text-blue-500 ml-28'>forgot password? Click here !</p>
            <p className='text-sm text-blue-500 text-center ml-20'>Not registered ? Create Account Now !</p>
            </div>
            <button className='ml-44 text-xl text-white p-2 bg-blue-600 rounded-md border-2 hover:bg-white hover:border-blue-600 hover:text-blue-600 active:bg-blue-400 active:text-white' onClick={()=>setShowModal(false)}> LOG IN </button> 
          </div>
          
        </div>
      ):null}
        </>
    )
}
export default User;