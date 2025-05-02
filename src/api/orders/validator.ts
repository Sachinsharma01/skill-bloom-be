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

export const updateOrderSchema = Joi.object({
    payment_id: Joi.string().required().messages({
        'any.required': 'Payment ID is required',
    }),
    razorpay_id: Joi.string().required().messages({
        'any.required': 'Razorpay ID is required',
    }),
})