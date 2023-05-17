import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../formik/TextError";

export default function NameInput(props) {
  const { label, name, formik, ...rest } = props;
  return (
    <div className="text-input-container">
      <div className="label-container">
        <label htmlFor={name}>{label}</label>
        <ErrorMessage name={name} component={TextError} />
      </div>
      <Field
        id={name}
        name={name}
        style={
          formik.errors.name &&
          formik.touched.name && { border: "1px solid hsl(354, 84%, 57%)" }
        }
        {...rest}
      />
    </div>
  );
}
