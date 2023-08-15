import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: './config.env' });
mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_STRING)
  .then(()=>console.log('CONNECTED TO DB...'))
  .catch((e) => console.log(`Error connecting to db: ${e}`));

export { mongoose };
