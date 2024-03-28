import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="w-full flex justify-center items-center "
      style={{ marginTop: "40vw" }}
    >
      <div className="w-3/5 flex flex-col justify-center items-center">
        <div className="text-center auth" style={{ position: "relative" }}>
          <div className="h2-background" style={{ position: "absolute" }}>
            <div className="red"></div>
            <div className="blue"></div>
          </div>
          <h2 className="font-semibold text-4xl">Sign Up</h2>
          <p className="my-12 description">Create a free gamalogic account</p>
        </div>
        <div
          className="flex flex-col p-10 w-3/6 mb-16"
          style={{ backgroundColor: "#161736" }}
        >
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="enter your name"
            className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
          />
          <label htmlFor="" className="mt-6">
            Email
          </label>
          <input
            type="email"
            placeholder="enter your email"
            className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
          />
          <label htmlFor="" className="mt-6">
            Password
          </label>
          <input
            type="password"
            placeholder="enter your password"
            className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
          />
          <label htmlFor="" className="mt-6">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="confirm your password"
            className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
          />
          <p className="text-xs text-center text-gray-400">
            By signing up, you agree to our Terms of Service , Privacy Policy
            and subscribe to our mailing list
          </p>
          <div className="flex justify-center mt-8">
            <button className="bg-red-500 w-2/6 p-2 rounded-3xl">
              SIGN UP
            </button>
          </div>
          <div className="flex justify-center my-5 ">
            {" "}
            {/* <div className="bg-white text-gray-700 p-3 w-3/5 h-16 rounded-lg shadow-md shadow-gray-200 flex justify-center items-center">
              Signup with Google
            </div> */}
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <Link to="/login">
            <div className="flex justify-center text-sm text-gray-300">
              Already have an account?
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
