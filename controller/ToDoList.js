const express = require("express");
const router = express.Router();

router.get("/api/todos", function(req, res){
    console.log("Works")
})

module.exports = router;