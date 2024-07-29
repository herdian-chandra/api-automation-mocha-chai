export const validPayload = {
  username: "admin",
  password: "password123",
};
export const invalidPayload = {
  username: "admin123",
  password: "password1234",
};
export const payloadWithoutUsername = {
  username: "",
  password: "password1234",
};
export const payloadWithoutPassword = {
  username: "admin",
  password: "",
};
