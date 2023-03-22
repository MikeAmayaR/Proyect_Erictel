import express from "express";
import ErictelRoutes from "./src/routes/ErictelRoutes.js";
import { config } from "dotenv";

config();

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "60mb" }));

let port = process.env.PORT;

app.use("/erictel/v1.0", ErictelRoutes);
app.get("/develop/health", (_req, res) =>
  res.status(200).send({
    message: "Welcome to this api login",
  })
);

app.listen(port, () => {
  console.log("The server is run in port", port);
});

export default app;