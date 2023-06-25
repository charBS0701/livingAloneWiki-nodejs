import express from "express";
require("dotenv").config();

// 서버만들기
const app = express();

// 서버 실행
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`);
});

// /로 접속했을 때
app.get("/", (req, res) => {
  console.log("GET /");
  return res.send("Hello World!");
});
