import React,{ useEffect,Component} from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import logo from './images/ninja.png'
import UpdateProfile from './updateprofile';
import getAngelService from '../services/angelProfileService'

export default function Profile(){
    const angel = getAngelService.getAngel();
     console.log("loaded",angel.firstName);
    return(
           <div className="container mt-5 mx-auto" >
               <div className="row g-2">
                   <div className="profile p3 col-lg-4 col-md-4  col-xs-12 bg-light rounded text-center">
                       <div className="col-12 mt-5">
                           <img src={logo} alt="logo" className="img-fluid rounded-circle w-50"/>
                       </div>
                       <div className="col-12">
                           <div className="row mb-3">
                               <div className="col-sm-12 text-center">
                                   <h4 className="mt-2">
                                    {/* Sherlock Holmes */}
                                    {angel.firstName + " " +angel.lastName} 
                                    </h4>
                               </div>
                           </div>
                           <div className="row mb-1">
                               <div className="col-sm-12 text-center">
                                   <h5 className="mt-1">
                                    {angel.profession}
                                    </h5>
                               </div>
                           </div>
                           <div className="row mb-1">
                               <div className="col-sm-12 text-center">
                                   <h6 className="m-0">
                                    {angel.type}
                                   </h6>
                               </div>
                           </div>
                           <div className="row mb-3">
                               <div className="col-sm-12 text-center">
                                   <h6 className="m-0">
                                    {angel.address}
                                   </h6>
                               </div>
                           </div>
                           <div className="row mb-3">
                               <div className="col-sm-12 mb-2">
                                   {/* <Router>
                                       <button type="submit" className="btn btn-light btn-inline">
                                           <Link to='/updateprofile'>Edit Profile</Link>   
                                       </button>
                                       <Routes>
                                           <Route path='/updateprofile' element={<UpdateProfile/>}/>
                                       </Routes>
                                   </Router> */}
                                       <button type="submit" className="btn btn-outline-dark btn-inline">
                                           Edit Profile   
                                       </button>
                               </div>
                               <div className="col-sm-12  mt-2">
                                   {/* <Router>
                                       <button type="submit" className="btn btn-light btn-inline">
                                           <Link to='/updateprofile'>Edit Profile</Link>   
                                       </button>
                                       <Routes>
                                           <Route path='/updateprofile' element={<UpdateProfile/>}/>
                                       </Routes>
                                   </Router> */}
                                       <button type="submit" className="btn btn-outline-dark btn-inline">
                                           Change Password 
                                       </button>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="info p3 col-lg-8 col-md-4 col-xs-12 bg-light rounded">
                       <div className="row g-2 mt-3">
                           
                           <div className="p-3 col-12 ">
                                   
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Full Name</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                         {/* Sherlock Holmes */}
                                         {angel.firstName + " " +angel.lastName}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Email</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                         {angel.email}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Phone</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                         {angel.phone}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Address</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                         {angel.address}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Pin Code</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                           {angel.pin}
                                       </div>
                                   </div>
                                   <hr/>
                                   {/* Additional information */}
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">User ID</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                         {angel.userID}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Contact Person</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                         {angel.contactPerson}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Qualification/GST Number</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                        {angel.qualification}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Interest</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                        {angel.interest}
                                       </div>
                                   </div>
                                   <div className="row mb-3">
                                       <div className="col-sm-4">
                                           <h6 className="mb-0">Joined</h6>
                                       </div>
                                       <div className="col-sm-8 text-secondary">
                                        {angel.joined}
                                       </div>
                                   </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       )
    
}