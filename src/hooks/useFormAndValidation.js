
import { useState } from 'react';
import { regularEmail } from '../utils/consts'

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    if (name === 'email') {
      setIsValid(regularEmail.test(value) && e.target.closest('.popup__form').checkValidity());
    } else {
      setIsValid(e.target.closest('.popup__form').checkValidity());
    }
  }

  function resetErrors(data) {
    setValues(data);
    setErrors({});
    setIsValid(false);
  }

  return { values, handleChange, errors, isValid, resetErrors, setValues };
}