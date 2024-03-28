import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function SubHeader(props) {
    console.log(props,'sub')
  return (
    <div className="flex justify-between mt-1 ">
      <p className="  orangeUnderline">{props.SubHeader}</p>
      <div className="flex " >
        <p className="bg-gray-100 rounded-lg px-4 flex items-center ">0 Credits Left</p> <p className="ml-6 mr-2 flex items-center ">NAYEEM CE</p>
        <IoLogOutOutline className=" mt-2   text-2xl" />
      </div>
    </div>
  );
}

export default SubHeader;
