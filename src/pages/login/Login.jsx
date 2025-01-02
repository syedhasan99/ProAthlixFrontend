import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex items-center justify-center p-4 text-white">
      <div className="flex flex-col gap-6 w-full items-center justify-center">
        <div className="w-36 h-36">
          <img
            src="/images/AthlixLogo.png"
            className="w-full object-cover"
            alt="Athlix Logo"
          />
        </div>
        <form className="flex flex-col gap-3 w-full">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full bg-transparent border-[1px] border-zinc-600 rounded-md px-3 py-2 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-[1px] border-zinc-600 rounded-md px-3 py-2 outline-none"
          />
          <a
            href="#"
            className="text-lime-300 text-sm text-right hover:underline"
          >
            Forgot Password?
          </a>
          <button
            type="submit"
            className="px-3 py-2 rounded-md bg-lime-300 text-black font-semibold"
            onClick={() => {
              navigate("/main/feed");
            }}
          >
            Login
          </button>
        </form>
        <div className="flex items-center gap-2 w-1/2 mx-auto">
          <hr className="w-full border-zinc-600" />
          <p className="">or</p>
          <hr className="w-full border-zinc-600" />
        </div>
        <div className="flex gap-5">
          <div className="img w-16 h-16 border-[1px] border-zinc-600 rounded-full p-2 hover:bg-zinc-300">
            <img
              className="w-full object-cover"
              src="images/fb-icon.png"
              alt="fb"
            />
          </div>
          <div className="img w-16 h-16 border-[1px] border-zinc-600 rounded-full p-2 hover:bg-zinc-300">
            <img
              src="images/google-icon.png"
              className="w-full object-cover"
              alt="google"
            />
          </div>
        </div>
        <p className="text-sm text-center text-zinc-400">
          Don't have an account?
          <a href="/signup" className="ml-1 text-lime-300 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
