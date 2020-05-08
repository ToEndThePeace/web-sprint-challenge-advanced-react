// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const clearForm = () => {
    setFormValues(initialValues)
  }

  return [formValues, inputHandler, clearForm];
};

export default useForm;