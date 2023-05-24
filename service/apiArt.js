const { default: axios } = require("axios");

const apiArts = axios.create({
  baseURL: "https://api.artic.edu/api/v1",
});
export default apiArts;
