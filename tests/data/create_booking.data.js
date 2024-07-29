export const validPayload = {
  firstname: "Herdian",
  lastname: "Chandra",
  totalprice: 900.345,
  depositpaid: true,
  bookingdates: {
    checkin: "2024-10-10",
    checkout: "2024-10-10",
  },
  additionalneeds: "Brunch",
};
export const payloadWithoutTotalPrice = {
  firstname: "Herdian",
  lastname: "Chandra",
  totalprice: "",
  depositpaid: true,
  bookingdates: {
    checkin: "2024-10-10",
    checkout: "2024-10-10",
  },
  additionalneeds: "Brunch",
};
