import React from "react";
import { Card } from "@material-ui/core";

const ApplicationReceivedCard = props => {
  return (
    <Card>
      <h3>{props.application.grant_name}</h3>
      <div>
        <div>
          <p>
            Applicant: {props.application.first_name}{" "}
            {props.application.last_name}
          </p>
        </div>
        <div>
          <p>Status: {props.application.status}</p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationReceivedCard;
