const userService = require("../services/UserService");

module.exports =  {
    register : async function (req, res) {
                    req.body.email = req.body.email || null;
                    req.body.password = req.body.password || null;
                    try {
                        const user = await userService.addUser(req.body);
                        res.send(user);
                    }
                    catch(err) {
                        res.status(400).send({error : err, message : "Email already in use"});
                    }
                }
            }