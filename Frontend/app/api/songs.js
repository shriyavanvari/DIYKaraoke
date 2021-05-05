import apiClient from "./client";
const incrementFrequency = (songId) => {
  const endpoint = "/recsys/increase_listen_count/";
  const data = {
    id: songId,
  };
  return apiClient.post(endpoint, data);
};

const getPopularSongs = () => {
  const endpoint = "/recsys/get_recommendations/";
  return apiClient.get(endpoint);
};

const getItemBasedSongs = (songId) => {
  const endpoint = "/recsys/get_item_based/";
  const data = {
    id: songId,
  };
  return apiClient.post(endpoint, data);
};

const getLatestSongs = () => {
  const endpoint = "/recsys/get_latest_songs/";
  return apiClient.get(endpoint);
};

const songRecognition = (songURI) => {
  const endpoint = "/upload/";
  const data = new FormData();
  data.append("file", {
    name: "song",
    uri: songURI,
    type: "audio/mpeg",
  });
  console.log("in api");
  console.log(data);
  return apiClient.post(endpoint, data);
};
export default {
  incrementFrequency,
  getItemBasedSongs,
  getLatestSongs,
  getPopularSongs,
  songRecognition,
};
