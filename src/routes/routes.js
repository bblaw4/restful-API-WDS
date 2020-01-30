const express = require("express");
const router = express.Router();
const Person = require("../models/models");

// get all people
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

// get a specific person
router.get("/:id", getPerson, (req, res) => {
  res.json(res.person);
});

// create a person
router.post("/", (req, res) => {});

// update a person
router.patch("/:id", (req, res) => {});

// delete a person
router.delete("/:id", (req, res) => {});

// middleware
async function getPerson(req, res, next) {
  let person;
  try {
    person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: "Cannot find person" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.person = person;
  next();
}
module.exports = router;
