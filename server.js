// Server Setup
const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors())
const port = 3000; // http:/localhost:3000/


// Retrieving from mongoose dependency
const mongoose = require('mongoose')

const URL = 'INSERT URL HERE'
mongoose.connect(URL); // establishes connection to deployment

// Structure of our Car Schema using mongoose
const carSchema = new mongoose.Schema({
  type: String,
  make: String,
  model: Number,
  color: String,
  fourWheelDrive: Boolean,
  used: Boolean
})

// Creates a reusable model out of the schema
const Car = mongoose.model("Car", carSchema);


app.get('/api/test', async (req, res) => {
  // Example Car
  const car = new Car({
    type: "Honda",
    make: "Civic",
    model: 2012,
    color: "Grey",
    fourWheelDrive: false,
    used: true
  })

  // save into database
  const printCar = await car.save();

  res.json(printCar)

}) 

app.get('/api/test/all', async (req, res)=> {
  // use .find({}) to find all cars
  const cars = await Car.find({});
  res.json(cars);
})


app.get('/',  (req, res) => {
  res.send("Welcome to the Server!")
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});