import useFormContext from "@/hooks/useFormContext";
import React, { useEffect } from "react";

const Email = () => {
  const { data, handleChange } = useFormContext();

  useEffect(() => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  }, [data]);

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        E-mail
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2  sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Email;
