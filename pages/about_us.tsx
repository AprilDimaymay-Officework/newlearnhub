import type { NextPage } from 'next'
import Link from 'next/link'


const AboutUs: NextPage = () => {
  return (
   <>
    <div className='font-bold text-center text-4xl m-8'>ABOUT US</div>
    <div className='text-center'>
        <blockquote className='text-center font-bold text-blue-500 text-6xl md:pb-20'>LearnHub</blockquote>
    </div>
    <div className='text-center md:font-semibold text-xl md:ml-60 md:mr-60'>
      <blockquote className='pb-10'>
        We are a teaching organization that offers quality learning paths for our students .
        All of the training courses being offerred here on our website went through all the proper processes 
        to ensure the legitimacy of the contents and to satisfy the knowledge needed by our students .
      </blockquote>
      <blockquote className='pb-10'>
        We have several professional teachers,instructors, and also professors that are bound to share their
        knowledge and expertise in their fields . We ensure the credibility of each one to secure our students
        acquired knowledge and skills to be of useful for them and for their future .
      </blockquote>
    </div>
    <div className='text-center pb-32'> 
      <Link href="training_courses">
        <a className='font-bold text-3xl text-blue-400 p-2 underline rounded hover:border-2 hover:border-blue-500 hover:text-white'>
        Check our Training Courses and ENROLL NOW !
        </a>
      </Link>
    </div>
      </>
    )
}
export default AboutUs
