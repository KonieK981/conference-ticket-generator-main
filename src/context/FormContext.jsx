import React, { useState } from "react";
import FormCtx from "./formContext";

function FormContext({ children }) {
  const [formValues, setFormValues] = useState({
    isSubmited: false,
    name: "",
    email: "",
    gitHubUser: "",
    ticket: "016009",
    file: null,
  });

  return (
    <FormCtx.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormCtx.Provider>
  );
}

export default FormContext;
