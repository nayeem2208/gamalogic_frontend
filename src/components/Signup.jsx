import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import { toast } from "react-toastify";

function Signup() {
  let [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?!\s).{6,}$/;
  var emailPattern = /\S+@\S+\.\S+/;
  let nameOfUser=data.fullname.trim()
  console.log(nameOfUser.length,'length')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if ((data.fullname, data.email, data.password, data.confirmPassword)&&nameOfUser.length>2) {
        if (data.password == data.confirmPassword) {
          if (emailPattern.test(data.email)) {
            if (passwordPattern.test(data.password)) {
              let userData = await axiosInstance.post("signup", data);
              console.log(userData, "userdata");
              toast.dark(userData?.data);
              navigate("/login");
            } else {
              toast.error(
                "Please give a strong password with character and string "
              );
            }
          }
          else{
            toast.error('Please provide a valid email')
          }
        } else {
          toast.error("please check confirm password");
        }
      } else {
        toast.error("please provide all the data");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error)
    }
  };

  const authenticateData = async (credentialResponse) => {
    try {
      // let res = await axios.post('https://poseben-backend.onrender.com/api/GoogleLogin',{credentialResponse})
      let res = await axiosInstance.post("/googleSignup", {
        credentialResponse,
      });
      let token = res.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.error);
    }
  };

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
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={data.fullname}
              placeholder="enter your name"
              onChange={handleInputChange}
              className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
            />
            <label htmlFor="" className="mt-6">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="enter your email"
              onChange={handleInputChange}
              className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
            />
            <label htmlFor="" className="mt-6">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="enter your password"
              onChange={handleInputChange}
              className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
            />
            <label htmlFor="" className="mt-6">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              placeholder="confirm your password"
              onChange={handleInputChange}
              className="bg-transparent border border-cyan-400 rounded-md py-1 px-4 text-gray-400 my-1"
            />
            <p className="text-xs text-center text-gray-400">
              By signing up, you agree to our Terms of Service , Privacy Policy
              and subscribe to our mailing list
            </p>
            <div className="flex justify-center mt-8">
              <button
                className="bg-red-500 w-2/6 p-2 rounded-3xl"
                type="submit"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className="flex justify-center my-5 ">
            {" "}
            {/* <div className="bg-white text-gray-700 p-3 w-3/5 h-16 rounded-lg shadow-md shadow-gray-200 flex justify-center items-center">
              Signup with Google
            </div> */}
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                authenticateData(credentialResponse)
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
