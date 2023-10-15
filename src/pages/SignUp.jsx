import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { TEInput } from "tw-elements-react";
import module from "../styles/Layout.module.css";

const SignUp = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullname,
          },
        },
      });
      console.log("Check your email for verification link");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={module.BoxCenterd}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit} className={module.FormBox}>
        <div className="mb-4 w-full">
          <label htmlFor="fullname">Full Name</label>
          <TEInput
            required
            type="text"
            id="fullname"
            name="fullname"
            label="First name"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email">Email</label>
          <TEInput
            type="email"
            id="email"
            name="email"
            label="First name"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="password">Password</label>
          <TEInput
            type="password"
            id="password"
            name="password"
            label="Password"
            className="mb-6"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button 
          type="submit"
          className="block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
