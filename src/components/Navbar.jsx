import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <h2 className="logo">Chat</h2>
      {user ? (
        <button onClick={() => auth.signOut()} className="button">
          Выйти
        </button>
      ) : (
        <NavLink to={LOGIN_ROUTE}>
          <button className="button">Логин</button>
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
