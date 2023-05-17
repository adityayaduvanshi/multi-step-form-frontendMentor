import React from "react";

export default function LastStep(props) {
  const { formik, togglePlan, setFormStep } = props;

  let displayPlan;

  switch (formik.values.planOption) {
    case "Arcade (Monthly)":
      displayPlan = { displayValue: "Arcade (Monthly)", displayPrice: 9 };
      break;
    case "Advanced (Monthly)":
      displayPlan = { displayValue: "Advanced (Monthly)", displayPrice: 12 };
      break;
    case "Pro (Monthly)":
      displayPlan = { displayValue: "Pro (Monthly)", displayPrice: 15 };
      break;
    case "Arcade (Yearly)":
      displayPlan = { displayValue: "Arcade (Yearly)", displayPrice: 90 };
      break;
    case "Advanced (Yearly)":
      displayPlan = { displayValue: "Advanced (Yearly)", displayPrice: 120 };
      break;
    case "Pro (Yearly)":
      displayPlan = { displayValue: "Pro (Yearly)", displayPrice: 150 };
      break;
    default:
      return null;
  }

  let displayAddons = [
    ...formik.values.addOnOptions.map((addon) => {
      switch (addon) {
        case "Online Service":
          return {
            displayValue: "Online service",
            displayPrice: togglePlan === "monthly" ? 1 : 10,
          };
        case "Larger Storage":
          return {
            displayValue: "Larger storage",
            displayPrice: togglePlan === "monthly" ? 2 : 20,
          };
        case "Customizable Profile":
          return {
            displayValue: "Customizable profile",
            displayPrice: togglePlan === "monthly" ? 2 : 20,
          };
        default:
          return null;
      }
    }),
  ];

  let displayTotal = parseInt(displayPlan.displayPrice);
  displayAddons.forEach((addon) => {
    displayTotal += parseInt(addon.displayPrice);
  });

  return (
    <div className="last-step-container">
      <div className="chosen-plan-addon-body">
        <div className="chosen-plan-container">
          <div className="chosen-plan">
            <h3>{displayPlan.displayValue}</h3>
            <button onClick={() => setFormStep(1)}>Change</button>
          </div>
          <h3>
            ${displayPlan.displayPrice}
            {togglePlan === "monthly" ? "/mo" : "/yr"}
          </h3>
        </div>

        <hr />

        <div className="chosen-addons-container">
          {displayAddons.map((addon, i) => {
            return (
              <div key={i} className="chosen-addon">
                <p>{addon.displayValue}</p>
                <h4>
                  +${addon.displayPrice}
                  {togglePlan === "monthly" ? "/mo" : "/yr"}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total-container">
        <p>
          {togglePlan === "monthly" ? "Total (per month)" : "Total (per year)"}
        </p>
        <h2>
          ${displayTotal}
          {togglePlan === "monthly" ? "/mo" : "/yr"}
        </h2>
      </div>
    </div>
  );
}
