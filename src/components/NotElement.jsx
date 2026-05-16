import { Ban } from "lucide-react";
import React from "react";

export default function NotElement({text}) {
  return (
    <div>
      <div className=" flex mt-12 flex-col justify-center items-center  ">
        <div className="">
          {" "}
          <Ban className="size-14 text-red-500  mb-4" />
        </div>
        <div className="text-[#F56565] text-xl text-center ">
          {text}
        </div>
      </div>
    </div>
  );
}
