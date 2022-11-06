// import React, { Component } from 'react'

// class ChangePass extends Component {
//   render() {
//     return (
//       <form className="row w-25 gy-3 bg-light p-3 mx-auto mt-5 rounded">


//             <div className="col-12">
//                 <label for="password" className="form-label ">New Password:</label>
//                 <input type="password" className="form-control mb-3" id="password" placeholder='Enter Password' required/>
//             </div>

//             <div className="col-12">
//                 <label for="password" className="form-label ">Confirm Password:</label>
//                 <input type="password" className="form-control mb-3" id="password" placeholder='Confirm Password' required/>
//             </div>
        
//             <div className="col-12">
//                 <button type="submit" className='form-control btn-primary my-3' required>Update</button>
//             </div>
//       </form>
//     )
//   }
// }

// export default ChangePass;
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
export default function ChangePass() {
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
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)} className="row w-25 gy-3 bg-light p-3 mx-auto mt-5 rounded">
          <div className="form-group col-12 mb-3 mt-3">
              <h4>Change Password</h4>
           </div>
        <div className="form-group col-12">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter New password"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group col-12">
          <label>Confirm Password</label>
          <input
            name="confirmPwd"
            type="text"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
            placeholder="Confirm New password"
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
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