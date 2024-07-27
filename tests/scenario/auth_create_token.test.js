import axios from "axios";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com/auth";
const payload = {
  username: "admin",
  password: "password123",
};
const invalidPayload = {
  username: "admin123",
  password: "password1234",
};
const payloadWithoutUsername = {
  username: "",
  password: "password1234",
};
const payloadWithoutPassword = {
  username: "admin",
  password: "",
};

describe("Authorization, Create Token", () => {
  it("Ensure api Create Token successfully send the request", async () => {
    const response = await axios.post(baseUrl, payload);

    expect(response.status).to.be.equal(200);
    expect(response.data).haveOwnProperty("token");
  });

  it("Ensure api Create Token can not send the request with invalid credentials", async () => {
    const response = await axios.post(baseUrl, invalidPayload);

    expect(response.status).to.be.equal(200);
    expect(response.data.reason).to.be.equal("Bad credentials");
  });

  it("Ensure api Create Token can not send the request without Username", async () => {
    const response = await axios.post(baseUrl, payloadWithoutUsername);

    expect(response.status).to.be.equal(200);
    expect(response.data.reason).to.be.equal("Bad credentials");
  });

  it("Ensure api Create Token can not send the request without Password", async () => {
    const response = await axios.post(baseUrl, payloadWithoutPassword);

    expect(response.status).to.be.equal(200);
    expect(response.data.reason).to.be.equal("Bad credentials");
  });
});
