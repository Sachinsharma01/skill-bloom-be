import constants from 'config/constants';
import Joi from 'joi';

export const signUpSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required',
    }),
    password: Joi.string()
        .min(8)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'))
        .required()
        .messages({
            'string.min': 'Password must be at least 8 characters long',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
            'any.required': 'Password is required',
        }),
    name: Joi.string().required().messages({
        'any.required': 'Name is required',
    }),
    username: Joi.string().required().messages({
        "any.required": "Username is required"
    }),
    profession: Joi.string().valid(...Object.values(constants.Professions)).required().messages({
        'any.required': 'Profession is required',
        'any.only': 'Invalid profession',
    }),
    country: Joi.string().required().messages({
        'any.required': 'Country is required',
    }),
    state: Joi.string().required().messages({
        'any.required': 'State is required',
    }),
    mobile_number: Joi.string().length(10).required().messages({
        'any.required': 'Mobile number is required',
        'string.length': 'Mobile number must be 10 digits',
    }),
});

export const signInSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required',
    }),
    password: Joi.string().required().messages({
        'any.required': 'Password is required',
    }),
}); 