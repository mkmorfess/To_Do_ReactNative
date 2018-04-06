const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const toDoList = require('./controller/ToDoList.js')

const app = express();

const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 4000;

app.use(express.static(publicPath));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
console.log(toDoList);
app.use("/", toDoList);

app.listen(port, () => {
    console.log('App is running at http://localhost:4000');
});