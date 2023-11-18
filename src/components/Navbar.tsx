"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import React, { useState, useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { disableScrolling, enableScrolling } from "@/utils/scrolling";
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { data: session, status } = useSession();

  console.log("status :>> ", status);

  const openSidebar = () => {
    setSidebarOpen(true);
    document.querySelector("#home")?.classList.add("opacity-20");
    disableScrolling();
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
    document.querySelector("#home")?.classList.remove("opacity-20");
    enableScrolling();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`lg:py-4 lg:px-12 p-4 relative border-b-2  w-screen flex items-center`}
    >
      <Link
        href={"/"}
        className=" text-black text-2xl font-bold tracking-widest uppercase mr-auto font-heading"
      >
        Ventaja
      </Link>

      <ul className="hidden lg:flex items-center gap-4">
        <li>
          <Link
            href={"/"}
            className="font-dm font-semibold text-lg text-black hover:text-gray-400 transition"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href={"/plans"}
            className="font-dm font-semibold text-lg text-black hover:text-gray-400 transition"
          >
            Planes
          </Link>
        </li>
        <li>
          <Link
            href={"/benefits"}
            className="font-dm font-semibold text-lg text-black hover:text-gray-400 transition"
          >
            Beneficios
          </Link>
        </li>
        <li>
          <Link
            href={"/about-us"}
            className="font-dm font-semibold text-lg text-black hover:text-gray-400 transition"
          >
            Quiénes Somos
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="font-dm font-semibold text-lg text-black hover:text-gray-400 transition"
          >
            Contacto
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-2 ml-auto">
        <Link
          href={status == "authenticated" ? "/auth/dashboard" : "/login"}
          className="text-white bg-black hover:bg-slate-500 transition rounded px-8 py-3 font-body font-bold text-lg"
        >
          {status == "authenticated" ? "Dashboard" : "Ingresar"}
        </Link>

        {status == "authenticated" && (
          <button
            onClick={() => {
              signOut();
            }}
            className="px-8 py-3 font-body rounded font-bold text-lg border-2 hover:bg-gray-200 transition"
          >
            Cerrar Sesión
          </button>
        )}
      </div>

      <button
        className="ml-auto block lg:hidden"
        onClick={() => {
          !isSidebarOpen ? openSidebar() : closeSidebar();
        }}
      >
        {!isSidebarOpen ? <HiMenuAlt2 size={30} /> : <IoMdClose size={30} />}
      </button>
      <AnimatePresence>
        {isSidebarOpen && <Sidebar status={status} />}
      </AnimatePresence>
    </nav>
  );
};

const Sidebar = ({ status }: { status: string }) => {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      exit={{ x: "100vw", opacity: 0 }}
      className="absolute z-50 lg:hidden top-16 left-0 min-h-xl rounded border-r-2 border-b-2 w-full bg-white p-4 flex flex-col justify-between items-start overflow-y-hidden"
    >
      <ul className="flex flex-col items-start gap-4">
        <li>
          <Link
            href={"/"}
            className="font-dm font-semibold text-2xl text-black hover:text-gray-400 transition"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href={"/plans"}
            className="font-dm font-semibold text-2xl text-black hover:text-gray-400 transition"
          >
            Planes
          </Link>
        </li>
        <li>
          <Link
            href={"/benefits"}
            className="font-dm font-semibold text-2xl text-black hover:text-gray-400 transition"
          >
            Beneficios
          </Link>
        </li>
        <li>
          <Link
            href={"/about-us"}
            className="font-dm font-semibold text-2xl text-black hover:text-gray-400 transition"
          >
            Quiénes Somos
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="font-dm font-semibold text-2xl text-black hover:text-gray-400 transition"
          >
            Contacto
          </Link>
        </li>
      </ul>

      <Link
        href={status == "authenticated" ? "/auth/dashboard" : "/login"}
        className="text-white bg-black hover:bg-slate-500 transition rounded px-8 py-3 font-body font-bold text-lg mt-4 w-full text-center"
      >
        {status == "authenticated" ? "Dashboard" : "Ingresar"}
      </Link>
    </motion.div>
  );
};

export default Navbar;
