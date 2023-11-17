import React from "react";
import AutomobileCard from "./AutomobileCard";
//import axios from "axios";
import useApiCall from "../utils/useApiCall";
import useOnline from "../utils/useOnline";

const AutomobileBody = () => {
  const apiLink =
    "https://api.zoomcar.com/v7/home?city_honour=true&city=bangalore&country_code=IND&device_id=000&locale=en&platform=web";
  //"http://localhost:5043/api/Cars"
  const automobiles = useApiCall(apiLink);
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
        {automobiles.map((automob) => {
          return <AutomobileCard key={automob.CarId} {...automob} />;
        })}
      </div>
    </>
  );
};
export default AutomobileBody;
