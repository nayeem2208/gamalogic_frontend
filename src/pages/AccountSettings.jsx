import SubHeader from "../components/SubHeader";

function AccountSettings() {
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
        <input
            type="text"
            placeholder="enter your old password "
            className="w-3/6 border border-gray-100 rounded py-2 px-4 mr-3"
            
          />{" "}
          <p className="mt-6 mb-1">New Password</p>
        <input
            type="text"
            placeholder="enter your new  password"
            className="w-3/6 border border-gray-100 rounded py-2 px-4 mr-3"
            
          />{" "}
          <p className="mt-6 mb-1 ">Confirm Password</p>
        <input
            type="text"
            placeholder="confirm your old password"
            className="w-3/6 border border-gray-100 rounded py-2 px-4 mr-3"
            
          />{" "}
          <br />
          <button className="bg-bgblue text-white py-1  px-4 rounded-md mt-6">
            CHANGE PASSWORD
          </button>
        
      </div>
    </div>
  );
}

export default AccountSettings;
