"use client";

import React, { FormEvent, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonalInfo from "./PersonalInfo";
import Link from "next/link";
import useFormContext from "@/hooks/useFormContext";
import { FormContext } from "@/context/FormContext";
import CompleteAccount from "./CompleteAccount";
import BusinessData from "./BusinessData";

const Index = () => {
  const {
    data,
    setData,
    previousPage,
    nextPage,
    titles,
    page,
    disableNextBtn,
    disablePrevBtn,
  } = useFormContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("enviado");
  };

  return (
    <div className="flex min-h-screen w-full flex-col justify-between px-6 py-12 lg:px-8">
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

      <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-auto">
        <div className="flex items-center max-md:w-full w-full flex-wrap gap-3 mt-4">
          {titles.map((title) => {
            return (
              <div
                className={`${
                  page == title.step ? "bg-blue-500 text-white" : ""
                }  border-2 font-bold max-md:w-full w-full  rounded px-6 py-2 flex items-center gap-4`}
                key={title.step}
              >
                <p className="font-dm text-xs text-left">{title.step}.</p>
                <p className="font-dm text-xs text-left">{title.title}</p>
              </div>
            );
          })}
        </div>
        <form
          className="sm:h-[150px]"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          {page == 1 && <PersonalInfo />}
          {page == 2 && <BusinessData />}
          {page == 3 && <CompleteAccount />}
        </form>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={previousPage}
            disabled={disablePrevBtn}
            className="mt-6 disabled:bg-gray-400 disabled:text-white flex w-full sm:w-[80px] justify-center rounded bg-oxfordBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxfordBlue"
          >
            Volver
          </button>
          <button
            onClick={page == 3 ? handleSubmit : nextPage}
            disabled={disableNextBtn}
            className="mt-6 disabled:bg-gray-400 disabled:text-white flex w-full sm:w-[80px] justify-center rounded bg-oxfordBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxfordBlue"
          >
            {page == 3 ? "Crear" : "Continuar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
