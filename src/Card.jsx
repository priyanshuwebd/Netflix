import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgsrc} alt="Netflix Series" className="card_img" />
      <div className="card_info">
        <span className="card_category">{props.title}</span>
        <h3 className="card_title">{props.sname}</h3>
        <a href={props.links} target="_blank" rel="noopener noreferrer">
          <button>WATCH NOW</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
