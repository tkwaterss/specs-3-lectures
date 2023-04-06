import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const nameRef = useRef();

  const nameInputChange = (event) => {
    setName(event.target.value);
    setIsValid(true);
  };

  const nameInputBlur = (event) => {
    setTouched(true);
    if (name.trim() === "") {
      setIsValid(false);
      return;
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setTouched(true);

    if (name.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    const enteredName = nameRef.current.value;
    console.log(name);
    console.log(enteredName);
    setName("");
  };

  const inputInvalid = !isValid && touched

  const nameInputClasses = inputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={nameInputChange}
          onBlur={nameInputBlur}
          value={name}
        />
        {inputInvalid && <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
