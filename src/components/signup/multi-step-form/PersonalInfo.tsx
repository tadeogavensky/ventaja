import useFormContext from "@/hooks/useFormContext";
import React from "react";
import { motion } from "framer-motion";
const PersonalInfo = () => {
  const { handleChange, data } = useFormContext();
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mt-6 flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-full">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nombre
          </label>
          <div className="mt-2">
            <input
              id="first-name"
              type="input"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              className="block w-full rounded py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-blue-400  ring-gray-300 placeholder:text-gray-400 border-none outline-none   focus:border-0 p-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Apellido
            </label>
          </div>
          <div className="mt-2">
            <input
              id="last-name"
              type="input"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              className="block w-full rounded py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-blue-400  ring-gray-300 placeholder:text-gray-400 border-none outline-none   focus:border-0 p-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-full">
          <label
            htmlFor="rut"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            RUT
          </label>
          <div className="mt-2">
            <input
              id="rut"
              type="input"
              name="rut"
              onChange={handleChange}
              value={data.rut}
              className="block w-full rounded py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-blue-400  ring-gray-300 placeholder:text-gray-400 border-none outline-none   focus:border-0 p-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Número de teléfono
            </label>
          </div>
          <div className="mt-2">
            <input
              id="phone"
              type="number"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              className="block w-full rounded py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-blue-400  ring-gray-300 placeholder:text-gray-400 border-none outline-none   focus:border-0 p-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
