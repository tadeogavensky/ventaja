import Image from "next/image";
import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <main className="min-h-full  flex flex-col justify-center items-center gap-2">
      <h1 className="md:text-7xl text-4xl font-heading text-center font-black text-black max-w-3xl">
        La conexión entre <br /> Constructores y Proveedores
      </h1>
      <p className="font-body text-lg text-center text-gray-400">
        La forma de lograr negocios exitosos y seguros.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href={"/signup"}
          className="text-sm text-center mt-4 font-body py-3 px-8 text-black font-semibold bg-gray-200 hover:bg-gray-300 transition rounded"
        >
          Unirse ahora
        </Link>

        <Link
          href={"#plans"}
          className="text-white text-sm text-center mt-4 font-body py-3 px-8 bg-oxfordBlue hover:bg-gray-400 transition rounded"
        >
          Ver planes
        </Link>
      </div>

      <div className="w-full mt-4 hidden lg:flex justify-center gap-4 ">
        <Image
          src={"/hero.jpg"}
          alt="hero"
          width={3181}
          height={2001}
          className="w-[400px] h-full object-cover rounded-2xl "
        />

      {/*   <div className="flex flex-col h-full justify-between gap-2">
          <Image
            src={"/hero2.jpg"}
            alt="hero2"
            width={7952}
            height={5304}
            className="w-[200px] h-[120px] object-cover rounded-2xl"
          />
          <Image
            src={"/hero3.jpg"}
            alt="hero3"
            width={7142}
            height={4767}
            className="w-[200px] h-[120px] object-cover rounded-2xl"
          />
        </div> */}

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-between">
            <div className="bg-black px-4 py-6 w-1/2 rounded-2xl flex flex-col items-center gap-1">
              <h3 className="text-white font-heading font-bold text-3xl">53</h3>
              <p className="font-sans text-sm text-white text-center">planes contratados</p>
            </div>
            <div className="bg-orangeWeb px-4 py-6 w-1/2 rounded-2xl flex flex-col items-center gap-1">
              <h3 className="text-white font-heading font-bold text-3xl">
                115
              </h3>
              <p className="font-sans text-sm text-white text-center">
                ubicaciones registradas
              </p>
            </div>
          </div>

          <Image
            src={"/hero4.jpg"}
            alt="hero4"
            width={6828}
            height={4558}
            className="w-[400px] h-[120px] object-cover rounded-2xl self-end "
          />
        </div>
        <Image
          src={"/signup.jpg"}
          alt="hero5"
          width={3181}
          height={2001}
          className="w-[400px] h-full object-cover rounded-2xl "
        />
      </div>
    </main>
  );
};

export default Hero;
