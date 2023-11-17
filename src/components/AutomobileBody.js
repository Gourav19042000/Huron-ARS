import React from "react";
import AutomobileCard from "./AutomobileCard";
import axios from "axios";
import useOnline from "../utils/useOnline";

const AutomobileBody = () => {
  const apiLink = "http://localhost:5043/api/Cars";
  
  const [automobiles, setAutomobiles] = React.useState([]);

  React.useEffect(() => {
    getApiData();
  },[]);

  async function getApiData() {
    try {
      const response = await axios.get(apiLink);
      setAutomobiles(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const offline = useOnline();
  if (!offline) {
    return (
      <h1 className="text-5xl">Your are Offline please check the Internet</h1>
    );
  }

  return (
    <>
      <div>
        <h1 className="font-extrabold m-5 text-justify text-2xl">Cars </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        {automobiles.map((automobile) => {
          return <AutomobileCard key={automobile.CarId} {...automobile} />;
        })}
      </div>
    </>
  );
};
export default AutomobileBody;
