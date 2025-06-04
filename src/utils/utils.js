export function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 6) {
    errors.name = "Full Name must be at least 6 characters";
  } else if (/\d/.test(values.name)) {
    errors.name = "Name cannot contain numbers";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.gitUser) {
    errors.gitUser = "GitHub user is required";
  } else if (!/^(?!-)(?!.*--)[a-zA-Z\d-]{1,39}(?<!-)$/.test(values.gitUser)) {
    errors.gitUser =
      "Invalid GitHub username. Only letters, numbers, hyphens, 1-39 chars, no leading/trailing hyphens, no consecutive hyphens.";
  }

  if (!values.file) {
    errors.file = "File is required";
  }

  return errors;
}
