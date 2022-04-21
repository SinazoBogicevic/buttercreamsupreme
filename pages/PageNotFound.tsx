// @ts-ignore
import { useState } from "react";
import emptyPlate from "../public/imgs/emptyPlate.jpg";

export default function PageNotFound() {
  const [files, setFiles] = useState([]);

  const onFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      console.log(newFile);
      newFile["id"] = Math.random();
      // add an "id" property to each File object
      setFiles((prevState) => [...prevState, newFile]);
    }
    console.log("done");
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${emptyPlate})` }}
    >
      <div className="text-center text-darkest-text-color justify-self-center self-center">
        <h1 className="font-bold text-7xl  capitalize text-center ">Oops!</h1>
        <h4 className="font-medium text-4xl  capitalize italic text-center ">
          This page is not available
        </h4>
        <h3 className="text-2xl mt-2 mb-4 text-white">
          the page you are looking for could not be found
        </h3>
        <a
          href="/"
          className="text-white border-2 border-white rounded-2xl p-2"
        >
          Home page
        </a>
        <form>
          <label>
            Select Files
            <input type="file" multiple onChange={onFileChange} />
          </label>
          <button>Upload</button>
        </form>
      </div>
    </div>
  );
}
