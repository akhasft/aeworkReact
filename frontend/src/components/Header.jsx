import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <header className="header_area">
        <div className="main-menu">
          <Navbar
            expand="lg"
            collapseOnSelect
            className="navbar navbar-expand-lg navbar-light"
          >
            <Navbar.Toggle
              className="navbar-toggler"
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="collapse navbar-collapse"
            >
              <div className="mr-auto"></div>
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    about
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact Me
                  </a>
                </li>

                {userInfo && userInfo.isAdmin ? (
                  <NavDropdown title="Admin DropDown" id="AdminName">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users List</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/updatehomepage">
                      <NavDropdown.Item>Update Home Page</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <></>
                )}
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Header;
