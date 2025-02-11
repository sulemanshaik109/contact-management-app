const Joi = require("joi");

const contactSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        "string.base": "Name must be a valid string",
        "string.empty": "Name is required",
        "string.min": "Name must be at least {#limit} characters long",
        "any.required": "Name is required"
      }),
    email: Joi.string().email().required().messages({
        "string.email": "Email must be a valid email address",
        "string.empty": "Email is required",
        "any.required": "Email is required"
      }),
    phone: Joi.string().pattern(/^[0-9]+$/).required().messages({
        "string.pattern.base": "Phone number must contain only numbers",
        "string.empty": "Phone number is required",
        "any.required": "Phone number is required"
      }),
    address: Joi.string().optional(),
});

const validateContact = (req, res, next) => {
    const {error} = contactSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }
    next();
};

module.exports = validateContact;