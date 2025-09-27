import React, { useState, useCallback, useMemo } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const login = () => {
  const roles = useMemo(
    () => [
      {
        role: "Admin",
        title: "Login as an Admin",
        subTitle: "",
      },
      {
        role: "Student",
        title: "Build skills for today, tomorrow, and beyond.",
        subTitle: "Education to future-proof your career.",
      },
      {
        role: "Instructor",
        title: "Discover your passion",
        subTitle: "Be unstoppable",
      },
    ],
    []
  );

  const [currentRole, setCurrentRole] = useState(roles[1]); // Default Student
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [bodyData, setBodyData] = useState({
    email: "",
    password: "",
    accountType: "Student",
  });

  const updateRole = useCallback(
    (index) => {
      setCurrentRole(roles[index]);
      setBodyData((prev) => ({ ...prev, accountType: roles[index].role }));
    },
    [roles]
  );

  const updateUserData = useCallback((event) => {
    setBodyData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const togglePasswordVisibility = useCallback((e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  }, []);

  return (
    <div className="w-[95%] max-w-[1100px] mx-auto mt-10 mb-10">
      <div className="bg-gray-900 p-2 rounded-xl tablet:h-[690px] flex flex-col md:flex-row-reverse items-center justify-between">
        {/* Image Section */}
        <div className="w-full tablet2:w-1/2 flex justify-center p-5 relative min-h-[250px]">
          <img
            src="https://res.cloudinary.com/dort5nnis/image/upload/v1741914599/erasebg-transformed_2_hetfta.png"
            alt="Secure Login"
            className="rounded-2xl w-[90%] max-w-[400px] h-auto object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-5 flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-[30px] tablet:text-[40px] font-bold text-white">
            Welcome back
          </h1>
          <p className="text-gray-400 text-[18px] mt-2 md:w-[80%] h-[100px] tablet:h-[60px]">
            {currentRole.title}{" "}
            <span className="text-dark_red italic text-[17px]">
              {currentRole.subTitle}
            </span>
          </p>

          {/* Role Toggle */}
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
              {roles.map((role, index) => (
                <div
                  key={role.role}
                  className={`w-1/3 text-center cursor-pointer z-[1] text-sm md:text-base ${
                    currentRole.role === role.role
                      ? "text-white font-bold"
                      : "text-gray-400"
                  }`}
                  onClick={() => updateRole(index)}
                >
                  {role.role}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-3 mt-4 text-start w-full md:max-w-[400px]">
            <label htmlFor="email" className="text-gray-300 font-medium">
              Email Address<span className="text-dark_red ml-1">*</span>
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 border text-gray-300 border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-700"
              value={bodyData.email}
              onChange={updateUserData}
              required
            />

            <label htmlFor="password" className="text-gray-300 font-medium">
              Password<span className="text-dark_red ml-1">*</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="p-3 border text-gray-300 border-gray-600 rounded-lg bg-transparent w-full pr-10 focus:outline-none focus:ring-1 focus:ring-gray-700"
                value={bodyData.password}
                onChange={updateUserData}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <p className="text-gray-300 hover:text-dark_red text-[13px] text-end cursor-pointer">
              Forgot password?
            </p>

            <button
              type="button"
              className="w-full flex justify-center items-center py-2 px-4 bg-dark_red hover:bg-dark_red/80 text-white font-medium rounded-md transition duration-200"
            >
              <IoMdLogIn className="mr-2" />
              Sign In
            </button>

            <p className="text-end mt-1 text-sm md:text-base text-gray-300 flex gap-1 justify-end">
              <span>New user?</span>
              <span className="text-dark_red font-semibold hover:text-dark_red/80 cursor-pointer">
                Register now
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(login);
