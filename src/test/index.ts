import { config } from "dotenv";
import path from "path";
const dotEnvPath = path.resolve(`./.env.${process.env.NODE_ENV}`);
config({
  path: dotEnvPath,
});
import "./test";
