import axios from "axios";
import { getTokenFromCookies } from "./cookies";
import { notFound } from "next/navigation";

const baseURL = process.env.API_BASE_URL;
export default axios.create({
  baseURL,
});

const axiosPrivate = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use((req) => {
  const accessToken = getTokenFromCookies();

  if (accessToken) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }

  return req;
});

axiosPrivate.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res?.status === 401) {
      return notFound();
    }
    if (res?.status === 404) {
      return notFound();
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export { axiosPrivate };
