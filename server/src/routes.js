const AuthController = require("./controllers/AuthController");
const AuthValidator = require("./validations/AuthValidator");

const router = require("express").Router();

router.get("/", (req,res) => res.send({message : "Hello World"}));
router.post("/register", AuthValidator.validate, AuthController.register);

module.exports = router;