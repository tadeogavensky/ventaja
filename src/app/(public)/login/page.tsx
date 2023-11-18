import Form from "@/components/login/Form";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen justify-around">
      <div className="sm:ml-auto">
        <Form />
      </div>
      <Image
        src={"/login.jpg"}
        alt="login"
        className="w-[50%] min-h-screen object-cover ml-auto hidden sm:block"
        width={5835}
        height={3890}
      />
    </div>
  );
};

export default Login;
