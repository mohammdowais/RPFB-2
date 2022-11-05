import React,{ Component} from "react";
import logo from './images/ninja.png'

class Profile extends Component{
    render(){
        return(
            <div className="container mt-5">
                <div className="row g-2">

                    <div className="profile p3 col-4 bg-light rounded text-center">
                        <div className="col-12 mt-5">
                            <img src={logo} alt="logo" className="img-fluid rounded-circle w-50"/>
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
                            <div className="row mb-3">
                                <div className="col-sm-12 text-center">
                                    <button type="submit" className="btn btn-light btn-inline">
                                        Edit Profile   
                                    </button>
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
                                          Sherlock Holmes
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                          sherlockholmes@wire.uk
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                          +44  7946 0999
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                          221B Baker Street, London
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Pin Code</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                            NW1
                                        </div>
                                    </div>
                                    <hr/>
                                    {/* Additional information */}
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">User ID</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                          420I
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Contact Person</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                          Dr. Watson
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Qualification/GST Number</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                          Chemical Engineering/22AAAAA0000A1Z5
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Status</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                          IDK
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Joined</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                            4 Nov 2022
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default Profile;