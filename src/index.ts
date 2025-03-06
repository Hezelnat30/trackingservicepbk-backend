import express, { Request, Response } from "express";
import cors from "cors";
import dbConnection from "./utils/database";

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

async function init() {
  app.use("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Server is running!",
      data: null,
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
}

init();
