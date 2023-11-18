"use client";
import { createContext, Dispatch, SetStateAction } from "react";
interface FormContextProps {
  titles: {
    step: number;
    title: string;
  }[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  disableNextBtn: boolean;
  disablePrevBtn: boolean;

  setDisableNextBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setDisablePrevBtn: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    rut: string;
    phone: string;
    type: string;
    businessName: string;
    address: {
      address1: string;
      address2: string;
      postalCode: string;
      city: string;
      state: string;
      country: string;
    };
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      rut: string;
      phone: string;
      type: string;
      businessName: string;
      address: {
        address1: string;
        address2: string;
        postalCode: string;
        city: string;
        state: string;
        country: string;
      };
    }>
  >;
  requirements: {
    condition: string;
    fulfilsReq: boolean;
  }[];
  setRequirements: React.Dispatch<React.SetStateAction<{ condition: string; fulfilsReq: boolean; }[]>>;

  nextPage: () => void;
  previousPage: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  canSubmit: boolean;
}

export const FormContext = createContext({} as FormContextProps);
