import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/db_api_rest");

let db = mongoose.connection;

export default db;