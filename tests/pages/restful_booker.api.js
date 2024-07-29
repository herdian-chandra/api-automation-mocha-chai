import BaseApi from "../utils/base.api.js";

const restfulBooker = {
  authCreateToken: (data) => BaseApi.post("/auth", data),
};

export default restfulBooker;
