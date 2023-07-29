const mongoose = require('mongoose');
const connectToDb = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(`Database connected`)
    )
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};

module.exports = connectToDb;
