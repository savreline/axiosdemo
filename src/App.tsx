import axios, { AxiosResponse } from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    var formData = new FormData();
    formData.append("data", data);
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

  const handleSubmitFile = (event: any) => {
    const image: File = event.currentTarget.files[0];
    console.log(image);
    var formData = new FormData();
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

    const element = window.document.getElementById(
      "fileField"
    ) as HTMLInputElement;
    if (element !== null) {
      element.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("field1")} />
      <br />
      <input {...register("field2")} />
      <br />
      <input type="file" id="fileField" onChange={handleSubmitFile} />
      <br />
      <input type="submit" />
    </form>
  );
};

export default App;
