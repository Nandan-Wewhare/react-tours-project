import React from "react";
import "./City.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function City(props) {
  return (
    <div className="card city__card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body card__body">
        <div className="general__details">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="city__price">{props.price}</h5>
        </div>
        <p className="card-text city__description">{props.description}</p>
        <button
          onClick={() => props.remover(props.id)}
          className="btn btn-outline-danger"
          target="__blank"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default City;
