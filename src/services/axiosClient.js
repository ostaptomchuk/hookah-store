import axios from "axios";

const axiosClient = () => {
  const defaultOptions = {
    baseURL: "http://localhost:3001/api/v1/",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.create(defaultOptions);
};

export default axiosClient();
