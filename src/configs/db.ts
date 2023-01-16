import mongoose from "mongoose";
import configs from "./configs";

const db = mongoose.connection;

mongoose.set('debug', true);
mongoose.set("debug", (collectionName:string, method:string, query:object, doc:any) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const connectDB = mongoose.connect(configs.MONGO_URL);

export default connectDB;
