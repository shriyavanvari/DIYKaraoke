import apiClient from "./client";

const endpoint = "/auth/login/";
const signIn = (credentials) => {
  const data = {
    username: credentials.username,
    password: credentials.password,
  };
  console.log("api");
  console.log(data);
  return apiClient.post(endpoint, data);
};
export default {
  signIn,
};
