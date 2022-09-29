import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
let style = {
  one: {
    fontWeight: "bold",
    fontFamily: "fantasy",
    textDecoration: "none",
    fontSize: "30px",
    color: "black",
  },
  two: {
    fontFamily: "fantasy",
    textDecoration: "none",
    fontSize: "18px",
    color: "black",
  },
  three: {
    fontFamily: "fantasy",
    textDecoration: "none",
    fontSize: "18px",
    color: "black",
    borderRadius: "1px solid black",
  },
};
export default function Navbar() {
  let state = useSelector((store) => store.cart);
  return (
    <Box style={{ position: "fixed", top: "0px", zIndex: 2, width: "100%" }}>
      <nav className="navbar navbar-expand-lg bg-white py-2 shadow-sm">
        <div className="container">
          {/* <a className="navbar-brand fw-bold fs-4" href="#">
            KP Collections
          </a> */}
          <Link style={style.one} to={"/"}>
            KP Collections
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to={"/"} style={style.two}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/product"} style={style.two}>
                  Proudcts
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} style={style.two}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} style={style.two}>
                  Contacts
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to={"/login"} style={style.three}>
                <i className="fa fa-sign-in me-1"> Login</i>
              </Link>
              <Link to={"/register"} style={style.three}>
                <i className="fa fa-sign-in me-1"> Register</i>
              </Link>
              <Link to={"/cart"} style={style.three}>
                <i className="fa fa-sign-in me-1"> Cart ({state.length})</i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Box>
  );
}
