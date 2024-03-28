import SubHeader from "../components/SubHeader";

function QuickValidation() {
  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Quick Validation"} />
      <div className="mt-14 text-bgblue subHeading">
        <h3 >Single Email Validator</h3>
        <p className="my-7 description">Type in any email address to have it quickly validated.</p>
        <div ><input type="email" placeholder="enter the email here" className="w-2/6 border border-gray-400 rounded-md py-2 px-4 mr-3"/> <button className="bg-bgblue text-white py-2 px-4 rounded-md ">VALIDATE</button></div>
      </div>
    </div>
  );
}

export default QuickValidation;
