"use client";
import { useState } from "react";
import { FormContext } from "../context/FormContext";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const title = {
    0: "Que tipo de usuario sos?",
    1: "Agregá tu e-mail",
    2: "Elegí tu nombre",
    3: "Validá tu teléfono",
    4: "Creá tu contraseña",
    5: "Aceptá nuestros Términos & Condiciones",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    type: "supplier",
    acceptedTermsAndConditions: false,
    acceptedLegalServices: false,
  });

  const handleChange = (e: any) => {
    const type = e.target.type;
    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { ...requiredInputs } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextEmailPage = () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    while (page != 1) {
      return true;
    }
    if (data.email.length == 0) {
      return false;
    }
    if (emailRegex.test(data.email)) {
      return false;
    }
    return true;
  };

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        canNextEmailPage,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
