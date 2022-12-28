import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import './Login.css'
function Login() {
  let history = useHistory();
  let location = useLocation();
  const {
    user,
    signInUsingGoogle,
    logOut
} =useAuth();
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
    .then((result) => {
      const user = result.user;
      history.push(location.state?.from ||'/')
    })  
  }
  return (
    <div className="mx-5 py-4">
      <button className="py-2 bg-google fw-bold" onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default Login;

