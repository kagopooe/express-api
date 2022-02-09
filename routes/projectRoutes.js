const express = require("express");
const { request } = require("http");
const app = express.Router();
const fixArrayId = require("../helper")

let projects = [
  { name: "Reaction Game", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", github:"github.com/##", live: "netlify.app/111" , id: 1 },
  { name: "Point of Sale", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", github:"github.com/##", live: "netlify.app/111", id: 2 },
  { name: "Mock Portfolio", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", github:"github.com/##", live: "netlify.app/111", id: 3 },
  { name: "Basic Calculator", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", github:"github.com/##", live: "netlify.app/111", id: 4 },
  { name: "BMI Calculator ", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", github:"github.com/##", live: "netlify.app/111", id: 5 },
  { name: "Sports Website", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", github:"github.com/##", live: "netlify.app/111", id: 6 },
  { name: "Data Chart", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", github:"github.com/##", live: "netlify.app/111", id: 7 },
];

app.get("/", (req, res) => {
  res.send(projects);
});

app.get("/:id", (req, res) => {
  const project = projects.find((project) => project.id == req.params.id);
  if (!project) res.status(404).send({ msg: "Project not found" });
  res.send(project);
});

app.post("/", (req,res) => {   //push to an array
let {name, desc, github, live } = req.body;
if (!name || desc || github || live) res.status(400).send({msg: "Please enter a valid project"});
let newProject = {
    id: projects.length + 1,
    name, desc, github, live

};

projects.push(newProject);
res.send(newProject);



}) 
app.put("/:id", (req,res) => {
    let project = projects.find((project) => project.id == req.params.id);
        if (!project) res.status(404).send({msg: "Project not found"}); //error send
    let { name, desc, github, live } = req.body; // request name 

    // write details to project
    if (name) project.name = name;
    if (desc) project.desc = desc;
    if (github) project.github = github;
    if (live) project.live = live;

    res.send(project)



}) // update array




app.delete("/:id", (req,res) => {
    projects = projects.filter((project) => project.id != req.params.id);
    fixArrayId(projects);
    res.send({msg: "Item Removed"})
})






module.exports = app;
