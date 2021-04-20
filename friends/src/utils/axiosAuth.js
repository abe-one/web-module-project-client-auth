import axios from "axios";

export const axiosAuth = () => {
  return axios.create({
    headers: {
      authorization: JSON.parse(window.localStorage.getItem("token")),
    },
    baseURL: "http://localhost:5000",
  });
};
