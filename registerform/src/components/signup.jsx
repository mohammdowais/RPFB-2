import { useForm } from "react-hook-form";

export default function Login() {

    const {register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = (data)=>{
      console.log(data);
    }


    return (
      <form 
      className="row w-25 gy-3 bg-light p-3 mx-auto mt-5 rounded"
      onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group col-12 mb-3 mt-3">
              <h4>Sign Up</h4>
            </div>
            <div className="col-6" >
                <label for="firstName" className="form-label ">First Name:</label>
                <input type="text" 
                className="form-control mb-2" {...register("firstName",{required:true,maxLength: 25})} 
                placeholder='James'  />

                {errors.firstName && <p className="text-danger muted">Please Valid First Name</p>}
            </div>
            <div className="col-6">
                <label for="lastname" className="form-label "> Last Name:</label>
                <input type="text" 
                className="form-control mb-2" 
                {...register("lastname",{required:true,maxLength:25})} 
                placeholder='Bond' pattern="[a-zA-Z ]{3,50}" />

            {errors.firstName && <p className="text-danger muted">Please Valid Last Name</p>}
            </div>
        
        
            <div className="col-12">
                <label for="emailId" className="form-label ">Email:</label>
                <input 
                className="form-control mb-3" 
                {...register("emailId",{
                  required:true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                })}  
                placeholder='jamesbond@angel.com' />

            {errors.emailId && <p className="text-danger muted">Please enter valid email</p>}
            </div>
        
        
            <div className="col-12">
                <label for="phoneNumber" className="form-label ">Contact Number:</label>
                <input type="tel" 
                className="form-control mb-3" 
                {...register("phoneNumber",{
                required:true,
                pattern:/[0-9]{10}/,
                })} 
                placeholder='Contact number' 
                />
                {errors.phoneNumber && <p className="text-danger muted">Please Enter Valid Number</p>}
            </div>
        
        
            <div className="col-12">
                <button type="submit" className='form-control btn-primary my-3' >Sign Up</button>
            </div>
        
      </form>
    )
}
