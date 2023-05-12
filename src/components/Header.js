import React from "react";
import logoImage from "../images/Headerlogo-min.svg";
import { Link, useMatch } from "react-router-dom";

const Header = ({ handleSignOut, email }) => {
  const [open, setOpen] = React.useState(false);

  const onSignOut = () => {
    handleSignOut();
  };
  return (
    <header className={`header `}>
      <img src={logoImage} alt="Around U.S. logo" className="header__logo" />
      {useMatch("/signin") && (
        <Link to="/signup" className="header__link">
          Regístrate
        </Link>
      )}
      {useMatch("/signup") && (
        <Link to="/signin" className="header__link">
          Inicia sesión
        </Link>
      )}
      {useMatch("/") && (
        <>
          <div
            className={`header__user-info ${
              open && "header__user-info_opened"
            }`}
          >
            <span className="header__email">{email}</span>
            <button className="header__logout" onClick={onSignOut}>
              Cerrar sesión
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
