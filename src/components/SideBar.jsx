import { GrDocumentVerified } from "react-icons/gr";
import {
  IoLogOutOutline,
  IoMailOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuKey, LuFileUp } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { SlSupport } from "react-icons/sl";
import { MdArrowDropDown, MdOutlineFindInPage } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  let [uploadfileDropDown, setUploadFileDropDown] = useState(false);
  let [tutorialDropDown, setTutorialDropDown] = useState(false);

  const uploadfileDropDownToggle = () => {
    setUploadFileDropDown(!uploadfileDropDown);
  };

  const tutorialDropDownToggle = () => {
    setTutorialDropDown(!tutorialDropDown);
  };

  return (
    <div
      style={{ backgroundColor: "#0A0E2B" }}
      className="w-96 text-white hidden  lg:flex flex-col h-screen  p-4 pt-8 overflow-y-auto pb-12"
    >
      <Link to="/">
        <p className="font-semibold text-2xl text-center mt-2">GAMALOGIC</p>
      </Link>
      <ul className="mt-14 text-lg font-semibold text-left">
        <Link to="/">
          <li className="my-4 flex ">
            <GrDocumentVerified className="text-teal-800 mt-2 mx-2 text-lg" />{" "}
            Quick Validation
          </li>
        </Link>
        <Link to="/email-finder">
          <li className="my-4 flex">
            <IoSearchOutline className="text-teal-800 mt-2 mx-2 text-lg" />
            Email Finder
          </li>
        </Link>
        <Link to="/api-Key">
          <li className="my-4 flex">
            <LuKey className="text-teal-800 mt-2 mx-2 text-lg" />
            API Key
          </li>
        </Link>

       <li className="my-4 flex cursor-pointer" onClick={uploadfileDropDownToggle}>
          <LuFileUp className="text-teal-800 mt-2 mx-2 text-lg" /> Upload Your
          File
          <MdArrowDropDown className="mt-2 text-xl" />
        </li>
        {uploadfileDropDown && (
          <ul className="ml-6">
             <Link to='/email-verification-bulk'><li className="my-4 flex">
              <LuFileUp className="text-teal-800 mt-2 mx-2 text-lg" /> Email
              Verification
            </li></Link>
            <Link to='/email-finder-bulk'><li className="my-4 flex">
              <LuFileUp className="text-teal-800 mt-2 mx-2 text-lg" /> Email
              Finder
            </li></Link>
          </ul>
        )}

        <li className="my-4 flex cursor-pointer" onClick={tutorialDropDownToggle}>
          <CgFileDocument className="text-teal-800 mt-2 mx-2 text-lg" />{" "}
          Tutorial
          <MdArrowDropDown className="mt-2 text-xl" />
        </li>
        {tutorialDropDown && (
          <ul className="ml-6">
           {/* <Link to='/api-docs'> */}
           <a href="https://docs.gamalogic.com/" target="_blank" >
            <li className="my-4 flex">
              <IoMailOutline className="text-teal-800 mt-2 mx-2 text-lg" /> API
              Docs
            </li></a>
            {/* </Link>  */}
           <Link to='/find-any-email'> <li className="my-4 flex">
              <MdOutlineFindInPage className="text-teal-800 mt-2 mx-2 text-lg" />{" "}
              Find Any Email
            </li></Link>
            <Link to='/googleSheet-integration'><li className="my-4 flex">
              <RiProfileLine className="text-teal-800 mt-2 mx-2 text-lg" />{" "}
              Integrate Google sheets
            </li></Link>
          </ul>
        )}
        <Link to='/account-settings'><li className="my-4 flex">
          <IoSettingsOutline className="text-teal-800 mt-2 mx-2 text-lg" />
          Account Settings
        </li></Link>
       <Link to='/buyCredits'> <li className="my-4 flex">
          <PiCurrencyDollarSimpleBold className="text-teal-800 mt-2 mx-2 text-lg" />
          Buy Credits
        </li></Link>
        <Link to='/support'><li className="my-4 flex">
          <SlSupport className="text-teal-800 mt-2 mx-2 text-lg" /> Support
        </li></Link>
        <Link to='/login'><li className="my-4 flex">
          <IoLogOutOutline className="text-teal-800 mt-2 mx-2 " />
          Logout
        </li></Link>
      </ul>
    </div>
  );
}

export default SideBar;
