import React from "react";
import "./applyForm.css";
import ApplyFormBackground from "../applyForm/ApplyFormBackground";
import ApplyFormTextFields from "../applyForm/ApplyFormTextFields";

let ApplyForm = props => {
  const { grant_id } = props.match.params;

  if (!grant_id) {
    props.history.push("/search");
  }

  const stringUser_id = localStorage.getItem("id");
  const user_id = parseInt(stringUser_id);

  return (
    <div className="applyFormContainer">
      <div className="applyFormBackground">
        <ApplyFormBackground>
          <ApplyFormTextFields
            grant_id={grant_id}
            user_id={user_id}
            // grant_title={props.grant_title}
          />
        </ApplyFormBackground>
      </div>
    </div>
  );
};

export default ApplyForm;
