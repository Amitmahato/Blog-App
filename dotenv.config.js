const dotenv = require("dotenv");
const path = require("path");
// import dotenv from "dotenv"
if (process.env.NODE_ENV === "production") {
  dotenv.config({
    path: path.resolve(__dirname, `./.env.production`),
  });
} else {
  dotenv.config({
    path: path.resolve(__dirname, "./.env"),
  });
}
