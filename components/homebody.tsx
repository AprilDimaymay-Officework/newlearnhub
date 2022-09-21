import Image from "next/image";
import CardCourses from "./cardcourses";

const Body = () => {
    return(
        <>
        <div className='md:absolute'>
        <img src='/image/Banner.jpg' alt='ITcourses' className='md:opacity-5 object-fill'/>
      </div>

      <div className='md:flex'>
        <div className='md:px-4 md:pb-60'>
          <blockquote className='font-bold md:text-6xl md:mt-48 py-5'>Get yourself ready for the future .</blockquote>
          <blockquote>Get the best of our training courses and be involve with a lot of activities and 
            be trained with Technology Professionals .</blockquote>
          <blockquote className='font-bold md:text-4xl sm:text-xl text-blue-500'>Check our training courses now !</blockquote>
        </div>
        <div className='mt-4 md:w-fit md:h-48 md:pr-4 sm:object-fill'>
          <img src='/image/Banner.jpg' alt=''/>
        </div>
      </div>
      <div className='text-center md:mt-10 pb-3 mt'>
        <h1 className='text-blue-500 font-bold md:text-5xl sm:text-xl'> WHAT IS LEARN HUB ?</h1>
        <blockquote className='md:ml-20 md:mr-20 mt-5 md:font-semibold md:text-xl block'> Learn Hub is an online website that provides several varieties
          of training courses that you can choose from. Ranging from the basic categories up to the advanced ones . 
          This website lets you enroll yourself from any courses that you want to learn and be involved.
          All of the courses are set to have you get equipped with the learnings that you are looking for. 
        </blockquote>
      </div>

      <div className='text-center md:m-10 pb-10'>
        <h1 className='text-blue-500 font-bold md:text-5xl sm:text-xl'> WHAT WILL YOU GET AFTER TAKING TRAINING COURSES FROM US?</h1>
        <blockquote className='md:ml-20 md:mr-20 mt-5 md:font-semibold md:text-xl block'> Learn Hub is an online website that provides several varieties
          of training courses that you can choose from. Ranging from the basic categories up to the advanced ones . 
          This website lets you enroll yourself from any courses that you want to learn and be involved.
          All of the courses are set to have you get equipped with the learnings that you are looking for. 
        </blockquote>
      </div>
      <div>
        <h4 className='text-blue-500 font-bold md:text-5xl sm:text-xl text-center pb-3'>TRAINING COURSES</h4>
        <blockquote className='md:ml-20 md:mr-20 mt-1 md:font-semibold md:first-letter:text-xl block text-center sm:pb-5'> Below are the available
        training courses that LearnHub offers .</blockquote>
        <blockquote className='md:ml-20 md:mr-20 mt-1 md:font-semibold md:text-xl block text-center'> These courses are prepared and went through
        certifications and professional revisions .</blockquote>
        <blockquote className='ml-20 mr-20 mt-1 font-bold md:text-2xl sm:text-l text-blue-200 block text-center'>ENROLL NOW </blockquote> 
        <div><CardCourses/>
        </div>
        <div className='flex justify-center pb-10'>
        <div className='border-2 border-slate-900 p-2 text-white rounded-full hover:bg-slate-900'>
          <a href='training_courses'>See Complete List</a>
        </div>
      </div>
      </div>
      <div className='text-center m-4 pb-20'> 
        <h3 className='text-blue-500 font-bold text-3xl text-center pb-3'>GRADUATES FROM US</h3>
        <blockquote className='ml-20 mr-20 mt-1 font-semibold text-xl block text-center'> LearnHub promises to 
        provide quality training courses for our students to be ready for the future .</blockquote>
        <blockquote className='ml-20 mr-20 mt-1 font-semibold text-xl block text-center'> Below are the students
        who were able to come to that reality and has been satisfied with the learnings they have acquired from us.</blockquote>
        <blockquote className='ml-20 mr-20 mt-1 font-bold text-2xl text-blue-200 block text-center'>BE ONE OF THEM !</blockquote> 
        <div>
        <div className='mt-10 p-5 md:grid md:grid-cols-4 md:gap-10'>
            <div className='card'>
            <img src ='/image/Student1.png' alt='' className='w-full h-auto object-fill'/>
            
            </div>
            <div className='card'>
            <img src ='/image/Student2.png' alt='' className='w-full h-auto object-fill'/>
                        </div>
            <div className='card'>
            <img src ='/image/Student3.png' alt='' className='w-full h-auto object-fill'/>
            </div>
            <div className='card'>
            <img src ='/image/Student4.png' alt='' className='w-full h-auto object-fill'/>
            </div>
             </div>
         </div>
       </div>
        </>
    )
}
export default Body;