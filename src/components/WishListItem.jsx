import { Trash2 } from "lucide-react";
import AddToCartButton from "./AddToCartButton";

export default function WishListItem({
  item,
  addToBacket,
  removeFromWishList,
}) {
  return (
    <div>
      <div className=" relative bg-gray-100 px-2 py-3 sm:py-8 sm:px-5 my-4 rounded-xl shadow-lg">
        <div className="flex gap-2">
          <div>
            <img
              src="/images/airpods.jpg"
              className="w-28 rounded-xl shadow-lg p-2 bg-white"
              alt=""
            />
          </div>
          <div className="px-2 w-full">
            <div className="text-lg font-semibold">{item.name}</div>
            <span className="rounded-sm border   text-xs px-1 ">
              {item.category}{" "}
            </span>{" "}
            <div className="text-lg ">
              {item.price} <span className="text-xs text-gray-500">XOF</span>
            </div>
          </div>
        </div>
        <div className=" mt-3">
          <AddToCartButton
            addToBacket={addToBacket}
            item={item}
          />
        </div>
        <button
          className=" absolute top-4 right-4"
          onClick={() => removeFromWishList(item)}
        >
          <Trash2 className=" border bg-white rounded-full p-1 size-7 text-red-600" />
        </button>
      </div>
    </div>
  );
}
