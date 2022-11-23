import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as Yup from "yup";

export default function ChangePass() {
  // validation
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .max(32, "Password should be less than 32 characters")
      .matches(
        /[.*[A-Z].*]{0,}/,
        "Must Contain at least one Uppercase Character"
      )
      .matches(
        /[.*[a-z].*]{0,}/,
        "Must Contain at least one Lowercase Character"
      )
      .matches(/[.*[0-9].*]{0,}/, "Must Contain at least one Number Character")
      .min(5, "Password must be at 5 char long"),
    confirmpassword: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    
      email: Yup.string()
      .required("Email is mendatory")
      .matches(/@/, "Must have @ ")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please Enter a valid email"
      ),
  });

  const navigate = useNavigate();
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const [setRespX] = useState("");
  const FORGOT_PUT_URL = "http://localhost:8080/api/loginhelper/changepassword";

  function onSubmit(angel) {
    console.log(JSON.stringify(angel, null, 4));

    axios({
      method: "put",
      url: FORGOT_PUT_URL,
      data: {
        // email: angel.email,
        email: angel.email,
        password: angel.password,
        oldpassword: angel.oldpassword,
      },
    }).then((res) => {
      console.log(" in " + res.data);
      if (res.data === "Password changed") {
        navigate("/angelprofile");
      } else {
        console.log("login is this");
      }
      setRespX(res.data);
    });
  }
  const styles = {
    responsive: {
      maxWidth: "350px",
    },
  };
  return (
    <div>
      <form
        style={styles.responsive}
        onSubmit={handleSubmit(onSubmit)}
        className="row gy-3 bg-light p-3 mx-auto mt-5 rounded"
      >
        <div className="form-group col-12 mb-3 mt-3">
          <h4>Change Password</h4>
        </div>
        <div className="form-group col-12">
          <label>Email</label>
          <input
            name="email"
            type="email"
            {...register("email")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Enter Registered Email"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group col-12">
          <label>Old Password</label>
          <input
            name="password"
            type="password"
            {...register("oldPassword")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Enter New password"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group col-12">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Enter New password"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group col-12">
          <label>Confirm Password</label>
          <input
            name="confirmPwd"
            type="text"
            {...register("confirmpassword")}
            className={`form-control ${errors.confirmPwd ? "is-invalid" : ""}`}
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
  );
}
