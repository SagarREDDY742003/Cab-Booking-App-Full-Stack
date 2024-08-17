'use client'
import React, { useState } from 'react'
import BookRideNavBar from './BookRideNavBar'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AvaliableCabs from './AvaliableCabs';
import SearchReasult from './SearchReasult';

const validationSchema = Yup.object().shape({
  pickUpLocation: Yup.string().required("Pickup location is required"),
  destinationLocation: Yup.string().required("Destination location is required")
});

const BookRide = () => {
  const [activeField, setActiveField] = useState('');

  const handleOnSubmit = (values) => {
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      pickUpLocation: '',
    },
    validationSchema,
    onSubmit: values => {
      if(formik.isValid){
        handleOnSubmit(values);
      }
    },
  });

  const onFocused=(e)=>{
    const name=e.target.name
    setActiveField(name);
  }
  
  return (
    <div className='w-full mb-2'>
      <BookRideNavBar />
      <div className='px-3 lg:px-5 mt-6'>
        <form className='space-y-2 mb-2' onSubmit={formik.handleSubmit}>

          <div>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3' >From</p>

              <input 
                name='pickUpLocation' 
                placeholder='Enter Pickup Location' 
                value={formik.values.pickUpLocation} 
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("pickUpLocation", value);
                  // dispatch(searchLocation(value));
                }} 
                onBlur={formik.handleBlur}
                className='border-none outline-none'
                onFocus={onFocused}
              />

              {
                activeField === "pickUpLocation" &&
                
                formik.values.pickUpLocation && (
                  <div>
                    <SearchReasult 
                      setActiveField={setActiveField}
                      latitude_Key={"pickup_latitude"}
                      longitude_key={"pickup_longitude"}
                      area_key={"pickup_area"}  
                    />
                  </div>
                )
              }
            </div>
            {
              formik.touched.pickUpLocation && formik.errors.pickUpLocation && (
                <div>
                  <p className='text-xs text-red-500'>
                  {formik.errors.pickUpLocation}
                  </p>
                </div>
              )
            }
          </div>
          
          <div>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3' >To</p>
              <input 
                name='destinationLocation' 
                placeholder='Enter Destination Location' 
                value={formik.values.destinationLocation} 
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("destinationLocation", value);
                  // dispatch(searchLocation(value));
                }} 
                onBlur={formik.handleBlur}
                className='border-none outline-none'
                onFocus={onFocused}
              />
              {
                activeField === "destinationLocation" &&
                formik.values?.destinationLocation?.length>0 && (
                  <div className=''>
                    <SearchReasult 
                      setActiveField={setActiveField}
                      latitude_Key={"destination_latitude"}
                      longitude_key={"destination_longitude"}
                      area_key={"destination_area"}  
                    />
                  </div>
                )
              }
            </div>
            {
              formik.touched.destinationLocation && formik.errors.destinationLocation && (
                <div>
                  <p className='text-xs text-red-500'>
                  {formik.errors.destinationLocation}
                  </p>
                </div>
              )
            }
          </div>

          <button  type='submit' className=' w-full px-3 py-2 font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-sm' >
            Find Driver
          </button>
          
        </form>
      </div>

      <div className='-z-10 px-2 lg:px-5 mt-5'>
        <p className='font-semibold text-cyan-700'>AVALIABLE RIDES</p>
        <div className='space-y-3'>
          <AvaliableCabs />
          <AvaliableCabs />
          <AvaliableCabs />
          <AvaliableCabs />
          <AvaliableCabs />
        </div>

      </div>


    </div>
  )
}

export default BookRide
