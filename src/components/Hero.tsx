import Image from "next/image";
import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <main className="min-h-full  flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-lexend text-center font-bold text-black max-w-3xl">
        La conexión entre <br /> Constructores y Proveedores
      </h1>
      <p className="font-body text-lg text-center">La forma de lograr negocios exitosos y seguros.</p>
      <Link href={"/signup"} className="text-white text-2xl font-bold mt-4 font-body py-2 px-4 bg-oxfordBlue rounded-sm">Unirse ahora</Link>


      <div className="flex items-center"></div>
    </main>
  );
};

export default Hero;
