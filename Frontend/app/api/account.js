import apiClient from "./client";

const signIn = (credentials) => {
  const endpoint = "/api/token/";
  const data = {
    email: credentials.username,
    password: credentials.password,
  };

  return apiClient.post(endpoint, data);
};
const signUp = (userDetails) => {
  const endpoint = "/users/";
  const data = {
    email: userDetails.email,
    first_name: userDetails.fname,
    last_name: userDetails.lname,
    password: userDetails.password,
  };
  return apiClient.post(endpoint, data);
};
export default {
  signIn,
  signUp,
};
