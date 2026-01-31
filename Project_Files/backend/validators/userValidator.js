import Joi from 'joi';

export const createUserSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .required()
    .messages({
      'string.empty': 'First name is required',
      'string.min': 'First name must be at least 2 characters',
      'string.max': 'First name cannot exceed 50 characters'
    }),
  lastName: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .required()
    .messages({
      'string.empty': 'Last name is required',
      'string.min': 'Last name must be at least 2 characters',
      'string.max': 'Last name cannot exceed 50 characters'
    }),
  email: Joi.string()
    .email()
    .trim()
    .lowercase()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address'
    }),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.empty': 'Mobile number is required',
      'string.pattern.base': 'Please enter a valid 10-digit mobile number'
    }),
  gender: Joi.string()
    .valid('Male', 'Female')
    .required()
    .messages({
      'string.empty': 'Gender is required',
      'any.only': 'Gender must be either Male or Female'
    }),
  status: Joi.string()
    .valid('Active', 'InActive')
    .default('Active')
    .messages({
      'any.only': 'Status must be either Active or InActive'
    }),
  location: Joi.string()
    .min(2)
    .max(100)
    .trim()
    .required()
    .messages({
      'string.empty': 'Location is required',
      'string.min': 'Location must be at least 2 characters',
      'string.max': 'Location cannot exceed 100 characters'
    })
});

export const updateUserSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .messages({
      'string.min': 'First name must be at least 2 characters',
      'string.max': 'First name cannot exceed 50 characters'
    }),
  lastName: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .messages({
      'string.min': 'Last name must be at least 2 characters',
      'string.max': 'Last name cannot exceed 50 characters'
    }),
  email: Joi.string()
    .email()
    .trim()
    .lowercase()
    .messages({
      'string.email': 'Please enter a valid email address'
    }),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.pattern.base': 'Please enter a valid 10-digit mobile number'
    }),
  gender: Joi.string()
    .valid('Male', 'Female')
    .messages({
      'any.only': 'Gender must be either Male or Female'
    }),
  status: Joi.string()
    .valid('Active', 'InActive')
    .messages({
      'any.only': 'Status must be either Active or InActive'
    }),
  location: Joi.string()
    .min(2)
    .max(100)
    .trim()
    .messages({
      'string.min': 'Location must be at least 2 characters',
      'string.max': 'Location cannot exceed 100 characters'
    })
}).min(1);
