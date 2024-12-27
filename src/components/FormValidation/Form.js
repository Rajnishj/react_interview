import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Form = () => {
  const initialData = {
    username: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate()
  const {login} = useAuth()
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let validateErrors = {};
    if (!formData.username) {
      validateErrors.username = "Please enter user name.";
    } else if (formData.username.length < 6) {
      validateErrors.username = "Username must be more than 6 character";
    }

    if (!formData.email) {
      validateErrors.email = "Please enter Email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validateErrors.email = "Please Enter valid email address";
    }

    if (!formData.password) {
      validateErrors.password = "Please enter password";
    } else if (formData.password.length < 6) {
      validateErrors.password = "password must be of 6 character.";
    }
    return validateErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsData = validate();
    console.log(errorsData);
    if (Object.keys(errorsData).length > 0) {
      setErrors(errorsData);
    } else {
      console.log("Form Submitted successfully!!!!");
      login()
      navigate("/dashboard")
      setFormData(initialData);
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
        </div>
        {errors.username && <p className="text-red-800">{errors.username}</p>}
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
        </div>
        {errors.email && <p className="text-red-800">{errors.email}</p>}
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
        </div>
        {errors.password && <p className="text-red-800">{errors.password}</p>}
        <button
          type="submit"
          className="mt-2 mb-3 bg-green-300 w-[120px] p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
