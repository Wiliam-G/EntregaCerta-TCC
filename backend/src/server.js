const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

// Importando a base de dados
require("./database");

// const allowedOrigins = [
//   "capacitor://localhost",
//   "ionic://localhost",
//   "http://localhost",
//   "http://localhost:8080",
//   "http://localhost:8100",
//   "http://localhost:8100",
//   "http://192.168.0.12",
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Origin not allowed by CORS"));
//     }
//   },
// };

// app.options("*", cors(corsOptions));

// app.get("/", cors(corsOptions), (req, res, next) => {
//   res.json({ message: "This route is CORS-enabled for an allowed origin." });
// });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
