import axios from "axios";
import store from "./../store/index";
import config from "./../config.json";

export default () => {
  const axiosObject = axios.create({
    baseURL: config.server.api_url,
    // baseURL: "http://localhost:8000/api",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Token"),
      "Access-Control-Allow-Origin": "*",
    },
  });

  //request send
  axiosObject.interceptors.request.use(
    (config) => {
      store.dispatch("openSpinner");
      return config;
    },
    (error) => {
      store.dispatch("closeSpinner");

      return Promise.reject(error);
    }
  );

  //request received
  axiosObject.interceptors.response.use(
    (response) => {
      store.dispatch("closeSpinner");
      return response;
    },
    (error) => {
      store.dispatch("closeSpinner");

      if (error.response.status === 401) {
        localStorage.removeItem("expiry");
        localStorage.removeItem("Token");
        location.href = "/login";
      }

      return Promise.reject(error);
    }
  );

  return axiosObject;
};
