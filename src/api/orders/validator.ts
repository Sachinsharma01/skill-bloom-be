import Joi from "joi";
import constants from "utils/constants";

export const createOrderSchema = Joi.object({
    course_id: Joi.string().required().messages({
        'any.required': 'Course ID is required',
    }),
    amount: Joi.number().required().messages({
        'any.required': 'Amount is required',
    }),
    user_id: Joi.string().required().messages({
        'any.required': 'User ID is required',
    }),
})