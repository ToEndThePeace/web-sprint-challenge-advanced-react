// write your custom hook here to control your checkout form

import useLocalStorage from "./useLocalStorage";

const useForm = (initialValues) => {
  const [formValues, setFormValues] = useLocalStorage("checkout", initialValues);
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