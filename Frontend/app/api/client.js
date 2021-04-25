import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.0.0.42:8000",
});

export default apiClient;
