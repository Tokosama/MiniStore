import { useEffect, useState } from "react";
import BacketItem from "../components/BacketItem";
import OrdersResume from "../components/OrdersResume";
import Header from "../components/Header";
import OrderForm from "../components/OrderForm";
import BacktItemSkeleton from "../components/BacktItemSkeleton";
import OrdersResumeSkeleton from "../components/OrdersResumeSkeleton";

export default function Backet({
  backet,
  addToBacket,
  removeFromBacket,
  setBacket,
}) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    function skeletonUpdate() {
      setShowSkeleton(true);
      console.log(showSkeleton);
      setTimeout(() => {
        setShowSkeleton(false);
      }, 5000);
      console.log(showSkeleton);
    }

    skeletonUpdate();
  }, []);

  const [backetCount, SetBacketCount] = useState(0);
  const [backetTotal, SetBacketTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="  py-8 mx-auto max-w-lg sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      {/**Mon Panier */}
      <Header text={"Mon panier"} />
      {/**Element du panier */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {backet.map((item) => {
          if (showSkeleton) {
            return <BacktItemSkeleton />;
          } else {
            return    <BacketItem
                item={item}
                addToBacket={addToBacket}
                removeFromBacket={removeFromBacket}
              />
          }

          
        })}
      </div>
      {/** Resume total*/}

      {showSkeleton && <OrdersResumeSkeleton />}
      {!showSkeleton && (
        <OrdersResume
          backetCount={backetCount}
          backetTotal={backetTotal}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          setBacket={setBacket}
        />
      )}

      {/*Bouton de Confirmation de payment */}
    </div>
  );
}
