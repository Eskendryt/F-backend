const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://eskndr:D4n5mOBtAagzlb1i@cluster0.eefsa.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
