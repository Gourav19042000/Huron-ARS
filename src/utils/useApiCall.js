import axios from "axios";
import { useState, useEffect } from "react";

const useApiCall = (apiLink) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiData();
  });

  async function getApiData() {
    try {
      const response = await axios.get(apiLink);
      setData(response.items);
    } catch (error) {
      console.error(error);
    }
  }
  return data;
};
export default useApiCall;
