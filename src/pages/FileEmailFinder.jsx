import SubHeader from "../components/SubHeader";

function FileEmailFinder() {
  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Upload your file"} />
      <div className="mt-14 subHeading">
        <h3>Upload Your File Here | Email Validation</h3>
        <p className="my-7 w-4/5 description">
          You can upload the email address list in csv file and get results in
          csv. Download a sample file to upload here Select a file to upload.
        </p>
        <input type="file" className="text-sm" />
      </div>
    </div>
  );
}

export default FileEmailFinder;
