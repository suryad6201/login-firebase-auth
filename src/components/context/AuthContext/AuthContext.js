import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";

//Authcontext
export const authContext = createContext();

//PROVIDER
const AuthContextProvider = ({ children }) => {
  //error message
  const [errorMsg, setErrorMsg] = useState("");

  //Register
  const registerUser = (formData) => {
    //Destructuring form data
    const { fullname, email, password } = formData;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, { displayName: fullname });
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log("Register error", error);
        if (error.message === "Firebase: Error (auth/email-already-in-use).")
          setErrorMsg(
            "Email already in use. Please login or register to new user."
          );
      });
  };

  //Login
  const loginUser = (formData) => {
    //Destructuring form data
    const { email, password } = formData;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        localStorage.setItem("userAuth", JSON.stringify(auth.currentUser));
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).")
          setErrorMsg("User not found. Please check the email and password.");
      });
  };

  //logout
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("userAuth", JSON.stringify(auth.currentUser));
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log("Logout", error);
      });
  };

  const userAuth = JSON.parse(localStorage.getItem("userAuth"));

  return (
    <authContext.Provider
      value={{
        registerUser,
        loginUser,
        errorMsg,
        setErrorMsg,
        userAuth: userAuth?.uid,
        logoutUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
