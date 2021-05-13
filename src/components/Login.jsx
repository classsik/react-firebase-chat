import React, { useContext } from "react";
import { Context } from "../index";
import firebase from "firebase";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <div className="loginpage">
      <div className="loginbox">
        <button className="button" onClick={login}>
          Войти с помощью Google
        </button>
      </div>
    </div>
  );
};

export default Login;
