import React from "react";

export default function OrdersResumeSkeleton() {
  return (
    <div>
      <div className="animate-pulse">
        {/** Resume  de la commande*/}
        <div className=" rounded-xl mt-12 mb-5 py-3 shadow-2xl">
          <div className="mx-4 text-xl font-semibold w-28 rounded-full bg-gray-300 py-4"></div>
          <div className="mx-4 text-lg relative my-5   py-3">
            <div className="bg-gray-300 w-26 py-3 rounded-full"></div>
            <div
              className=" absolute right-1 ms-auto bg-gray-300 w-8 rounded-xl py-3"
              st
            ></div>{" "}
          </div>
          <div className="mx-4 text-lg border-t border-gray-300 py-4 relative">
            <div className="bg-gray-300 w-26 py-3 rounded-full"></div>{" "}
            <div
              className=" absolute right-1 bottom-1 ms-auto rounded-full bg-gray-300 w-26 mb-2 py-3"
              st
            ></div>{" "}
          </div>
        </div>

        <div>
          <button className="w-full text-center text-white bg-gray-300 shadow-lg  py-5 rounded-xl "></button>
        </div>
      </div>

      {/* <div className="mt-6 w-96 animate-pulse">
        <div className="relative grid h-56 place-items-center rounded-xl bg-gray-300"></div>
        <div className="p-4">
          <div className="mb-4 h-3 w-56 rounded-full bg-gray-300" />
          <div className="mb-2 h-2 w-full rounded-full bg-gray-300" />
          <div className="mb-2 h-2 w-full rounded-full bg-gray-300" />
          <div className="mb-2 h-2 w-72 rounded-full bg-gray-300" />
        </div>

        <div className="flex justify-between p-4">
          <div className="h-8 w-24 rounded-lg bg-gray-300"></div>
          <div className="h-8 w-24 rounded-lg bg-gray-300"></div>
        </div>
      </div> */}
    </div>
  );
}
