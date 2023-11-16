import React from "react";
import PersonalInfo from "./PersonalInfo";
import Email from "./Email";
import TermsAndConditions from "./TermsAndConditions";
import useFormContext from "@/hooks/useFormContext";
import UserType from "./UserType";

const FormInputs = () => {
  const { page } = useFormContext();

  const display: { [key: number]: React.JSX.Element } = {
    /*  0: <UserType />, */
    0: <UserType />,
    1: <Email />,
    2: <Email />,
    3: <TermsAndConditions />,
    4: <TermsAndConditions />,
    5: <TermsAndConditions />,
  };

  const content = (
    <div className="flex flex-col ">{display[page]}</div>
  );
  return content;
};

export default FormInputs;
