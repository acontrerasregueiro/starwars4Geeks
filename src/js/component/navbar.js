import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Plgx5wqpvg1lLNymhachHGPDzJu607YTdg&usqp=CAU"
          style={{ width: "50%" }}
        ></img>
       
      </Link>

      <div className="ml-auto">
        <Link to="/detail">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
		<div className="dropdown">
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos  
          <span className="badge">0</span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};
