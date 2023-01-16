import * as dotenv from "dotenv";

if (process.env.NODE_ENV) {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
} else {
  dotenv.config();
}

const configs = {
  ENV: process.env.NODE_ENV as string,
  MONGO_URL: process.env.MONGO_URL as string,
};

console.log({ configs });

export default configs;
