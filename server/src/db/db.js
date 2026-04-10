const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  
    console.log("database connected");
  } catch (error) {
    console.log("database connection error", error);
  }
}

module.exports = connectDb;