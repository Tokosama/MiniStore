import { useEffect, useState } from "react";
import BacketItem from "../components/BacketItem";
import OrdersResume from "../components/OrdersResume";
import Header from "../components/Header";
import OrderForm from "../components/OrderForm";

export default function Backet({ backet, addToBacket, removeFromBacket,setBacket }) {
  const [backetCount, SetBacketCount] = useState(0);
  const [backetTotal, SetBacketTotal] = useState(0);
  const [isModalOpen,setIsModalOpen] = useState(false)

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
     <Header text={"Mon panier"}/>
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
          className=" w-full text-center text-white bg-[#1B1B1B] py-3 rounded-xl " onClick={()=>setIsModalOpen(true)}
        >
          Confirmer la commande
        </button>
        <OrderForm isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} setBacket={setBacket}/>
      </div>


    </div>
  );
}
