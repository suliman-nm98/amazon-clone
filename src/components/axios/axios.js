import axios from "axios";

const instance = axios.create({
  baseURL: "...", //THe API (cloud function) URL
});

export default instance;
