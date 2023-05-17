import React from "react";
import FormikControl from "../formik/FormikControl";

export default function AddOns(props) {
  const { extraOptions, togglePlan } = props;
  return (
    <div className="addons-container">
      <FormikControl
        control="checkbox"
        name="addOnOptions"
        options={extraOptions}
        togglePlan={togglePlan}
      />
    </div>
  );
}
