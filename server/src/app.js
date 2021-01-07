const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 8081;
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res) => res.send({message : "Hello World"}));

app.listen(port, () => console.log(`Server listening on port ${port}`));