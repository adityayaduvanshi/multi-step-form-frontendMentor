import React from "react";

export default function Progress({ formStep }) {
  return (
    <div className="progress-container">
      <div className="step-container">
        <div className={formStep === 0 ? "step-number-active" : "step-number"}>
          1
        </div>
        <div className="step-text">
          <p>step 1</p>
          <h4>your info</h4>
        </div>
      </div>
      <div className="step-container">
        <div className={formStep === 1 ? "step-number-active" : "step-number"}>
          2
        </div>
        <div className="step-text">
          <p>step 2</p>
          <h4>select plan</h4>
        </div>
      </div>
      <div className="step-container">
        <div className={formStep === 2 ? "step-number-active" : "step-number"}>
          3
        </div>
        <div className="step-text">
          <p>step 3</p>
          <h4>add-ons</h4>
        </div>
      </div>
      <div className="step-container">
        <div className={formStep === 3 ? "step-number-active" : "step-number"}>
          4
        </div>
        <div className="step-text">
          <p>step 4</p>
          <h4>summary</h4>
        </div>
      </div>
    </div>
  );
}
