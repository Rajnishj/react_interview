import React, { useState } from 'react';

// Form configuration object
const defaultFormConfig = {
  fields: [
    {
      id: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Enter your username',
      required: true,
      validation: {
        minLength: 3,
        pattern: '^[a-zA-Z0-9_]*$'
      }
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      required: true,
      validation: {
        pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
      }
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
      validation: {
        minLength: 8
      }
    },
    {
      id: 'subscription',
      type: 'checkbox',
      label: 'Subscribe to newsletter',
      required: false
    },
    {
      id: 'contactMethod',
      type: 'radio',
      label: 'Preferred Contact Method',
      options: [
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
        { value: 'sms', label: 'SMS' }
      ],
      required: true
    },
    {
      id: 'country',
      type: 'select',
      label: 'Country',
      options: [
        { value: '', label: 'Select a country' },
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' }
      ],
      required: true
    },
    {
      id: 'profileImage',
      type: 'file',
      label: 'Profile Image',
      required: false,
      validation: {
        accept: 'image/*',
        maxSize: 5 * 1024 * 1024 // 5MB
      }
    }
  ]
};

const DynamicForm = ({ formConfig = defaultFormConfig }) => {
  const initialFormState = formConfig.fields.reduce((acc, field) => {
    acc[field.id] = field.type === 'checkbox' ? false : '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateField = (field, value) => {
    if (field.required && !value) {
      return `${field.label} is required`;
    }

    if (field.validation) {
      if (field.validation.minLength && value.length < field.validation.minLength) {
        return `${field.label} must be at least ${field.validation.minLength} characters`;
      }

      if (field.validation.pattern && !new RegExp(field.validation.pattern).test(value)) {
        return `Please enter a valid ${field.label.toLowerCase()}`;
      }

      if (field.type === 'file' && value) {
        const file = value;
        if (field.validation.maxSize && file.size > field.validation.maxSize) {
          return `File size should be less than ${field.validation.maxSize / (1024 * 1024)}MB`;
        }
      }
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    formConfig.fields.forEach(field => {
      const error = validateField(field, formData[field.id]);
      if (error) {
        newErrors[field.id] = error;
      }
    });
    return newErrors;
  };

  const handleInputChange = (fieldId, value, type = 'text') => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: type === 'checkbox' ? value.target.checked : value
    }));

    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSuccessMessage('Form submitted successfully!');
      setFormData(initialFormState);
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
        return (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={formData[field.id]}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors[field.id] ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );

      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={field.id}
              name={field.id}
              checked={formData[field.id]}
              onChange={(e) => handleInputChange(field.id, e, 'checkbox')}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={field.id} className="ml-2 text-gray-700">
              {field.label}
            </label>
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options.map(option => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={`${field.id}-${option.value}`}
                  name={field.id}
                  value={option.value}
                  checked={formData[field.id] === option.value}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={`${field.id}-${option.value}`} className="ml-2 text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );

      case 'select':
        return (
          <select
            id={field.id}
            name={field.id}
            value={formData[field.id]}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors[field.id] ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'file':
        return (
          <input
            type="file"
            id={field.id}
            name={field.id}
            accept={field.validation?.accept}
            onChange={(e) => handleInputChange(field.id, e.target.files[0])}
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dynamic Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {formConfig.fields.map(field => (
          <div key={field.id} className="space-y-2">
            {field.type !== 'checkbox' && (
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
            )}
            {renderField(field)}
            {errors[field.id] && (
              <p className="text-sm text-red-500">{errors[field.id]}</p>
            )}
          </div>
        ))}

        {successMessage && (
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-green-800">{successMessage}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;