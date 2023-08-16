import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: 'Aashiq',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log('form data', values);
}

const validate = values => {
    //values.name, values.email , values.channel
    //errors.name, errors.email , errors.channel
    //errors.name = 'this field is required'

    let errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Address').required('Required!'),
    channel: Yup.string().required('Required!')
})

const AdmissionCo = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })
    console.log("form values", formik.errors)
    return (
        <div className='flex justify-center'>
            <div className=' w-[25rem]'>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className='mb-5'>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id='name' name='name' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? <div className='text-red-500'>{formik.errors.name}</div> : null}
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id='email' name='email' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="channel">Channel: </label>
                        <input type="text" id='channel' name='channel' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.channel} />
                        {formik.touched.channel && formik.errors.channel ? <div className='text-red-500'>{formik.errors.channel}</div> : null}
                    </div>
                    <button type='submit' className='p-3 bg-blue-300'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AdmissionCo
