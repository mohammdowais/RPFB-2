import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <form className="row w-25 gy-3 bg-light p-3 mx-auto mt-5 rounded">
        
        
            <div className="col-12">
                <label for="password" className="form-label ">Old Password:</label>
                <input type="password" className="form-control mb-3" id="password" placeholder='Contact number' required/>
            </div>

            <div className="col-12">
                <label for="password" className="form-label ">New Password:</label>
                <input type="password" className="form-control mb-3" id="password" placeholder='Contact number' required/>
            </div>

            <div className="col-12">
                <label for="password" className="form-label ">Confirm Password:</label>
                <input type="password" className="form-control mb-3" id="password" placeholder='Contact number' required/>
            </div>
        
        
      </form>
    )
  }
}

export default Login;
