import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navli}>
        <NavLink
          to="Profile"
          activeClassName={s.activeLink}
          className={`${s.item} ${s.active}`}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.navli}>
        <NavLink
          to="Dialogs"
          activeClassName={s.activeLink}
          className={`${s.item} ${s.active}`}
        >
          Messages
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
