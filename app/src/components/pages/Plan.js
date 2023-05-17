import React from "react";
import FormikControl from "../formik/FormikControl";

export default function Plan(props) {
  const { planOptionsMo, planOptionsYr, togglePlan, setTogglePlan } = props;
  return (
    <div className="plan-container">
      <FormikControl
        togglePlan={togglePlan}
        control="radio"
        name="planOption"
        options={togglePlan === "yearly" ? planOptionsYr : planOptionsMo}
      />
      <div className="toggle-container">
        <button
          className="monthly-btn"
          style={
            togglePlan === "monthly"
              ? { color: "hsl(213, 96%, 18%)" }
              : { color: "hsl(231, 11%, 63%)" }
          }
          type="button"
          onClick={() => setTogglePlan("monthly")}
        >
          Monthly
        </button>

        <label className="switch">
          <input
            readOnly
            checked={togglePlan === "yearly" ? true : false}
            type="checkbox"
            onClick={
              togglePlan === "monthly"
                ? () => setTogglePlan("yearly")
                : () => setTogglePlan("monthly")
            }
          />
          <span className="slider round"></span>
        </label>

        <button
          className="yearly-btn"
          style={
            togglePlan === "yearly"
              ? { color: "hsl(213, 96%, 18%)" }
              : { color: "hsl(231, 11%, 63%)" }
          }
          type="button"
          onClick={() => setTogglePlan("yearly")}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}
