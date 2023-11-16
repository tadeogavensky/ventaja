"use client";

import React, { FormEvent, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonalInfo from "./PersonalInfo";
import UserInfo from "./Email";
import TermsAndConditions from "./TermsAndConditions";
import Link from "next/link";
import useFormContext from "@/hooks/useFormContext";
import { FormContext } from "@/context/FormContext";
import FormInputs from "./FormInputs";

const Index = () => {
  const { page, setPage, data, title, canSubmit, canNextEmailPage } =
    useFormContext();

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const renderPrevButton = () => {
    if (page == 0) {
      return undefined;
    }
    return (
      <button
        onClick={handlePrev}
        className="mt-6 disabled:bg-gray-400 flex w-full justify-center rounded-md bg-oxfordBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxfordBlue"
      >
        Volver
      </button>
    );
  };
  const renderNextButton = () => {
    if (page > 5) {
      return undefined;
    }
    const isNextButtonDisabled = canNextEmailPage();
    return (
      <button
        onClick={handleNext}
        disabled={isNextButtonDisabled == false}
        className="mt-6 disabled:bg-gray-400 flex w-full justify-center rounded-md bg-oxfordBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxfordBlue"
      >
        {page === 5 ? "Crear Cuenta" : "Continuar"}
      </button>
    );
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 py-12 lg:px-8">
      <div className="sm:mx-auto text-center sm:w-full sm:max-w-sm">
        <Link
          href={"/"}
          className="font-ventaja uppercase tracking-widest text-2xl text-center  font-bold "
        >
          Ventaja
        </Link>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Creá tu cuenta
        </h2>
      </div>

      <form action="" onSubmit={handleSubmit} className="my-auto">
        <header>
          <h2 className="font-heading font-semibold mb-3">{title[page]}</h2>
        </header>

        <FormInputs />
        <div className="flex items-center gap-2">
          {renderPrevButton()} {renderNextButton()}
        </div>
      </form>
    </div>
  );
};

export default Index;
