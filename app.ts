import express, { Application } from "express";
import morgan from "morgan";
import { PORT } from "@env/index";
const app: Application = express();

// Express configs
app.use(express.json({ limit: "100mb" }));
app.use(morgan("combined"));

app.listen(PORT, () => {
  console.log("@Server connected at");
  console.log(`http://localhost:${PORT}`);
});
