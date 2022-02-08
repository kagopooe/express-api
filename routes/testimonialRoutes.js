const express = require("express");
const app = express.Router();
const fixArrayId = require("../helper");

let testimonials = [
  {
    fName: "Na-aim",
    relationship: "Classmate",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    id: 1,
  },
  {
    fName: "Simamkele",
    relationship: "Classmate",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    id: 2,
  },
  {
    fName: "Unathi",
    relationship: "Classmate",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    id: 3,
  },
  {
    fName: "Jason",
    relationship: "Lecturer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    id: 4,
  },
  {
    fName: "Godwin",
    relationship: "Head of Curriculum",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    id: 5,
  },
];

app.get("/", (req, res) => {
  res.send(testimonials);
});

app.get("/:id", (req, res) => {
  const testimonial = testimonials.find(
    (testimonial) => testimonial.id == req.params.id
  );
  if (!testimonial) res.status(404).send({ msg: "Project not found" });
  res.send(testimonial);
});

app.post("/", (req, res) => {
  let { fName, relationship, quote } = req.body;
  if (!fName || !relationship || !quote)
    res.status(400).send({ msg: "Please enter all required fields" });

  let newTestimonial = {
    id: testimonials.length + 1,
    fName,
    relationship,
    quote,
  };
  testimonials.push(newTestimonial);
  res.send(newTestimonial);
});

app.put("/:id", (req, res) => {
  let testimonial = testimonials.find(
    (testimonial) => testimonial.id == req.params.id
  ); //finds id
  if (!testimonial) res.status(404).send({ msg: "Testimonial does not exist" }); //error send
  let { fName, relationship, quote } = req.body;

  //write 2 project
  if (fName) testimonial.fName = fName;
  if (relationship) testimonial.relationship = relationship;
  if (quote) testimonial.quote = quote;
});

app.delete("/:id", (req,res) => {
  testimonials = testimonials.filter((testimonial) => testimonial.id != req.params.id);
  fixArrayId(testimonials);
  res.send({msg: "Testimonial Removed"})
})

module.exports = app;
