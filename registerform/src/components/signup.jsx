import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const styles = {
  responsive: {
    maxWidth:"350px",
  }
}
export default function Signup() {

    const {register, handleSubmit, formState:{errors} } = useForm();
    const [respX,setRespX] =useState('');
    const LOGIN_POST_URL ="http://localhost:8080/api/signup"
    const onSubmit = (data)=>{
      console.log(data);
      console.log(data.phoneNumber)
      axios({
        method: 'post',
        url: LOGIN_POST_URL,
        data: {
                email: data.emailId,
                firstName: data.firstName,
                lastName:data.lastname,
                contact_no:data.phoneNumber,
                // password:"h1K@"
                }
    }).then(res =>{
        console.log(" in "+res.data);
        if(res.data === "Signup Successfull"){
          navigate("/login");
        }
        else{
          console.log("Looks Like you are already a user please signup again")
        }
        setRespX(res.data);
      })
    }
  const navigate = useNavigate();
  const navigateMethod=(event)=>{
    // navigate("/login");
  }

    return (
      
      <form 
      style={styles.responsive}
      className="row gy-3 bg-light p-3 mx-auto mt-5 rounded"
      onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group col-12 mb-3 mt-3">
              <h4>Sign Up</h4>
            </div>
            <div className="col-6" >
                <label htmlFor="firstName" className="form-label ">First Name:</label>
                <input type="text" 
                className="form-control mb-1" {...register("firstName",{required:true,maxLength: 25})} 
                placeholder='James'  />

                {errors.firstName && <p className="text-danger muted">Please Valid First Name</p>}
            </div>
            <div className="col-6">
                <label htmlFor="lastname" className="form-label "> Last Name:</label>
                <input type="text" 
                className="form-control mb-1" 
                {...register("lastname",{required:true,maxLength:25})} 
                placeholder='Bond' pattern="[a-zA-Z ]{3,50}" />

            {errors.firstName && <p className="text-danger muted">Please Valid Last Name</p>}
            </div>
        
        
            <div className="col-12">
                <label htmlFor="emailId" className="form-label ">Email:</label>
                <input 
                className="form-control mb-1" 
                {...register("emailId",{
                  required:true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                })}  
                placeholder='jamesbond@angel.com' />

            {errors.emailId && <p className="text-danger muted">Please enter valid email</p>}
            </div>
        
        
            <div className="col-12">
                <label htmlFor="phoneNumber" className="form-label ">Contact Number:</label>
                <input type="tel" 
                className="form-control mb-3" 
                {...register("phoneNumber",{
                required:true,
                pattern:/^[0-9]{10}$/,
                })} 
                placeholder='Contact number' 
                />
                {errors.phoneNumber && <p className="text-danger muted">Please Enter Valid Number</p>}
            </div>
        
        
            <div className="col-12">
                <button type="submit" className='btn btn-primary btn-block my-1 form-control ' onClick={navigateMethod}>Sign Up</button>
            </div>
        <script src="tele.js">
          
        </script>
      </form>
    )
}
