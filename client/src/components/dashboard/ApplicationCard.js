import React from "react";
import { Card } from "@material-ui/core";
import Moment from "moment";

const ApplicationCard = props => {
  return (
    <Card>
      <h3>{props.application.grant_title}</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <p>
            Due :{" "}
            <Moment format="YYYY/MM/DD">{props.application.due_date}</Moment>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p>Amount: {props.application.grant_amount}</p>
          <p>Status: {props.application.application_status}</p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationCard;
