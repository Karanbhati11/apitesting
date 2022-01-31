const axios = require("axios");

const API23 = async() => {
  const URL = "https://www.y2mate.com/mates/en189/analyze/ajax";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cache-Control": "no-cache",
    // "Postman-Token": "e0c24adf-98d7-4362-ac4b-a879325df970",
    // Host: "www.y2mate.com",
    Accept: "*/*",
  };
  const hello = await axios.post(URL, `url=alan+walke&q_auto=0&ajax=1"`, headers);

  console.log(hello.data.result);
  // return hello.data.result;
};

module.exports = API23;
