import type { NextPage } from 'next'

const ContactUs: NextPage = () => {
  return (
    <>
    <div className='font-bold text-center text-4xl m-8'>CONTACT US</div>
    <div>
      <div>
        <blockquote className='text-center font-bold text-blue-500 text-6xl pb-24'>LearnHub</blockquote>
      </div>
      <div className='md:text-3xl font-semibold text-center pb-10'>
        For urgent concerns and realtime response needed, please to call our customer service lines
        available 24hrs .
      </div>
      <div className='text-xl font-xl text-center pb-28'>
        Mobile Number : +6391433980125 | Landline Number : Loc. (046) 8790 768
      </div>
      <div className='md:text-3xl font-semibold text-center pb-10'>
        For face to face classes offered and walk-in preferred inquiries, please do visit us on our
        physical building located at :
      </div>
      <div className='text-xl font-medium text-center pb-20'>
        480 Road 89 Blk 234 25th Flr. Travis Tower Taguig City, Philippines
      </div>
      
    </div>
    </>
   
    )
}
export default ContactUs
