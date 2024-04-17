import { useState } from "react";
import SubHeader from "../components/SubHeader";
import Papa from "papaparse";
import exportFromJSON from "export-from-json";
import axiosInstance from "../axios/axiosInstance";

function FileEmailFinder() {
  let [message, setMessage] = useState("");
  let [resultFile, setResultFile] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file && file.type === "text/csv") {
      try {
        Papa.parse(file, {
          header: true,
          complete: async function (results) {
            results.fileName = file.name;
            
            const response = await axiosInstance.post(
              "/batchEmailFinder",
              results
            );
            // setMessage(response.data.message);
            // const options = {
            //   year: "numeric",
            //   month: "2-digit",
            //   day: "2-digit",
            //   hour: "2-digit",
            //   minute: "2-digit",
            //   second: "2-digit",
            //   hour12: false,
            // };
            // setResultFile((prevResultFiles) => [
            //   {
            //     ...response.data.files,
            //     processed: 0,
            //     formattedDate: new Date(
            //       response.data.files.date_time
            //     ).toLocaleString("en-US", options),
            //   },
            //   ...prevResultFiles
            // ]);
          },
        });
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please select a CSV file.");
    }
  };

  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Upload your file"} />
      <div className="mt-14 subHeading">
        <h3>Upload Your File Here | Email Finder</h3>
        <p className="my-7 w-4/5 description">
          You can upload the email address list in csv file and get results in
          csv. Download a sample file to upload here Select a file to upload.
        </p>
        <input type="file" className="text-sm" onChange={handleFileChange}   accept=".csv"/>
      </div>
      <p className="bg-cyan-400 font-semibold my-4 ">{message}</p>
      {resultFile.length>0&&<table className="text-bgblue w-full lg:w-4/5 mt-14 ">
        <tr className="text-left">
          <th className="font-normal w-1/5">File Name</th>
          <th className="font-normal  w-1/5">Status</th>
          <th className="font-normal  w-1/5">Upload Time</th>
          <th></th>
          {/* <th></th> */}
        </tr>
        {resultFile.map((data, index) => (
          <tr key={index} className="text-sm">
            <td>{data.file}</td>
            <td>{data.processed}</td>
            <td>{data.formattedDate}</td>
            <td>
              <button
                className="bg-bgblue text-white py-1 px-4 rounded-md ml-2   h-9 mt-8 text-xs"
                onClick={() => DownloadFile(data)}
              >
                DOWNLOAD
              </button>
            </td>
            {/* <td>
              <button className="bg-bgblue text-white py-1 px-4 rounded-md ml-2   h-9 mt-8 text-xs">
                REFRESH
              </button>
            </td> */}
          </tr>
        ))}
      </table>}
    </div>
  );
}

export default FileEmailFinder;
