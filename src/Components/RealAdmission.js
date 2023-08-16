import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter';

const initialValues = {
  fullName: '',
  contactNumber: '',
  dob: '',
  gender: '',

  provience: '',
  district: '',
  municipality: '',
  ward: '',
  street: '',

}
const onSubmit = (values) => {
  console.log('form data', values);
}

const validSchema = z.object({
  fullName: z.string().min(3).max(15),
  contactNumber: z.number(),
  dob: z.string(),
  gender: z.string(),
  // provience: '',
  // district: '',
})

const RealAdmission = () => {
  
  return (
    <div className='font-cario md:mx-20 mx-10 '>
      <div>
        <h1 className='text-[2.5rem] text-bluee font-semibold'>Admission Form</h1>
        <p>Please enter your details into the fields below, we will respond to your enquiry shortly via email.</p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(validSchema)}
      >
        <Form>
          {/* personl details */}
          <div className='mt-4'>
            <h3 className='text-3xl font-medium'>Personal Details</h3>
            <div className='mt-3'>
              <label className='text-lg leading-10 text-textBlack' htmlFor="fullName">Full Name</label>
              <Field className='w-full p-1.5 border-borderGrey rounded focus:border-borderBluee' placeholder='full name' type="text" id='fullName' name='fullName' />
              <ErrorMessage name='fullName'>
                {
                  (errorMsg) => <div className='text-red-500'>{errorMsg}</div>
                }
              </ErrorMessage>
            </div>
            <div className='flex md:flex-row flex-col md:gap-5 gap-2'>
              <div className='basis-1/2 '>
                <label className='text-lg leading-10 text-textBlack' htmlFor="contactNumber">Contact Number</label>
                <Field className='w-full p-1.5 border-borderGrey rounded focus:border-borderBluee' placeholder='phone number' type="number" id='contactNumber' name='contactNumber' />
                <ErrorMessage name='contactNumber'>
                  {
                    (errorMsg) => <div className='text-red-500'>{errorMsg}</div>
                  }
                </ErrorMessage>
              </div>
              <div className='basis-1/2 '>
                <label className='text-lg leading-10 text-textBlack' htmlFor="dob">Date Of Birth</label>
                <Field className='w-full p-1.5 border-borderGrey rounded focus:border-borderBluee' placeholder='date of birth' type="text" id='dob' name='dob' />
                <ErrorMessage name='dob'>
                  {
                    (errorMsg) => <div className='text-red-500'>{errorMsg}</div>
                  }
                </ErrorMessage>
              </div>
              <div className='basis-1/4 '>
                <label className='text-lg leading-10 text-textBlack'>Gender</label>
                <div className='w-full'>
                  <Field type="radio" id="male" name="mf" value="male" />
                  <label className='ml-2' htmlFor="male">Male</label>
                  <Field className='ml-2' type="radio" id="female" name="mf" value="female" />
                  <label className='ml-2' htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
          {/* permanent address */}
          <div className='mt-4'>
            <h3 className='text-3xl font-medium'>Permanent Address</h3>
            <div className='flex md:flex-row flex-col md:gap-5 gap-2'>
              <div className='basis-1/2'>
                <label className='text-lg leading-10 text-textBlack' htmlFor="provience">Provience</label>
                <Field as='select' className='w-full p-2 border-borderGrey rounded focus:border-borderBluee' id='provience' name='provience' >
                  <option value="" >Choose Your Province</option>
                </Field>
              </div>
              <div className='basis-1/2'>
                <label className='text-lg leading-10 text-textBlack' htmlFor="district">District</label>
                <Field as='select' className='w-full p-2 border-borderGrey rounded focus:border-borderBluee' id='district' name='district' >
                  <option value="" >Choose Your District</option>
                </Field>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-2">
              <div className='basis-1/2'>
                <label className='text-lg leading-10 text-textBlack' htmlFor="municipality">Municipality</label>
                <Field as='select' className='w-full p-2 border-borderGrey rounded focus:border-borderBluee' id='municipality' name='municipality' >
                  <option value="" >Choose Your Municipality</option>
                </Field>
              </div>
              <div className='basis-1/2'>
                <div className="flex sm:flex-row flex-col sm:gap-5 gap:2">
                  <div className='basis-1/3'>
                    <label className='text-lg leading-10 text-textBlack' htmlFor="ward">Ward No</label>
                    <Field as='select' className='w-full p-2 border-borderGrey rounded focus:border-borderBluee' id='ward' name='ward' >
                      <option value="" >Choose Ward</option>
                    </Field>
                  </div>
                  <div className='basis-2/3'>
                    <label className='text-lg leading-10 text-textBlack' htmlFor="street">Street Name</label>
                    <Field as='select' className='w-full p-2 border-borderGrey rounded focus:border-borderBluee' id='street' name='street' >
                      <option value="" >Choose Street</option>
                    </Field>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* stream */}
          <div className='mt-4'>
            <h3 className='text-3xl font-medium'>Stream</h3>
            <div className='flex md:flex-row flex-col md:gap-5 gap-2'>
              <div className='basis-1/2'>
                <label className='text-lg leading-10 text-textBlack' htmlFor="faculty">Faculty</label>
                <Field as='select' className='w-full p-2 border-borderGrey rounded focus:border-borderBluee' id='faculty' name='faculty' >
                  <option value="" >Choose Your Faculty</option>
                </Field>
              </div>
              <div className='basis-1/2'>
                <label className='text-lg leading-10 text-textBlack' htmlFor="program">Program</label>
                <Field as='select' className='w-full p-2 border-borderGrey rounded focus:border-borderBluee' id='program' name='program' >
                  <option value="" >Choose Your Program</option>
                </Field>
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='text-xl'>Optional Subject</h3>
              <Field type='checkbox' />
              <label htmlFor="" >computer</label>
            </div>
          </div>


          <button type='submit' className='p-3 mt-8 bg-blue-300'>Submit</button>
        </Form>

      </Formik>
    </div>
  )
}

export default RealAdmission














