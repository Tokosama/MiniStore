import { CircleMinus, CirclePlus } from "lucide-react";
import React from "react";

export default function BacketItem({ item }) {
  console.log("//////////////////////////////////////")
  console.log(item)
  return (
    <div>
      <div className=" border px-2 py-3 rounded-xl shadow-lg">
        <div className="flex gap-2">
          <div>
            <img
              src="/images/airpods.jpg"
              className="h-22 rounded-xl p-2 bg-white"
              alt=""
            />
          </div>
          <div className="px-2 w-full">
            <div className="text-lg font-semibold">AIrpods</div>
            <span className="rounded-sm border   text-xs px-1 ">
              category
            </span>{" "}
            <div className="flex mt-2 justify-between">
              <div className="flex">
                {" "}
                <span className="me-1">
                  <CircleMinus className="text-[#F56565]" />
                </span>{" "}
                2{" "}
                <span className="ms-1">
                  <CirclePlus className="text-[#0A7D56]" />
                </span>
              </div>
              <div className="bg-[#F8D7A2] font-bold px-3 py-1 rounded-lg">
                1222323 XOF
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
