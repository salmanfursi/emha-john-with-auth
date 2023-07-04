import React from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm password">Confirm password</label>
          <input type="confirm password" name="confirm password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="sign up" />
      </form>
      <Link>already have an account</Link>
    </div>
  );
};

export default Signup;
