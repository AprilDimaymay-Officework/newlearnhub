import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const NewCourse = () => {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', course: '', contact: '', address: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                enrollCourse();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const enrollCourse = async () => {
        try {
            const res = await fetch('https://learnhubphdemo.azurewebsites.net/api/training', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/enroll");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.firstName) {
            err.firstName = 'First Name is required';
        }
        if (!form.lastName) {
            err.lastName = 'Last Name is required';
        }
        if (!form.email) {
            err.email = 'Email is required';
        }
        if (!form.course) {
            err.course = 'Course is required';
        }
        if (!form.contact) {
            err.contact = 'Contact is required';
        }
        if (!form.address) {
            err.address = 'Address is required';
        }
        return err;
    }

    return (
        <div className="form-container text-black bg-slate-700 pb-10 mb-5 text-center mt-5 md:ml-20 md:mr-20">
         <h2 className='mt-5 font-bold text-blue-500'>ENROLLMENT APPLICATION</h2>
            <div className='flex justify-center text-blue-500'>
                
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.firstName ? { content: 'Please enter your First Name', pointing: 'below', className: 'text-red-400' } : null}
                                label='First Name'
                                placeholder='First Name'
                                name='firstName'
                                className='hover:border-2 p-2'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.lastName ? { content: 'Please enter your Last Name', pointing: 'below', className: 'text-red-400' } : null}
                                label='Last Name'
                                placeholder='Last Name'
                                name='lastName'
                                className='hover:border-2 p-2'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.email ? { content: 'Please enter your email', pointing: 'below', className: 'text-red-400' } : null}
                                label='Email'
                                placeholder='ex. your_name@gmail.com'
                                name='email'
                                className='hover:border-2 p-2'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.course ? { content: 'Please enter your course', pointing: 'below', className: 'text-red-400' } : null}
                                label='Course'
                                placeholder='ex. Web Development Essentials'
                                name='course'
                                className='hover:border-2 p-2'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.contact ? { content: 'Please enter your contact number', pointing: 'below', className: 'text-red-400' } : null}
                                label='Contact #'
                                placeholder='ex. +63 000 000 0000'
                                name='contact'
                                className='hover:border-2 p-2'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.address ? { content: 'Please enter your address', pointing: 'below', className: 'text-red-400' } : null}
                                label='Address'
                                placeholder='City, State'
                                name='address'
                                className='hover:border-2 p-2'
                                onChange={handleChange}
                            />
                            <Button type='submit' className='bg-red-600 border-2 border-white rounded-md text-white mt-5 pr-3 pl-3 hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 '>Submit</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

export default NewCourse;