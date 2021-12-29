// import express
const express = require("express");

// membubat routing modular
const router = express.Router();

// routing home
router.get("/", (req, res) => {
    res.send("API Express JS*");
});

// import Student Controller
const StudentController = require("../controller/StudentController");

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;