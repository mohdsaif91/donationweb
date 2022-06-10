import { axiosCall } from "../axios";

const createDonationApi = (data) => {
  const apiData = {
    url: "/donation/create",
    method: "post",
    data,
  };
  return axiosCall({ ...apiData });
};

export const donationService = {
  createDonationApi,
};
