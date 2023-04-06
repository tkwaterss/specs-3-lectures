import useFormInput from "./hooks/use-form-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: firstNameError,
    isValid: firstNameIsValid,
    valueInputChange: firstNameChange,
    valueInputBlur: firstNameBlur,
    reset: firstNameReset,
  } = useFormInput(value => value.trim() !== "");

  const {
    value: lastName,
    hasError: lastNameError,
    isValid: lastNameIsValid,
    valueInputChange: lastNameChange,
    valueInputBlur: lastNameBlur,
    reset: lastNameReset,
  } = useFormInput(value => value.trim() !== "");

  const {
    value: email,
    hasError: emailError,
    isValid: emailIsValid,
    valueInputChange: emailChange,
    valueInputBlur: emailBlur,
    reset: emailReset,
  } = useFormInput(value => value.includes("@"));

  let formIsValid = false;

  if(firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if(!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClass = !firstNameError ? 'form-control' : 'form-control invalid'
  const lastNameClass = !lastNameError ? 'form-control' : 'form-control invalid'
  const emailClass = !emailError ? 'form-control' : 'form-control invalid'


  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameChange}
            onBlur={firstNameBlur}
          />
          {firstNameError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChange}
            onBlur={lastNameBlur}
          />
          {lastNameError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChange}
          onBlur={emailBlur}
        />
        {emailError && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
