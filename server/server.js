import "./config/env.js";
import express from "express";
import cors from "cors";




import consultationRoute from "./routes/consultation.route.js";


const app = express();

/* MIDDLEWARE */

app.use(cors());
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://apx-erp-demo.onrender.com",
//       "https://apx-erp-demo.onrender.com/api/consultation",
//       "https://apxsolution-erp-demo.netlify.app"

//     ],

//     methods: ["GET", "POST"],

//     credentials: true,
//   })
// );
app.use(express.json());

/* ROUTES */
app.get('/',(req,res)=>{
  res.send('APX ERP Demo!')
});
app.use("/api", consultationRoute);

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});