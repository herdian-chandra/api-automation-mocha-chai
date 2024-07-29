import restfulBookerApi from "../pages/restful_booker.api.js";
import * as data from "../data/auth.data.js";
import { expect } from "chai";

describe("Authorization, Create Token", () => {
  it("Ensure api Create Token successfully send the request", async () => {
    const response = await restfulBookerApi.authCreateToken(data.validPayload);

    expect(response.status).to.be.equal(200);
    expect(response.data).haveOwnProperty("token");
  });

  it("Ensure api Create Token can not send the request with invalid credentials", async () => {
    const response = await restfulBookerApi.authCreateToken(
      data.invalidPayload
    );

    expect(response.status).to.be.equal(200);
    expect(response.data.reason).to.be.equal("Bad credentials");
  });

  it("Ensure api Create Token can not send the request without Username", async () => {
    const response = await restfulBookerApi.authCreateToken(
      data.payloadWithoutUsername
    );

    expect(response.status).to.be.equal(200);
    expect(response.data.reason).to.be.equal("Bad credentials");
  });

  it("Ensure api Create Token can not send the request without Password", async () => {
    const response = await restfulBookerApi.authCreateToken(
      data.payloadWithoutPassword
    );

    expect(response.status).to.be.equal(200);
    expect(response.data.reason).to.be.equal("Bad credentials");
  });
});
