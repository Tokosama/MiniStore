import { useState } from "react";
import OrderForm from "./OrderForm";
import Spinner from "./Spinner";

export default function OrdersResume({
  backetCount,
  backetTotal,
  isModalOpen,
  setIsModalOpen,
  setBacket,
}) {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div>
      {/** Resume  de la commande*/}
      <div className="  rounded-xl mt-12 mb-5 py-3 shadow-2xl">
        <div className="mx-4 text-xl font-semibold">Facture</div>
        <div className="mx-4 text-lg relative my-5">
          Total panier{" "}
          <span
            className=" absolute right-1 ms-auto"
            st
          >
            {backetCount}
          </span>{" "}
        </div>
        <div className="mx-4 text-lg border-t border-gray-300 py-4 relative">
          Total :{" "}
          <span
            className=" absolute right-1 ms-auto"
            st
          >
            {backetTotal} <span className="text-xs">XOF</span>
          </span>{" "}
        </div>
      </div>

      <div>
        <button
          className=" cursor-pointer transition-transform duration-200 hover:scale-103 w-full text-center flex justify-center items-center text-white bg-[#1B1B1B] shadow-lg hover:bg-white hover:text-black hover:border hover:border-[#1B1B1B] py-3 rounded-xl "
          onClick={() => {
            setShowLoader(true);
            setTimeout(() => {
              setShowLoader(false);
              setIsModalOpen(true);
            }, 1500);
          }}
        >
          {showLoader && <Spinner />}

          {!showLoader && <div>Confirmer la commande</div>}
        </button>
        <OrderForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          setBacket={setBacket}
        />
      </div>
    </div>
  );
}
