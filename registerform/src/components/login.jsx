import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LoginService from '../services/LoginService'
import * as Yup from 'yup'


export default function Temp() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .max(32,'Password should be less than 32 characters')
      .matches(
        /[.*[A-Z].*]{0,}/,
        "Must Contain at least one Uppercase Character"
      )
      .matches(
        /[.*[a-z].*]{0,}/,
        "Must Contain at least one Lowercase Character"
      )
      .matches(
        /[.*[0-9].*]{0,}/,
        "Must Contain at least one Number Character"
      )
      .min(5, 'Password must be at 5 char long'),


    email: Yup.string()
      .required('Email is mendatory')
      .matches(
        /@/,
        "Must have @ "
      )
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please Enter a valid email"
      )
    //   .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    // console.log(JSON.stringify(data, null, 4))
    console.log(data)
    LoginService.postRequestData(data);
    return false
  }
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)} className="row w-25 gy-3 bg-light p-3 mx-auto mt-5 rounded  novalidate">
          <div className="form-group col-12 mb-3 mt-3">
              <h4>Login</h4>
           </div>


        <div className="form-group col-12">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter email"
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>


        <div className="form-group col-12">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter password"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </div>
      </form>
      </div>
  )
}