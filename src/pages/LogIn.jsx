import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { TEInput } from "tw-elements-react";
import module from "../styles/Layout.module.css";

const LogIn = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      if (data) {
        sessionStorage.setItem("token", JSON.stringify(data));
        setToken(data);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={module.BoxCenterd}>
      <form onSubmit={handleSubmit} className={module.FormBox}>
        <div className="mb-4 w-full">
          <label>Email</label>
          <TEInput
            type="email"
            name="email"
            label="Email address"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label>Password</label>
          <TEInput
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
        >
          Log In
        </button>
      </form>
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default LogIn;
