import { useState } from "react";

const useFormInput = (validation) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validation(value);
  const hasError = touched && !isValid;

  const valueInputChange = (event) => {
    setValue(event.target.value);
  };
  const valueInputBlur = (event) => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return {
    value,
    hasError,
    isValid,
    valueInputChange,
    valueInputBlur,
    reset,
  };
};

export default useFormInput;
