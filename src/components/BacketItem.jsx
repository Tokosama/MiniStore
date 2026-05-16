import { CircleMinus, CirclePlus } from "lucide-react";

export default function BacketItem({ item, addToBacket, removeFromBacket }) {
  
  return (
    <div>
      <div className="  px-2 py-3 sm:py-8 sm:px-5 my-4 rounded-xl shadow-lg">
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
                    className="text-[#F56565]"
                    onClick={() => {
                      removeFromBacket(item);
                    }}
                  />
                </span>{" "}
                {item.quantity}
                <span className="ms-1">
                  <CirclePlus
                    className="text-[#0A7D56]"
                    onClick={() => {
                      addToBacket(item);
                    }}
                  />
                </span>
              </div>
              <div className="bg-[#F8D7A2] font-bold px-3 py-1 rounded-lg">
                {item.quantity * item.price} XOF
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
