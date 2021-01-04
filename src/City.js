import React from "react";
import "./City.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function City(props) {
  return (
    <div class="card city__card">
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body card__body">
        <div className="general__details">
          <h5 class="card-title">{props.title}</h5>
          <h5 className="city__price">{props.price}</h5>
        </div>
        <p class="card-text city__description">{props.description}</p>
        <a href="#" class="btn btn-outline-danger">
          Not Interested
        </a>
      </div>
    </div>
  );
}

export default City;
