const axios = require("axios");
require("dotenv").config();

const baseURL = `${process.env.FB_BASE_URL}/${process.env.FB_VERSION}`;

const http = axios.create({ baseURL: `${baseURL}` });

function get(url, headers = {}, params = {}) {
  return http.get(url, {
    params,
    headers: { ...headers },
  });
}

module.exports = { get };
