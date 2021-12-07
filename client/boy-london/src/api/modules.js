import request from "./request";

/**
 * Authentication
 */
export const apiLogin = ({ username, password }) => {
  return request.post("/auth/login", {
    username,
    password,
  });
};

export const apiRegister = (params) => {
  return request.post("/auth/register", {
    email: params.email,
    name: params.name,
    phoneNumber: params.phoneNumber,
    isActive: true,
    password: params.password,
    address: params.address,
    role: "user",
  });
};