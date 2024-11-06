import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Form submission handler
  const onSubmit = data => {
    console.log(data); // Print form data in console
  };

  // For modal dialog test: open modal on component mount
 
  
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Modal Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Login</h3>
            
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label><br/>
              <input 
                type="email" 
                id="email"
                placeholder="Enter your email" 
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })} 
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <div className="mt-4 space-y-2">
              <label htmlFor="password">Password</label><br/>
              <input 
                type="password" 
                id="password"
                placeholder="Enter your password" 
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })} 
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white px-3 rounded-md hover:bg-pink-700 duration-300 py-2">
                Login
              </button>
              <p>Not Registered? {" "}
                <Link className="underline text-blue-500 cursor-pointer" to="/signup">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
