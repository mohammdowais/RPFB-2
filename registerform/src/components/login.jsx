import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <form className="row w-25 gy-3 bg-light p-3 mx-auto mt-5 rounded=">
        
            <div className="col-12">
                <label for="firstname" className="form-label ">Name:</label>
                <input type="text" className="form-control mb-3" id="firstname" placeholder='James Bond...' pattern="[a-zA-Z ]{3-20}"/>
            </div>
        
        
            <div className="col-12">
                <label for="emailId" className="form-label ">Email:</label>
                <input type="email" className="form-control mb-3" id="emailId" placeholder='jamesbond@angel.com'/>
            </div>
        
        
            <div className="col-12">
                <label for="phoneNumber" className="form-label ">Contact Number:</label>
                <input type="tel" className="form-control mb-3" id="phoneNumber" placeholder='Contact number' pattern="[0-9]{10}"/>
            </div>
        
        
            <div className="col-12">
                <button type="submit" className='form-control btn-primary my-3'>Sign Up</button>
            </div>
        
      </form>
    )
  }
}

export default Login;