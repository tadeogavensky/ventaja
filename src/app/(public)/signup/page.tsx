import Index from "@/components/signup/multi-step-form/Index";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen justify-between">
      <Index />
      <Image
        src={"/signup.jpg"}
        alt="login"
        className="w-[50%] min-h-screen object-cover ml-auto hidden sm:block"
        width={6000}
        height={4000}
      />
    </div>
  );
};

export default Login;
