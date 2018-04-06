const express = require("express");
const router = express.Router();

router.get("/api/todos", function(req, res){
    console.log("Works")
    res.json({"Working?": "working."})
})

module.exports = router;