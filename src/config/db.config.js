const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");
    return connection;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

module.exports = connectToDatabase;
