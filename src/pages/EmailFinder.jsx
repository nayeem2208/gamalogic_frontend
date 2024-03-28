import SubHeader from "../components/SubHeader";

function EmailFinder() {
  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Email Finder"} />
      <div className="mt-14 subHeading">
        <h3>Find The Email Address</h3>
        <p className="my-7 w-4/5 description">
          Enter a full name and the domain name of the email address below to
          find the email address of any professional with our email finding
          tool.
        </p>
        <div className="flex w-4/5 justify-between">
          <div className="flex flex-col w-5/12 ">
            <p>Full Name</p>
            <input
              type="email"
              placeholder="Elon Musk"
              className=" border border-gray-400 rounded-md py-2 px-4 mr-3"
            />
            <p className="mt-4">Domain Name</p>
            <input
              type="email"
              placeholder="tesla.com"
              className=" border border-gray-400 rounded-md py-2 px-4 mr-3"
            />
            <button className="bg-bgblue text-white py-1 px-4 rounded-md  w-32 h-9 mt-8">
              FIND EMAIL
            </button>
          </div>
          <div className=" flex justify-end w-3/6 ">
            <p className="bg-gray-100 rounded h-2/5 p-2 mt-6 font-semibold">Note:<br /><span className="font-light"> Each check will cost you 10 credits!</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailFinder;
