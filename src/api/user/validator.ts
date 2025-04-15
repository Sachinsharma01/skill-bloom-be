import Joi from "joi";

export const getProfileSchema = Joi.object({
    userId: Joi.number().required().messages({
        "number.base": "userId must be a number",
        "any.required": "userId is required",
    }),
});