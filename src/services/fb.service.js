const httpService = require("./http.service");

const getFBLongLiveToken = (client_id, client_secret, token) =>
  httpService
    .get(
      `/oauth/access_token?grant_type=fb_exchange_token&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${token}`
    )
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

const getFBUserMe = (token) =>
  httpService
    .get(`/me?fields=name,email,gender,picture{url}&access_token=${token}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

const getFBAdAccountInsights = (token) =>
  httpService
    .get(
      `/me/adaccounts/?fields=id,account_id,amount_spent,balance,account_status,currency,insights{clicks,impressions}&access_token=${token}`
    )
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

module.exports = { getFBLongLiveToken, getFBUserMe, getFBAdAccountInsights };
