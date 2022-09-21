import Link from "next/link";

const Footer = () => {
    return(
      <>
       <footer className='bg-gradient-to-b from-slate-900 to-slate-900 via-slate-700 text-white border-t-2 border-white '>
        <div className='grid grid-cols-3 text-center'>
          <div className='m-5'> 
          <h3 className='font-bold md:text-2xl pb-6'> Shortcuts </h3>
                <div className='flex footerhover justify-center pb-2'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                   <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
                  </svg>
                      <Link href="/">
                         <a className='ml-2 sm:text-md'>HOME</a>
                      </Link>
                </div>
                <div className='flex footerhover justify-center pb-2'>
                   <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                   <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' />
                   </svg>
                        <Link href="training_courses">
                           <a className='md:ml-2 sm:text-md'>TRAINING COURSES</a>
                        </Link>
                </div>
                <div className='flex footerhover justify-center pb-2'>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                     <path strokeLinecap='round' strokeLinejoin='round' d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z' />
                     </svg>
                         <Link href="faqs">
                           <a className='ml-2'>FAQs</a>
                         </Link>
                </div>
                <div className='flex footerhover justify-center pb-2'>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                     <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z' />
                     </svg>
                           <Link href="enrollment_guide">
                               <a className='ml-2'>ENROLLMENT GUIDELINES</a>
                           </Link>
                </div>
                <div className='flex footerhover justify-center pb-2'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                       <path strokeLinecap='round' d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25' />
                      </svg>
                          <Link href="about_us">
                            <a className='ml-2'>ABOUT US</a>
                          </Link>
                </div>
                <div className='flex footerhover justify-center pb-2'>
                       <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' />
                      </svg>
                        <Link href="contact_us">
                           <a className='ml-2'>CONTACT US</a>
                         </Link>
                </div>
          </div>
            
          <div className='m-5'> 
             <h3 className='font-bold md:text-2xl pb-5'> Social Media Accounts </h3>
                <div className='flex justify-center footerhover pb-2'>
                  <img src="/image/facebook.png" alt="" className='w-8 h-8'/>
                 <a href='https://www.facebook.com/' className='ml-2'>Facebook</a>
                </div>
                <div className='flex justify-center footerhover pb-2'>
                  <img src="/image/twitter.png" alt="" className='w-8 h-8'/>
                 <a href='https://www.twitter.com/' className='ml-2'>Twitter</a>
                </div>
                <div className='flex justify-center footerhover pb-2'>
                  <img src="/image/youtube.png" alt="" className='w-8 h-8'/>
                 <a href='https://www.youtube.com/' className='ml-2'>Youtube</a>
                </div>
                <div className='flex justify-center footerhover pb-2'>
                  <img src="/image/insta.png" alt="" className='w-8 h-8'/>
                 <a href='https://www.instagram.com/' className='ml-2'>Instagram</a>
                </div>
                <div className='flex justify-center footerhover pb-2'>
                  <img src="/image/linkedin.png" alt="" className='w-8 h-8'/>
                 <a href='https://www.linkedin.com/' className='ml-2'>LinkedIn</a>
                </div>
                <div className='flex justify-center footerhover pb-2'>
                  <img src="/image/google.png" alt="" className='w-8 h-8'/>
                 <a href='https://www.google.com/' className='ml-2'>Google Mail</a>
                </div>
          </div>
          
          <div className='m-5'> 
          <h3 className='font-bold md:text-2xl pb-5'> Other Links </h3>
          <blockquote> For more references and helpful </blockquote>
          <blockquote className='pb-6'>websites please check :</blockquote>
          <div className='justify-center footerhover pb-2 flex'>
          <img src="/image/w3s.png" alt="" className='w-8 h-8'/>
            <a href='https://www.w3schools.com/' className='ml-2'>w3schools</a>
          </div>
          <div className='justify-center footerhover pb-2 flex'>
          <img src="/image/stack.png" alt="" className='w-8 h-8'/>
            <a href='https://stackoverflow.com/' className='ml-2'>Stackoverflow</a>
          </div>
          <div className='justify-center footerhover pb-2 flex'>
          <img src="/image/g.png" alt="" className='w-8 h-8'/>
            <a href='https://www.google.com/' className='ml-2'>Google</a>
          </div>
          </div>
        
        </div>
    </footer>
        </>
    )
}
export default Footer;