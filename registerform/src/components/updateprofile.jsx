import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "./images/ninja.png";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as Yup from "yup";

export default function UpdateProfile() {
  const UPDATE_POST_URL = "http://localhost:8080/api/updateuser";
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.phoneNumber);
    axios({
      method: "post",
      url: UPDATE_POST_URL,
      data: {
        email: data.emailId,
      },
    }).then((res) => {
      console.log(" in " + res.data);
      if (res.data === "Signup Successfull") {
        alert("Login Password has been send to email");
        navigate("/login");
      } else {
        console.log("Looks Like you are already a user please signup again");
      }
    });
  };
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is mendatory")
      .max(32, "Name should be less than 32 characters")
      .matches(/[A-Z]*/, "Should only contain alphabet"),

    email: Yup.string()
      .required("Email is mendatory")
      .matches(/@/, "Must have @ ")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please Enter a valid email"
      ),

    phoneNumber: Yup.string()
      .required("Email is mendatory")
      .matches(/[0-9]{10}/, "Please Enter Valid Phonenumber"),

    address: Yup.string()
      .required("Address is mendatory")
      .max(100, "Should be lesss than 50 character"),

    pincode: Yup.string().required("Pincode is mendatory"),

    profession: Yup.string().required("Profession is mendatory"),

    qualification: Yup.string().required("Email is mendatory"),
    //   .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });
  const navigate = useNavigate();
  const navigateMethod = (event) => {
    navigate("/angelprofile");
  };

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  // function onSubmit(data) {
  //   console.log(JSON.stringify(data, null, 4));
  //   return false;
  // }
  return (
    <div className="container mt-5">
      <form
        // style={styles.responsive}
        onSubmit={handleSubmit(onSubmit)}
        // className="row gy-3 bg-light p-3 mx-auto mt-5 rounded"
      >
        <div className="row g-2">
          <div className="profile p3 col-lg-4 col-md-4  col-xs-12 bg-light rounded text-center">
            <div className="col-12 mt-5 ">
              <img
                src={logo}
                alt="logo"
                className="img-fluid rounded-circle w-50"
              />
            </div>
            <div className="col-12">
              <div className="row mb-3">
                <div className="col-sm-12 text-center">
                  <h4 className="mt-2">Sherlock Holmes</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-12 text-center">
                  <h5 className="mt-2">Detective</h5>
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

          <div className="info p3 col-lg-8 col-md-4  col-xs-12 bg-light rounded">
            <div className="row g-2 mt-3">
              <div className="p-3 col-12 ">
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name="name"
                      type="text"
                      {...register("name")}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter name"
                    />
                    <div className="invalid-feedback">
                      {errors.name?.message}
                    </div>
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
                      {...register("email")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Email"
                    />
                    <div className="invalid-feedback">
                      {errors.name?.message}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name="phoneNumber"
                      type="tel"
                      {...register("phoneNumber")}
                      className={`form-control ${
                        errors.phoneNumber ? "is-invalid" : ""
                      }`}
                      placeholder="Contact number"
                    />
                    <div className="invalid-feedback">
                      {errors.name?.message}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name="address"
                      type="text"
                      {...register("address")}
                      className={`form-control ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Address"
                    />
                    <div className="invalid-feedback">
                      {errors.name?.message}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Pin Code</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name="pincode"
                      type="text"
                      {...register("pincode")}
                      className={`form-control ${
                        errors.pincode ? "is-invalid" : ""
                      }`}
                      placeholder="Enter PIN Code"
                    />
                    <div className="invalid-feedback">
                      {errors.pincode?.message}
                    </div>
                  </div>
                </div>
                <hr />
                {/* Additional information */}
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Profesion</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name="profession"
                      type="text"
                      {...register("profession")}
                      className={`form-control ${
                        errors.profession ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Profesion"
                    />
                    <div className="invalid-feedback">
                      {errors.professtion?.message}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Contact Person</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name="name"
                      type="text"
                      {...register("name")}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter name"
                    />
                    <div className="invalid-feedback">
                      {errors.name?.message}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Qualification/GST Number</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name="qualification"
                      type="text"
                      {...register("qualification")}
                      className={`form-control ${
                        errors.qualification ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Qualification"
                    />
                    <div className="invalid-feedback">
                      {errors.qualification?.message}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  {/* <div className="col-sm-4">
                    <h6 className="mb-0">Status</h6>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    <input
                      name=""
                      type="text"
                      {...register("")}
                      className={`form-control ${
                        errors. ? "is-invalid" : ""
                      }`}
                      placeholder="Status..."
                    />
                    </div>*/}
                </div>
                <div className="row mb-3 p-0">
                  <div className="col-lg-2 mx-auto mt-1">
                    <button
                      type="submit"
                      className="btn w-100 btn-primary btn-block"
                      //   onClick={navigateMethod}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
