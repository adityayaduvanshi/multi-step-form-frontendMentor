import React from "react";
import FormikControl from "../formik/FormikControl";

export default function PersonalInfo({ formik }) {
  return (
    <div className="personal-info-container">
      <FormikControl
        control="name"
        type="text"
        name="name"
        label="Name"
        placeholder="e.g. Stephen King"
        formik={formik}
      />
      <FormikControl
        control="email"
        type="email"
        name="email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        formik={formik}
      />

      <FormikControl
        control="phone"
        type="tel"
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        formik={formik}
      />
    </div>
  );
}
