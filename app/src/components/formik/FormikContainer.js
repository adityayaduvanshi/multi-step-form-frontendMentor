import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PersonalInfo from "../pages/PersonalInfo";
import Plan from "../pages/Plan";
import AddOns from "../pages/AddOns";
import LastStep from "../pages/LastStep";
import Complete from "../pages/Complete";
import Progress from "../Progress";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ReactComponent as Loader } from "../../assets/images/icon-loading.svg";

export default function FormikContainer() {
  const [formStep, setFormStep] = useState(0);
  const [togglePlan, setTogglePlan] = useState("monthly");

  const navigate = useNavigate();

  // FORM DATA

  const formTitles = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];

  const formSubHeadings = [
    "Please provide your name, email adress and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
  ];

  const arcadeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" filrule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
        <path
          fill="#FFF"
          filrule="nonzero"
          d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
        />
      </g>
    </svg>
  );
  const advancedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" filrule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#F9818E" />
        <path
          fill="#FFF"
          filrule="nonzero"
          d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
        />
      </g>
    </svg>
  );
  const proIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" filrule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#483EFF" />
        <path
          fill="#FFF"
          filrule="nonzero"
          d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
        />
      </g>
    </svg>
  );

  const planOptionsMo = [
    { key: "Arcade", value: "Arcade (Monthly)", price: 9, icon: arcadeIcon },
    {
      key: "Advanced",
      value: "Advanced (Monthly)",
      price: 12,
      icon: advancedIcon,
    },
    { key: "Pro", value: "Pro (Monthly)", price: 15, icon: proIcon },
  ];

  const planOptionsYr = [
    { key: "Arcade", value: "Arcade (Yearly)", price: 90, icon: arcadeIcon },
    {
      key: "Advanced",
      value: "Advanced (Yearly)",
      price: 120,
      icon: advancedIcon,
    },
    { key: "Pro", value: "Pro (Yearly)", price: 150, icon: proIcon },
  ];

  const extraOptions = [
    {
      key: "online-service",
      value: "Online Service",
      description: "Access to multiplayer games",
      priceMo: 1,
      priceYr: 10,
    },
    {
      key: "larger-storage",
      value: "Larger Storage",
      description: "Extra 1TB of cloud save",
      priceMo: 2,
      priceYr: 20,
    },
    {
      key: "customizable-profile",
      value: "Customizable Profile",
      description: "Custom theme on your profile",
      priceMo: 2,
      priceYr: 20,
    },
  ];

  // FORM FUNCTIONALITIES

  function pageDisplay(formik) {
    switch (formStep) {
      case 0:
        return <PersonalInfo formik={formik} />;
      case 1:
        return (
          <Plan
            planOptionsMo={planOptionsMo}
            planOptionsYr={planOptionsYr}
            togglePlan={togglePlan}
            setTogglePlan={setTogglePlan}
          />
        );
      case 2:
        return <AddOns extraOptions={extraOptions} togglePlan={togglePlan} />;
      case 3:
        return (
          <LastStep
            formik={formik}
            togglePlan={togglePlan}
            setFormStep={setFormStep}
          />
        );
      default:
        return null;
    }
  }

  function handleNextStep(formik) {
    const { values, isValid, validateField, setTouched, errors } = formik;
    if ((formStep === 0 && !values.name, !values.email, !values.phone)) {
      validateField("name", "email", "phone");
      setTouched({
        name: true,
        email: true,
        phone: true,
      });
    } else if (
      formStep === 0 &&
      !errors.name &&
      !errors.email &&
      !errors.phone
    ) {
      setFormStep(1);
    }
    if (formStep === 1 && !values.planOption) {
      setTouched({
        planOption: true,
      });
    } else if (formStep === 1 && isValid) {
      setFormStep(2);
    }
    if (formStep === 2) {
      setFormStep(3);
    }
    if (formStep === 3) {
      setFormStep(4);
    }
  }

  // FORMIK DATA

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    planOption: "",
    addOnOptions: [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .required("This field is required"),
    phone: Yup.string()
      .required("This field is required")
      .matches(/([0-9])/, "Must be a phone number"),
    planOption: Yup.string()
      .required("Please select a plan")
      .oneOf([
        "Arcade (Monthly)",
        "Advanced (Monthly)",
        "Pro (Monthly)",
        "Arcade (Yearly)",
        "Advanced (Yearly)",
        "Pro (Yearly)",
      ]),
  });

  async function onSubmit(values) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitted the following values:", values);
    navigate("/complete");
  }

  return (
    <>
      <Progress formStep={formStep} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="form-container">
              <div className="form-title">
                <h1>{formTitles[formStep]}</h1>
                <p>{formSubHeadings[formStep]}</p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <Form className="form-body">
                    {pageDisplay(formik)}

                    <div className="form-buttons">
                      <button
                        className={
                          formStep === 0
                            ? "button-go-back-off"
                            : "button-go-back"
                        }
                        type="button"
                        disabled={formStep === 0 || formik.isSubmitting}
                        onClick={() => {
                          setFormStep((currentPage) => currentPage - 1);
                        }}
                      >
                        Go Back
                      </button>
                      {formStep < 3 && (
                        <button
                          className="button-next"
                          type="button"
                          onClick={() => {
                            handleNextStep(formik);
                          }}
                        >
                          Next Step
                        </button>
                      )}
                      {formStep === 3 && (
                        <button
                          className="button-submit"
                          type="submit"
                          disabled={formik.isSubmitting}
                          onClick={() => {
                            onSubmit();
                          }}
                        >
                          {formik.isSubmitting ? (
                            <Loader className="loading-spinner-button" />
                          ) : (
                            "Confirm"
                          )}
                        </button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          }
        />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </>
  );
}
