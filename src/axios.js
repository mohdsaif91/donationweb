import Axios from "axios";

// const baseURL = "https://donationserverapp.herokuapp.com/api/v1";
const baseURL = "http://localhost:5000/api/v1";

export const axiosCall = async (payload) => {
  const axiosClient = Axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  try {
    return await axiosClient(payload.url, {
      method: payload.method,
      data: payload.data,
    });
  } catch (error) {
    return error;
  }
};
