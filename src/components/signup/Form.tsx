"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href={"/"} className="font-ventaja uppercase tracking-widest text-2xl text-center  font-bold ">
          Ventaja
        </Link>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Iniciá sesión con tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oxfordBlue sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="text-sm">
                <Link
                  href={"/forgot-password"}
                  className="font-semibold text-oxfordBlue hover:text-blue-900"
                >
                  Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oxfordBlue sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-oxfordBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxfordBlue"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <div className="mt-10 flex items-center gap-1 ">
          <p className="text-center text-sm text-gray-500">
            {" "}
            Todavía no te registraste?
          </p>
          <Link
            href={"signup"}
            className="font-semibold leading-6 text-oxfordBlue hover:text-blue-900"
          >
            Uníte ahora!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
