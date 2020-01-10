import React from "react";

const ApplicationCard = props => {
  console.log(props);
  return (
    <div className="card-holder">
      <div className="top">
        <h3 className="title">{props.resultData.id}</h3>
        <div className="apply-button"></div>
      </div>
      <p className="description">Desctip</p>
      <div className="due-amount">
        <label className="due-label">Due:</label>
        <p className="due">due due</p>
        <label className="amount-label">Amount:</label>
        <p className="amount">amout</p>
      </div>

      <div className="elegibility">
        <label className="elegibility-label">Elegibility:</label>
      </div>
      <div className="categories">
        <label className="category-label">Categories: </label>
      </div>
      <button>Accept</button>
      <button>Reject</button>
    </div>
  );
};

export default ApplicationCard;
