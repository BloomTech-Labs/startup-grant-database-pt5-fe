import React from "react";
// import { Link } from "react-router-dom";

const ResultCard = props => {
  console.log(props);
  return (
    <div className="card-holder">
      <h3 className="title">{props.resultcard.title}</h3>

      <p className="description">{props.resultcard.description}</p>
      <div className="due-amount">
        <label className="due-label">Due:</label>
        <p className="due">{props.resultcard.due}</p>
        <label className="amount-label">Amount:</label>
        <p className="amount"> {props.resultcard.amount}</p>
      </div>

      <div className="elegibility">
        <label className="elegibility-label">Elegibility:</label>
        {props.resultcard.elegibility.map((elegibility, i) => {
          return (
            <p key={i} className="elegibility-tags">
              <span>{elegibility}</span>
            </p>
          );
        })}
      </div>
      <div className="categories">
        <label className="category-label">Categories: </label>
        {props.resultcard.categories.map((categories, i) => {
          return (
            <p key={i} className="category-tags">
              <span>{categories}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ResultCard;
