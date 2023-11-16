"use client";
import { createContext, Dispatch, SetStateAction } from "react";
interface FormContextProps {
  title: Record<number, string>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    type: string;
    acceptedTermsAndConditions: boolean;
    acceptedLegalServices: boolean;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      phone: string;
      type: string;
      acceptedTermsAndConditions: boolean;
      acceptedLegalServices: boolean;
    }>
  >;
  canNextEmailPage: () => boolean | undefined;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canSubmit: boolean;
}

export const FormContext = createContext({} as FormContextProps);
