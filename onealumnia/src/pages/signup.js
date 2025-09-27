import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRegistered } from "react-icons/fa";
// import { Link } from "react-router-dom";

const register = () => {
  const roles = [
    {
      role: "Student",
      title: "Build skills for today, tomorrow, and beyond.",
      subTitle: "Educate to future-proof your career",
    },
    {
      role: "Instructor",
      title: "Discover your passion, by joining us,",
      subTitle: "Be unstoppable",
    },
    {
      role: "Admin",
      title: "Register as an Admin",
      subTitle: "",
    },
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  return (
    <div>
      <div className="w-[95%] bg-gray-900 p-2 rounded-xl m-auto tablet:h-[770px] mt-10 flex flex-col md:flex-row-reverse items-center justify-between max-w-[1100px] mb-10">
        {/* Image Section */}
        <div className="w-full flex justify-center md:w-1/2 p-5">
          <img
            src="https://res.cloudinary.com/dort5nnis/image/upload/v1741922098/erasebg-transformed_4_sufn8y.png"
            className="rounded-2xl w-[90%] max-w-[400px] h-auto object-contain"
            alt="Register"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[70%] min-w-0 p-5 flex flex-col gap-3 text-center md:text-left">
          <h1 className="select-none text-[30px] font-bold text-white">
            Join the million learning to code with EduNest for free
          </h1>
          <p className="select-none text-gray-400 text-[18px] mt-2 md:w-[80%] h-[100px] tablet:h-[52px]">
            {currentRole.title}{" "}
            <span className="text-dark_red italic text-[17px]">
              {currentRole.subTitle}
            </span>
          </p>

          {/* Role Toggle Switch */}
          <div className="flex items-center justify-center md:justify-start mt-5">
            <div className="relative flex items-center bg-gray-800 w-[240px] md:w-[300px] h-[43px] rounded-full p-1">
              <div
                className={`absolute z-[1] w-1/3 h-[90%] bg-dark_red rounded-full transition-all duration-300 ${
                  currentRole.role === "Admin"
                    ? "left-1"
                    : currentRole.role === "Student"
                    ? "left-[33%]"
                    : "left-[66%]"
                }`}
              ></div>

              {roles.map((role, idx) => (
                <div
                  key={role.role}
                  className={`w-1/3 text-center cursor-pointer z-[1] text-sm md:text-base ${
                    currentRole.role === role.role
                      ? "text-white font-bold"
                      : "text-gray-400"
                  }`}
                  onClick={() => setCurrentRole(roles[idx])}
                >
                  {role.role}
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <form className="flex flex-col gap-3 mt-4 text-start w-full md:max-w-[510px]">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="select-none text-gray-300 font-medium mb-2"
                >
                  First Name <span className="text-dark_red ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  id="firstName"
                  name="firstName"
                  className="p-3 w-full border text-gray-300 border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-700"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="select-none text-gray-300 font-medium mb-2"
                >
                  Last Name <span className="text-dark_red ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  id="lastName"
                  name="lastName"
                  className="p-3 w-full border text-gray-300 border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-700"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="select-none text-gray-300 font-medium mb-2"
              >
                Email Address <span className="text-dark_red ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-3 border text-gray-300 border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-700"
                autoComplete="off"
              />
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="select-none text-gray-300 font-medium mb-2"
                >
                  Create Password <span className="text-dark_red ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Enter password"
                    className="p-3 w-full border text-gray-300 border-gray-600 rounded-lg bg-transparent pr-10 focus:outline-none focus:ring-1 focus:ring-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="select-none text-gray-300 font-medium mb-2"
                >
                  Confirm Password <span className="text-dark_red ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className="p-3 w-full border text-gray-300 border-gray-600 rounded-lg bg-transparent pr-10 focus:outline-none focus:ring-1 focus:ring-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-5 flex justify-center items-center py-2 px-4 bg-dark_red hover:bg-dark_red/80 cursor-pointer text-white font-medium rounded-md transition duration-200"
            >
              <FaRegistered className="mr-2" />
              Register
            </button>

            {/* Login Link */}
            <p className="text-gray-400 mt-1 flex justify-end gap-2">
              Already have an account?{" "}
              <span className="text-dark_red hover:text-red-500">
                Login here
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
