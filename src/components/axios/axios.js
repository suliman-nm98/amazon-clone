import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-62c97.cloudfunctions.net/api", //THe API (cloud function) URL
});

export default instance;
