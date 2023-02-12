import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../Pages/Login.css";
const SignupPage = () => {
  return (
    <>
      <div className="loginsection">
        <h2>Welcome back</h2>
        <div className="logincontent">
          <div className="loginwithgoogle">
            <p>
              <FcGoogle /> &nbsp; &nbsp; Login with google
            </p>
          </div>
          <div className="email">
            <input type="email" placeholder=" Enter your Email" />
          </div>
          <div className="email">
            <input type="Password" placeholder="Password" />
          </div>
          <div className="btn">
            <button>
              <Link to="/"> Login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
