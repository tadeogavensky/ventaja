"use client";
import { useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const titles = [
    { step: 1, title: "Información personal" },
    { step: 2, title: "Sobre tu empresa" },
    { step: 3, title: "Completá tus datos" },
  ];

  const [page, setPage] = useState(1);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [disablePrevBtn, setDisablePrevBtn] = useState(false);

  useEffect(() => {
    if (page == 3) {
      setDisableNextBtn(true);
      canNextCompleteAccountPage();
    } else {
      setDisableNextBtn(false);
    }
    if (page == 1) {
      setDisablePrevBtn(true);
      canNextPersonalInfoPage();
    } else {
      setDisablePrevBtn(false);
    }
    if (page == 2) {
      canNextBusinessPage();
    }
  }, [page]);

  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    rut: "",
    phone: "",
    type: "",
    businessName: "",
    address: {
      address1: "",
      address2: "",
      postalCode: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const [requirements, setRequirements] = useState([
    {
      condition: "Usá entre 8 y 20 carcteres",
      fulfilsReq: false,
    },
    {
      condition: "Un número",
      fulfilsReq: false,
    },
    {
      condition: "Una letra mayúscula",
      fulfilsReq: false,
    },
    {
      condition: "Una letra minúscula",
      fulfilsReq: false,
    },
    {
      condition: "Un caracter especial",
      fulfilsReq: false,
    },
  ]);


  useEffect(() => {
    if (page == 1) {
      canNextPersonalInfoPage();
    }
    if (page == 3) {
      canNextCompleteAccountPage();
    }

    if (page == 2) {
      canNextBusinessPage();
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name } = e.target;
    const value = type === "radio" ? e.target.checked : e.target.value;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { ...requiredInputs } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(titles).length - 1;

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (page == 1) {
      setDisablePrevBtn(true);
    }

    setPage((page) => page - 1);
  };

  const canNextPersonalInfoPage = () => {
    if (
      data.firstName.length == 0 ||
      data.lastName.length == 0 ||
      data.rut.length == 0 ||
      data.phone.length == 0
    ) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  };

  const canNextBusinessPage = () => {
    if (data.type.length == 0 || data.businessName.length == 0) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  };

  const canNextCompleteAccountPage = () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;

    if (
      data.email.length == 0 ||
      data.password.length == 0 ||
      !emailRegex.test(data.email) ||
      !passwordRegex.test(data.password)
    ) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  };

  return (
    <FormContext.Provider
      value={{
        titles,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        nextPage,
        previousPage,
        disableNextBtn,
        disablePrevBtn,
        setDisableNextBtn,
        setDisablePrevBtn,
        requirements,
        setRequirements
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
