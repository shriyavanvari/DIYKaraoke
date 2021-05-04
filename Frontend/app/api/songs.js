import apiClient from "./client";
const incrementFrequency = (songId) => {
  console.log("in inc api");
  console.log(songId);
  const endpoint = "/recsys/increase_listen_count/";
  const data = {
    id: songId,
  };
  return apiClient.post(endpoint, data);
};
export default {
  incrementFrequency,
};
