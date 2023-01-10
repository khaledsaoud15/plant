import React from "react";
import { cards } from "../../fake";
import "./card.css";

const Cards = () => {
  return (
    <div className="card-cntr">
      {cards.map((c) => {
        return (
          <div className="card-item" style={{ background: c.back }}>
            <div className="icon">
              <img src={c.icon} alt="" />
            </div>
            <div className="card-content-item">
              <h1>{c.title}</h1>
              <p>{c.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

export const s = 5;
