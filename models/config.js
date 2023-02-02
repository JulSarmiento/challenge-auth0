const mongoose = require("mongoose");

// mongoose.connect(`mongodb+src://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}/${process.env.MONGO_DB}`, 
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

mongoose.set('strictQuery', false);

const connection = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.94wxqpb.mongodb.net/${process.env.MONGO_DB}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("MongoDB database connection established successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connection;
