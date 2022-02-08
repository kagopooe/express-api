const express = require("express");
const { request } = require("http");
const app = express.Router();
const fixArrayId = require("../helper")

let foodItems = [
  { name: "Chicken Burrito", id: 1 },
  { name: "Guacamole", id: 2 },
  { name: "Soda", id: 3 },
  { name: "Beef Tacos", id: 4 },
  { name: "Nachos", id: 5 },
  { name: "Churros", id: 6 },
  { name: "Chicken Salad", id: 7 },
  { name: "Chips", id: 8 },
  { name: "Chorizo Bowl", id: 9 },
  { name: "Kid's Steak Tacos", id: 10 },
];

app.get("/", (req, res) => {
  res.send(foodItems);
});

app.get("/:id", (req, res) => {
  const foodItem = foodItems.find((foodItem) => foodItem.id == req.params.id);
  if (!foodItem) res.status(404).send({ msg: "Project not found" });
  res.send(foodItem);
});

app.post("/", (req,res) => {   //push to an array
let {name} = req.body;
if (!name) res.status(400).send({msg: "Please enter the name of the food"});
let newItem = {
    id: foodItems.length + 1,
    name: req.body.name

};

foodItems.push(newItem);
res.send(newItem);



}) 
app.put("/:id", (req,res) => {
    let foodItem = foodItems.find((foodItem) => foodItem.id == req.params.id);
        if (!foodItem) res.status(404).send({msg: "Project not found"}); //error send
    let { name } = req.body; // request name 

    // write details to project
    if (name) foodItem.name = name;

    res.send(FoodItem)



}) // update array




app.delete("/:id", (req,res) => {
    foodItems = foodItems.filter((foodItem) => foodItem.id != req.params.id);
    fixArrayId(foodItems);
    res.send({msg: "Item Removed"})
})






module.exports = app;
