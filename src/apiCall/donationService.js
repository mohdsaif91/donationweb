import { axiosCall } from "../axios";

const createDonationApi = (data) => {
  console.log(data, " API");
  const apiData = {
    url: "/donation/create",
    method: "post",
    data,
  };
  return axiosCall({ ...apiData });
};

const getAllDonationApi = () => {
  const apiData = {
    url: "/donation",
    method: "get",
  };
  return axiosCall({ ...apiData });
};

export const donationService = {
  createDonationApi,
  getAllDonationApi,
};
