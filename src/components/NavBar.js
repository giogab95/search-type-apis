import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/">
        <div className="navbar-brand" href="#">
          Navbar
        </div>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/">
              <div className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/searchit">
              <div className="nav-link" href="#">
                SearchPage
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/try_search_it">
              <div className="nav-link" href="#">
                Try Search It
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Magic">
              <div className="nav-link" href="#">
                Magic
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Magic-Search">
              <div className="nav-link" href="#">
                Magic Search
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Film-Search">
              <div className="nav-link" href="#">
                Film Search
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Redux-Todolist">
              <div className="nav-link" href="#">
                Redux to do list
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
