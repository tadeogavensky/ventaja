"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const Steps = () => {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col w-full items-start font-dm">
      <div className="flex flex-col my-12">
        <h1 className="text-4xl text-oxfordBlue font-bold mb-6 ">
          1. Elegí un período
        </h1>
      </div>

      {status === "authenticated" ? (
        <div className="flex flex-col my-12">
          <h1 className="text-4xl text-oxfordBlue font-bold mb-6 ">
            2. Seleccioná el método de pago
          </h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center my-12 w-full">
            <h1 className="text-4xl w-full text-oxfordBlue font-bold mb-6 ">
              2. Creá tu cuenta
            </h1>
            <div className="flex w-full mb-2 items-center justify-start gap-1 text-base">
              <p>¿Ya tenés una cuenta?</p>
              <button className="font-bold hover:text-blue-700 transition">
                Iniciar sesión
              </button>
            </div>
            <div className="  flex flex-col  md:flex-row space-y-6 md:space-y-0  items-center w-full justify-between">
              <div className="flex w-full md:w-[30%] flex-col items-start gap-3">
                <div className="w-full">
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

                <div className="w-full">
                  <div className="flex items-center justify-between flex-wrap">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contraseña
                    </label>
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
              </div>

              <div className="flex md:flex-col gap-2 justify-center items-center">
                <span className="border-[1px] border-gray-200 w-full md:w-[0.2px] md:h-12"></span>
                <span className="text-gray-400">O</span>
                <span className="border-[1px] border-gray-200 w-full md:w-[0.2px] md:h-12"></span>
              </div>

              <div className="flex flex-col gap-6 w-full md:w-[30%] ">
                <button
                  onClick={() => {
                    signIn("google");
                  }}
                  className="flex gap-1 justify-center items-center bg-white hover:bg-slate-100 transition px-3 py-2 border-2 rounded"
                >
                  <Image
                    src={"/google.png"}
                    alt="google"
                    width={920}
                    height={900}
                    className="w-6 h-6 object-cover"
                  />
                  <p className="font-bold">Google</p>
                </button>
                <button
                  onClick={() => {
                    signIn("facebook");
                  }}
                  className="flex gap-1 justify-center items-center bg-blue-400 hover:bg-blue-500 transition px-3 py-2 rounded"
                >
                  <Image
                    src={"/facebook.png"}
                    alt="facebook"
                    width={920}
                    height={900}
                    className="w-6 h-6 object-cover"
                  />
                  <p className="font-bold text-white">Facebook</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-12">
            <h1 className="text-4xl text-oxfordBlue font-bold mb-6">
              3. Seleccioná el método de pago
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Steps;
