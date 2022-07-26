import axios, { AxiosResponse } from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post("/api/sample", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((uploadResponse: AxiosResponse | Promise<AxiosResponse>) =>
        console.log(uploadResponse)
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("field1")} />
      <input {...register("field2")} />
      <input type="submit" />
    </form>
  );
};

export default App;
