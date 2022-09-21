import Link from "next/link";

const CardCourses = () => {
  return(
    <>
      <div className='md:p-10 sm:pb-5 sm:mt-5 md:grid md:grid-cols-3 md:gap-10 sm:m-10'>
        <div className='card hover:shadow-black'>
          <img src ='/image/webdev.jpg' alt='webdev' className='w-full h-auto object-fill'/>
          <div className='p-2 text-center'>
            <h3 className='font-bold text-gray-700 text-md mt-2 text-center'>WEB DEVELOPMENT ESSENTIALS</h3>
            <div className='py-2 block text-gray-500 pb-12'> This training course is compose of the
            programming basics that are essentil in building a website . Click the button below
            to know more about the course . </div>
              <Link href="coursedetails">
                <a className='bg-blue-500 text-white p-2 rounded hover:bg-slate-900' >See more</a>
              </Link>
          </div>
        </div>
          <div className='card hover:shadow-black'>
            <img src ='/image/gamedev.jpg' alt='game dev' className='w-full h-auto object-fill'/>
            <div className='p-2 text-center'>
              <h3 className='pb-1 font-bold text-gray-700 text-md mt-2 text-center'>GAME DEVELOPMENT ESSENTIALS</h3>
              <div className=' block text-gray-500 pb-5'> This training course is compose of the necessary 
              programming languages and tools in making your own game online . Click the button below
              to know more about the course . </div>
              <a href='' className='bg-blue-500 text-white p-2 rounded hover:bg-slate-900' >See more</a>
          </div>
        </div>
          <div className='card hover:shadow-black'>
            <img src ='/image/robotics.jpg' alt='robotics' className='w-full h-auto object-fill'/>
            <div className='p-2 text-center'>
              <h3 className='font-bold text-gray-700 text-md mt-2 text-center'>AI & Robotics</h3>
              <div className='py-2 block text-gray-500 pb-10'> This training course is compose of the basic 
              topics regarding Artificial Intellegence & Robotics . Click the button below
              to know more about the course .</div>
              <a href='' className='bg-blue-500 text-white p-2 rounded hover:bg-slate-900' >See more</a>
           </div>
        </div>
      </div>
    </>
    )
}
export default CardCourses;