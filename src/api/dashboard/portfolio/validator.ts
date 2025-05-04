import Joi from 'joi';

const experienceSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Experience ID must be a string',
        'any.required': 'Experience ID is required',
    }),
    company: Joi.string().required().messages({
        'string.base': 'Company name must be a string',
        'any.required': 'Company name is required',
    }),
    position: Joi.string().required().messages({
        'string.base': 'Position must be a string',
        'any.required': 'Position is required',
    }),
    startDate: Joi.string().required().messages({
        'string.base': 'Start date must be a string',
        'any.required': 'Start date is required',
    }),
    endDate: Joi.string().required().messages({
        'string.base': 'End date must be a string',
        'any.required': 'End date is required',
    }),
    description: Joi.string().optional().messages({
        'string.base': 'Description must be a string',
    }),
});

const projectSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Project ID must be a string',
        'any.required': 'Project ID is required',
    }),
    title: Joi.string().required().messages({
        'string.base': 'Project title must be a string',
        'any.required': 'Project title is required',
    }),
    description: Joi.string().required().messages({
        'string.base': 'Project description must be a string',
        'any.required': 'Project description is required',
    }),
    technologies: Joi.string().required().messages({
        'string.base': 'Technologies must be a string',
        'any.required': 'Technologies are required',
    }),
    link: Joi.string().optional().messages({
        'string.base': 'Project link must be a string',
    }),
});

const educationSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Education ID must be a string',
        'any.required': 'Education ID is required',
    }),
    institution: Joi.string().required().messages({
        'string.base': 'Institution name must be a string',
        'any.required': 'Institution name is required',
    }),
    degree: Joi.string().required().messages({
        'string.base': 'Degree must be a string',
        'any.required': 'Degree is required',
    }),
    field: Joi.string().required().messages({
        'string.base': 'Field must be a string',
        'any.required': 'Field is required',
    }),
    startDate: Joi.string().required().messages({
        'string.base': 'Start date must be a string',
        'any.required': 'Start date is required',
    }),
    endDate: Joi.string().required().messages({
        'string.base': 'End date must be a string',
        'any.required': 'End date is required',
    }),
});

export const createPortfolioSchema = Joi.object({
    userId: Joi.string().required().messages({
        'string.base': 'User ID must be a string',
        'any.required': 'User ID is required',
    }),
    personal: Joi.object({
        name: Joi.string().required().messages({
            'string.base': 'Name must be a string',
            'any.required': 'Name is required',
        }),
        title: Joi.string().required().messages({
            'string.base': 'Title must be a string',
            'any.required': 'Title is required',
        }),
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Email must be a valid email',
            'any.required': 'Email is required',
        }),
        phone: Joi.string().optional().messages({
            'string.base': 'Phone must be a string',
        }),
        linkedin: Joi.string().optional().messages({
            'string.base': 'LinkedIn URL must be a string',
        }),
        github: Joi.string().optional().messages({
            'string.base': 'GitHub URL must be a string',
        }),
        website: Joi.string().optional().messages({
            'string.base': 'Website URL must be a string',
        }),
        location: Joi.string().optional().messages({
            'string.base': 'Location must be a string',
        }),
        about: Joi.string().required().messages({
            'string.base': 'About must be a string',
            'any.required': 'About is required',
        }),
    }).required(),
    skills: Joi.array().items(Joi.string()).min(1).required().messages({
        'array.base': 'Skills must be an array',
        'array.min': 'At least one skill is required',
        'any.required': 'Skills are required',
    }),
    experience: Joi.array().items(experienceSchema).optional(),
    projects: Joi.array().items(projectSchema).optional(),
    education: Joi.array().items(educationSchema).optional(),
    certifications: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                organization: Joi.string().required(),
                startDate: Joi.date().required(),
                endDate: Joi.date().required(),
            }),
        )
        .optional(),
    socialLinks: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                url: Joi.string().required(),
            }),
        )
        .optional(),
    achievements: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                description: Joi.string().optional(),
            }),
        )
        .optional(),
});
