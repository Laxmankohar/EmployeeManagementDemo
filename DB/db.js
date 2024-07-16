import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
  path: "./.env",
});

export const connectDB = async () => {
  try {
      console.log(process.env.MONGO_URL);
      console.log(process.env.PORT);
      const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}`,
    );
    console.log(`MONGODB CONNECTED !! ${connectionInstance.connection.host}`);
  } catch (err) {
    console.log("Error while connecting to MongoDB: ", err);
  }
};
