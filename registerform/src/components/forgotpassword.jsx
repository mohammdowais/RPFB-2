import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginService from "../services/LoginService";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";

const FORGET_PASS_URL = "http://localhost:8080/api/loginhelper/forgetpassword";
const mailSend = false
const styles = {
  responsive: {
    maxWidth: "350px",
    width: "100%",
  },
};
export default function Forgot() {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is mendatory")
      .matches(/@/, "Must have @ ")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please Enter a valid email"
      ),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [respX, setRespX] = useState("");
  const navigate = useNavigate();

  const onSubmit = (angel) => {
    axios({
      method: "get",
      url: FORGET_PASS_URL,
      data: {
        email: angel.email,
      },
    }).then((res) => {
      console.log(" in " + res.data);
      if (res.data == "Mail Send") {
        alert("Email has been send with your new Password")
        navigate("/login");
      } else {
        console.log(mailSend + "login is this");
        mailSend = true;
        console.log(mailSend + "login is this");
      }
      setRespX(res.data);
    });
    console.log(" out result " + respX);
    console.log("respx out" + respX);
  };
  return (
    <div>
      {mailSend && (
        <div className="col-4 mx-auto  mt-3 mb-0 alert alert-danger">
          Invalid Email<br/>Please Enter registered Email
          <br />
          {/* If you are New User Register instead */}
        </div>
      )}

      <form
        style={styles.responsive}
        onSubmit={handleSubmit(onSubmit)}
        className="row gy-3 bg-light p-3 mx-auto mt-5 rounded  novalidate"
      >
        <div className="form-group col-12 mb-3 mt-4">
          <h4>Forgot Password</h4>
        </div>

        <div className="form-group col-12">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Enter email"
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary btn-block my-1 form-control"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
