//import mongoose from "mongoose";
//import pkg from 'pg';
//const { Pool } = pkg;
//import dotenv from "dotenv";

//dotenv.config(); // Load .env variables
require('dotenv').config();

const mongoose = require("mongoose");
const { Pool } = require("pg");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.error("MongoDB connection error:", error));

// Connect to PostgreSQL
const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

// Test PostgreSQL connection
pool.connect()
  .then(client => {
    console.log("PostgreSQL connected...");
    client.release(); // Release the client back to the pool
  })
  .catch(error => console.error("PostgreSQL connection error:", error));

//export { mongoose, pool };
module.exports = { mongoose, pool };
