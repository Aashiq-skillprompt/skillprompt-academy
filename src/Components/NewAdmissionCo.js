import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: 'Aashiq',
    email: '',
    channel: '',
    social : {
        facebook : '',
        twitter: ''
    },
    phoneNumbers: ['','']
}
const onSubmit = values => {
    console.log('form data', values);
}

// const validate = values => {
//     let errors = {}

//     if (!values.name) {
//         errors.name = 'Required'
//     }
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//     if (!values.channel) {
//         errors.channel = 'Required'
//     }
//     return errors
// }

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Address').required('Required!'),
    channel: Yup.string().required('Required!')
})

const NewAdmissionCo = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <div className='flex justify-center'>
                <div className=' w-[25rem]'>
                    <Form>
                        <div className='mb-5'>
                            <label htmlFor="name">Name: </label>
                            <Field type="text" id='name' name='name' />
                            <ErrorMessage name='name' component={TextError} />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email">Email: </label>
                            <Field type="email" id='email' name='email' />
                            <ErrorMessage name='email'>
                                {
                                    (errorMsg)=> <div className='text-red-500'>{errorMsg}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="channel">Channel: </label>
                            <Field type="text" id='channel' name='channel' />
                            <ErrorMessage name='channel' component={TextError} />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="facebook">Facebook: </label>
                            <Field type="text" id='facebook' name='social.facebook' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="twitter">Twitter: </label>
                            <Field type="text" id='twitter' name='social.twitter' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="Primary">Primary Phone: </label>
                            <Field type="text" id='Primary' name='phoneNumbers[0]' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="Secondary">Secondary Phone: </label>
                            <Field type="text" id='Secondary' name='phoneNumbers[1]' />
                        </div>
                        <button type='submit' className='p-3 bg-blue-300'>Submit</button>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}

export default NewAdmissionCo
