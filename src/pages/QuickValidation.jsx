import { useState } from "react";
import SubHeader from "../components/SubHeader";
import axiosInstance from "../axios/axiosInstance";

function QuickValidation() {
  let [email, setEmail] = useState("");
  let [result,setResult]=useState('')

  const submitHandler=async(e)=>{
    e.preventDefault()
    try {
      let res=await axiosInstance.post('/singleEmailValidator',{email})
      setResult(res.data)
      console.log(res.data)
    } catch (error) {
     console.log(error,'error') 
    }
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
        <p className="font-medium text-lg mt-8 mb-4">Result</p>
        <p className="description text-base">{result.emailid} is {result.is_valid?<span className="text-emerald-500 font-semibold">Valid</span>:<span className="text-red-400 font-semibold">Not Valid</span>}</p>
        <table className="description my-4">
          <tr>
            <td>catchall</td>
            <td></td>
          </tr>
          <tr>
            <td>disposable</td>
            <td></td>
          </tr>
          <tr>
            <td>role</td>
            <td></td>
          </tr>
          <tr>
            <td>syntax_valid</td>
            <td></td>
          </tr>
          <tr>
            <td>unknown</td>
            <td></td>
          </tr>
          <tr>
            <td>message</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default QuickValidation;
