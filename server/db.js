const mongoose = require("mongoose");

const connectDB = async () => {
    try {                                    
      // const conn = await mongoose.connect()
      await mongoose.connect('mongodb+srv://rohitsharma4102002:cFUkkjbLV4dG0glH@cluster0.g3hj0vc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      console.log(`Mongodb connected ${mongoose.connection.host}:${mongoose.connection.port}`);
    } catch (error) {
      console.log(`Mongodb Server Issue ${error}`);
    }
  };

module.exports = connectDB;
