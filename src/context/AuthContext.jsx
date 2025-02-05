/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  //retorna uma promise
  function googleSignIn() {
    const provider = new GoogleAuthProvider(); // Cria uma instância do provedor Google
    //signInWithPopup(auth, provider)// Abre um pop-up para login com Google
    signInWithPopup(auth, provider); // this is the better option when sealing with mobile
  }

  function logOut() {
    signOut(auth);
  }

  //once the user logs in it gets the user data to the state
  //we control the flow of the website based on if there is user info available
  //then we can go from login page to the home page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        console.log('User ', currentUser)
    })
    return () => {
        //importante
        unsubscribe();
    }
  }
  ,[]);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
