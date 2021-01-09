const userService = require("../services/UserService");

module.exports =  {
    register : async function (req, res) {
                    req.body.email = req.body.email || null;
                    req.body.password = req.body.password || null;
                    try {
                        const user = await userService.addUser(req.body);
                        res.send({user, message : "Registration Successful, please login"});
                    }
                    catch(err) {
                        res.status(400).send({error : "Email already in use"});
                    }
                }
            }