import Form from "@/components/signup/Form";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen justify-around">
      <div className="sm:ml-auto">
        <Form />
      </div>
      <Image
        src={"/login.jpg"}
        alt="login"
        className="w-[60%] min-h-screen object-cover ml-auto hidden sm:block"
        width={5835}
        height={3890}
      />
    </div>
  );
};

export default Login;
