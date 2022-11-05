import React,{ Component} from "react";
import { useForm } from 'react-hook-form'
import logo from './images/ninja.png'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function UpdateProfile() {
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
      console.log(JSON.stringify(data, null, 4))
      return false
    }
        return(
            <div className="container mt-5">
                <div className="row g-2">

                    <div className="profile p3 col-4 bg-light rounded text-center">
                        <div className="col-12 mt-5 ">
                            <img src={logo} alt="logo" className="img-fluid rounded-circle w-50"/>
                            {/* <input
                                              name="email"
                                              type="file"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Upload Image"
                                            /> */}
                            {/* <div className="input-group mb-3 w-50">
                                <input type="file" className="form-control" id="inputGroupFile02"/>
                                <label className="input-group-text" for="inputGroupFile02">Upload</label>
                            </div> */}
                            
                        </div>
                        <div className="col-12">
                            <div className="row mb-3">
                                <div className="col-sm-12 text-center">
                                    <h4 className="mt-2">Detective</h4>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 text-center">
                                    <h6 className="m-0">Invidual/organistion</h6>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 text-center">
                                    <h6 className="m-0">221B Baker Street, London</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="info p3 col-8 bg-light rounded">
                        <div className="row g-2 mt-3">
                            
                            <div className="p-3 col-12 ">
                                    
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                            <input
                                              name="email"
                                              type="text"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Enter name"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                        <input
                                          name="email"
                                          type="text"
                                          {...register('email')}
                                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                          placeholder="Enter Email"
                                        />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                        <input type="tel" 
                                        className="form-control mb-3" 
                                        {...register("phoneNumber",{
                                        required:true,
                                        pattern:/[0-9]{10}/,
                                        })} 
                                        placeholder='Contact number' 
                                        />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                            <input
                                              name="email"
                                              type="text"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Enter email"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Pin Code</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                        <input
                                              name="email"
                                              type="text"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Enter PIN Code"
                                            />
                                        </div>
                                    </div>
                                    <hr/>
                                    {/* Additional information */}
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Profesion</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                            <input
                                              name="email"
                                              type="text"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Enter email"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Contact Person</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                        <input
                                              name="email"
                                              type="text"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Enter name"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Qualification/GST Number</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                        <input
                                              name="email"
                                              type="text"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Enter Qualification"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Status</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                        <input
                                              name="email"
                                              type="text"
                                              {...register('email')}
                                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Status..."
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 mx-auto mt-1">
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    

}