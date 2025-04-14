// import Joi from 'joi';

// export const signUpSchema = Joi.object({
//     email: Joi.string().email().required().messages({
//         'string.email': 'Please provide a valid email address',
//         'any.required': 'Email is required',
//     }),
//     password: Joi.string()
//         .min(8)
//         .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'))
//         .required()
//         .messages({
//             'string.min': 'Password must be at least 8 characters long',
//             'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
//             'any.required': 'Password is required',
//         }),
//     firstName: Joi.string().required().messages({
//         'any.required': 'First name is required',
//     }),
//     lastName: Joi.string().required().messages({
//         'any.required': 'Last name is required',
//     }),
// });

// export const signInSchema = Joi.object({
//     email: Joi.string().email().required().messages({
//         'string.email': 'Please provide a valid email address',
//         'any.required': 'Email is required',
//     }),
//     password: Joi.string().required().messages({
//         'any.required': 'Password is required',
//     }),
// }); 