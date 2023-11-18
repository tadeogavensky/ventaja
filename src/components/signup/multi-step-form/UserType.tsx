"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useFormContext from "@/hooks/useFormContext";
const UserType = () => {
  const { data, setData } = useFormContext();

  return (
    <div className="flex flex-col gap-4 w-full">
      <motion.div
        className={`lg:w-[400px] rounded cursor-pointer ${
          data.type == "supplier" ? "bg-platinum" : ""
        }`}
        onClick={() => {
          setData((prevState) => ({
            ...prevState,
            type: "supplier",
          }));
        }}
      >
        <Image
          src={"/supplier.jpg"}
          alt="supplier"
          width={6773}
          height={4538}
          className="w-full h-[100px] object-cover rounded "
        />
        <p className={`font-heading font-bold my-1 px-1 text-lg  `}>
          Proveedor
        </p>
      </motion.div>

      <motion.div
        className={`lg:w-[400px] relative rounded cursor-pointer ${
          data.type == "constructor" ? "bg-platinum" : ""
        }`}
        onClick={() => {
          setData((prevState) => ({
            ...prevState,
            type: "constructor",
          }));
        }}
      >
        <Image
          src={"/constructor.jpg"}
          alt="constructor"
          width={5500}
          height={3672}
          className="w-full h-[100px] object-cover rounded "
        />
        <p className={`font-heading font-bold my-1 px-1 text-lg`}>
          Constructora
        </p>
      </motion.div>
    </div>
  );
};

export default UserType;
