import useFormContext from "@/hooks/useFormContext";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IoEye,
  IoEyeOff,
  IoAlertCircle,
  IoInformationCircle,
  IoCheckmark,
} from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
const CompleteAccount = () => {
  const { handleChange, data, setData, requirements, setRequirements } = useFormContext();
  const [isPasswordVisible, viewPassword] = useState(false);
  const [isPasswordModalVisible, viewPasswordModal] = useState(false);


  const [emailValid, isEmailValid] = useState(false);

  const handleEmailChange = () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (data.email.length > 0 || emailRegex.test(data.email)) {
      setData((prevState) => ({
        ...prevState,
        email: data.email,
      }));

      isEmailValid(true);
    } else {
      isEmailValid(false);
    }
  };

  useEffect(() => {
    console.log("requirements :>> ", requirements);
  }, [requirements]);

  useEffect(() => {
    handleEmailChange();
  }, [data.email]);
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mt-6 flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            E-mail
          </label>
          <p className="block text-sm font-medium leading-6 text-gray-900">
            ejemplo@ventaja.com
          </p>
        </div>
        <div className="mt-2">
          <input
            id="email"
            type="input"
            name="email"
            onChange={handleChange}
            value={data.email}
            className={`block w-full rounded py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-blue-400  ring-gray-300 placeholder:text-gray-400 border-none outline-none   focus:border-0 p-2 sm:text-sm sm:leading-6 `}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-full">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Contraseña
          </label>
          <div className="mt-2 relative">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
                viewPasswordModal(true);
              }}
              value={data.password}
              className={`block w-full rounded py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-blue-400  ring-gray-300 placeholder:text-gray-400 border-none outline-none   focus:border-0 p-2 sm:text-sm sm:leading-6 ${
                data.password.length > 0 &&
                requirements.some((req) => req.fulfilsReq == false)
                  ? "outline-none ring-1 ring-red-500 focus:ring-red-500 "
                  : ""
              }`}
            />
            <div className="absolute flex items-center gap-2 top-1.5 right-4">
              <button
                className="text-oxfordBlue"
                onClick={() => {
                  viewPassword(!isPasswordVisible);
                }}
              >
                {!isPasswordVisible ? (
                  <IoEye
                    color={
                      data.password.length > 0 &&
                      requirements.some((req) => req.fulfilsReq == false)
                        ? "red"
                        : ""
                    }
                    size={25}
                  />
                ) : (
                  <IoEyeOff
                    color={
                      data.password.length > 0 &&
                      requirements.some((req) => req.fulfilsReq == false)
                        ? "red"
                        : ""
                    }
                    size={25}
                  />
                )}
              </button>
              <button
                className="text-oxfordBlue"
                onMouseEnter={() => {
                  viewPasswordModal(true);
                }}
                onMouseLeave={() => {
                  viewPasswordModal(false);
                }}
              >
                {isPasswordModalVisible == true &&
                requirements.some((req) => req.fulfilsReq == false) ? (
                  <IoAlertCircle color={"red"} size={25} />
                ) : (
                  <IoInformationCircle
                    color={
                      data.password.length > 0 &&
                      requirements.some((req) => req.fulfilsReq == false)
                        ? "red"
                        : ""
                    }
                    className="text-oxfordBlue"
                    size={25}
                  />
                )}
              </button>
            </div>

            {isPasswordModalVisible && (
              <PasswordModal
                password={data.password}
                requirements={requirements}
                setRequirements={setRequirements}
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PasswordModal = ({
  password,
  requirements,
  setRequirements,
}: {
  password: string;
  requirements: { condition: string; fulfilsReq: boolean }[];
  setRequirements: React.Dispatch<
    React.SetStateAction<{ condition: string; fulfilsReq: boolean }[]>
  >;
}) => {
  useEffect(() => {
    const newRequirements = requirements.map((requirement) => {
      switch (requirement.condition) {
        case "Usá entre 8 y 20 carcteres":
          return {
            ...requirement,
            fulfilsReq: password.length >= 8 && password.length <= 20,
          };
        case "Un número":
          return {
            ...requirement,
            fulfilsReq: /\d/.test(password),
          };
        case "Una letra mayúscula":
          return {
            ...requirement,
            fulfilsReq: /[A-Z]/.test(password),
          };
        case "Una letra minúscula":
          return {
            ...requirement,
            fulfilsReq: /[a-z]/.test(password),
          };
        case "Un caracter especial":
          return {
            ...requirement,
            fulfilsReq: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password),
          };
        default:
          return requirement;
      }
    });

    setRequirements(newRequirements);
  }, [password]);

  return (
    <div className="absolute bottom-10 right-0 w-[250px] rounded  bg-oxfordBlue font-dm text-white p-4 flex flex-col items-start  gap-6">
      {requirements.map((requirement, index) => {
        return (
          <div key={index} className="flex  items-center justify-start  w-full">
            <div className="">
              {requirement.fulfilsReq == false ? (
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              ) : (
                <IoCheckmark color={"#00b090"} size={20} />
              )}
            </div>
            <p className="text-sm ml-4">{requirement.condition}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompleteAccount;
