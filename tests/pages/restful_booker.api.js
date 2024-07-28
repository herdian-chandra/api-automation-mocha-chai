import axios from "axios";

const baseUrl = "https://restful-booker.herokuapp.com";

const restfulBooker = {
  authCreateToken: (data) => axios.post(baseUrl + "/auth", data),
};

export default restfulBooker;
