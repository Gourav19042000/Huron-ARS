import React, { useState } from "react";
import axios from "axios";
const Automobile = () => {
  const [autoMobileData, setAutoMobileData] = useState({
    ImgUrl: "",
    CategoryId: "",
    Brand: "",
    Model: "",
    Fuel: "",
    SeatCapacity: "",
    Price: "",
    DrivingType: "",
    Colour: "",
  });
  const change = (e) => {
    const { id, value } = e.target;
    setAutoMobileData((data) => ({
      ...data,
      [id]: value,
    }));
    console.log(autoMobileData.CategoryId);
  };

  const onSubmitForms = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5043/api/Cars",
        autoMobileData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setAutoMobileData({
      ImgUrl: "",
      CategoryId: "",
      Brand: "",
      Model: "",
      Fuel: "",
      SeatCapacity: "",
      Price: "",
      DrivingType: "",
      Colour: "",
    });
  };

  return (
    <>
      <form onSubmit={onSubmitForms}>
        <div className="mb-4">
          <label htmlFor="category">Select Category:</label>
          <select
            id="CategoryId"
            onChange={change}
            value={autoMobileData.CategoryId || ""}
          >
            <option id="" value="" disabled>
              Select Category
            </option>
            <option id="1" value="1">
              Cars
            </option>
            <option id="3" value="3">
              Buses
            </option>
            <option id="4" value="4">
              Minivans
            </option>
            <option id="2" value="2">
              Bikes
            </option>
          </select>
          <label
            className="block font-semibold text-gray-700 mb-2"
            for="ImgUrl"
          >
            ImgUrl
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ImgUrl"
            type="text"
            value={autoMobileData.ImgUrl}
            onChange={change}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2" for="Brand">
            Brand
          </label>

          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Brand"
            type="text"
            value={autoMobileData.Brand}
            onChange={change}
            required
            placeholder="Enter your Brand"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2" for="Model">
            Model
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Model"
            type="text"
            value={autoMobileData.Model}
            onChange={change}
            required
            placeholder="Enter your Model"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2" for="Fuel">
            Fuel
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Fuel"
            type="text"
            onChange={change}
            value={autoMobileData.Fuel}
            required
            placeholder="Enter Automobile Fuel Type"
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-semibold text-gray-700 mb-2"
            for="SeatCapacity"
          >
            SeatCapacity
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="SeatCapacity"
            required
            type="number"
            onChange={change}
            value={autoMobileData.SeatCapacity}
            placeholder="Enter your seat capacity"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2" for="Price">
            Price
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="Price"
            required
            type="number"
            onChange={change}
            value={autoMobileData.Price}
            placeholder="Enter your Price per Hour"
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-semibold text-gray-700 mb-2"
            for="DrivingType"
          >
            DrivingType
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="DrivingType"
            required
            type="text"
            onChange={change}
            value={autoMobileData.DrivingType}
            placeholder="Enter your seat capacity"
          />
        </div>

        <div className="mb-4">
          <label
            className="block font-semibold text-gray-700 mb-2"
            for="Colour"
          >
            Colour
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="Colour"
            required
            type="text"
            onChange={change}
            value={autoMobileData.Colour}
            placeholder="Enter your automobile colour"
          />
        </div>
        <button type="submit"> Submit</button>
      </form>
    </>
  );
};
export default Automobile;
