import mongoose from "mongoose";
export default class Mongo {
  connection;
  connect() {
    this.connection = mongoose.connect(process.env.MONGODB_URI);
    return this.connection;
  }
  disconnect() {
    mongoose.connection.close();
  }
}