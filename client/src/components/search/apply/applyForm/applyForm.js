import React from "react";
import "./applyForm.css";
import ApplyFormBackground from "../applyForm/ApplyFormBackground";
import ApplyFormTextFields from "../applyForm/ApplyFormTextFields";

let ApplyForm = () => {
  return (
    <div className="applyFormContainer">
      <div className="applyFormBackground">
        <ApplyFormBackground>
          <ApplyFormTextFields />
        </ApplyFormBackground>
        <ApplyFormTextFields />
      </div>
    </div>
  );
};

export default ApplyForm;
