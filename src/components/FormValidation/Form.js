import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.username) {
      validationErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      validationErrors.username = "Username must be at least 3 characters long";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form data submitted:", formData);
      // Handle successful form submission (e.g., send data to server)
    }
  };

  return (
    <div className="mt-6 mb-6">
      <h1 className="text-3xl mb-2">Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="text-xl mb-2 flex">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-r-amber-300 rounded-md p-2"
            placeholder="Enter username"
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="mb-2">
          <label className="text-xl mb-2 flex">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-r-amber-300 rounded-md p-2"
            placeholder="Enter email address"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-2">
          <label className="text-xl mb-2 flex">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-r-amber-300 rounded-md p-2"
            placeholder="Enter password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="mt-2 mb-3 bg-green-300 w-[120px] p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
