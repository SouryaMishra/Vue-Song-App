const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require("./models");
const config = require('./config');

const port = process.env.PORT || 8081;
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res) => res.send({message : "Hello World"}));

app.post("/register", (req,res) => {
    console.log(req.body); 
    res.send({message : `Hello ${req.body.email}`});
})

sequelize.sync().then(() => app.listen(config.port, () => console.log(`Server listening on port ${port}`)));
