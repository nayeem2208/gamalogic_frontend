import { FaEye } from "react-icons/fa";
import SubHeader from "../components/SubHeader";
import { useState } from "react";

function AccountSettings() {
  let [passwordVisible,setPasswordVisible]=useState({old:false,new:false,confirm:false})
  let [passwordData,setPasswordData]=useState({old:'',new:'',confirm:''})

  const passwordVisibilityHandler=(field)=>{
    setPasswordVisible((prevState)=>({
      ...prevState,
      [field]:!prevState[field]
    }))
  }

  const handleInputChange=(e)=>{
    let {name,value}=e.target
    setPasswordData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }

  
  return (
    <div className=" px-20 py-8 ">
      <SubHeader SubHeader={"Account Settings"} />
      <div className="mt-14 text-bgblue subHeading">
        <h3>Your Profile</h3>
        <p className="mt-6 mb-1">Your Name</p>
        <input
            type="text"
            placeholder="enter your name here"
            className="w-3/6 border border-gray-100 rounded py-2 px-4 mr-3"
            value='NAYEEM'
          />{" "}
          <p className="mt-6 mb-1">Your Email</p>
           <input
            type="email"
            placeholder="enter the email here"
            className="w-3/6 border border-gray-100 rounded py-2 px-4 mr-3 selection:border-gray-400"
            value='nayeem2281998@gmail.com'
          />{" "}
        <h3 className="mt-6 mb-1">Change Your Password</h3>
        <p className="my-7 description">
          Changing your Gamalogic password to a secure password that only you
          know and that no one else can guess protects your private information
          from unauthorized access.
        </p>
        <p className="mt-6 mb-1">Old Password</p>
           <div className="flex bg-transparent  justify-between items-centerw-3/6 w-3/6 border border-gray-100 rounded py-2 px-4 mr-3 text-gray-400 my-1">
              <input
                className="bg-transparent w-5/6  outline-none"
                type={passwordVisible.old?'text':'password'}
                name="old"
                id="password"
                placeholder="Enter your old password"
                onChange={handleInputChange}
                value={passwordData.old}
              />
              <FaEye className="w-4 h-4 text-slate-900 ml-2" onClick={() => passwordVisibilityHandler('old')} />
            </div>
          <p className="mt-6 mb-1">New Password</p>
          <div className="flex bg-transparent  justify-between items-centerw-3/6 w-3/6 border border-gray-100 rounded py-2 px-4 mr-3 text-gray-400 my-1">
              <input
                className="bg-transparent w-5/6  outline-none"
                type={passwordVisible.new?'text':'password'}
                name="new"
                id="password"
                placeholder="Enter your new password"
                onChange={handleInputChange}
                value={passwordData.new}
              />
              <FaEye className="w-4 h-4 text-slate-900 ml-2" onClick={() => passwordVisibilityHandler('new')}/>
            </div>
          <p className="mt-6 mb-1 ">Confirm Password</p>
          <div className="flex bg-transparent  justify-between items-centerw-3/6 w-3/6 border border-gray-100 rounded py-2 px-4 mr-3 text-gray-400 my-1">
              <input
                className="bg-transparent w-5/6  outline-none"
                type={passwordVisible.confirm?'text':'password'}
                name="confirm"
                id="password"
                placeholder="Confirm your new password"
                onChange={handleInputChange}
                value={passwordData.confirm}
              />
              <FaEye className="w-4 h-4 text-slate-900 ml-2" onClick={() => passwordVisibilityHandler('confirm')} />
            </div>
          <br />
          <button className="bg-bgblue text-white py-1  px-4 rounded-md mt-6">
            CHANGE PASSWORD
          </button>
        
      </div>
    </div>
  );
}

export default AccountSettings;
