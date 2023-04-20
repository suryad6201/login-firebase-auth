import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="md:container md:mx-auto">
      <p className="text-white text-center font-medium text-3xl pt-60 px-10 my-auto leading-10">
        Surya D - Breeze.ai Front End developer Assignment
      </p>
      <p className="text-white text-center font-normal text-3xl py-10 px-10 my-auto">
        <Link
          to="https://github.com/suryad6201"
          className="inline-block text-indigo-500 hover:text-indigo-400"
        >
          GitHub
        </Link>
        &nbsp;-&nbsp;
        <Link
          to="https://www.linkedin.com/in/suryadhanasekar/"
          className="inline-block text-indigo-500 hover:text-indigo-400"
        >
          LinkedIn
        </Link>
      </p>
    </div>
  );
};

export default Home;
