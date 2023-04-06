import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;
  
  const valueInputChange = (event) => {
    setValue(event.target.value);
  };
  const valueInputBlur = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    hasError,
    isValid,
    valueInputBlur,
    valueInputChange,
    reset,
  };
};

export default useInput;
