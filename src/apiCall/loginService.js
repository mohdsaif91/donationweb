import { axiosCall } from "../axios";

const login = (data) => {
  const apiData = {
    url: "/login",
    method: "post",
    data,
  };
  return axiosCall({ ...apiData });
};

const signUp = (data) => {
  const apidata = {
    url: "login/signup",
    method: "post",
    data,
  };
  return axiosCall({ ...apidata });
};

export const loginService = {
  login,
  signUp,
};
