import React, { useState } from "react";
import CarCard from "./CarCard";
import axios from "axios";
import { addItem,removeItem,clearCart } from "../utils/CartSlice";

const Body = () => {
  const [items, setItems] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);
  async function getCarData() {
    const data = await fetch(
      "https://api.zoomcar.com/v7/home?city_honour=true&city=bangalore&country_code=IND&device_id=000&locale=en&platform=web"
    );
    const json = await data.json();
    console.log(json.items)
    setItems(json.items);
  }
  React.useEffect(() => {
    getCarData();
  }, []);
  async function getAutomobile() {
    try {
      const response = await axios.get("http://localhost:5043/api/Cars");
      setAutomobiles(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(automobiles);
  React.useEffect(() => {
    getAutomobile();
  }, []);

  return (
    <>
      <div>
        <h1 className="font-extrabold m-5 text-justify text-2xl">Cars </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        {items.map((carItem) => {
          return <CarCard {...carItem.car_data} />;
        })}
        {
          //<CarCard {...items[1].car_data} />
        }
      </div>
    </>
  );
};
export default Body;
