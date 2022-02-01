const axios = require("axios");
// const API = require("./API23");
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
router.get("/:searchparam", (req, res) => {
  const URL = "https://www.y2mate.com/mates/en189/analyze/ajax";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cache-Control": "no-cache",
    // "Postman-Token": "e0c24adf-98d7-4362-ac4b-a879325df970",
    // Host: "www.y2mate.com",
    Accept: "*/*",
  };

  res.setHeader(
    "Access-Control-Allow-Origin",
    req.header("origin") ||
      req.header("x-forwarded-host") ||
      req.header("referer") ||
      req.header("host")
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  axios
    .post(URL, `url=${req.params.searchparam}&q_auto=0&ajax=1`)
    .then((response) => {
      const ab = response.data.result;
      res.send(ab);
    });
});

router.get("/", (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    req.header("origin") ||
      req.header("x-forwarded-host") ||
      req.header("referer") ||
      req.header("host")
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.send("hello");
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);