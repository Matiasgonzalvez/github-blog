import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `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`
  }
});

export default Api;
