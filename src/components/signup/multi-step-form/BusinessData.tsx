import useFormContext from "@/hooks/useFormContext";
import React from "react";
import { motion } from "framer-motion";

const BusinessData = () => {
  const { handleChange, data, setData } = useFormContext();

  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mt-6 flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <div className="w-full">
        <label
          htmlFor="business-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Razón social
        </label>
        <div className="mt-2">
          <input
            id="business-name"
            type="input"
            name="businessName"
            onChange={handleChange}
            value={data.businessName}
            className="block w-full rounded py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-blue-400  ring-gray-300 placeholder:text-gray-400 border-none outline-none   focus:border-0 p-2 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-full">
          <label
            htmlFor="type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tipo de empresa
          </label>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-2">
              <input
                id="supplier-input"
                type="radio"
                className="h-4 w-4 rounded-full"
                checked={data.type === "supplier"}
                value={data.type}
                onChange={() => {
                  setData((prevState) => ({
                    ...prevState,
                    type: "supplier",
                  }));
                }}
              />
              <label htmlFor="supplier-input" className="font-body">
                Proveedor
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="constructor-input"
                type="radio"
                className="h-4 w-4 rounded-full"
                checked={data.type === "constructor"}
                value={data.type}
                onChange={() => {
                  setData((prevState) => ({
                    ...prevState,
                    type: "constructor",
                  }));
                }}
              />
              <label htmlFor="constructor-input" className="font-body">
                Constructora
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessData;
