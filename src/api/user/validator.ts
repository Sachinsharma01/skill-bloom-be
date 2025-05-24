import Joi from 'joi';

export const getProfileSchema = Joi.object({
    userId: Joi.number().required().messages({
        'number.base': 'userId must be a number',
        'any.required': 'userId is required',
    }),
});

export const updateProfileSchema = Joi.object({
    name: Joi.string().optional().messages({
        'string.base': 'name must be a string',
    }),
    email: Joi.string().email().optional().messages({
        'string.base': 'email must be a string',
        'string.email': 'email must be a valid email',
    }),
    mobile_number: Joi.string().optional().messages({
        'string.base': 'mobile_number must be a string',
    }),
    country: Joi.string().optional().messages({
        'string.base': 'country must be a string',
    }),
    state: Joi.string().optional().messages({
        'string.base': 'state must be a string',
    }),
    linkedin: Joi.string().optional().messages({
        'string.base': 'linkedin must be a string',
    }),
    profile_image: Joi.string().optional().messages({
        'string.base': 'profile_picture must be a string',
    }),
    profession: Joi.string().optional().messages({
        'string.base': 'profession must be a string',
    }), 
});


export const reviewCourseSchema = Joi.object({
    rating: Joi.number().required().messages({
        'number.base': 'rating must be a number',
        'any.required': 'rating is required',
    }),
});