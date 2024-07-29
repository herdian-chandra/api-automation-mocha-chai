import BaseApi from "../utils/base.api.js";

const restfulBooker = {
  authCreateToken: (data) => BaseApi.post("/auth", data),
  createBooking: (data) => BaseApi.post("/booking", data),
};

export default restfulBooker;
