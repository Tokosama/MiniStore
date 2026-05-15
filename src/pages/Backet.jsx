import { useEffect, useState } from "react";
import BacketItem from "../components/BacketItem";
import OrdersResume from "../components/OrdersResume";

export default function Backet({ backet, addToBacket, removeFromBacket }) {
  const [backetCount, SetBacketCount] = useState(0);
  const [backetTotal, SetBacketTotal] = useState(0);

  useEffect(() => {
    function totalCalculation() {
      const bCount = backet.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = backet.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      SetBacketCount(bCount);
      SetBacketTotal(totalPrice);
    }
    totalCalculation();
  }, [backetCount, backetCount, backet]);

  return (
    <div className="  py-8 mx-auto max-w-sm sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      {/**Mon Panier */}
      <div className=" text-center text-2xl font-semibold mb-4">
        Mon Panier{" "}
      </div>
      {/**Element du panier */}

      <div className ="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {backet.map((item) => (
          <BacketItem
            item={item}
            addToBacket={addToBacket}
            removeFromBacket={removeFromBacket}
          />
        ))}
      </div>
      {/** Resume total*/}
      <OrdersResume
        backetCount={backetCount}
        backetTotal={backetTotal}
      />

      {/*Bouton de Confirmation de payment */}
      <div>
        <button 
          className=" w-full text-center text-white bg-[#1B1B1B] py-3 rounded-xl "
        >
          Confirmer la commande
        </button>
      </div>
    </div>
  );
}
