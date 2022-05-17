const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Restaurant-menu:Tinkle97@cluster0.xeute.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    dbName: "restaurant-menu",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("connected!"))
);

const foodSchema = mongoose.Schema({
  dishType: {
    type: String,
    required: true,
  },
  dishName: {
    type: String,
    required: true,
  },
  dishPrice: {
    type: String,
    required: true,
  },
});

const drinkSchema = mongoose.Schema({
  drinkName: {
    type: String,
    required: true,
  },
  drinkPrice: {
    type: String,
    required: true,
  },
});

const connection = mongoose.connection;
const foodModel = connection.model("food", foodSchema, "foodCollection");
const drinkModel = connection.model("drink", drinkSchema, "drinkCollection");

app.get("/", function (req, res) {
  let tempData = [];
  foodModel.find({}, function (err, foodData) {
    console.log(foodData);
    tempData.push(foodData);
    res.json(tempData);
  });
});

app.get("/", function (req, res) {
  let tempData = [];
  drinkModel.find({}, function (err, drinkData) {
    console.log(drinkData);
    tempData.push(drinkData);
    res.json(tempData);
  });
});

app.listen(5000);
