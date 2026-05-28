import { google } from "googleapis";

/* VALIDATE ENV VARIABLES */
console.log(process.env.GOOGLE_CLIENT_EMAIL)
if (!process.env.GOOGLE_CLIENT_EMAIL) {
  throw new Error(
    "GOOGLE_CLIENT_EMAIL is missing"
  );
}

if (!process.env.GOOGLE_PRIVATE_KEY) {
  throw new Error(
    "GOOGLE_PRIVATE_KEY is missing"
  );
}

/* GOOGLE AUTH */

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email:
      process.env.GOOGLE_CLIENT_EMAIL,

   private_key:
  process.env.GOOGLE_PRIVATE_KEY.replace(
    /\\n/g,
    "\n"
  ),
  },

  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

export default auth;