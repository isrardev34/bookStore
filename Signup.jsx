import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Form submission handler
  const onSubmit = data => {
    console.log(data); // Print form data in console
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Modal Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="name">Name</label><br />
              <input 
                type="text" 
                id="name"
                placeholder="Enter your Full Name" 
                className="w-80 px-3 border rounded-md outline-none"
                {...register("name", { required: "Name is required" })}
              />
              <br />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>

            {/* Email Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label><br />
              <input 
                type="email" 
                id="email"
                placeholder="Enter your email" 
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password">Password</label><br />
              <input 
                type="password" 
                id="password"
                placeholder="Enter your password" 
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button 
                type="submit" 
                className="bg-pink-500 text-white px-3 rounded-md hover:bg-pink-700 duration-300 py-2"
              >
                Signup
              </button>
            </div>

            {/* Login Link */}
            <p className="text-xl mt-4">Have an account? {" "}
              <button 
                className="underline text-blue-500 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </p>

            {/* Login Component */}
            <Login />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
