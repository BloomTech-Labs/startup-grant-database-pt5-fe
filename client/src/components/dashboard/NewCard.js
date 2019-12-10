import React, { useState } from "react";
import { Card } from "@material-ui/core";
import Moment from 'react-moment';

const NewCard = props => {
  return (
    <Card>
      <h3>{props.grant.name}</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <p>Due: {props.grant.due_date}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p>Amount: <Moment date ={props.grant.grant_amount} />
          </p>
        </div>
      </div>
    </Card>
  );
};

export default NewCard;
