import Link from "next/link";
import User from "./User";

const Header = () => {
    return(
        <>
        <div className='md:grid md:grid-cols-8 p-2 border-b-2 text-white mt'>
          <div className='col-span-1 mb-2'>
            <header>
             <div className="flex">
              <img src="/image/LearnHubLogo.png" alt='LH' className="w-16 h-8 object-fill pr-2 mt-1"/>
                <Link href="/">  
                   <a className='text-3xl font-semibold hover:text-blue-500'>LearnHub</a>
                </Link>
            </div>
           </header>
         </div>
        <div className='md:col-span-7 mt-1 md:text-end'>
        <nav className='md:flex md:justify-end pr-4'>  
              <div className='flex navhover justify-center  active:bg-blue-500'>
                   <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                   <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
                  </svg>
                   <Link href="/">
                     <a className='ml-2'>HOME</a>
                  </Link>
              </div>
              <div className='flex navhover justify-center ml-8'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' />
                    </svg>
                       <Link href="training_courses">
                          <a className='ml-2'>TRAINING COURSES</a>
                       </Link>
              </div>
              <div className='flex navhover justify-center ml-8'>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                     <path strokeLinecap='round' strokeLinejoin='round' d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z' />
                     </svg>
                         <Link href="faqs">
                             <a className='ml-2'>FAQs</a>
                        </Link>
              </div>
              
              <div className='flex navhover justify-center ml-8'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z' />
                    </svg>
                       <Link href="enrollment_guide">
                         <a className='ml-2'>ENROLLMENT GUIDE</a>
                      </Link>
              </div>
              <div className='flex navhover justify-center ml-8'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                    <path strokeLinecap='round' d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25' />
                    </svg>
                      <Link href="about_us">
                        <a className='ml-2'>ABOUT US</a>
                      </Link>
              </div>
              <div className='flex navhover justify-center ml-8'>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mt-1'>
                     <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' />
                     </svg>
                      <Link href="contact_us">
                        <a className='ml-2'>CONTACT US</a>
                      </Link>
              </div>
        </nav> 
        </div>
        {/* <div className='sm:block md:hidden sm:col-span-7 text-end'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
           </div> */}
        </div> 
       <User/>
      </>
    )
}
export default Header;