import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { TEInput, TERipple } from "tw-elements-react";

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
    <div  className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <form onSubmit={handleSubmit}>
        <TEInput
          type="email"
          name="email"
          label="Email address"
          onChange={handleChange}
        />
        <TEInput
          type="password"
          name="password"
          label="Password"
          className="mt-12 mb-6"
          placeholder="Password"
          onChange={handleChange}
        />
        <TERipple rippleColor="light">
          <button
            type="submit"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Log In
          </button>
        </TERipple>
      </form>
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default LogIn;
