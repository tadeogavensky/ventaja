"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import GoogleButton from "react-google-button";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto text-center sm:w-full sm:max-w-sm">
        <Link
          href={"/"}
          className="font-ventaja uppercase tracking-widest text-2xl text-center  font-bold "
        >
          Ventaja
        </Link>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Iniciá sesión con tu cuenta
        </h2>
        <span className="mt-2 text-center text-sm text-gray-500">
          ¿No sos miembro todavía?{" "}
          <Link
            href={"signup"}
            className="font-semibold leading-6 text-oxfordBlue hover:text-blue-900"
          >
            Registrate
          </Link>{" "}
          y ¡empezá ya!
        </span>
      </div>

      <div className="mt-6 mb-4">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => {
              signIn("google");
            }}
            className="flex w-full gap-1 justify-center items-center bg-white px-3 py-2 border-2 rounded"
          >
            <Image
              src={"/google.png"}
              alt="google"
              width={920}
              height={900}
              className="w-6 h-6 object-cover"
            />
            <p className="">Iniciá sesión con Google</p>

          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
          <span className="border-[1px] w-full"></span>
          <p className="flex whitespace-nowrap text-gray-400 text-xs">O </p>
          <span className="border-[1px] w-full"></span>
        </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-6">
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between flex-wrap">
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded bg-oxfordBlue px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxfordBlue"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
