const Joi = require("joi");

module.exports = {
    validate(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp("^[A-Za-z0-9]{8,32}$"))
        })

        const {error} = schema.validate(req.body);

        if(error) {
            switch(error.details[0].context.key) {
                case "email":
                    res.status(400).send({error : "Please provide a valid email address"});
                    break;
                case "password":
                    res.status(400).send({error : "Password must contain A-Z, a-z, 0-9 and must be 8-32 characters length"})
                    break;
                default:
                    res.status(400).send({error : "Failed to register due to invalid details provided, try again"})
            }
            res.status(400).send({error});
        }
        else next();
    }
}