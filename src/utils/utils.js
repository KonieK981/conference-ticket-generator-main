export function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.name) {
    errors.name = "Password id required";
  } else if (values.name.length < 6) {
    errors.name = "Password must be at least 6 characteres";
  }

  if (!values.gitUser) {
    errors.gitUser = "Password id required";
  } else if (values.gitUser.length < 6) {
    errors.gitUser = "Password must be at least 6 characteres";
  }

  return errors;
}
