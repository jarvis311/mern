const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://jigneshpatel:5XivsdujA6BshaTW@cluster0.17to68d.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => {
    console.error(error.message);
  });
