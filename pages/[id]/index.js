import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import Link from 'next/link';

const Course = ({ course }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteCourse();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteCourse = async () => {
        const courseId = router.query.id;
        try {
            const deleted = await fetch(`https://learnhubphdemo.azurewebsites.net/api/training/${courseId}`, {
                method: "Delete"
            });

            router.push("/enroll");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container bg-white text-black p-5 m-10 rounded-md">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1 className='font-semibold text-md'>{course.firstName}</h1>
                    <p className='font-semibold text-md'>{course.lastName}</p>
                    <p>{course.email}</p>
                    <p>{course.course}</p>
                    <p>{course.contact}</p>
                    <p>{course.address}</p>
                    <div className='flex justify-end'>
                    <Button className="bg-red-700 text-white pl-2 pr-2 rounded-lg"onClick={open}>Delete</Button>
                    <Link href="/enroll">
                            <Button className="border-2 border-blue-500 text-blue-500 rounded-lg pr-4 pl-4 ml-2" primary>Back</Button>
                            </Link>
                            
                    </div>
                </>
            }
          
           <Confirm
                  className='fixed inset-0 bg-black opacity-50 flex items-center justify-center text-blue-500 font-semibold text-xl'
                  open={confirm}
                  onCancel={close}
                  onConfirm={handleDelete}
                  
                  />
        </div>
    )
}

Course.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`https://learnhubphdemo.azurewebsites.net/api/training/${id}`);
    const { data } = await res.json();

    return { course: data }
}

export default Course;