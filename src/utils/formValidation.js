const validate = (values, page) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Password is too short";
  }
  if (page === "signup") {
    if (!values.confirmPassword) {
      errors.password = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.password = "Password is incorrect. Please confirm Your password.";
    }
  }
  return errors;
};

export default validate;
