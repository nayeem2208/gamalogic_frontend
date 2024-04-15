import SubHeader from "../components/SubHeader";
import axiosInstance from "../axios/axiosInstance";
import { useEffect, useState } from "react";

function EmailVerification() {
  let [message, setMessage] = useState("");
  let [resultFile, setResultFile] = useState([]);
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file && file.type === "text/csv") {
      try {
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData, "formData");
        const response = await axiosInstance.post(
          "/batchEmailVerification",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setMessage(response.data.message);
        setResultFile((prevResultFiles) => [...prevResultFiles, { ...response.data, processed: 0 }]);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please select a CSV file.");
    }
  };

  useEffect(() => {
    const checkCompletion = async () => {
      try {
        if (resultFile.length > 0 && resultFile[0]["batch id"]) {
          console.log('hii')
          const res = await axiosInstance.get(
            `/getBatchStatus?id=${resultFile[0]["batch id"]}`
          );
          console.log(res.data);
          if (res.data.processed !== resultFile[0]['total count']) {
            setTimeout(checkCompletion, 3000);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkCompletion();
  }, [resultFile]);
  console.log(message, "message");
  console.log(resultFile, "resultFile");
  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Upload your file"} />
      <form className="mt-14 subHeading">
        <h3>Upload Your File Here | Email Validation</h3>
        <p className="my-7 w-4/5 description">
          You can upload the email address list in csv file and get results in
          csv. Select a file to upload.
        </p>
        <input
          type="file"
          className="text-sm"
          accept=".csv"
          onChange={handleFileChange}
        />
      </form>
      <p className="bg-cyan-400 font-semibold my-4 ">{message}</p>
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
