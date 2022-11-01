import React, { Component } from 'react'

class ChangePass extends Component {
  render() {
    return (
      <form className="row w-25 gy-3 bg-light p-3 mx-auto mt-5 rounded">


            <div className="col-12">
                <label for="password" className="form-label ">New Password:</label>
                <input type="password" className="form-control mb-3" id="password" placeholder='Enter Password' required/>
            </div>

            <div className="col-12">
                <label for="password" className="form-label ">Confirm Password:</label>
                <input type="password" className="form-control mb-3" id="password" placeholder='Confirm Password' required/>
            </div>
        
            <div className="col-12">
                <button type="submit" className='form-control btn-primary my-3' required>Update</button>
            </div>
      </form>
    )
  }
}

export default ChangePass;
