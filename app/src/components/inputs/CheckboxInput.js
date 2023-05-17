import React from "react";
import { Field } from "formik";

export default function CheckboxInput(props) {
  const { options, togglePlan, name, ...rest } = props;
  return (
    <div className="checkbox-body">
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div
                className={
                  field.value.includes(option.value)
                    ? "checkbox-input-container-checked"
                    : "checkbox-input-container"
                }
                key={option.key}
              >
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <div className="label-text-container">
                  <label htmlFor={option.value}>
                    <div>
                      {option.value}
                      <p>{option.description}</p>
                    </div>
                    <div className="price-container">
                      <span>
                        +$
                        {togglePlan === "monthly"
                          ? option.priceMo
                          : option.priceYr}
                        {togglePlan === "monthly" ? "/mo" : "/yr"}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            );
          });
        }}
      </Field>
    </div>
  );
}
