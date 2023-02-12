import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div className="loginsection">
        <h2>Create Your Account</h2>
        <p>Please enter your Details</p>
        <div className="logincontent">
          <div className="loginwithgoogle">
            <p>
              <FcGoogle /> &nbsp; &nbsp; Login with google
            </p>
          </div>

          <div className="namesection">
            <div className="firstname">
              <input type="text" placeholder="FirstName" />
            </div>
            <div className="lastName">
              <input type="text" placeholder="LastName" />
            </div>
          </div>
          <div className="email">
            <input type="email" placeholder=" Enter your Email" />
          </div>
          <div className="email">
            <input type="Password" placeholder="Password" />
          </div>
          <div className="email">
            <input type="Password" placeholder="Confirm-Password" />
          </div>
          <div className="checkboxsection">
            <input type="checkbox" />
            <label for="">
              By clicking, you agree to our <strong>terms & conditions.</strong>{" "}
            </label>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                alert("Your account has been Created!");
              }}
            >
              <Link to="/" className="link cart">
                {" "}
                SignUp
              </Link>
            </button>
          </div>
          <p>
            Alredy have a Account{" "}
            <Link to="/login">
              {" "}
              <strong>Login</strong>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
