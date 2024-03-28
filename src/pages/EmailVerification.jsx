import SubHeader from "../components/SubHeader";

function EmailVerification() {
  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Upload your file"} />
      <div className="mt-14 subHeading">
        <h3>Upload Your File Here | Email Validation</h3>
        <p className="my-7 w-4/5 description">
          You can upload the email address list in csv file and get results in
          csv. Select a file to upload.
        </p>
        <input type="file" className="text-sm" />
      </div>

      <table className="text-bgblue w-4/5 mt-14">
        <tr className="text-left">
          <th className="font-normal w-1/5">File Name</th>
          <th className="font-normal  w-1/5">Status</th>
          <th className="font-normal  w-1/5">Upload Time</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default EmailVerification;
