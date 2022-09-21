import type { NextPage } from 'next'
import CardCourses from '../components/cardcourses'
import Link from 'next/link'

const TrainingCourses: NextPage = () => {
  return (
   <>
   <div>
      <Link href="/enroll">
        <a className='ml-l0'>LIST OF ENROLEES</a>
      </Link>
    </div>
    <div className='font-bold text-center text-4xl m-8'>TRAINING COURSES</div>
    
    <CardCourses/>
    <div className='pb-10'>

    </div>
    </>
    )
}
export default TrainingCourses
