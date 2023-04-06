import React from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueInputBlur: nameInputBlur,
    valueInputChange: nameInputChange,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueInputBlur: emailInputBlur,
    valueInputChange: emailInputChange,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    resetName();
    resetEmail();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChange}
          onBlur={nameInputBlur}
          value={nameValue}
        />
        {nameHasError && <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChange}
          onBlur={emailInputBlur}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Email must include @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
