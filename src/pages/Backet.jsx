import { CircleMinus, CirclePlus } from "lucide-react";
import React from "react";
import BacketItem from "../components/BacketItem";

export default function Backet({ backet }) {
  console.log(backet);
  return (
    <div className="  py-8 mx-auto max-w-sm sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      {/**Mon Panier */}
      <div className=" text-center text-2xl font-semibold mb-4">
        Mon Panier{" "}
      </div>
      {/**Element du panier */}

      <div>{backet.length}
                    <BacketItem  />

        {backet.map((item) => {
          <div>
            dsds
          </div>;
        })}
      </div>
      {/** Resume total*/}
      <div className="  rounded-xl mt-12 mb-5 py-3 shadow-2xl">
        <div className="mx-4 text-xl font-semibold">Facture</div>
        <div className="mx-4 text-lg relative ">
          Total panier{" "}
          <span
            className=" absolute right-1 ms-auto"
            st
          >
            fdfd
          </span>{" "}
        </div>
        <div className="mx-4 text-lg border-t border-gray-300 py-4 relative">
          Total :{" "}
          <span
            className=" absolute right-1 ms-auto"
            st
          >
            fdfd
          </span>{" "}
        </div>
      </div>

      <div className=" text-center text-white bg-[#1B1B1B] py-3 rounded-xl">
        Confirmer la commande
      </div>
    </div>
  );
}
