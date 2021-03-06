import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card card-block mx-2 col-3" key={props.name}>
      <img
        src="..."
        className="card-img-top"
        alt="..."
        style={{ height: "200px" }}
      ></img>
      <div className="float-start">
        <div className="card-body">
          <h1> {props.i}</h1>
          <h2> {props.name}</h2>
          <h4> {props.gender}</h4>
          <h4> {props.mass}</h4>
          <Link to={"/personaje/" + props.i}>
            <button
              type="button"
              className="ml-10 btn btn-outline-primary col-8"
            >
              Learn more
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-outline-warning float-end"
            onClick={(e) => {
              alert(props.name);
            }}
          >
            {" "}
            <i className="fa fa-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};
