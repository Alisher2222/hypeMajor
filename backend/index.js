import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import businessRoute from "./routes/business.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use("/auth", authRoute);
app.use("/business", businessRoute);
app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
