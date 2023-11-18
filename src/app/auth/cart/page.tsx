import { IoShieldCheckmark } from "react-icons/io5";
import React from "react";
import SelectedPlan from "@/components/cart/SelectedPlan";
import Steps from "./Steps";

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 items-start font-dm custom-margin">
      <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 items-start md:items-center justify-between">
        <h1 className="text-4xl text-oxfordBlue font-bold">
          ¡Ya casi lo lográs! Completá tu pedido
        </h1>

        <div className="flex items-center gap-3">
          <IoShieldCheckmark size={35} />
          <p className="md:max-w-[12rem] text-gray-600 leading-[24px]">
            30 días de garantía de devolución del dinero
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-lg">
        <p>Plan seleccionado</p>
        <SelectedPlan />
      </div>

      <Steps />
    </div>
  );
};



const PasswordModal = () =>
{
  return(
    <div className="h-[200px] bg-oxfordBlue rounded">

    </div>
  )
}
 
export default Cart;
