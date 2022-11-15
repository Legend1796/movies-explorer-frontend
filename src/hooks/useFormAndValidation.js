
import { useState } from 'react';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    if (name === 'email') {
      const regularEmail = /^([A-Za-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,3})$/
      setErrors({ ...errors, [name]: 'Некорректный email' });
      setIsValid(regularEmail.test(value));
    } else {
      setIsValid(e.target.closest('.popup__form').checkValidity());
    }
  }

  function resetErrors(data) {
    setValues(data);
    setErrors({});
    setIsValid(true);
  }

  return { values, handleChange, errors, isValid, resetErrors, setValues };
}