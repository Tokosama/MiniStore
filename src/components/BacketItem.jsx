import { CircleMinus, CirclePlus } from "lucide-react";
import PriceTag from "./PriceTag";

export default function BacketItem({ item, addToBacket, removeFromBacket }) {
  
  return (
    <div>
      <div className="  px-2 py-3 sm:py-8 sm:px-5 my-4 rounded-xl shadow-lg transition-transform duration-200 hover:scale-103">
        <div className="flex gap-2">
          <div>
            <img
              src="/images/airpods.jpg"
              className="h-22 rounded-xl shadow-lg p-2 bg-white"
              alt=""
            />
          </div>
          <div className="px-2 w-full">
            <div className="text-lg font-semibold">{item.name}</div>
            <span className="rounded-sm border   text-xs px-1 ">
              {item.category}
            </span>{" "}
            <div className="flex mt-2 justify-between">
              <div className="flex">
                {" "}
                <span className="me-1">
                  <CircleMinus
                    className="text-[#F56565] cursor-pointer transition-transform duration-200 hover:scale-110"
                    onClick={() => {
                      removeFromBacket(item);
                    }}
                  />
                </span>{" "}
                {item.quantity}
                <span className="ms-1">
                  <CirclePlus
                    className="text-[#0A7D56] cursor-pointer  transition-transform duration-200 hover:scale-110"
                    onClick={() => {
                      addToBacket(item);
                    }}
                  />
                </span>
              </div>
              <div className="bg-[] font-bold px-3 py-1 rounded-lg">
               <PriceTag price={item.quantity * item.price}/>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
