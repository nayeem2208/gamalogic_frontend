import { useState } from "react";
import SubHeader from "../components/SubHeader";

function QuickValidation() {
  let [email, setEmail] = useState("");

  const submitHandler=()=>{

  }

  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Quick Validation"} />
      <div className="mt-14 text-bgblue subHeading">
        <h3>Single Email Validator</h3>
        <p className="my-7 description">
          Type in any email address to have it quickly validated.
        </p>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="email"
              value={email}
              placeholder="enter the email here"
              className="w-2/6 border border-gray-400 rounded-md py-2 px-4 mr-3"
              onChange={(e)=>setEmail(e.target.value)}
            />{" "}
            <button className="bg-bgblue text-white py-2 px-4 rounded-md " type="submit">
              VALIDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuickValidation;
