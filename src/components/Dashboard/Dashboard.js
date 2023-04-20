import React, { useContext } from "react";
import { authContext } from "../context/AuthContext/AuthContext";

const Dashboard = () => {
  const { userAuth } = useContext(authContext);
  return (
    <>
      {userAuth ? (
        <>
          <div className="md:container md:mx-auto">
            <p className="text-white text-center font-medium text-3xl py-20  my-auto">
              Hello World
            </p>
          </div>
        </>
      ) : (
        <div className="md:container md:mx-auto">
          <p className="text-red-500 text-center font-normal text-xl py-20  my-auto">
            User not found. Login with your User ID.
          </p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
