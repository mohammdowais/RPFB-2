import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/ninja.png";

export default function Profile() {
  const [angel, setPosts] = useState([]);
  // const angel ={
  //     firstName: 'Sherlock',
  //     lastName: 'holmes',
  //     profession:'Detective',
  //     address: '221B Baker Street, London, UK',
  //     Type:"Individual",
  //     email:"sherlockholmes@wire.uk",
  //     phone:"+44  7946 0999",
  //     pin:"NW1",
  //     contactPerson:'Dr. Watson',
  //     qualification:'Chemical Engineering',
  //     interest:'Criminal Cases',
  //     joined:'4 Nov 2022',
  //     userID: '123'
  //   };

  useEffect(() => {
    fetch("http://localhost:8080/api/angelUser/getAngelUserById/3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //   console.log("testdata" + angel);
  const navigate = useNavigate();
  const navigateMethod = (event) => {
    navigate("/updateprofile");
  };
  const changeMethod1 = (event) => {
    navigate("/changepassword");
  };

  return (
    <div className="container mt-5 mx-auto">
      <div className="row g-2 mt-5">
        <div className="profile p3 col-lg-4 col-md-4  col-xs-12 bg-light rounded text-center">
          <div className="col-12 mt-5">
            <img
              src={logo}
              alt="logo"
              className="img-fluid rounded-circle w-50"
            />
          </div>
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-sm-12 text-center">
                <h4 className="mt-2">{angel.ahName}</h4>
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-sm-12 text-center">
                <h5 className="mt-1">{angel.ahProfession}</h5>
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-sm-12 text-center">
                <h6 className="m-0">{angel.ahType}</h6>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12 text-center">
                <h6 className="m-0">{angel.ahAddress}</h6>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12 mb-2">
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-inline"
                  onClick={navigateMethod}
                >
                  Edit Profile
                </button>
              </div>
              <div className="col-sm-12  mt-2">
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-inline"
                  onClick={changeMethod1}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* basic info display */}
        <div className="info p3 col-lg-8 col-md-4 col-xs-12 bg-light rounded">
          <div className="row g-2 mt-3">
            <div className="p-3 col-12 ">
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-8 text-secondary">{angel.ahName}</div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-8 text-secondary">{angel.ahEmail}</div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-8 text-secondary">
                  {angel.ahContactNumber}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-8 text-secondary">{angel.ahAddress}</div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Pin Code</h6>
                </div>
                <div className="col-sm-8 text-secondary">{angel.ahPincode}</div>
              </div>
              <hr />

              {/* Additional information */}
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">User ID</h6>
                </div>
                <div className="col-sm-8 text-secondary">{angel.ahId}</div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Contact Person</h6>
                </div>
                <div className="col-sm-8 text-secondary">
                  {angel.ahContactNumber}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Qualification/GST Number</h6>
                </div>
                <div className="col-sm-8 text-secondary">
                  {angel.ahGSTNumber_id}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Interest</h6>
                </div>
                <div className="col-sm-8 text-secondary">
                  {angel.ahInterestId}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <h6 className="mb-0">Joined</h6>
                </div>
                <div className="col-sm-8 text-secondary">
                  {angel.ahCreated_on}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
