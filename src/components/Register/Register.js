import React, { useContext, useState } from "react";
import { authContext } from "../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { registerUser, errorMsg, setErrorMsg } = useContext(authContext);

  //Form Data
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  //Destructuring form data
  const { fullname, email, password } = formData;

  //On Change handler
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //On Submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !fullname) {
      setErrorMsg("Please fill all fields!");
      return;
    }
    registerUser(formData);
  };

  return (
    <>
      <section>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-medium leading-9 tracking-wide text-white">
              Register new account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={onSubmitHandler}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-normal leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={onInputChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-3 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-700 
                     placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Fullname */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-normal leading-6 text-white"
                >
                  Fullname
                </label>
                <div className="mt-2">
                  <input
                    onChange={onInputChange}
                    id="fullname"
                    name="fullname"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 p-3 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-700 
                     placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-normal leading-6 text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={onInputChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 p-3 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-700 
                     placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Submit */}
              <div>
                <p className="block text-sm text-center font-normal leading-2 pb-3 text-red-500">
                  {errorMsg}
                </p>
                <button className="flex w-full justify-center rounded-md bg-indigo-600  p-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Register
                </button>
                <p className="text-center mt-2">
                  <span className="text-xs font-medium text-white">
                    Already having a account?
                  </span>{" "}
                  <Link
                    to="/login"
                    className="inline-block text-xs font-medium text-indigo-500 hover:text-indigo-400  hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
