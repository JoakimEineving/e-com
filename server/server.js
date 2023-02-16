const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/productsRoute");
const orderRouter = require("./routes/orderRoute");



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

mongoose.set("strictQuery", true);
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', orderRouter)


//https://dummyjson.com/products/search?q=phone&limit=3


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
