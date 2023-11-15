"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav
      className={`py-4 px-12 relative border-b-2  w-screen flex items-center`}
    >
      <button
        className="mr-auto block lg:hidden"
        onClick={() => {
          setSidebarOpen(!isSidebarOpen);
        }}
      >
        {!isSidebarOpen ? <HiMenuAlt2 size={30} /> : <IoMdClose size={30} />}
      </button>
      <Link
        href={"/"}
        className="hidden lg:block text-black text-2xl font-bold tracking-widest uppercase mr-auto font-heading"
      >
        Ventaja
      </Link>

      <ul className="hidden lg:flex items-center gap-4">
        <li>
          <Link
            href={"/"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href={"/about-ventaja"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Sobre Ventaja
          </Link>
        </li>
        <li>
          <Link
            href={"/benefits"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Beneficios
          </Link>
        </li>
        <li>
          <Link
            href={"/about-us"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Quiénes Somos
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Contacto
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-2 ml-auto">
        <Link href={"/signup"} className="text-black text-lg">
          Creá tu cuenta
        </Link>
        <Link href={"/login"} className="text-black text-lg">
          Ingresá
        </Link>
      </div>

      <Link
        href={"/"}
        className="block lg:hidden text-black text-2xl font-bold tracking-widest uppercase ml-auto font-heading"
      >
        Ventaja
      </Link>

      <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      exit={{ x: "-100vw", opacity: 0 }}
      className="absolute lg:hidden top-16 left-0 rounded-sm border-r-2 border-b-2 w-[45%] bg-white p-4 flex flex-col justify-start items-start"
    >
      <ul className="flex flex-col items-start gap-4">
        <li>
          <Link
            href={"/"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href={"/about-ventaja"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Sobre Ventaja
          </Link>
        </li>
        <li>
          <Link
            href={"/benefits"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Beneficios
          </Link>
        </li>
        <li>
          <Link
            href={"/about-us"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Quiénes Somos
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="font-body text-lg text-black hover:text-slate-200 transition"
          >
            Contacto
          </Link>
        </li>
      </ul>
      <Link
        href={"/sign-up"}
        className="text-white text-center font-bold mt-4 font-body py-2 px-4 w-full bg-oxfordBlue rounded-sm"
      >
        Unirse ahora
      </Link>
    </motion.div>
  );
};

export default Navbar;
