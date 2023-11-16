import Form from "@/components/signup/multi-step-form/Form";
import Index from "@/components/signup/multi-step-form/Index";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen justify-around">
      <div className="sm:ml-auto">
        <Index/>
      </div>
      <Image
        src={"/signup.jpg"}
        alt="login"
        className="w-[60%] min-h-screen object-cover ml-auto hidden sm:block"
        width={6000}
        height={4000}
      />
    </div>
  );
};

export default Login;
