import dotenv from "dotenv";

dotenv.config();

console.log("ENV LOADED");
console.log(process.env.GOOGLE_CLIENT_EMAIL);