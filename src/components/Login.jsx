import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="w-full flex justify-center items-center "
      style={{ marginTop: "36vw" }}
    >
      <div className="w-3/5 flex flex-col justify-center items-center">
        <div className="text-center auth" style={{ position: "relative" }}>
          <div className="h2-background" style={{ position: "absolute" }}>
            <div className="red"></div>
            <div className="blue"></div>
          </div>
          <h2 className="font-semibold text-4xl">Sign in</h2>
          <p className="my-12 description">
            Please sign in using your email and password
          </p>
        </div>
        <div
          className="flex flex-col p-10 w-3/6 mb-16"
          style={{ backgroundColor: "#161736" }}
        >
          <label htmlFor="">Email</label>
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
          <div className="flex justify-center mt-8">
            <button className="bg-red-500 w-2/6 p-2 rounded-3xl">
              SIGN IN
            </button>
          </div>
          <div className="flex justify-center my-5 ">
            {" "}
            {/* <div className="bg-white text-gray-700 p-3 w-3/5 h-16 rounded-lg shadow-md shadow-gray-200 flex justify-center items-center">
              Signin with Google
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
          <div className="flex justify-center text-sm text-gray-300">
            <Link to="/signup">
              <div className="border-r border-cyan-400 mx-2 px-2">
                Need an account?
              </div>
            </Link>
            <div className="mx-2">Forgot Password?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
