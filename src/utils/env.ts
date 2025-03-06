import dotenv from "dotenv";

dotenv.config();

const MONGO_URL: string = process.env.MONGO_URL || "";

export { MONGO_URL };
