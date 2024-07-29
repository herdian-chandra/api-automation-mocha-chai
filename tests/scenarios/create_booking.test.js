import axios from "axios";
import restfulBookerApi from "../pages/restful_booker.api.js";
import * as data from "../data/create_booking.data.js";
import { expect } from "chai";

describe("As a user, i want to test Create Booking API", () => {
  it("Ensure api Create Booking successfully send the request", async () => {
    const response = await restfulBookerApi.createBooking(data.validPayload);

    expect(response.status).to.equal(200);
    expect(response.data).to.haveOwnProperty("bookingid");
  });
  it("Ensure api Create Booking can not send the request without Totalprice", async () => {
    const response = await restfulBookerApi.createBooking(
      data.payloadWithoutTotalPrice
    );

    expect(response.status).to.equal(200);
    expect(response.data.booking.totalprice).to.equal(null);
  });
});
