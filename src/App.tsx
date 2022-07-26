import axios, { AxiosResponse } from "axios";
import React from "react";

const App = () => {
  const handleSubmitFile = (event: any) => {
    const image: File = event.currentTarget.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post("/api/sample", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((uploadResponse: AxiosResponse | Promise<AxiosResponse>) =>
        console.log(uploadResponse)
      );
  };

  return (
    <form>
      <input type="file" id="fileField" onChange={handleSubmitFile} />
    </form>
  );
};

export default App;
