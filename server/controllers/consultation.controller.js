import { google } from "googleapis";
import auth from "../config/googleSheet.js";

export const consultationController = async (req, res) => {
try {
const {
name,
email,
phone,
city,
businessType,
outlets,
erpInterest,
} = req.body;

/* VALIDATION */

if (
  !name ||
  !email ||
  !phone ||
  !city ||
  !businessType ||
  !outlets ||
  !erpInterest
) {
  return res.status(400).json({
    success: false,
    message: "All required fields are needed",
  });
}

/* GOOGLE AUTH */

const client = await auth.getClient();

const googleSheets = google.sheets({
  version: "v4",
  auth: client,
});

/* APPEND DATA */

await googleSheets.spreadsheets.values.append({
  spreadsheetId: process.env.GOOGLE_SHEET_ID,

  range: "Sheet1!A:H",

  valueInputOption: "USER_ENTERED",

  requestBody: {
    values: [
      [
        name,
        email,
        phone,
        city,
        businessType,
        outlets,
        erpInterest,
        new Date().toLocaleString(),
      ],
    ],
  },
});

return res.status(200).json({
  success: true,
  message: "Lead stored successfully",
});


} catch (error) {
console.log(error);

return res.status(500).json({
  success: false,
  message: error.message,
});

}
};
