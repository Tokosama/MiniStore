import { Heart } from "lucide-react";
import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="border rounded-4xl ">
      <div className=" bg-white rounded-t-4xl overflow-hidden px-2 pt-4 pb-4">
        <div className="">
          <img
            className="relative  h-56  mx-auto rounded-xl overflow-hidden"
            src="/images/Zephyrus.png"
            alt=""
          />
        </div>
      </div>

      <div className="px-3 py-4 ">
        <div className="font-bold text-lg py-2">{item.name}</div>
        <span className="rounded-sm border   text-sm px-1 p1-3">
          {item.category}{" "}
        </span>
        <div className=" py-3">{item.description}</div>
        <div className="flex justify-between ">
          <div>
            <div className="text-gray-500 text-xs mb-[-3px] ">PRICE</div>
            <div className=" font-bold text-xl">{item.price} Xof</div>
          </div>
          <button className="border rounded-lg flex justify-center items-center hover:bg-red-400 px-2">
            <Heart className="size-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
