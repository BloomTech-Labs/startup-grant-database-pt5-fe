import React, { useState } from "react";
import { Card } from "@material-ui/core";
import moment from 'moment';

const NewCard = props => {
  return (
    <Card>
      <h3>{props.grant.name}</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <p>{moment(props.grant.due_date.format())}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p>Amount: {props.grant.grant_amount}
          </p>
        </div>
      </div>
    </Card>
  );
};
// moment(post.date).format()
export default NewCard;
