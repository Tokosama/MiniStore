import { Heart } from "lucide-react";

export default function ProductCard({ item, handleWishList }) {
  return (
    <div className=" shadow-lg rounded-4xl">
      <div className=" bg-white rounded-t-4xl overflow-hidden px-2 pt-4 pb-4">
        <div className="">
          <img
            className="relative  h-56  mx-auto rounded-xl overflow-hidden"
            src="/images/Zephyrus.png"
            alt=""
          />
        </div>
      </div>

      <div className="px-3 py-4 rounded-b-4xl bg-[##F3F3F3]">
        <div className="font-bold text-lg py-2">{item.name}</div>
        <span className="rounded-sm border bg-white   text-sm px-1 p1-3">
          {item.category}{" "}
        </span>
        <div className=" py-3 line-clamp-2">{item.description}</div>
        <div className="flex justify-between ">
          <div>
            <div className="text-gray-500 text-xs mb-[-3px] ">PRICE</div>
            <div className=" font-bold text-xl text-[#EE048D]">{item.price} <span className="text-sm text-black/50">Xof</span> </div>
          </div>
          <button
            className="shadow-md rounded-2xl flex justify-center items-center transition-transform duration-300 hover:scale-110 bg-white hover:bg-[#bbc7a4] px-2 "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleWishList(item);
            }}
          >
            <Heart className="size-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
