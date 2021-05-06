import apiClient from "./client";
import * as FileSystem from "expo-file-system";

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

const songRecognition = async (songURI) => {
  let headers = {
    "content-type": "multipart/form-data",
  };

  let options = {
    headers: headers,
    httpMethod: "POST",
    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    fieldName: "file",
  };
  const endpoint = "http://10.0.0.42:8000/upload/";
  try {
    let upload = await FileSystem.uploadAsync(endpoint, songURI, options);
    console.log(upload);
  } catch (err) {
    console.log(err);
  }
};
export default {
  incrementFrequency,
  getItemBasedSongs,
  getLatestSongs,
  getPopularSongs,
  songRecognition,
};
