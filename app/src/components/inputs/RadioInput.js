import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../formik/TextError";

export default function RadioInput(props) {
  const { togglePlan, name, options, ...rest } = props;
  return (
    <>
      <div className="radio-body">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div
                  className={
                    field.value === option.value
                      ? "radio-input-container-selected"
                      : "radio-input-container"
                  }
                  key={option.key}
                >
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <div className="icon-text-container">
                    <div className="icon">{option.icon}</div>
                    <div className="text">
                      <label htmlFor={option.value}>{option.key}</label>
                      <p className="price">
                        ${option.price}
                        {togglePlan === "monthly" ? "/mo" : "/yr"}
                      </p>
                      <p className="discount">
                        {togglePlan === "monthly" ? null : "2 months free"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <div>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </>
  );
}
