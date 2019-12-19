import React from "react";
import ApplyButton from "../search/apply/applyButton";

const ResultCard = props => {
  const dueDate = props.resultcard.due_date.slice(0, 10);
  return (
    <div className="card-holder">
      <div className="top">
        <h3 className="title">{props.resultcard.grant_title}</h3>
        <div className="apply-button">
          <ApplyButton grant_id={props.resultcard.id} />
        </div>
      </div>
      <p className="description">{props.resultcard.grant_description}</p>
      <div className="due-amount">
        <label className="due-label">Due:</label>
        <p className="due">{dueDate}</p>
        <label className="amount-label">Amount:</label>
        <p className="amount">${props.resultcard.grant_amount}</p>
      </div>

      <div className="elegibility">
        <label className="elegibility-label">Elegibility:</label>
        {props.resultcard.elegibilities.map((elegibility, i) => {
          return (
            <p key={i} className="elegibility-tags">
              <span className="span-class">{elegibility}</span>
            </p>
          );
        })}
      </div>
      <div className="categories">
        <label className="category-label">Categories: </label>
        <div className="categories-container">
          {props.resultcard.categories.map((categories, i) => {
            return (
              <div className="grant-categories">
                <p key={i} className="category-tags">
                  <span className="span-class">{categories}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
