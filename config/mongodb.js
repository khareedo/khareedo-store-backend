import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();
export default class MongoDB {
  connection;
  connect() {
    try {
      this.connection = mongoose.connect(process.env.MONGODB_URI);
      return this.connection;
    } catch (error) {
      throw new Error('Invalid connection URI');
    }
  }
  disconnect() {
    mongoose.connection.close();
  }
}