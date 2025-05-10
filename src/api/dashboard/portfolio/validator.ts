import Joi from 'joi';

const basicInfoSchema = Joi.object({
    fullName: Joi.string().required().messages({
        'string.base': 'Full name must be a string',
        'any.required': 'Full name is required',
    }),
    position: Joi.string().required().messages({
        'string.base': 'Position must be a string',
        'any.required': 'Position is required',
    }),
    headline: Joi.string().optional().messages({
        'string.base': 'Headline must be a string',
    }),
    city: Joi.string().optional().messages({
        'string.base': 'City must be a string',
    }),
    photoUrl: Joi.string().optional().messages({
        'string.base': 'Photo URL must be a string',
    }),
    email: Joi.string().email().optional().messages({
        'string.base': 'Email must be a string',
        'string.email': 'Email must be a valid email',
    }),
    phoneNumber: Joi.string().optional().messages({
        'string.base': 'Phone number must be a string',
    }),
    linkedinProfile: Joi.string().optional().messages({
        'string.base': 'LinkedIn profile must be a string',
    }),
    githubProfile: Joi.string().optional().min(0).messages({
        'string.base': 'GitHub profile must be a string',
    }),
    resumeUrl: Joi.string().optional().messages({
        'string.base': 'Resume URL must be a string',
    }),
    hideEmail: Joi.boolean().default(false),
    hidePhone: Joi.boolean().default(false),
    hideResume: Joi.boolean().default(false),
    whatYouDo: Joi.string().optional().min(0).messages({
        'string.base': 'What you do must be a string',
    }),
    whatYouDoHeadline: Joi.string().optional().messages({
        'string.base': 'What you do headline must be a string',
    }),
    aboutYourself: Joi.string().optional().min(0).messages({
        'string.base': 'About yourself must be a string',
    }),
});

const educationSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Education ID must be a string',
        'any.required': 'Education ID is required',
    }),
    degree: Joi.string().required().messages({
        'string.base': 'Degree must be a string',
        'any.required': 'Degree is required',
    }),
    collegeName: Joi.string().required().messages({
        'string.base': 'College name must be a string',
        'any.required': 'College name is required',
    }),
    startDate: Joi.string().required().messages({
        'string.base': 'Start date must be a string',
        'any.required': 'Start date is required',
    }),
    endDate: Joi.string().required().messages({
        'string.base': 'End date must be a string',
        'any.required': 'End date is required',
    }),
    location: Joi.string().optional().messages({
        'string.base': 'Location must be a string',
    }),
    websiteLink: Joi.string().optional().messages({
        'string.base': 'Website link must be a string',
    }),
    description: Joi.string().optional().messages({
        'string.base': 'Description must be a string',
    }),
    achievements: Joi.array().items(Joi.string()).optional(),
    keySkills: Joi.array().items(Joi.string()).optional(),
});

const skillSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Skill ID must be a string',
        'any.required': 'Skill ID is required',
    }),
    name: Joi.string().required().messages({
        'string.base': 'Skill name must be a string',
        'any.required': 'Skill name is required',
    }),
    category: Joi.string()
        .valid('technical', 'tools', 'additional')
        .required()
        .messages({
            'string.base': 'Category must be a string',
            'any.only': 'Category must be one of: technical, tools, additional',
            'any.required': 'Category is required',
        }),
});

const experienceSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Experience ID must be a string',
        'any.required': 'Experience ID is required',
    }),
    title: Joi.string().required().messages({
        'string.base': 'Title must be a string',
        'any.required': 'Title is required',
    }),
    company: Joi.string().required().messages({
        'string.base': 'Company name must be a string',
        'any.required': 'Company name is required',
    }),
    startDate: Joi.string().required().messages({
        'string.base': 'Start date must be a string',
        'any.required': 'Start date is required',
    }),
    endDate: Joi.string().required().messages({
        'string.base': 'End date must be a string',
        'any.required': 'End date is required',
    }),
    isOngoing: Joi.boolean().default(false),
    description: Joi.string().optional().messages({
        'string.base': 'Description must be a string',
    }),
    bullets: Joi.array().items(Joi.string()).optional(),
});

const projectSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Project ID must be a string',
        'any.required': 'Project ID is required',
    }),
    name: Joi.string().required().messages({
        'string.base': 'Project name must be a string',
        'any.required': 'Project name is required',
    }),
    description: Joi.string().required().messages({
        'string.base': 'Project description must be a string',
        'any.required': 'Project description is required',
    }),
    status: Joi.string()
        .valid('active', 'completed', 'ongoing')
        .required()
        .messages({
            'string.base': 'Status must be a string',
            'any.only': 'Status must be one of: active, completed, ongoing',
            'any.required': 'Status is required',
        }),
    technologies: Joi.array().items(Joi.string()).optional(),
    link: Joi.string().optional().messages({
        'string.base': 'Project link must be a string',
    }),
});

const certificateSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'Certificate ID must be a string',
        'any.required': 'Certificate ID is required',
    }),
    name: Joi.string().required().messages({
        'string.base': 'Certificate name must be a string',
        'any.required': 'Certificate name is required',
    }),
    issuer: Joi.string().required().messages({
        'string.base': 'Issuer must be a string',
        'any.required': 'Issuer is required',
    }),
    date: Joi.string().optional().messages({
        'string.base': 'Date must be a string',
    }),
    selected: Joi.boolean().default(false),
});

export const createPortfolioSchema = Joi.object({
    formData: Joi.object({
        basicInfo: basicInfoSchema.optional(),
        education: Joi.array().items(educationSchema).optional(),
        skills: Joi.array().items(skillSchema).optional(),
        experiences: Joi.array().items(experienceSchema).optional(),
        projects: Joi.array().items(projectSchema).optional(),
        certificates: Joi.array().items(certificateSchema).optional(),
    }),
    user_id: Joi.number().required().messages({
        'number.base': 'User ID must be a number',
        'any.required': 'User ID is required',
    }),
});
