import { Heart } from "lucide-react";
import PriceTag from "./PriceTag";
import { useEffect, useState } from "react";

export default function ProductCard({ item, handleWishList, wishList }) {
  const [isInWishList, setIsInWishList] = useState([]);
  useEffect(() => {
    function checkWishList() {
      const tempInWIshList = wishList.filter(
        (product) => product.name == item.name,
      );
      setIsInWishList([...tempInWIshList]);
    }
    checkWishList();
  }, [handleWishList]);
  return (
    <div className=" shadow-lg rounded-4xl">
      <div className=" bg-white rounded-t-4xl overflow-hidden px-2 pt-4 pb-4">
        <div className="">
          <img
            className="relative  h-56  mx-auto rounded-xl overflow-hidden"
            src={item.images[0]}
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
            <PriceTag price={item.price} />{" "}
          </div>
          <button
            className={`cursor-pointer shadow-md rounded-2xl flex justify-center items-center transition-transform duration-300 hover:scale-110  hover:bg-[#bbc7a4] px-2 ${isInWishList.length ? "bg-[#bbc7a4] text-white " : " bg-white "} `}
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
