import React, { useState } from "react";
import { Card } from "@material-ui/core";

const SavedCard = props => {
  return (
    <Card>
      <h3>{props.grant.name}</h3>
      <div>
        <label>Due:</label>
        <p>{props.grant.duedate}</p>
      </div>
      <div>
        <label>Amount:</label>
        <p>${props.grant.amount}</p>
      </div>
    </Card>
  );
};

export default SavedCard;
